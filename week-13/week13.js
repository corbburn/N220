function validatePassword() {
  const password = document.getElementById("password");

  let containsNumber = false;
  let containsLowercase = password.value == password.value.toLowerCase();
  // "ABC" == "abc" || "abc" == "abc:"
  console.log(password.value);
  //Is there at least 1 number
  for (let i = 0; i < password.value.length; i++) {
    const currentCharacter = password.value[i];
    if (isNaN(currentCharacter) === false) {
      containsNumber = true;
    }
    //Is there at least 1 lowercase letter
    if (
      currentCharacter == currentCharacter.toLowerCase() &&
      isNaN(currentCharacter)
    ) {
      containsLowercase = true;
    }
  }

  const validPassword = containsNumber && containsLowercase;

  if (validPassword) {
    alert("valid");
  } else {
    alert("invalid");
  }
}

const newBtn = document.createElement("button");
newBtn.innerHTML = "Check Password";
newBtn.onclick = validatePassword;
document.body.appendChild(newBtn);
