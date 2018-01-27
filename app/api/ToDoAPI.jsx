module.exports = {
    setTodos: function (todos) {
        if(Array.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos))
            return todos
        }
    },
    getTodos: function () {
        let todos = JSON.parse(localStorage.getItem('todos')) || []
        return Array.isArray(todos) ? todos : []
    },
    filterTodos: function(todos, showCompleted, searchText) { 
        let filteredTodos = todos

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted
        })

        // Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1
        })

        // Sort uncompleted todos first
        filteredTodos.sort((todoA, todoB) => todoA.completed ? 1 : (todoB.completed ? -1 : 0))


        return filteredTodos
    }
}