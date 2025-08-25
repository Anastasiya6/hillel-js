export default class TodoModel {

    get todos() {
        const todos = JSON.parse(localStorage.getItem("todos"));
        if(todos === null) return [];
        return todos;
    };
    saveTodo(todo) {
       const localTodos = [...this.todos];

        let currentId = localTodos.length ? localTodos.at(-1).id + 1 : 1;

        const todoToSave = {
            ...todo,
            id: currentId,
        };
        localTodos.push(todoToSave)
        localStorage.setItem("todos", JSON.stringify(localTodos));
        console.log(this.todos.at(-1));
        return this.todos.at(-1);
    }

    deleteTodo(id) {
        if(typeof id !== 'number') return null;
        const data = this.todos;
        const index = data.findIndex(todo => todo.id === id);

        const removedTodos = data.splice(index, 1);

        localStorage.setItem('todos', JSON.stringify(data));

        if(!removedTodos.length) return null;

        return removedTodos[0]
    }

    makeComplete(id) {
        if(typeof id !== 'number') return null;

        const data = this.todos;
        const index = data.findIndex(todo => todo.id === id);

        data[index].isCompleted = true;
        localStorage.setItem('todos', JSON.stringify(data));
        return data;
    }
}