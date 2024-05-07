function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);

        var deleteButton = document.createElement("span");
        // deleteButton.textContent = "X";
        deleteButton.textContent = " –––––-xX❌";
        deleteButton.className = "delete";
    
        deleteButton.onclick = function() {
            this.parentNode.remove();
        };
        li.appendChild(deleteButton);

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
