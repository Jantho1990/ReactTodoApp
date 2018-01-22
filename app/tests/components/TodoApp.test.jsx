const React = require('react'),
      ReactDOM = require('react-dom'),
      expect = require('expect'),
      $ = require('jquery'),
      TestUtils = require('react-addons-test-utils')

const TodoApp = require('TodoApp')

describe('TodoApp', () => {
    it('should exist', () => {
        expect('TodoApp').toExist()
    })

    it('should add todo to the todos state on handleAddTodo', () => {
        let todoText = 'Test text'
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>)

        todoApp.setState({todos: []})
        todoApp.handleAddToDo(todoText)

        expect(todoApp.state.todos[0].text).toBe(todoText)
    })
})