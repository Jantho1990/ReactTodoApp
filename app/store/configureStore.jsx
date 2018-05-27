const redux = require('redux')

let { searchTextReducer, showCompletedReducer, todosReducer } = require('reducers')

export let configure = () => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  })
  console.log(reducer, searchTextReducer)

  const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}