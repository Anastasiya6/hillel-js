export default class TodoView {
    #completedCount = 0;
    #uncompletedCount = 0;
    constructor() {
        this.#completedCount = document.querySelector('#completedCount');
        this.#uncompletedCount = document.querySelector('#uncompletedCount');
    }
    createWrapper = ({id,todo,isCompleted}) => {
        const wrapper = document.createElement('li');
        wrapper.className = 'list-group-item d-flex align-items-center justify-content-between';
        wrapper.setAttribute('data-todo-id', id);
        const completed = isCompleted ? 'completed' : '';

        wrapper.innerHTML = `
               <div class="text-black data-todo ${completed}"><b>${todo}</b></div>
                <div class="d-flex justify-content-end gap-1">
                    <button type="button" class="btn btn-success" data-completed-todo>Done</button>
                    <button type="button" class="btn btn-danger" data-remove-todo>Delete</button>
                </div>
               `;
        return wrapper;
    }
    renderTodo = (form,input,list,id) => {
        const todo = input.value;
        const wrapper = this.createWrapper({ id, todo, isCompleted: false });
        this.#uncompletedCount.textContent  = parseInt(this.#uncompletedCount.textContent, 10) + 1;
        list.prepend(wrapper);
        form.reset();
    }

    renderTodos(todosList, list) {
        const fragment = document.createDocumentFragment();
        let completedCount = 0;
        todosList.forEach((todo) => {
            completedCount = todo.isCompleted ? completedCount + 1 : completedCount;
            const wrapper = this.createWrapper(todo);
            fragment.appendChild(wrapper);
        })
        this.#completedCount.textContent  = completedCount;
        this.#uncompletedCount.textContent  = todosList.length - completedCount;
        list.appendChild(fragment);
    }

    calculateTodo(todosList) {
        let completedCount = 0;
        todosList.forEach((todo) => {
            completedCount = todo.isCompleted ? completedCount + 1 : completedCount;
        })
        this.#completedCount.textContent  = completedCount;
        this.#uncompletedCount.textContent  = todosList.length - completedCount;
    }

    removedTodo(element,todos) {
        element.remove();
        this.calculateTodo(todos);
    }

    makeComplete(element,todos) {
        const div = element.querySelector('.data-todo');
        div.classList.add('completed');
        this.calculateTodo(todos);
    }

    filterTodos(filter,list,id) {
        filter.querySelectorAll('a').forEach(link => {
            link.classList.toggle('list-group-item-primary', link.id === id);
        });
        list.querySelectorAll('li').forEach(li => {
            li.classList.remove('d-none');

        });
        if(id === 'completed') {
            list.querySelectorAll('li').forEach(li => {
                if (!li.querySelector('.completed')) {
                    li.classList.add('d-none');
                }
            });
        }else if (id === 'active') {
            list.querySelectorAll('li').forEach(li => {
                if (li.querySelector('.completed')) {
                    li.classList.add('d-none');
                }
            });
        }
    }
}