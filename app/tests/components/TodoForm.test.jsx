const React = require('react'),
      ReactDOM = require('react-dom'),
      expect = require('expect'),
      $ = require('jquery'),
      TestUtils = require('react-addons-test-utils')

const TodoForm = require('TodoForm')

describe('TodoForm', () => {
    it('should exist', () => {
        expect('TodoForm').toExist()
    })

    it('should call onAddTodo if todo text entered', () => {
        let spy = expect.createSpy()
        let todoForm = TestUtils.renderIntoDocument(<TodoForm onAddToDo={spy}/>)
        let $el = $(ReactDOM.findDOMNode(todoForm))

        todoForm.refs.text.value = 'test'
        TestUtils.Simulate.submit($el[0])
        expect(spy).toHaveBeenCalledWith('test')
    })
})