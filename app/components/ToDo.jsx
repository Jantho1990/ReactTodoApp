const React = require('react')
const {connect} = require('react-redux')
const moment = require('moment')
let actions = require('actions')

export let ToDo = React.createClass({
    render: function () {
        let {id, text, completed, createdAt, completedAt, dispatch} = this.props
        let todoClassName = completed ? 'todo todo-completed' : 'todo'
        let renderDate = () => {
            let message = 'Created '
            let timestamp = createdAt

            if (completed) {
                message = 'Completed '
                timestamp = completedAt
            }

            return message + moment.unix(timestamp).format('MMM Do, YYYY \\a\\t h:mm a')
        }
        return (
            <div className={todoClassName} onClick={() => {
                dispatch(actions.toggleTodo(id))
            }}>
                <div>
                    <input type="checkbox" defaultChecked={completed}/>
                </div>
                <div className="todo__subtext">
                    <p>&nbsp;{text}</p>
                    <p><small>{renderDate()}</small></p>
                </div>
            </div>
        )
    }
})

export default connect()(ToDo)