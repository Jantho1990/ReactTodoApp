const React = require('react')

const TodoForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault()
        let text = this.refs.text.value
        this.props.onAddToDo(text)
        this.refs.text.value = ''
    },
    render: function () {
        return (
            <form onSubmit={this.onSubmit} className="add-todo-container">
                <input ref="text" type="text" placeholder="Add todo..."/>
                <button>Add Todo</button>
            </form>
        )
    }
})

module.exports = TodoForm