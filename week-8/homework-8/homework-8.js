let tool;
let currentDecision;

function clearInput() {
  document.getElementById("choice").value = "";
}

function selectItem() {
  document.getElementById("error").innerHTML = "";
  const input = document.getElementById("choice").value;
  if (input === "1") {
    tool = "Matches";
    document.getElementById("summary").innerHTML +=
      "<li>Your tool is matches.</li>";
    currentDecision = decisionOne;
  } else if (input === "2") {
    tool = "Flashlight";
    document.getElementById("summary").innerHTML +=
      "<li>Your tool is a flashlight.</li>";
    currentDecision = decisionOne;
  } else if (input === "3") {
    tool = "Camping Tent";
    document.getElementById("summary").innerHTML +=
      "<li>Your tool is a camping tent.</li>";
    currentDecision = decisionOne;
  } else {
    document.getElementById("error").innerHTML = "Please input a valid number.";
  }
  clearInput();
  currentDecision();
}

function decisionOne() {
  document.getElementById("story").innerHTML =
    "You are lost in the forest and have two paths, would you like to go left or right?";
  const options = document.getElementById("options");
  options.innerHTML = "";
  options.innerHTML += "<li>Left</li>";
  options.innerHTML += "<li>Right</li>";
  clearInput();
  document.querySelector("button").onclick = runDecisionOne;
}

function runDecisionOne() {
  document.getElementById("error").innerHTML = "";
  const input = document.getElementById("choice").value;
  if (input === "1") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to go left.</li>";
    currentDecision = decisionTwo;
    clearInput();
    currentDecision();
  } else if (input === "2") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to go right.</li>";
    currentDecision = decisionThree;
    clearInput();
    currentDecision();
  } else {
    document.getElementById("error").innerHTML = "Please input a valid number.";
  }
}

function decisionTwo() {
  document.getElementById("story").innerHTML =
    "You find a house, would you like to knock on the door?";
  const options = document.getElementById("options");
  options.innerHTML = "";
  options.innerHTML += "<li>Yes</li>";
  options.innerHTML += "<li>No</li>";
  clearInput();
  document.querySelector("button").onclick = runDecisionTwo;
}

function runDecisionTwo() {
  document.getElementById("error").innerHTML = "";
  const input = document.getElementById("choice").value;
  if (input === "1") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to knock on the door.</li>";
    currentDecision = decisionFour;
    clearInput();
    currentDecision();
  } else if (input === "2") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to not knock on the door.</li>";
    currentDecision = decisionFive;
    clearInput();
    currentDecision();
  } else {
    document.getElementById("error").innerHTML = "Please input a valid number.";
  }
}

function decisionFour() {
  document.getElementById("story").innerHTML =
    "A man opens the door and offers to help, do you accept?";
  const options = document.getElementById("options");
  options.innerHTML = "";
  options.innerHTML += "<li>Yes</li>";
  options.innerHTML += "<li>No</li>";
  clearInput();
  document.querySelector("button").onclick = runDecisionFour;
}

function runDecisionFour() {
  document.getElementById("error").innerHTML = "";
  const input = document.getElementById("choice").value;
  if (input === "1") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to accept help.</li>";
    currentDecision = decisionEight;
    clearInput();
    currentDecision();
  } else if (input === "2") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to not accept help.</li>";
    currentDecision = decisionNine;
    clearInput();
    currentDecision();
  } else {
    document.getElementById("error").innerHTML = "Please input a valid number.";
  }
}

function decisionEight() {
  if (tool == "Matches") {
    document.getElementById("story").innerHTML =
      "Ending 1/24: You trade the man your matches for a map out.";
  } else if (tool == "Flashlight") {
    document.getElementById("story").innerHTML =
      "Ending 2/24: You trade the man your flashlight for a map out.";
  } else {
    document.getElementById("story").innerHTML =
      "Ending 3/24: You trade the man your camping tent for a map out.";
  }
  document.getElementById("ending").innerHTML =
    "Refresh the page to play again.";
  const options = document.getElementById("options");
  options.innerHTML = "";
  clearInput();
}

function decisionNine() {
  if (tool == "Matches") {
    document.getElementById("story").innerHTML =
      "Ending 4/24: You leave the building and look for a way out by lighting matches for guidance.";
  } else if (tool == "Flashlight") {
    document.getElementById("story").innerHTML =
      "Ending 5/24: You leave the building and look for a way out with the light from your flashlight.";
  } else {
    document.getElementById("story").innerHTML =
      "Ending 6/24: You leave the building and rest for the night in your camping tent.";
  }
  document.getElementById("ending").innerHTML =
    "Refresh the page to play again.";
  const options = document.getElementById("options");
  options.innerHTML = "";
  clearInput();
}

