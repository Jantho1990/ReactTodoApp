const React = require('react')

const TodoSearch = React.createClass({
    handleSearch: function(){
        let showCompleted = this.refs.showCompleted.checked
        let searchText = this.refs.searchText.value

        this.props.onSearch(showCompleted, searchText)
    },
    render: function () {
        return (
            <div className="container__header">
                <div>
                    <input ref="searchText" type="search" placeholder="Search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        <span className="show-completed-todos">Show Completed Todos</span>
                    </label>
                </div>
            </div>
        )
    }
})

module.exports = TodoSearch