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
})