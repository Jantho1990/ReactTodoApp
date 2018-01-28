const React = require('react')
let TodoList = require('TodoList')
let TodoForm = require('TodoForm')
let TodoSearch = require('TodoSearch')
let TodoClear = require('TodoClear')
let ToDoAPI = require('ToDoAPI')

let uuidv1 = require('uuid/v1')

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
                    completed: false
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
        })
    },
    render: function () {
        let { todos, showCompleted, searchText } = this.state
        let filteredTodos = ToDoAPI.filterTodos(todos, showCompleted, searchText)
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <TodoForm onAddToDo={this.handleAddToDo}/>
                <TodoClear onClearTodos={this.handleClearTodos}/>
            </div>
        )
    }
})

module.exports = TodoApp