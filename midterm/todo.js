let items = [];
function addItem() {
  items.push(document.getElementById("item").value);
  lastItem = document.getElementById("item").value;
  document.getElementById("list").innerHTML = "";
  for (i = 0; i < items.length; i++) {
    document.getElementById("list").innerHTML += `<li>${items[i]}</li> <br />`;
  }
}

function summarizeList() {
  document.getElementById("summary").innerHTML += `
  Total Items: ${items.length} <br />
  First Item: ${items[0]} <br />
  Last Item: ${lastItem} <br />
  `;
}
