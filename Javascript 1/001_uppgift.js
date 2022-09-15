/*
Javascript-övningar #2

Skapa upp en array för dina topp 5 favoritfrukter (valfritt variabelnamn).
Skriv ut den första frukten i listan i konsolen.
Skriv ut den fjärde frukten i listan i konsolen.
Bonus (Hoppa över om du vill): Lägg till en frukt i slutet av listan med hjälp av push-metoden. (JavaScript Array-methods)
*/

favoriteFruits = ["äpple", "päron", "banan", "apelsin", "mango"];
console.log(favoriteFruits[0]);
console.log(favoriteFruits[3]);
favoriteFruits.push("vindruvor");
console.log(favoriteFruits);

/*
Skapa upp en array med dina 6 favoritböcker eller filmer.
Skriv ut den sista boken/filmen i konsolen.
Skriv ut den näst sista boken/filmen i konsolen.
Ta bort den sista boken/filmen i listan med hjälp av en inbyggd metod (Bonus: Array Methods)
*/

let favoriteMovies = ["Godfather", "Matrix", "LOTR", "Hobbit", "Primer", "One Piece"];
console.log(favoriteMovies[5]);
console.log(favoriteMovies[4]);
favoriteMovies.pop();
console.log(favoriteMovies);

/*Skapa ett objekt för ett husdjur
Objektet ska innehålla värden för vilken typ av djur det är, ras, ålder, och en boolean för om den är växtätare eller inte.
Skriv ut objektets ålder.
Skapa en key/nyckel som du ger värdet av ett objekt för djurets bästa vän. Den ska innehålla värden för typ av djur, ras, namn, ålder och om den är växtätare. (Bonus: Objects in object)
Skriv ut namnet på djurets bästa vän (Bonus: Objects in objects).
Skapa en metod för husdjuret som skriver ut ljudet den gör i konsolen (t.ex “oink”,”woof” etc.)
*/

let myPet = {
  species: "dog",
  race: "German Shephard",
  age: 1,
  isHerbivore: false,
  bestFriend: {
    name: "Sköldis",
    species: "turtle",
    race: "Snapping Turtle",
    age: 30,
    isHerbivore: true
  },
  makeSound: function()
  {
    return this.species + " says woof! Woof!";
  }
};
console.log(myPet.age);
console.log(myPet.bestFriend.name);
console.log(myPet.makeSound());

/*
Skapa variabler för ditt namn, din ålder och din favoritsport. Skriv ut en mening i konsolen där du använder samtliga variabler, med hjälp av template literals. (Bonus: Template String Literals - Vi går igenom vad detta är tillsammans)
*/

let myName = "Henrik";
let myAge = 34;
let myFavoriteSport = "eSport(Dota2)";
let resultString = `Hej, jag heter ${myName} och är ${myAge} år gammal. Min favoritsport(?) är ${myFavoriteSport}!`;
console.log(resultString);

/*
function uppgift() {
  let paragraph = document.querySelector("p");

  paragraph.innerText = resultString;}
uppgift();
/*

/*
Javascript array-metoder: https://www.w3schools.com/js/js_array_methods.asp
Template String Literals: https://www.w3schools.com/js/js_string_templates.asp
*/


