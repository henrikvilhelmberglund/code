/*

Skapa följande variabler med ett passande variabelnamn samt rätt datatyp. Skriv ut en presentation i konsolen (använd endast en console.log() ) som innehåller följande variabler:
Ditt namn
Din ålder
Ditt favoritresmål
Antal syskon du har
Om du har husdjur
En lista med dina fem favoriter inom valfritt ämne (t.ex 5 favoritmaträtter, 5 favoritlåtar etc.) (Array)
Skapa ett objekt för ett påhittat husdjur med egenskaper. T.ex Namn, ålder, favoritmat, om djuret är växtätare.. Hitta på fler egenskaper! Skriv ut en egenskap i konsolen (Objekt)

*/

let myName = "Henrik",
  myAge = 34,
  myFavoriteTravelDestination = "Japan",
  mySiblingCount = 4,
  myPets = null,  //eller hasPets true/false
  emmasPetSpecies = "hund",
  emmasPetName = "Thorsten",
  favoriteBandArray = [
    "Galneryus",
    "Unlucky Morpheus",
    "Amon Amarth",
    "Cradle of Filth", 
    "Powerwolf"
  ];
result = "Hej! Jag heter " + myName + " och är " + myAge + " år gammal. Jag har " + mySiblingCount + " syskon men " + myPets + " husdjur. Däremot har min lillasyster en " + 
emmasPetSpecies + " som heter " + emmasPetName + ". Jag har fem favoritband som är " + 
favoriteBandArray[0] + ", " +
favoriteBandArray[1] + ", " +
favoriteBandArray[2] + ", " +
favoriteBandArray[3] + " och " +
favoriteBandArray[4] + ".";

console.log(result);



let myKaijuu = {
  name: "Godzilla",
  color: "charcoal gray",
  age: 500, //ingen aning
  favoriteFood: "buildings",
  canShootBeams: true
}
console.log(myKaijuu.canShootBeams);

function uppgift() {
  let paragraph = document.querySelector("p");

  paragraph.innerText = result + "\n" + myKaijuu.canShootBeams;
}
uppgift();
