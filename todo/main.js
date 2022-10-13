
/**
 * 1. We should list (read) all ToDo's that are stored on the server (GET /todos)
 * 2. Create a ToDo functionality (POST /todos)
 * 3. Delete ToDo's (DELETE /todos/:id)
 * 4. Update ToDo (PATCH/PUT /todos/:id)
 */

const url = 'http://localhost:3000';
const endpoint = '/todos';

fetch(url + endpoint)
    .then((response) => response.json())
    .then((todos) => listTodos(todos))

function listTodos(todos) {
    const template =  document.querySelector('#todo-card');
    const output = document.querySelector('[]')
    for (const todo of todos) {
        const clonedTemplate = template.textContent.cloneNode(true);
        const h3 = clonedTemplate.querySelector('[data-todoTitle]');
        h3.textContent = todos.title

        const description = clonedTemplate.querySelector('[data-todoDescription]');
        description.testContent = todo.description;
        const deadline = clonedTemplate.querySelector('[todo-todoDeadline]');
        deadline.textContent = todo.deadline;

        output.appendChild(clonedTemplate);
    }


}
