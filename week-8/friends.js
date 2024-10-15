// Reference variables
const friendNameInputRef = document.getElementById("friendName");
const friendsListRef = document.getElementById("friendsList");

// Variable to track my friends
const myFriends = [];

// Function for adding friend
function addFriend() {
  // get the name the user typed in
  const nameValue = friendNameInputRef.value;

  // add friend to myFriends list
  myFriends.push({ name: nameValue, color: "black" });

  // add name to friends list
  showFriends();

  //c;ear the name the user typed
  friendNameInputRef.value = "";
}

function removeFriend(friendName) {
  // Use variable to track index of friend to remove
  let friendIndex;

  //loop through current friends to find friendName
  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i].name === friendName) {
      friendIndex = i;
    }
  }
  // Remove the person from the list
  myFriends.splice(friendIndex, 1);
  showFriends();
}

// Function to loop through myFriends and show them on the page
function showFriends() {
  // clear pages old friend list
  friendsListRef.innerHTML = "";
  //loop through friends
  myFriends.forEach(function (friend, friendIndex) {
    friendsListRef.innerHTML += `<li><span style="color: ${friend.color}">${friend.name}</span> <button onclick="removeFriend('${friend.name}')">X</button><button onclick="moveFriend('${friend.name}', true)">&#8593;</button><button onclick="moveFriend('${friend.name}', false)">&#8595;</button> <input type="color" name="friendTextColor"${friendIndex}" id="friendTextColor"${friendIndex}" onchange="changeFriendTextColor('${friend.name}', event.currentTarget)" /></li>`;
  });
}

// function to clear list of friends
function clearList() {
  myFriends.splice(0, myFriends.length);

  showFriends();
}

// function to move friends ranking
function moveFriend(friendName, isMovingUp) {
  let friendIndex;
  let friendNewIndex;

  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i].name === friendName) {
      friendIndex = i;
      // ['A','B','C'] move 'B' up 1 space
      // index of 'B' is originally 1
      // This is what the result should be
      // ['B', 'A', 'C',] so the new index would be 0
      if (isMovingUp) {
        friendNewIndex = friendIndex - 1;
      } else {
        friendNewIndex = friendIndex + 1;
      }
      // ['A','B','C'] move 'B' down 1 space
      // index is originally 1
      // ['A', 'C', 'B',] so the new index would be 2
    }
  }
  // Remove friend from space
  myFriends.splice(friendIndex, 1);
  //
  myFriends.splice(friendNewIndex, 0, { name: friendName, color: "black" });
  showFriends();
}

//something is wrong with this function
function changeFriendTextColor(friendName, inputRef) {
  const friendName = myFriends[friendIndex].name;
  myFriends.splice(friendIndex, 1, { name: friendName, color: inputRef.value });
  showFriends();
}
