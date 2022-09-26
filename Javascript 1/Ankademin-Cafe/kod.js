/*
let cafeName = document.querySelector("#namn");
cafeName.innerText = "Ankademin Café";
*/

document.querySelector("#namn").innerText = "Ankademin Café";

/*
let slogan = document.querySelector("#slogan");
slogan.innerText = "Stockholms no.1 coding café!";
*/

document.querySelector("#slogan").innerText = "Stockholms no.1 coding café!";

/*
let html = document.querySelector("html");
html.style.background = "MistyRose";
*/

document.body.style.background = "MistyRose";

/*
let allPrices = document.querySelectorAll(".pris");
allPrices.forEach(price => {
  console.log(price);
  price.innerText = "19 kr";
});
*/
document.querySelectorAll(".pris").forEach(price => price.innerText = "19 kr");

let frukostMacka = document.querySelector(".produkt:nth-of-type(3) .pris");
//frukostMacka.innerText = "Frukostmacka";
//let frukostMackaSpan = document.createElement("span");
frukostMacka.innerText = "15 kr";
//frukostMackaSpan.className = "pris";
//frukostMacka.append(frukostMackaSpan);


let myProduct = "Banan";
let mySpan = document.createElement("span");
//mySpan.classList.add("pris");
mySpan.className = "pris";

let banan = {
  name: "Banan",
  price: 5
}

let lastLi = document.querySelector("ul li:last-child");

/*
lastLi.append(myProduct);
mySpan.innerText = ` - ${banan.price} kr`;
lastLi.append(mySpan);
*/

lastLi.innerHTML = `${banan.name} - <span class="pris">${banan.price} kr</span>`;

//let div = document.querySelector("div");
let div = document.querySelector("#website");
/*
let myH3 = document.createElement("h3");
myH3.innerText = "Öppettider: Alla dagar kl 18-21";
div.append(myH3);
*/
div.innerHTML += "<h3>Öppettider: Alla dagar kl 18-21</h3>";

let myP = document.createElement("p");
myP.innerText = "Till Ankademin Café är alla välkomna att sitta och koda och ta en mysig fika!";
div.append(myP);

let allP = document.querySelectorAll("p");
allP.forEach(element => {
  element.style.color = "DarkRed";
});