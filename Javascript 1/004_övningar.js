//document.getElementById("test").innerHTML = "hello world";
console.log("hej");

// skapa ett element

let p = document.createElement("p")

// ge elementet ett värde

p.innerText = "Hej från Javascript";
//p.textContent = "Hej från Javascript 2";
//p.innerHTML = "Hej från Javascript 3";

// pekar på en plats i dokumentet
let div = document.querySelector("#myFavoriteDiv"); // ID bara för ett objekt!
//let div = document.querySelector("div div");   div i någon div
//let div = document.querySelector("div > div"); div som är direkt child av div

// placera ut vårt element i den valda platsen
div.append(p);

let myParagraph = document.querySelector(".my-paragraph");
console.log(myParagraph);

myParagraph.innerText = "Så här kan vi ändra text";