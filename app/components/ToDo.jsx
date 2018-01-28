const React = require('react')
const moment = require('moment')

let ToDo = React.createClass({
    render: function () {
        let {id, text, completed, createdAt, completedAt} = this.props
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
            <div onClick={() => {
                this.props.onToggle(id)
            }}>
                <input type="checkbox" checked={completed}/>
                <span>&nbsp;{text}</span>
                <p><small>{renderDate()}</small></p>
            </div>
        )
    }
})

module.exports = ToDo