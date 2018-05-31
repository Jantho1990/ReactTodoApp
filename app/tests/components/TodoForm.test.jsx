const React = require('react'),
      ReactDOM = require('react-dom'),
      expect = require('expect'),
      $ = require('jquery'),
      TestUtils = require('react-addons-test-utils')

const {TodoForm} = require('TodoForm')

describe('TodoForm', () => {
    it('should exist', () => {
        expect(TodoForm).toExist()
    })

    it('should dispatch ADD_TODO if todo text entered', () => {
        let todoText = 'test'
        let action = {
            type: 'ADD_TODO',
            text: todoText
        }
        let spy = expect.createSpy()
        let todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>)
        let $el = $(ReactDOM.findDOMNode(todoForm))

        todoForm.refs.text.value = todoText
        TestUtils.Simulate.submit($el[0])
        expect(spy).toHaveBeenCalledWith(action)
    })

    it('should not dispatch ADD_TODO if no todo text entered', () => {
        let todoText = ''        
        let spy = expect.createSpy()
        let todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>)
        let $el = $(ReactDOM.findDOMNode(todoForm))

        todoForm.refs.text.value = todoText
        TestUtils.Simulate.submit($el[0])
        expect(spy).toNotHaveBeenCalled()
    })
})