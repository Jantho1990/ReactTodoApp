const React = require('react'),
      ReactDOM = require('react-dom'),
      expect = require('expect'),
      $ = require('jquery'),
      TestUtils = require('react-addons-test-utils')

const TodoApp = require('TodoApp')

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist()
    })

    it('should add todo to the todos state on handleAddTodo', () => {
        let todoText = 'Test text'
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>)

        todoApp.setState({todos: []})
        todoApp.handleAddToDo(todoText)

        expect(todoApp.state.todos[0].text).toBe(todoText)
    })

    it('should toggle completed value when handleToggle called', () => {
        let todo = {
            id: 11,
            text: 'test features',
            completed: false
        }

        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
        todoApp.setState({todos: [todo]})
        expect(todoApp.state.todos[0].completed).toBe(false)
        
        todoApp.handleToggle(todo.id)
        expect(todoApp.state.todos[0].completed).toBe(true)
    })

    it('should clear todos when handleClearTodos is called', () => {
        let todos = [
            {
                id: 1,
                text: 'clear todos',
                complete: false
            }
        ]
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
        todoApp.setState({todos})
        expect(todoApp.state.todos.length).toEqual(1)

        todoApp.handleClearTodos()
        expect(todoApp.state.todos.length).toEqual(0)
    })
})