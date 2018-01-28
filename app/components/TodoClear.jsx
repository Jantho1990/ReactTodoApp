const React = require('react')

let TodoClear = React.createClass({
    onClick: function () {
        this.props.onClearTodos()
    },
    render: function () {
        return (
            <div className="clear-todos">
                <button onClick={this.onClick} className="button expanded alert">Clear Todos</button>
            </div>
        )
    }
})

module.exports = TodoClear