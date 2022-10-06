// HTML structure below
/*

        <!-- Lag A-div -->
        <div id="lag-a-div">
            <h2 id="lag-a-h2"></h2>
            <input type="text" id="lag-a-input-field" />
            <button id="lag-a-add-player-button">Add player</button>
            <ul id="lag-a-ul"></ul>
        </div>
        <!-- Lag B-div -->
        <div id="lag-b-div">
            <h2 id="lag-b-h2"></h2>
            <input type="text" id="lag-b-input-field" />
            <button id="lag-b-add-player-button">Add player</button>
            <ul id="lag-b-ul"></ul>
        </div>

*/

let lagADiv = document.querySelector("#lag-a-div");
let lagBDiv = document.querySelector("#lag-b-div");
let lagAh2 = document.querySelector("#lag-a-h2");
let lagBh2 = document.querySelector("#lag-b-h2");
let lagAInputField = document.querySelector("#lag-a-input-field");
let lagAAddPlayerButton = document.querySelector("#lag-a-add-player-button");
let lagAUl = document.querySelector("#lag-a-ul");
let lagBUl = document.querySelector("#lag-b-ul");
let lagANameInputField = document.querySelector("#lag-a-name-input-field");
let lagANameButton = document.querySelector("#lag-a-name-button");
let lagBNameInputField = document.querySelector("#lag-b-name-input-field");
let lagBNameButton = document.querySelector("#lag-b-name-button");


// 1.
/*
Done in HTML but would be done like this in JS

let lagAInputField = document.createElement("input");
lagAInputField.id = "lag-a-input-field";
lagADiv.append(lagAInputField);
*/




// 2.

function playerCount() {
  let lagAMembers = document.querySelectorAll("#lag-a-ul li");
  let lagBMembers = document.querySelectorAll("#lag-b-ul li");
  return ({ a: lagAMembers.length, b: lagBMembers.length });
}

function leaveTeam(event, li) {
  li.remove(li);
}

function changeTeam(event, li) {
  let moveFrom = li.parentElement.id;
  if (moveFrom === "lag-a-ul") {
    if (playerCount().b < 5) {
      lagBUl.append(li);
    }
  }
  else if (moveFrom === "lag-b-ul") {
    if (playerCount().a < 5) {
      lagAUl.append(li);
    }
  }
}

function changeTeamName(event) {
  let whichTeam = event.target.parentElement.id;
  console.log("hello!!!");
  if (whichTeam === "lag-a-div") {
    lagAh2.innerText = lagANameInputField.value;
  }
  else if (whichTeam === "lag-b-div") {
    lagBh2.innerText = lagBNameInputField.value;
    console.log("hello");
  }
}

function addPlayer(event) {
  let li = document.createElement("li");
  li.innerText = lagAInputField.value;

  // 5.
  let leaveTeamButton = document.createElement("button");
  leaveTeamButton.innerText = "Leave Team";
  leaveTeamButton.addEventListener("click", (event) => leaveTeam(event, li));

  // 7.
  let changeTeamButton = document.createElement("button");
  changeTeamButton.innerText = "Change Team";
  changeTeamButton.addEventListener("click", (event) => changeTeam(event, li));
  // 3.
  if (playerCount().a < 5) {
    lagAUl.append(li);
    li.append(leaveTeamButton);
    li.append(changeTeamButton);
  }
  // 4.
  else if (playerCount().a >= 5 && playerCount().b < 5) {
    lagBUl.append(li);
    li.append(leaveTeamButton);
    li.append(changeTeamButton);
  }
}

lagAAddPlayerButton.addEventListener("click", (event) => addPlayer(event));
lagANameButton.addEventListener("click", (event) => changeTeamName(event));
lagBNameButton.addEventListener("click", (event) => changeTeamName(event));

