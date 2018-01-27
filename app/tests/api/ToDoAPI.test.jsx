const expect = require('expect')
const ToDoAPI = require('ToDoAPI')

describe('ToDoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos')
    })

    it('should exist', () => {
        expect(ToDoAPI).toExist()
    })

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            let todos = [
                {
                    id: 99,
                    text: 'test',
                    completed: false
                }
            ]
            ToDoAPI.setTodos(todos)

            let actualTodos = JSON.parse(localStorage.getItem('todos'))
            expect(todos).toEqual(actualTodos)
        })

        it('should not set invalid todos array', () => {
            let badTodos = {a: 'b'}
            ToDoAPI.setTodos(badTodos)

            expect(localStorage.getItem('todos')).toBe(null)
        })
    })

    describe('getTodos', () => {
        it('should return empty array for bad localStorage data', () => {
            let actualTodos = ToDoAPI.getTodos()
            expect(actualTodos).toEqual([])
        })

        it('should return todos if valid array in localStorage', () => {
            let todos = [
                {
                    id: 99,
                    text: 'test',
                    completed: false
                }
            ]
            localStorage.setItem('todos', JSON.stringify(todos))

            let actualTodos = ToDoAPI.getTodos()
            expect(todos).toEqual(actualTodos)
        })
    })

    describe('filterTodos', () => {
        let todos = [
            {
                id: 1,
                text: 'test',
                completed: false
            },
            {
                id: 2,
                text: 'ark',
                completed: true
            },
            {
                id: 3,
                text: 'Fumble',
                completed: false
            }
        ]

        it('should return all items if showCompleted is true', () => {
            let filteredTodos = ToDoAPI.filterTodos(todos, true, '')
            expect(filteredTodos.length).toBe(3)
        })

        it('should only return unfinished todos if showCompleted is false', () => {
            let filteredTodos = ToDoAPI.filterTodos(todos, false, '')
            expect(filteredTodos.length).toBe(2)
        })

        it('should sort by completed status', () => {
            let filteredTodos = ToDoAPI.filterTodos(todos, true, '')
            expect(filteredTodos[2].id).toEqual(2)
        })

        it('should return all todos if searchText is empty', () => {
            let filteredTodos = ToDoAPI.filterTodos(todos, true, '')
            expect(filteredTodos.length).toEqual(3)
        })

        it('should filter todos by searchText', () => {
            let filteredTodos = ToDoAPI.filterTodos(todos, true, 'fum')
            expect(filteredTodos[0].id).toEqual(3)
        })
    })
})