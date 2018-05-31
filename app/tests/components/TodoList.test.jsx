const React = require('react'),
      ReactDOM = require('react-dom'),
      {Provider} = require('react-redux'),
      expect = require('expect'),
      $ = require('jquery'),
      TestUtils = require('react-addons-test-utils')

import {configure} from 'configureStore'
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodo, {ToDo} from 'ToDo'

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist()
    })

    it('should render 1 ToDo component for each todo item', () => {
        let todos = [
            {'id': 1, 'text': 'Burp', completed: false, completedAt: undefined, createdAt: 500},
            {'id': 2, 'text': 'Belch', completed: false, completedAt: undefined, createdAt: 500}
        ]
        let store = configure({
            todos
        })
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        )
        let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0]
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo)

        expect(todosComponents.length).toBe(todos.length)
    })

    it('should render empty message if no todos', () => {
        let todos = []
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
        let $el = $(ReactDOM.findDOMNode(todoList))

        expect($el.find('.container__message').length).toBe(1)
    })
})