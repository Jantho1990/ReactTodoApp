const React = require('react'),
      actions = require('actions'),
      { connect } = require('react-redux')

export const TodoSearch = React.createClass({
    render: function () {
        let { dispatch, showCompleted, searchText } = this.props

        return (
            <div className="container__header">
                <div>
                    <input ref="searchText" type="search" placeholder="Search todos" value={searchText} onChange={() => {
                        let searchText = this.refs.searchText.value
                        dispatch(actions.setSearchText(searchText))
                    }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" defaultChecked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted())
                        }}/>
                        <span className="show-completed-todos">Show Completed Todos</span>
                    </label>
                </div>
            </div>
        )
    }
})

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch)