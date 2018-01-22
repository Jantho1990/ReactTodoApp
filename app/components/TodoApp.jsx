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
                    text: 'Walk the Beholder'
                },
                {
                    id: uuidv1(),
                    text: 'Clean the dungeon'
                },
                {
                    id: uuidv1(),
                    text: 'Summon Cthulhu'
                },
                {
                    id: uuidv1(),
                    text: 'Defeat a monster'
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
                    text
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