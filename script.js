// Get todos from localStorage or initialize empty array
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";
// Function to save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
// Function to render todos
function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === "completed") return todo.completed;
    if (currentFilter === "pending") return !todo.completed;
    return true;
  });
  filteredTodos.forEach((todo, index) => {
    const li = document.createElement("li");
    if (todo.completed) {
      li.classList.add("completed");
    }
    li.innerHTML = `
    <div class='todo-content'>
        <span class='todo-text'>${todo.text}</span>
    </div>

    <div class='todo-action'>
        <button data-index="${index}" class="action-btn complete-btn">
        <i class='fas ${todo.completed ? "fa-rotate-left" : "fa-check"}'></i>
        </button>

        <button data-index="${index}" class="action-btn delete-btn">
        <i class='fas fa-trash'></i>
        </button>
    </div>
    `;

    todoList.appendChild(li);
  });
}

// Function to add new todo
function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();
  //trim is used to remove white spaces
  if (text) {
    todos.push({
      text: text,
      completed: false,
    });
  }
  input.value = "";
  saveTodos();
  renderTodos();
}
// Function to toggle todo completion

// Function to delete todo

// Add event listeners

// Add filter functionality

// Add event listeners
document.getElementById("addTodoBtn").addEventListener("click", addTodo);

// Initial render
renderTodos();
