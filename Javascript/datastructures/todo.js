
// list to hold all the todos
// full CRUD TODO
let todos = []; 

// wondow onload method to render our todos
window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos') || []);
    displayAllTodos();
}

// arrow function to add a todo
const addNewTodo = () => {
    let newTodo = document.getElementById("todo").value;
    if(todos.includes(newTodo)) return;
    todos.push(newTodo);
    newTodo.value = "";
    displayAllTodos();

    // store the todos in the local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}

// function to display the todos
const displayAllTodos = () => {
    let divList = document.getElementById("divList");
    divList.innerHTML = "";
    todos.forEach((todo, index) => {
        // create a div to hold the todo dynamically
        let divTodo = document.createElement('div');
        divTodo.innerHTML = `
            <h1>${todo}</h1>
            <button onClick="editTodo(${index})">Edit</button>
            <button onClick="deleteTodo(${index})">Delete</button>
        `;
        // append the divTodo  to the divList
        divList.appendChild(divTodo);
    });

}

// function to edit a todo
const editTodo = (index) => {
    let editTodo = prompt(`Want to edit ${todos[index]}`);
    if(editTodo.length > 0) {
        todos[index] = editTodo;
        displayAllTodos();
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    
}


// function to delete a todo
const deleteTodo = (index) => {
    let delTodo = prompt(`Want to delete ${todos[index]}`); // want to delete walking
    let todoIndex = todos.indexOf(delTodo);// get the index of the todo to be deleted
    todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayAllTodos();
    
}

// add event listener to the button
let addButton = document.getElementById("addBtn");
addButton.addEventListener('click', addNewTodo);