function decisionFive() {
  document.getElementById("story").innerHTML =
    "You keep walking and stumble upon a wolf, do you choose to approach him?";
  const options = document.getElementById("options");
  options.innerHTML = "";
  options.innerHTML += "<li>Yes</li>";
  options.innerHTML += "<li>No</li>";
  clearInput();
  document.querySelector("button").onclick = runDecisionFive;
}

function runDecisionFive() {
  document.getElementById("error").innerHTML = "";
  const input = document.getElementById("choice").value;
  if (input === "1") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to approach the wolf.</li>";
    currentDecision = decisionTen;
    clearInput();
    currentDecision();
  } else if (input === "2") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to not approach the wolf.</li>";
    currentDecision = decisionEleven;
    clearInput();
    currentDecision();
  } else {
    document.getElementById("error").innerHTML = "Please input a valid number.";
  }
}

function decisionTen() {
  if (tool == "Matches") {
    document.getElementById("story").innerHTML =
      "Ending 7/24: You approach the wolf and it begins to chase you, scaring you as you drop your matches and run away. You are now completely lost in the forest.";
  } else if (tool == "Flashlight") {
    document.getElementById("story").innerHTML =
      "Ending 8/24: You approach the wolf but it is scared of your flashlight, leaving you on your own to try and find your way out of the forest on your own.";
  } else {
    document.getElementById("story").innerHTML =
      "Ending 9/24: You approach the wolf. It notices your camping tent, and he joins you in the shelter for warmth, helping guide you out of the forest the next morning.";
  }
  document.getElementById("ending").innerHTML =
    "Refresh the page to play again.";
  const options = document.getElementById("options");
  options.innerHTML = "";
  clearInput();
}

function decisionEleven() {
  if (tool == "Matches") {
    document.getElementById("story").innerHTML =
      "Ending 10/24: You leave the wolf and look for a way out by lighting matches for guidance.";
  } else if (tool == "Flashlight") {
    document.getElementById("story").innerHTML =
      "Ending 11/24: You leave the wolf and look for a way out with the light from your flashlight.";
  } else {
    document.getElementById("story").innerHTML =
      "Ending 12/24: You leave the wolf and rest for the night in your camping tent.";
  }
  document.getElementById("ending").innerHTML =
    "Refresh the page to play again.";
  const options = document.getElementById("options");
  options.innerHTML = "";
  clearInput();
}

function decisionThree() {
  document.getElementById("story").innerHTML =
    "You continue down the trail and find two other new paths... do you choose to go uphill or downhill?";
  const options = document.getElementById("options");
  options.innerHTML = "";
  options.innerHTML += "<li>Uphill</li>";
  options.innerHTML += "<li>Downhill</li>";
  clearInput();
  document.querySelector("button").onclick = runDecisionThree;
}

function runDecisionThree() {
  document.getElementById("error").innerHTML = "";
  const input = document.getElementById("choice").value;
  if (input === "1") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to go uphill.</li>";
    currentDecision = decisionSix;
    clearInput();
    currentDecision();
  } else if (input === "2") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to go downhill.</li>";
    currentDecision = decisionSeven;
    clearInput();
    currentDecision();
  } else {
    document.getElementById("error").innerHTML = "Please input a valid number.";
  }
}

function decisionSix() {
  document.getElementById("story").innerHTML =
    "You reach the top of the hill, and notice a drop. Do you want to rest here for the night or try to make your way down the drop in the hill?";
  const options = document.getElementById("options");
  options.innerHTML = "";
  options.innerHTML += "<li>Rest for the night</li>";
  options.innerHTML += "<li>Make way down the hill</li>";
  clearInput();
  document.querySelector("button").onclick = runDecisionSix;
}

function runDecisionSix() {
  document.getElementById("error").innerHTML = "";
  const input = document.getElementById("choice").value;
  if (input === "1") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to rest for the night.</li>";
    currentDecision = decisionTwelve;
    clearInput();
    currentDecision();
  } else if (input === "2") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to go downhill.</li>";
    currentDecision = decisionThirteen;
    clearInput();
    currentDecision();
  } else {
    document.getElementById("error").innerHTML = "Please input a valid number.";
  }
}

