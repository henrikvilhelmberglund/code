
/* Uppgift 1 */

let body = document.querySelector("body");
let hejP = document.createElement("p");
hejP.innerText = "Hej från JavaScript!";
body.append(hejP);
let interval;

let myH1 = document.querySelector("h1");
console.log(myH1);
myH1.innerText = "Rubrik från JavaScript!";

let myButton = document.querySelector("#background-color-button");
let myButton2 = document.createElement("button");
myButton2.innerText = "Change p-tag color";
myButton2.className = "pColorButton";
body.append(myButton2);

let myButtonAnimated = document.createElement("button");
myButtonAnimated.innerText = "Change background color (animated)";
body.append(myButtonAnimated);

let myButtonStop = document.createElement("button");
myButtonStop.innerText = "Stop animation";
body.append(myButtonStop);

function changeColor() {
  body.style.transition = "0.5s";
  body.style.background = rgb(Math.random()*255, Math.random()*255, Math.random()*255);
  return true
}

function changePColor() {
  let allP = document.querySelectorAll("p");
  allP.forEach(element => {
    element.style.color = rgb(Math.random()*255, Math.random()*255, Math.random()*255);  
  });
  return true
}

function rgb(r, g, b){
  return `rgb(${r}, ${g}, ${b})`;
}

myButton.addEventListener("click", changeColor);
myButtonAnimated.addEventListener("click", () => interval = setInterval(changeColor, 1000));
myButtonStop.addEventListener("click", () => clearInterval(interval));
myButton2.addEventListener("click", changePColor);

/* Uppgift 2+2.5 */

const numArray = [2,5,10,15,20,25,30,50,60,92];
let myUl = document.createElement("ul");
body.append(myUl);
numArray.forEach((number, i) => {
  let myIl = document.createElement("il");
  myIl.innerText = `${number}\n`;
  myIl.style.color = 
  (i+1) % 5 === 0 ? "purple" :
  number % 2 === 0 ? "red" : 
  "blue";
  myUl.append(myIl);
});

/* Uppgift 3 */

myObjectArray = [
  {
    name: "Batman",
    age: 30,
    amountOfPets: 0,
    email: "bat@man.com",
    favoriteAuthor: "Bill Finger and Bob Kane",
    lovesWinter: false
  },
  {
    name: "Superman",
    age: 40,
    amountOfPets: 1,
    email: "super@man.com",
    favoriteAuthor: "Jerry Siegel and Joe Shuster",
    lovesWinter: false
  },
  {
    name: "Spiderman",
    age: 20,
    amountOfPets: 3,
    email: "spider@man.com",
    favoriteAuthor: "Stan Lee and Steve Ditko",
    lovesWinter: true
}];

let myDiv = document.createElement("div");
myDiv.id = "profile-cards";
body.append(myDiv);

function reduceBlur(ul) {
  ul.style.transition = "0.25s";
  ul.style.filter = "blur(0px)";
}

function increaseBlur(ul) {
  ul.style.transition = "0.25s";
  ul.style.filter = "blur(10px)";
}

function createProfileCards(array) {
  let result = document.querySelector("div ul");
  if (!result) {
    array.forEach(person => {
      let myPersonUl = document.createElement("ul");
      myPersonUl.style = `
      border:6px solid black;
      border-radius: 25px;
      background-color: lavender;
      width: 300px;
      padding: 10px;
      filter: drop-shadow(1px 5px 7px);
      filter: blur(10px);
      `;
      myPersonUl.addEventListener("mouseenter", () => reduceBlur(myPersonUl));
      myPersonUl.addEventListener("mouseleave", () => increaseBlur(myPersonUl));
      myDiv.append(myPersonUl);
      myPersonUl.innerHTML += 
      `
      <li class="name">${person.name}</li>
      <li class="age">${person.age} years old</li>
      <li class="pets">${
      person.amountOfPets === 0 ? `no pets` :
      person.amountOfPets === 1 ? `${person.amountOfPets} pet` :
      `${person.amountOfPets} pets`
      }</li>
      <li class="email">${person.email}</li>
      <li class="favorite-author">Favorite authors: <p>${person.favoriteAuthor}</p></li>
      <li class="loves-winter">${person.lovesWinter ? `${person.name} loves Winter! <p class="heart"></p>` : `${person.name} does not enjoy <p class="sad">Winter.</p>`}</li>
      `
    });
  }
}

let createProfileCardsButton = document.createElement("button");
myDiv.append(createProfileCardsButton);
createProfileCardsButton.innerText = "Create profile cards";
createProfileCardsButton.addEventListener("click", () => createProfileCards(myObjectArray));
// for debugging
// createProfileCards(myObjectArray);