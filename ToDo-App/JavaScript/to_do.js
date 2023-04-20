function get_todos() {

    let todos = new Array;
    let todos_str = localStorage.getItem('todo');

    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }

    return todos;
}

function add() {

    let task = document.getElementById('task').value;
    let todos = get_todos();

    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    document.getElementById('task').value = "";

    show();
    return false;
}

function show() {

    let todos = get_todos();
    let html = '<ul>';

    for (let i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>';
    };
    html += '</ul>';

    document.getElementById('to-dos').innerHTML = html;

    let xButtons = document.getElementsByClassName('remove');

    for (let i = 0; i < xButtons.length; i++) {
        xButtons[i].addEventListener('click', remove);
    }
    
}

function remove() {

    let todos = get_todos();
    let id = this.getAttribute('id');

    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    return false;
}

document.getElementById('add').addEventListener('click', add);

show();