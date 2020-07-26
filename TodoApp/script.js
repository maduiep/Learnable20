// state
const TodoState = ["wash dishes", "clean your room emma"];

function TodoTemplate(todoInput) {
  return `<li class="list-item">
  <input value="${todoInput}" id="todo-list-item-input" disabled />
  <span class="float-right">
    <svg id="todo-item-checkdone" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle text-success"
      fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path fill-rule="evenodd"
        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
    </svg>

    <svg id="todo-item-edit" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square text-primary"
      fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
      <path fill-rule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
    </svg>

    <svg id="todo-item-delete" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle text-danger" fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path fill-rule="evenodd"
        d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
      <path fill-rule="evenodd"
        d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
    </svg>
  </span>
</li>`;
}

function updateUI() {
  let todoList = document.getElementById("todo-items");
  // clear UI first
  todoList.innerHTML = "";

  // populate UI
  TodoState.forEach(function (t, index) {
    todoList.innerHTML = todoList.innerHTML + TodoTemplate(t, index);
  });

  // add listeners

  document.querySelectorAll("[id=todo-item-edit]").forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.stopPropagation();
      // get the parentElement "list-item"
      item = event.path[2];

      const itemInput = item.firstElementChild;
      const idx = TodoState.findIndex((i) => i === itemInput.value);

      if (itemInput.hasAttribute("disabled")) {
        return itemInput.removeAttribute("disabled");
      }

      itemInput.setAttribute("disabled");
    });
  });

  document.querySelectorAll("[id=todo-item-delete]").forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.stopPropagation();
      // get the parentElement "list-item"
      item = event.path[2];

      const itemInput = item.firstElementChild;
      const idx = TodoState.findIndex((i) => i === itemInput.value);

      TodoState.splice(idx, 1);

      updateUI();
    });
  });

  document
    .querySelectorAll("[id=todo-list-item-input]")
    .forEach(function (item) {
      item.addEventListener("click", function (event) {
        event.stopPropagation();
        // // get the parentElement "list-item"
        // item = event.path[2];

        // const itemInput = item.firstElementChild;
        // const idx = TodoState.findIndex((i) => i === itemInput.value);

        // TodoState.splice(idx, 1);

        // updateUI();
      });
    });
}

window.addEventListener("load", updateUI());

// step 1 get input from input field
const todoButton = document
  .getElementById("add-todo")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const value = document.getElementById("todo-input").value;
    console.log(value);

    const todoItems = document.getElementById("todo-items");
    console.log(todoItems);

    // Add new todo to State
    TodoState.push(value);

    updateUI();
  });
