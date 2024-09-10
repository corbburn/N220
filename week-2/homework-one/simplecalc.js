const ticketCount = 3;
const ticketPrice = 14.0;
document.getElementById("ticketNum").innerHTML += ticketCount;
document.getElementById("ticketCost").innerHTML += ticketPrice;
document.getElementById("ttCost").innerHTML += ticketCount * ticketPrice;

const account = 235.87;
const outfitCost = 35 + 75 + 60;
const accountAfterOutfit = account - outfitCost;
document.getElementById("bank").innerHTML += accountAfterOutfit;
const addJacketAfter = accountAfterOutfit <= 70;
document.getElementById("addJacket").innerHTML = !addJacketAfter;

const pizzas = 4;
const slices = 8;
const totalSlices = pizzas * slices;
const slicesEaten = 2.5;
const leftoverPieces = totalSlices % slicesEaten;
const noRemainder = totalSlices - leftoverPieces;
const totalFed = noRemainder / slicesEaten;
document.getElementById("profPizza").innerHTML +=
  "Students fed: " + totalFed + ", Leftover Slices: " + leftoverPieces;

const adult = 12.0;
const child = 6;
const drink = 1.5;
const total = 2 * adult + child + 3 * drink;
document.getElementById("Monty").innerHTML += "Final price : $" + total;

const week1 = 202.45;
const week2 = 134.97;
const week3 = 256.63;
const week4 = 178.22;
const tips = (week1 + week2 + week3 + week4) / 4;
document.getElementById("tips").innerHTML += "Average: $" + tips.toFixed(2);
