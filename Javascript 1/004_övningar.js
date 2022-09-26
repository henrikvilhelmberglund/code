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

// ändra värdet på andra <li> taggen i vår <ol>
// querySelector träffar första elementet
let secondLi = document.querySelector("ol li:nth-child(2)");
console.log(secondLi);
secondLi.innerText = "changed LI text";

// querySelectorAll träffar alla element

let allLi = document.querySelectorAll("ol li");
console.log(allLi);

let colorValue = 25;
allLi.forEach((element, i) => {
  element.innerText = `changed LI text ${i}`;
  element.style.color = `rgb(${i * colorValue} , ${i} , ${i * colorValue})`;  
});

const myDataArray = [
  {
    firstName: "Henrik",
    lastName: "Berglund",
    age: 34,
  }, 
  {
    firstName: "Bat",
    lastName: "Man",
    age: 30,
  }
];

//Loopar ut alla namn
let nameList = document.querySelector("ul#name-from-JS");

/*
for (const key in myDataArray) {
  if (Object.hasOwnProperty.call(myDataArray, key)) {
    const element = myDataArray[key];
    console.log(element);
    // skapa en li-tagg för varje namn
  }
}
*/
myDataArray.forEach(element => {
  let li = document.createElement("li");
  li.innerText = element.firstName + " " + element.lastName;
  nameList.append(li);
});
