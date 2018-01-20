const React = require('react'),
      ReactDOM = require('react-dom'),
      expect = require('expect'),
      $ = require('jquery'),
      TestUtils = require('react-addons-test-utils')

const TodoSearch = require('TodoSearch')

describe('TodoSearch', () => {
    it('should exist', () => {
        expect('TodoSearch').toExist()
    })

    it('should call onSearch with entered input text', () => {
        let searchText = 'goblin'
        
        let spy = expect.createSpy()
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />)

        todoSearch.refs.searchText.value = searchText
        TestUtils.Simulate.change(todoSearch.refs.searchText)
        expect(spy).toHaveBeenCalledWith(false, searchText)
    })

    it('should call onSearch with proper checked value', () => {
        
        let spy = expect.createSpy()
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />)

        todoSearch.refs.showCompleted.checked = true
        TestUtils.Simulate.change(todoSearch.refs.showCompleted)
        expect(spy).toHaveBeenCalledWith(true, '')
    })
})