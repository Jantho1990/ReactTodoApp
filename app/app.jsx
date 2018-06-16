var React = require('react');
var ReactDOM = require('react-dom');
let {Provider} = require('react-redux')
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');

let actions = require('actions'),
    store = require('configureStore').configure()

store.subscribe(() => {
  console.log('New state', store.getState())
})

// Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.querySelector('#app')
);
