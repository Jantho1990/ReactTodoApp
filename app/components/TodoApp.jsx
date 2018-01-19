const React = require('react')
let TodoList = require('TodoList')
let TodoForm = require('TodoForm')
let TodoSearch = require('TodoSearch')

let TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the Beholder'
                },
                {
                    id: 2,
                    text: 'Clean the dungeon'
                },
                {
                    id: 3,
                    text: 'Summon Cthulhu'
                },
                {
                    id: 4,
                    text: 'Defeat a monster'
                }
            ]
        }
    },
    handleAddToDo: function(text) {
        alert('new todo: ' + text)
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function () {
        var { todos } = this.state
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <TodoForm onAddToDo={this.handleAddToDo}/>
            </div>
        )
    }
})

module.exports = TodoApp