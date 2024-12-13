const username = document.getElementById("username");
const password = document.getElementById("password");
let loginAlerts = [];
let currentTasks = {};
let i = 0;

//Checks for every validation before combining everything wrong into an alert and displaying it.
//If everything is correct, it will move to the next page.
function validateLogin() {
  if (username.value == "") {
    console.log(username);
    loginAlerts.push("Username field is blank.");
  }
  if (password.value == "") {
    console.log(username);
    loginAlerts.push("Password field is blank.");
  }
  if (password.value.length < 8) {
    loginAlerts.push(
      "The password length must be longer than eight characters."
    );
  }
  if (!/[A-Z]/.test(password.value)) {
    loginAlerts.push("Password must contain an uppercase letter.");
  }
  if (!/[0-9]/.test(password.value)) {
    loginAlerts.push("Password must contain a number.");
  }
  if (
    username.value !== "" &&
    password.value.length >= 8 &&
    /[A-Z]/.test(password.value) &&
    /[0-9]/.test(password.value)
  ) {
    alert("Valid Login!");
    defaultPage();
  } else {
    alert(loginAlerts.join("\n"));
    loginAlerts = [];
  }
}

//Loads default page settings
function defaultPage() {
  document.getElementById("login").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById(
    "welcome"
  ).textContent = `Welcome, ${username.value}!`;
  //checks for tasks, then if there are it will load them.
  if (Object.keys(currentTasks).length > 0) {
    displayTasks();
    document.getElementById("tasks").style.display = "block";
  }
}

//Prompt a user for what tasks they want to add.
//Save task information in the currentTasks object.
function addTask() {
  const taskName = prompt("Please type in what task you want to add:");
  const taskId = i++;
  i = i++;
  currentTasks[taskId] = { name: taskName, completed: false, urgent: false };
  displayTasks();
}

//Displays the current tasks
function displayTasks() {
  document.getElementById("tasks").style.display = "block";
  const tasksDiv = document.getElementById("tasks");
  tasksDiv.innerHTML = "";
  //loop through each task and create a class to display them
  for (taskId in currentTasks) {
    const task = currentTasks[taskId];
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    //creating the urgent label for when you want to make a task urgent
    const urgentTask = task.urgent
      ? '<span style="color: red; font-weight: bold;">URGENT!</span>'
      : "";
    //adding all of the information into the div and the connecting it to the tasks div.
    taskDiv.innerHTML = `
    <h4 style="${task.completed ? "text-decoration: line-through;" : ""}">${
      task.name
    } ${urgentTask}</h4>
    <button onclick="toggleComplete(${taskId})">Complete</button>
    <button onclick="deleteTask(${taskId})">Delete</button>
    <button onclick="toggleUrgent(${taskId})">${
      task.urgent ? "Mark Not Urgent" : "Mark Urgent"
    }</button>
    `;
    tasksDiv.appendChild(taskDiv);
  }
}
//toggle between a task being completed or not.
function toggleComplete(taskId) {
  currentTasks[taskId].completed = !currentTasks[taskId].completed;
  displayTasks();
}
//function to let the user delete a task from the dashboard
function deleteTask(taskId) {
  delete currentTasks[taskId];
  displayTasks();
}
//toggle between at ask being urgent or not.
function toggleUrgent(taskId) {
  currentTasks[taskId].urgent = !currentTasks[taskId].urgent;
  displayTasks();
}
//Function to let users log out.
//Clears all page information and resets it to the login page.
function logout() {
  document.getElementById("main").style.display = "none";
  document.getElementById("tasks").style.display = "none";
  document.getElementById("login").style.display = "block";
  username.value = "";
  password.value = "";
}
