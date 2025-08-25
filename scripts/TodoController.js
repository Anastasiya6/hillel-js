import TodoView from "./TodoView.js";
import TodoModel from "./TodoModel.js";

const view = new TodoView();
const todoModel = new TodoModel();
class TodoController {
    #form = null;
    #input = null;
    #list = null;
    #filter = null;
    constructor(){
        this.#form = document.querySelector('[data-form=todoCreate]');
        this.#input = document.querySelector('[data-input=todoText]');
        this.#list = document.querySelector('[data-list=todoList]');
        this.#filter = document.querySelector('[data-filter=FilterList]');
        this.#initEvents()
    }

    #initEvents () {
        document.addEventListener('DOMContentLoaded', this.#handleRenderTodos);
        this.#form.addEventListener('submit', this.#fetchFormData);
        this.#list.addEventListener('click', this.#removeTodoHandler);
        this.#filter.addEventListener('click', this.#filterTodoHandler);
        this.#list.addEventListener('click', this.#changeTodoHandler);
    }

    #handleRenderTodos = () => {
        const {todos} = todoModel;
        view.renderTodos(todos, this.#list)
    }

    #fetchFormData = (e) => {
        e.preventDefault();
        if(this.#input.value === '') return;
        const todo = {todo: this.#input.value, isCompleted: false};
        const id = todoModel.saveTodo(todo).id;
        view.renderTodo(this.#form,this.#input,this.#list,id);
    }

    #removeTodoHandler = ({target}) => {

        if(target.closest('[data-remove-todo]') === null) return;

        const todoElement = target.closest('[data-todo-id]');
        const todoId = parseInt(todoElement.getAttribute('data-todo-id'));

        const removedTodo = todoModel.deleteTodo(todoId);

        if(removedTodo !== null) {
            const {todos} = todoModel;
            view.removedTodo(todoElement, todos);
        }
    }

    #changeTodoHandler = ({target}) => {
        if(target.closest('[data-completed-todo]') === null) return;

        const todoElement = target.closest('[data-todo-id]');
        const todoId = parseInt(todoElement.getAttribute('data-todo-id'));
        const data = todoModel.makeComplete(todoId);
        view.makeComplete(todoElement,data);
    }

    #filterTodoHandler = ({target}) => {
        const id = target.id;
        view.filterTodos(this.#filter,this.#list, id);
    }
}

const form = new TodoController();