function decisionTwelve() {
  if (tool == "Matches") {
    document.getElementById("story").innerHTML =
      "Ending 13/24: You rest for the night and plan to search for a way out in the morning, starting a campfire with your matches to keep yourself warm.";
  } else if (tool == "Flashlight") {
    document.getElementById("story").innerHTML =
      "Ending 14/24: You decide that you will look for a way out in the morning, and use your flashlight to look for a safe place to sleep for the night.";
  } else {
    document.getElementById("story").innerHTML =
      "Ending 15/24: You decide to search for a way out in the morning, and set up your camping tent as shelter for the night.";
  }
  document.getElementById("ending").innerHTML =
    "Refresh the page to play again.";
  const options = document.getElementById("options");
  options.innerHTML = "";
  clearInput();
}

function decisionThirteen() {
  if (tool == "Matches") {
    document.getElementById("story").innerHTML =
      "Ending 16/24: You attempt to go down the hill, but unfortunately lose your matches in the process. You are now completely lost.";
  } else if (tool == "Flashlight") {
    document.getElementById("story").innerHTML =
      "Ending 17/24: You are able to successfully navigate down the hill with the help of your flashlight. Unfortunately, it is a dead end and you are now trapped here.";
  } else {
    document.getElementById("story").innerHTML =
      "Ending 18/24: You use your camping tent to help cushion your fall down the hill. Unfortunately, you are now completely lost.";
  }
  document.getElementById("ending").innerHTML =
    "Refresh the page to play again.";
  const options = document.getElementById("options");
  options.innerHTML = "";
  clearInput();
}

function decisionSeven() {
  document.getElementById("story").innerHTML =
    "Once you get downhill you notice two different paths. You can cross a river or you can go through a weedy area. They both look like they lead to an exit, so your item that you chose might be important.";
  const options = document.getElementById("options");
  options.innerHTML = "";
  options.innerHTML += "<li>Cross the River</li>";
  options.innerHTML += "<li>Cross through the weedy area</li>";
  clearInput();
  document.querySelector("button").onclick = runDecisionSeven;
}

function runDecisionSeven() {
  document.getElementById("error").innerHTML = "";
  const input = document.getElementById("choice").value;
  if (input === "1") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to cross through the river.</li>";
    currentDecision = decisionFourteen;
    clearInput();
    currentDecision();
  } else if (input === "2") {
    document.getElementById("summary").innerHTML +=
      "<li>You chose to cross through the weeded area.</li>";
    currentDecision = decisionFifteen;
    clearInput();
    currentDecision();
  } else {
    document.getElementById("error").innerHTML = "Please input a valid number.";
  }
}

function decisionFourteen() {
  if (tool == "Matches") {
    document.getElementById("story").innerHTML =
      "Ending 19/24: You try to cross the river but are quickly attacked by hidden crocodiles with your matches. You manage to get back to land, but are stuck in the forest.";
  } else if (tool == "Flashlight") {
    document.getElementById("story").innerHTML =
      "Ending 20/24: You shine your flashlight into the river and notice hidden crocodiles. You carefully avoid the crocodiles as you exit the forest safely.";
  } else {
    document.getElementById("story").innerHTML =
      "Ending 21/24: You throw your camping tent into the water to test for any hidden crocodiles. The crocodiles jump at your camping tent, and you avoid that area, exiting the forest safely.";
  }
  document.getElementById("ending").innerHTML =
    "Refresh the page to play again.";
  const options = document.getElementById("options");
  options.innerHTML = "";
  clearInput();
}

function decisionFifteen() {
  if (tool == "Matches") {
    document.getElementById("story").innerHTML =
      "Ending 22/24: You are able to use your matches to burn down any of the tall weeds, helping you clear a path for you to escape the forest.";
  } else if (tool == "Flashlight") {
    document.getElementById("story").innerHTML =
      "Ending 23/24: You try to use your flashlight to see through the weeds, but are unable to. You end up walking into a giant spiderweb and run back to where you came from, being unable to escape the forest.";
  } else {
    document.getElementById("story").innerHTML =
      "Ending 24/24: You try to use your camping tent as a shield against any animals hiding in the weeds. Unfortunately, the tent is too big, making it impossible for you to continue... causing you to be trapped in the forest.";
  }
  document.getElementById("ending").innerHTML =
    "Refresh the page to play again.";
  const options = document.getElementById("options");
  options.innerHTML = "";
  clearInput();
}
