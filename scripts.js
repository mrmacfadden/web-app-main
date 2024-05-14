const tasks = [];
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
  });
  return deleteButton;
}

function updateList() {
  unordered_list.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = tasks[i];

    const deleteButton = createDeleteButton(i);
    li.appendChild(deleteButton);

    unordered_list.appendChild(li);
  }
}

button.addEventListener("click", () => {
  const task = input.value.trim();
  if (task !== "") {
    tasks.push(task);
    input.value = "";
    updateList();
  }
});

updateList();
 
var loader = document.getElementById("preloader");

window.addEventListener("load" , function(){
loader.style.display = "none"
})
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");


/*const tasks = [];
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
        });
        return deleteButton;
      }

      function updateList() {
        unordered_list.innerHTML = "";
        for (let i = 0; i < tasks.length; i++) {
          const li = document.createElement("li");
          li.innerHTML = tasks[i];

          const deleteButton = createDeleteButton(i);
          li.appendChild(deleteButton);

          unordered_list.appendChild(li);
        }
      }

      button.addEventListener("click", () => {
        const task = input.value.trim();
        if (task !== "") {
          tasks.push(task);
          input.value = "";
          updateList();
        }
      });

      updateList();


*/
      