var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');

let actions = require('actions'),
    store = require('configureStore').configure()

store.subscribe(() => {
  console.log('New state', store.getState())
})

store.dispatch(actions.addTodo('Finish this example'))
store.dispatch(actions.setSearchText('example'))
store.dispatch(actions.toggleShowCompleted())

// Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.querySelector('#app')
);
