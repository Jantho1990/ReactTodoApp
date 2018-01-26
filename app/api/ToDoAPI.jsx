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

        // Sort uncompleted todos first


        return filteredTodos
    }
}