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

// 1.
/*
Done in HTML but would be done like this in JS

let lagAInputField = document.createElement("input");
lagAInputField.id = "lag-a-input-field";
lagADiv.append(lagAInputField);
*/




// 2.

function leaveTeam(event, li) {
  li.parentNode.remove(li);
}

function changeTeam(event, li) {
  console.log("hi");
}

function addPlayer(event) {
  let li = document.createElement("li");
  li.innerText = lagAInputField.value;
  let lagAMembers = document.querySelectorAll("#lag-a-ul li");
  let lagBMembers = document.querySelectorAll("#lag-b-ul li");

  // 5.
  let leaveTeamButton = document.createElement("button");
  leaveTeamButton.innerText = "Leave Team";
  leaveTeamButton.addEventListener("click", (event) => leaveTeam(event, li));

  // 7.
  let changeTeamButton = document.createElement("button");
  changeTeamButton.innerText = "Change Teamname";
  changeTeamButton.addEventListener("click", (event) => changeTeam(event, li));
  // 3.
  if (lagAMembers.length < 5) {
    lagAUl.append(li);
    li.append(leaveTeamButton);
    li.append(changeTeamButton);
  }
  // 4.
  else if (lagAMembers.length >= 5 && lagBMembers.length < 5) {
    lagBUl.append(li);
    li.append(leaveTeamButton);
    li.append(changeTeamButton);
  }
}

lagAAddPlayerButton.addEventListener("click", (event) => addPlayer(event));



// 5.

// 6.

// 7.

