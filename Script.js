function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let taskContainer = document.createElement("div");

    let taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    // ✔ COMPLETED FEATURE
    taskText.onclick = function () {
        taskText.classList.toggle("completed");
    };

    // 📅 DATE & TIME
    let dateTime = document.createElement("span");
    dateTime.className = "date-time";

    let now = new Date();
    dateTime.textContent = "Added on: " + now.toLocaleString();

    taskContainer.appendChild(taskText);
    taskContainer.appendChild(dateTime);

    // ACTION BUTTONS
    let actions = document.createElement("div");
    actions.className = "actions";

    // ✏ EDIT BUTTON
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = function () {
        let updated = prompt("Update your task:", taskText.textContent);
        if (updated !== null && updated.trim() !== "") {
            taskText.textContent = updated;
        }
    };

    // ❌ DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskContainer);
    li.appendChild(actions);

    taskList.appendChild(li);

    taskInput.value = "";
}
