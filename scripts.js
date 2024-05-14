// Initialize tasks array with stored tasks from local storage or empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Retrieve tasks from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
    // Display tasks from the tasks array
    updateList();
});

const unordered_list = document.getElementById("taskList");
const input = document.querySelector("input");
const button = document.getElementById("add-btn");

function createDeleteButton(index) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
        tasks.splice(index, 1);
        updateList();
        saveTasksToLocalStorage(); // Update local storage after deletion
    });
    return deleteButton;
}

function updateList() {
    unordered_list.innerHTML = ""; // Clear the list before re-rendering

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteButton = createDeleteButton(index);
        li.appendChild(deleteButton);

        unordered_list.appendChild(li);
    });
}

function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

button.addEventListener("click", () => {
    const task = input.value.trim();
    if (task !== "") {
        tasks.push(task); // Add new task to the tasks array
        input.value = "";
        updateList(); // Update the list with the new task
        saveTasksToLocalStorage(); // Update local storage after adding task
    }
});
