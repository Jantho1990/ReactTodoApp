import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

let expect = require('expect'),
    actions = require('actions')

let createMockStore = configureMockStore([thunk])

describe('Actions', () => {
    it('should generate setSearchText action', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'anything I like'
        }
        let res = actions.setSearchText('anything I like')

        expect(res).toEqual(action)
    })

    it('should generate addTodo action', () => {
        let action = {
            type: 'ADD_TODO',
            todo: {
                id: 'asedf123',
                text: 'whatever',
                completedAt: false,
                createdAt: 0
            }
        }
        let res = actions.addTodo(action.todo)

        expect(res).toEqual(action)
    })

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({})
        const todoText = 'test todo'

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions()
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            })
            expect(actions[0].todo).toInclude({
                text: todoText
            })
            done()
        }).catch(done)
    })

    it('should generate addTodos action', () => {
        let todos = [{
            id: '111',
            text: 'anything',
            completed: false,
            completedAt: undefined,
            createdAt: 3000
        }]

        let action = {
            type: 'ADD_TODOS',
            todos
        }

        let res = actions.addTodos(todos)

        expect(res).toEqual(action)
    })
    
    it('should generate toggleShowCompleted action', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        let res = actions.toggleShowCompleted()

        expect(res).toEqual(action)
    })
    
    it('should generate toggleTodo action', () => {
        let action = {
            type: 'TOGGLE_TODO',
            id: 1
        }
        let res = actions.toggleTodo(1)

        expect(res).toEqual(action)
    })
})