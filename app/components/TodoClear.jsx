const React = require('react')
let { connect } = require('react-redux'),
    actions = require('actions')

export let TodoClear = React.createClass({
    onClick: function (e) {
        e.preventDefault()
        let { dispatch } = this.props
        dispatch(actions.clearTodos())
    },
    render: function () {
        return (
            <div className="clear-todos">
                <button onClick={this.onClick} className="button expanded alert">Clear Todos</button>
            </div>
        )
    }
})

export default connect()(TodoClear)