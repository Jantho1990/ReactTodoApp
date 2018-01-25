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
    }
}