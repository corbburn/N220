const username = document.getElementById("username");
const password = document.getElementById("password");
let loginAlerts = [];
let currentTasks = ["WHAT NO WAY"];

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

function defaultPage() {
  if (currentTasks.length === 0) {
    document.getElementById("main").innerHTML =
      "Welcome, " +
      username.value +
      "<br /><br /><button onclick='addTask'>Add Task</button>";
  } else {
    document.getElementById("main").innerHTML =
      "Welcome, " +
      username.value +
      "<br /><br /><button onclick='addTask'>Add Task</button>" +
      "<br /><br />";
  }
}
