const React = require('react')
import TodoList from 'TodoList'
import TodoForm from 'TodoForm'
import TodoSearch from 'TodoSearch'
import TodoClear from 'TodoClear'
let ToDoAPI = require('ToDoAPI')

let uuidv1 = require('uuid/v1')
let moment = require('moment')

let TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: ToDoAPI.getTodos()
        }
    },
    componentDidUpdate: function () {
        ToDoAPI.setTodos(this.state.todos)
    },
    render: function () {
        let { todos, showCompleted, searchText } = this.state
        let filteredTodos = ToDoAPI.filterTodos(todos, showCompleted, searchText)
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