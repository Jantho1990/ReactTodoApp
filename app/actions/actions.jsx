export let setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
}

export let addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
}

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export let toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
}

// toggleTodo(id) TOGGLE_TODO
export let toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export let clearTodos = () => {
    return {
        type: 'REMOVE_TODOS'
    }
}