const React = require('react')
import TodoList from 'TodoList'
import TodoForm from 'TodoForm'
import TodoSearch from 'TodoSearch'
import TodoClear from 'TodoClear'

let uuidv1 = require('uuid/v1')
let moment = require('moment')

let TodoApp = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <div className="container__footer">
                                <TodoForm/>
                                <TodoClear/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = TodoApp