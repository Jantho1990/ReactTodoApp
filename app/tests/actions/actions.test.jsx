let expect = require('expect'),
    actions = require('actions')

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
            text: 'anything you like'
        }
        let res = actions.addTodo('anything you like')

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