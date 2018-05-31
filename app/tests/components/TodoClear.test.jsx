const React = require('react'),
      ReactDOM = require('react-dom'),
      expect = require('expect'),
      $ = require('jquery'),
      TestUtils = require('react-addons-test-utils')

const {TodoClear} = require('TodoClear')

describe('TodoClear', () => {
    it('should exist', () => {
        expect(TodoClear).toExist()
    })

    it('should dispatch CLEAR_TODOS if clear button is pressed', () => {
        let action = {
            type: 'CLEAR_TODOS'
        }
        let spy = expect.createSpy()
        let todoClear = TestUtils.renderIntoDocument(<TodoClear dispatch={spy}/>)
        let $el = $(ReactDOM.findDOMNode(todoClear))

        TestUtils.Simulate.click($el[0].querySelector('button'))
        expect(spy).toHaveBeenCalledWith(action)
    })
})