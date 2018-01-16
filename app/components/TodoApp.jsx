const React = require('react')
let TodoList = require('TodoList')
let TodoForm = require('TodoForm')

let TodoApp = React.createClass({
    getInitialState: function () {
        return {
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
    render: function () {
        var { todos } = this.state
        return (
            <div>
                <TodoList todos={todos}/>
                <TodoForm onAddToDo={this.handleAddToDo}/>
            </div>
        )
    }
})

module.exports = TodoApp