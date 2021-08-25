//"use strict";
let tasks = [];

const getPriorityName = function (priority) {
  switch (priority) {
    case "1":
      return "High";
    case "2":
      return "Medium";
    case "3":
      return "Low";
    default:
      return "";
  }
};

const deleteTask = function (i) {
  if (!confirm("Are you sure ?")) return;
  tasks.splice(i, 1);
  renderTable();
};
const moveUp = function (i) {
  if (i == 0) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i - 1];
  tasks[i - 1] = oldTask;
  renderTable();
};
const moveDown = function (i) {
  if (i == tasks.length - 1) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i + 1];
  tasks[i + 1] = oldTask;
  renderTable();
};

const renderTable = function () {
  const tbody = document.querySelector("#tasks_tbody");
  tbody.innerHTML = "";
  tasks.forEach((t, i) => {
    const row = `
        <tr>
        <td>${i + 1}</td>
        <td id="taskName${i}">${t.name}</td>
        <td id="taskPriority${i}">${getPriorityName(t.priority)}</td>
        <td>
        ${
          i > 0
            ? `<button class="btn btn-sm btn-secondary" onclick="moveUp(${i})">Up</button>`
            : ``
        }
        ${
          i < tasks.length - 1
            ? `<button class="btn btn-sm btn-secondary" onclick="moveDown(${i})">Down</button>`
            : ``
        }
        </td>
        <td>
        <button class="btn btn-primary btn-sm" id="edit${i}" onclick="editTask(${i})">Edit</button>
        <button class="btn btn-success btn-sm" id="save${i}" onclick="saveTask(${i})" style="display:none;">Save</button>
        <button class="btn btn-danger btn-sm" id="cancel${i}" onclick="cancelTask(${i})" style="display:none;">Cancel</button>        
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${i})">Delete</button></td>
        </tr>
        `;
    tbody.insertAdjacentHTML("beforeEnd", row);
  });
};
const addTask = function () {
  //console.log(this);
  const taskName = document.querySelector("#task_name").value;
  const priority = document.querySelector("#task_priority").value;
  if (taskName !== "" && priority > 0) {
    tasks.push({
      name: taskName,
      priority: priority,
    });
    renderTable();
    document.querySelector("#task_name").value="";
    document.querySelector("#task_priority").value="default";
  }
};

const editTask=function(i){
  document.querySelector("#edit"+i).setAttribute("style","display:none;");
  document.querySelector("#save"+i).toggleAttribute("style");
  document.querySelector("#cancel"+i).toggleAttribute("style");
  document.querySelector("#taskName"+i).setAttribute("contenteditable","true");
  document.querySelector("#taskPriority"+i).setAttribute("contenteditable","true");
  document.querySelector("#taskPriority"+i).innerHTML=`<select id="task_Priority${i}" class="form-control">
                                                        <option value="1">High</option>
                                                        <option value="2">Medium</option>
                                                        <option value="3">Low</option>
                                                      </select>`;
  document.querySelector("#task_Priority"+i).value=tasks[i].priority;
};

const saveTask=function(i){
  const newTaskName=document.querySelector("#taskName"+i).innerText;
  const newPriority=document.querySelector("#task_Priority"+i).value;
  document.querySelector("#edit"+i).toggleAttribute("style");
  document.querySelector("#save"+i).setAttribute("style","display:none;");
  document.querySelector("#cancel"+i).setAttribute("style","display:none;");
  document.querySelector("#taskName"+i).setAttribute("contenteditable","false");
  document.querySelector("#taskPriority"+i).setAttribute("contenteditable","false");
  if (newTaskName !== "" && newPriority>0) {
    tasks[i].name=newTaskName;
    tasks[i].priority=newPriority;
  }
  renderTable();
};

const cancelTask=function(i){
  document.querySelector("#edit"+i).toggleAttribute("style");
  document.querySelector("#save"+i).setAttribute("style","display:none;");
  document.querySelector("#cancel"+i).setAttribute("style","display:none;");
  document.querySelector("#taskName"+i).setAttribute("contenteditable","false");
  document.querySelector("#taskPriority"+i).setAttribute("contenteditable","false");
  renderTable();
};

document.querySelector("#add").addEventListener("click", addTask);
