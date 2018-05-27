let expect = require('expect'),
    df = require('deep-freeze-strict'), // helps test that reducers are pure functions
    reducers = require('reducers')

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'what is this'
      }

      let res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText)
    })
  })

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted state', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      let res = reducers.showCompletedReducer(df(false), df(action))

      expect(res).toBe(true)
    })
  })
})