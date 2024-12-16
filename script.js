// Get todos from localStorage or initialize empty array
let todos = JSON.parse(localStorage.getItem("todos") || []);
// Function to save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
// Function to render todos
function renderTodos() {}

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
}
// Function to toggle todo completion

// Function to delete todo

// Add event listeners

// Add filter functionality

// Add event listeners

// Initial render
