//selecting dom elements for manipulation
let input = document.querySelector("input[type = 'text']");
let ul = document.querySelector("ul");
let container = document.querySelector("div");
let lists = document.querySelectorAll("li");
let spans = document.getElementsByTagName("span");
let pencil = document.querySelector("#pencil");
let saveBtn = document.querySelector(".save");
let clearBtn = document.querySelector(".clear");
let tipsBtn = document.querySelector(".tipBtn");
let closeBtn = document.querySelector(".closeBtn");
let overlay = document.getElementById("overlay")


//function to delete todo if delete span is clicked.
function deleteTodo() {
    for (let span of spans) {
        span.addEventListener("click", function () {
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

//function to load todo if list is found in local storage.
function loadTodo() {
    if (localStorage.getItem('todoList')) {
        ul.innerHTML = localStorage.getItem('todoList');
        deleteTodo();
    }
}

//event listener for input to add new todo to the list.
input.addEventListener("keypress", function (keyPressed) {
    if (keyPressed.which === 13) {
        //creating lists and span when enter is clicked
        let li = document.createElement("li");
        let spanElement = document.createElement("span");
        let icon = document.createElement("i");

        let newTodo = this.value;
        this.value = " ";

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);

        deleteTodo();

    }

});

// event listener to linethrough list if clicked
ul.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false
);



//save todolist state so user can access it later
saveBtn.addEventListener('click', function () {
    localStorage.setItem('todoList', ul.innerHTML);

});

//clear all todo when clear button is clicked
clearBtn.addEventListener('click', function () {
    ul.innerHTML = "";
    localStorage.removeItem('todoList', ul.innerHTML);
});



//delete todo
deleteTodo();

//load Todo
loadTodo();