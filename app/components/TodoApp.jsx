const React = require('react')
let TodoList = require('TodoList')
let TodoForm = require('TodoForm')
let TodoSearch = require('TodoSearch')
let TodoClear = require('TodoClear')
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
    handleAddToDo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuidv1(),
                    text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    },
    handleClearTodos: function () {
        this.setState({
            todos: []
        })
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    handleToggle: function (id) {
        this.setState((state) => {
            let todo = state.todos.find((todo) => todo.id === id)
            todo.completed = !todo.completed
            todo.completedAt = todo.completed ? moment().unix() : undefined
        })
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
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                            <div className="container__footer">
                                <TodoForm onAddToDo={this.handleAddToDo}/>
                                <TodoClear onClearTodos={this.handleClearTodos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = TodoApp