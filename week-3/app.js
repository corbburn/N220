function simpleFunctionTwo() {
  document.querySelector("body").innterHTML +=
    "This Function does not take parameters";
}
simpleFunctionTwo();

function sayHelloWorld() {
  console.log("Hello, world!");
}

sayHelloWorld();

function sayFavoriteBand(bandName) {
  document.getElementById("favBand").innerHTML += bandName + "<br/>";
}

sayFavoriteBand("Old Dominion");
sayFavoriteBand("Maroon 5");

function sayMyName(myName) {
  console.log(myName);
}

sayMyName("Say my name");
sayMyName("Say my name");
sayMyName("If no one is around you");

function calcRectPerimeter(height, width) {
  const perimeter = 2 * height + 2 * width;
  document.querySelector("#panswer").innerHTML += perimeter;
}

calcRectPerimeter(2, 4);

function calcArea() {
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;
  console.log("height", height);
  console.log("width", width);
  document.querySelector("#answer").innerHTML +=
    "Area: " + height * width + "<br/>";
}

function calcRectAreaAndPeri(height, width) {
  const perimeter = 2 * (height + width);
  const area = height * width;

  document.getElementById("multiAnswer").innerHTML += `
    Height: ${height} <br />
    Width: ${width} <br />
    Perimeter: ${perimeter} <br />
    Area: ${area} <br />
    `;
}

calcRectAreaAndPeri(5, 4);
calcRectAreaAndPeri(2, 8);

function myFunction() {
  alert("Who goes there?");
}

function wizard(name, occupation) {
  confirm("Welcome " + name + ", the " + occupation + "!");
  document.getElementById(
    "Future"
  ).innterHTML += `Welcome ${name}, the ${occupation}!`;
}

function addItem() {
  const newItem = prompt("Add Item:");
  console.log(newItem);
}

function returnValue(color) {
  return color;
}

alert(returnValue("blue"));
