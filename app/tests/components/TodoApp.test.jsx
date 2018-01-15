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
})