var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');

// Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.querySelector('#app')
);
