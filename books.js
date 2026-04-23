document.addEventListener('DOMContentLoaded', function() {
    const sortForm = document.getElementById('sort-form');
    
        const inputField = document.getElementById('number-input');
        const resultArea = document.getElementById('sort-result');
        const errorArea = document.getElementById('sort-error');
    
    sortForm.addEventListener('submit', function(e) {
        e.preventDefault();
        resultArea.textContent = '';
        errorArea.textContent = '';

        const rawValue = inputField.value.trim();
        if (rawValue === "") {
            errorArea.textContent = 'Please enter at least one number.';
            return;
        }

        const stringArray = rawValue.split(' '); 
        const numbers = [];

        for (let i = 0; i < stringArray.length; i++) {
            let n = parseFloat(stringArray[i]);
            if (isNaN(n)) {
                errorArea.textContent = 'Invalid input. Please enter only numbers.';
                return;
            }
            numbers.push(n);
        }

        const order = document.querySelector('input[name="order"]:checked').value;
        
        if (order === 'asc') {
            numbers.sort(function(a, b) { return a - b; }); 
        } else {
            numbers.sort(function(a, b) { return b - a; }); 
        }

        resultArea.textContent = 'Sorted list: ' + numbers.join(', ');
    });
});



const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

addTodoBtn.addEventListener('click', function() {
    const taskText = todoInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a book title!");
        return;
    }

    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="btn btn-sm btn-success done-btn">✓</button>
            <button class="btn btn-sm btn-danger delete-btn">×</button>
        </div>
    `;

    
    li.querySelector('.done-btn').addEventListener('click', () => {
        li.querySelector('.task-text').style.textDecoration = "line-through";
    });

    
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    todoList.appendChild(li);
    todoInput.value = "";
});
  