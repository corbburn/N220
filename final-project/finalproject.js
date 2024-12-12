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
  if (currentTasks.length > 0) {
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
  currentTasks[taskId] = { name: taskName, completed: false };
  displayTasks();
}

//Displays the current tasks
function displayTasks() {
  taskDisplay = document.getElementById("tasks");
  taskDisplay.innerHTML = "";

  for (task in currentTasks) {
  }
}
