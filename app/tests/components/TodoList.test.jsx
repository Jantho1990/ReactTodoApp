const React = require('react'),
      ReactDOM = require('react-dom'),
      expect = require('expect'),
      $ = require('jquery'),
      TestUtils = require('react-addons-test-utils')

const TodoList = require('TodoList')
const ToDo = require('ToDo')

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist()
    })

    it('should render 1 ToDo component for each todo item', () => {
        let todos = [
            {'id': 1, 'text': 'Burp'},
            {'id': 2, 'text': 'Belch'}
        ]
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ToDo)

        expect(todosComponents.length).toBe(todos.length)
    })
})