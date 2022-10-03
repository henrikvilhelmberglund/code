let playerBtn = document.querySelector("#playerBtn");
let addPlayer = document.querySelector("#addPlayer");
let lagA = document.querySelector("#lagA");
let lagB = document.querySelector("#lagB");


playerBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = addPlayer.value;
  let lagALi = document.querySelectorAll("#lagA li");
  let lagBLi = document.querySelectorAll("#lagB li");
  let changeTeamBtn = document.createElement("button");
  changeTeamBtn.innerText = "Change team";
  
  let leaveTeamBtn = document.createElement("button");
  leaveTeamBtn.innerText = "Leave team";
  leaveTeamBtn.addEventListener("click", () => {
    li.remove();
  });
  
  if (lagALi.length < 5) {
    li.append(leaveTeamBtn);
    li.append(changeTeamBtn);
    lagA.append(li);
  }
  else if (lagBLi.length < 5 ) {
    li.append(leaveTeamBtn);
    li.append(changeTeamBtn);
    lagB.append(li);
  }
  else {
    alert("error!!");
  }
  

  changeTeamBtn.addEventListener("click", (event) => {
    lagALi = document.querySelectorAll("#lagA li");
    lagBLi = document.querySelectorAll("#lagB li");
    let checkTeam = event.target.parentElement.parentElement.id
    if (checkTeam==="lagA" && lagBLi.length < 5){
        console.log(checkTeam);
      let changeTeamA = li;
      //li.remove();
      lagB.append(changeTeamA);
    }
    else if (checkTeam==="lagB" && lagALi.length < 5) {
      console.log(checkTeam);
      let changeTeamB = li;
      //li.remove();
      lagA.append(changeTeamB);
    }
    
  });
});

let changeABtn = document.querySelector("#changeTeamABtn");
changeABtn.addEventListener("click", () => {
  let h2A = document.querySelector("#changeTeamAText");
  let h2AInput = document.querySelector("#lagANamn");
  h2A.innerText = h2AInput.value;
});

let changeBBtn = document.querySelector("#changeTeamBBtn");
changeBBtn.addEventListener("click", () => {
  let h2B = document.querySelector("#changeTeamBText");
  let h2BInput = document.querySelector("#lagBNamn");
  h2B.innerText = h2BInput.value;
});
