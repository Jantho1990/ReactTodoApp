const React = require('react'),
      ReactDOM = require('react-dom'),
      expect = require('expect'),
      $ = require('jquery'),
      TestUtils = require('react-addons-test-utils')

const {ToDo} = require('ToDo')

describe('ToDo', () => {
    it('should exist', () => {
        expect(ToDo).toExist()
    })

    it('should dispatch TOGGLE_TODO action on click', () => {
        let todo = {
            id: 199,
            text: 'finish the fight',
            completed: true
        }

        let spy = expect.createSpy()
        let todoEl = TestUtils.renderIntoDocument(<ToDo {...todo} dispatch={spy} />)
        let $el = $(ReactDOM.findDOMNode(todoEl))

        TestUtils.Simulate.click($el[0])
        expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_TODO',
            id: todo.id
        })

    })
})