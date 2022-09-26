let body = document.querySelector("body");
let hejP = document.createElement("p");
hejP.innerText = "Hej från JavaScript!";
body.append(hejP);

let myH1 = document.querySelector("h1");
console.log(myH1);
myH1.innerText = "Rubrik från JavaScript!";

let myButton = document.querySelector("#background-color-button");
let myButton2 = document.createElement("button");
myButton2.innerText = "New button";
myButton2.className = "pColorButton";
body.append(myButton2);


function changeColor() {
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
myButton2.addEventListener("click", changePColor);