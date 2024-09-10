var ticketCount = 3;
var ticketPrice = 14.0;
document.getElementById("ticketNum").innerHTML += ticketCount;
document.getElementById("ticketCost").innerHTML += ticketPrice;
document.getElementById("ttCost").innerHTML += ticketCount * ticketPrice;

var account = 235.87;
var outfitCost = 35 + 75 + 60;
var accountAfterOutfit = account - outfitCost;
document.getElementById("bank").innerHTML += accountAfterOutfit;
var addJacketAfter = accountAfterOutfit <= 70;
document.getElementById("addJacket").innerHTML = !addJacketAfter;

var pizzas = 4;
var slices = 8;
var totalSlices = pizzas * slices;
var slicesEaten = 2.5;
var leftoverPieces = totalSlices % slicesEaten;
var noRemainder = totalSlices - leftoverPieces;
var totalFed = noRemainder / slicesEaten;
document.getElementById("profPizza").innerHTML +=
  "Students fed: " + totalFed + ", Leftover Slices: " + leftoverPieces;

var adult = 12.0;
var child = 6;
var drink = 1.5;
var total = 2 * adult + child + 3 * drink;
document.getElementById("Monty").innerHTML += "Final price : $" + total;

var week1 = 202.45;
var week2 = 134.97;
var week3 = 256.63;
var week4 = 178.22;
var tips = (week1 + week2 + week3 + week4) / 4;
document.getElementById("tips").innerHTML += "Average: $" + tips.toFixed(2);
