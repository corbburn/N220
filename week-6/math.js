// Created 2 reference variables for the inputs
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

// Created a reference variable for the output
const output = document.getElementById("output");

// Function for adding the two numbers
function addNums() {
  const sum = parseFloat(num1.value) + parseFloat(num2.value);
  output.innerHTML = sum;
}

// Function for multiplying the two numbers
function timesNums() {
  const product = parseFloat(num1.value) * parseFloat(num2.value);
  output.innerHTML = product;
}
