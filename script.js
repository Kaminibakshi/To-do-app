// get the todo list ul element
const todoListUl = document.getElementById('todo-list-ul');

// get the todo input element
const todoInput = document.getElementById('todo-input');

// get the add todo button element
const addTodoBtn = document.getElementById('add-todo-btn');

// array to store todo items
let todoItems = [];

// function to add todo item
function addTodoItem() {
    // get the todo input value
    const todoItem = todoInput.value.trim();

    // check if todo item is not empty
    if (todoItem) {
        // add todo item to the array
        todoItems.push(todoItem);

        // clear the todo input value
        todoInput.value = '';

        // render the todo list
        renderTodoList();
    }
}

// function to render the todo list
function renderTodoList() {
    // clear the todo list ul element
    todoListUl.innerHTML = '';

    // loop through the todo items array
    todoItems.forEach((todoItem, index) => {
        // create a new li element
        const todoListItem = document.createElement('LI');

        // add the todo item text to the li element
        todoListItem.textContent = todoItem;

        // add a delete button to the li element
        const deleteBtn = document.createElement('BUTTON');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTodoItem(index);

        // append the delete button to the li element
        todoListItem.appendChild(deleteBtn);

        // append the li element to the todo list ul element
        todoListUl.appendChild(todoListItem);
    });
}

// function to delete todo item
function deleteTodoItem(index) {
    // remove the todo item from the array
    todoItems.splice(index, 1);

    // render the todo list
    renderTodoList();
}

// add event listener to the add todo button
addTodoBtn.addEventListener('click', addTodoItem);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
    addTodoItem();
    }
    });
    
    // render the todo list on page load
    renderTodoList();
    
    // function to toggle the completed status of a todo item
    function toggleCompleted(index) {
    todoItems[index].completed = !todoItems[index].completed;
    renderTodoList();
    }
    
    // function to delete all completed todo items
    function deleteCompleted() {
    todoItems = todoItems.filter((item) => !item.completed);
    renderTodoList();
    }
    
    // add event listener to the delete completed button
    const deleteCompletedBtn = document.createElement('BUTTON');
    deleteCompletedBtn.textContent = 'Delete Completed';
    deleteCompletedBtn.onclick = deleteCompleted;
    todoListUl.appendChild(deleteCompletedBtn);
    
    // add event listener to the toggle completed button
    const toggleCompletedBtn = document.createElement('BUTTON');
    toggleCompletedBtn.textContent = 'Toggle Completed';
    toggleCompletedBtn.onclick = () => {
    todoItems.forEach((item, index) => {
    toggleCompleted(index);
    });
    };
    todoListUl.appendChild(toggleCompletedBtn);
    