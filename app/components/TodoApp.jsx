const React = require('react')
let TodoList = require('TodoList')
let TodoForm = require('TodoForm')
let TodoSearch = require('TodoSearch')
let uuidv1 = require('uuid/v1')

let TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuidv1(),
                    text: 'Walk the Beholder',
                    completed: false
                },
                {
                    id: uuidv1(),
                    text: 'Clean the dungeon',
                    completed: true
                },
                {
                    id: uuidv1(),
                    text: 'Summon Cthulhu',
                    completed: true
                },
                {
                    id: uuidv1(),
                    text: 'Defeat a monster',
                    completed: false
                }
            ]
        }
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
        var { todos } = this.state
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <TodoForm onAddToDo={this.handleAddToDo}/>
            </div>
        )
    }
})

module.exports = TodoApp