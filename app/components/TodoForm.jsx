const React = require('react')

const TodoForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault()
        let text = this.refs.text.value
        if(text.length > 0){
            this.props.onAddToDo(text)
        }else{
            this.refs.text.focus()
            alert('No empty Todos allowed!')
        }
        this.refs.text.value = ''        
    },
    render: function () {
        return (
            <form onSubmit={this.onSubmit} className="add-todo-container">
                <input ref="text" type="text" placeholder="Add todo..."/>
                <button className="button expanded">Add Todo</button>
            </form>
        )
    }
})

module.exports = TodoForm