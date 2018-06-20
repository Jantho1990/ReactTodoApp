import moment from 'moment'
import firebase, { firebaseRef } from 'app/firebase/'

export let setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
}

export let addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}

export let startAddTodo = (text) => {
    return (dispatch, getState) => {
        let todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        }
        
        let todoRef = firebaseRef.child('todos').push(todo)
        console.log('todo', todo)

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }))
        })
    }
}

export let addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
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