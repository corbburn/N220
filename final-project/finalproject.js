const username = document.getElementById("username");
const password = document.getElementById("password");
let loginAlerts = [];

//Checks for every validation before combining everything wrong into an alert and displaying it.
//If everything is correct, it will move to the next page.
function validateLogin() {
  if (username === null) {
    console.log(username);
    loginAlerts.push("Username field is blank.");
  }
  if (password)
    if (loginAlerts.length < 1) {
      alert("Valid Login!");
    } else {
      alert(loginAlerts.join("\n"));
      loginAlerts = [];
    }
}
