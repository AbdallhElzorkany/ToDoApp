let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let task = "";

window.onload = function () {
  let storageTasks = window.localStorage.getItem("Tasks").split(" ");
  if (storageTasks.length > 0) {
    for (let i = 0; i < storageTasks.length; i++) {
      input.value = storageTasks[i];
      add.click();
    }
  }
};
add.onclick = function () {
  if (input.value !== "") {
    let taskInfo = document.createTextNode(input.value);
    let taskP = document.createElement("p");
    let taskD = document.createElement("button");
    let taskDiv = document.createElement("div");
    taskD.innerHTML = "Delete";
    taskP.className = "taskInfo";
    taskP.title=input.value;
    taskD.className = "delete";
    taskDiv.className = "task";
    taskP.append(taskInfo);
    taskDiv.append(taskP);
    taskDiv.append(taskD);
    tasks.append(taskDiv);
    task += ` ${input.value}`;
    window.localStorage.setItem("Tasks", task);
    taskD.onclick = function () {
      let txt = taskD.parentElement.childNodes[0].textContent;
      task = task.replace(txt, "");
      window.localStorage.setItem("Tasks", task);
      taskD.parentElement.remove();
    };
    input.value = "";
  }
};
