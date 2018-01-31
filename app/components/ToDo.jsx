const React = require('react')
const moment = require('moment')

let ToDo = React.createClass({
    render: function () {
        let {id, text, completed, createdAt, completedAt} = this.props
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
                this.props.onToggle(id)
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div className="todo__subtext">
                    <span>&nbsp;{text}</span>
                    <p><small>{renderDate()}</small></p>
                </div>
            </div>
        )
    }
})

module.exports = ToDo