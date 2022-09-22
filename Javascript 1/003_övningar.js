//loopar i arrays

let fruitsArray = ["persika", "päron", "apelsin"]

for (let i = 0; i < fruitsArray.length; i++) {
  const element = fruitsArray[i];
  //console.log(element);
}

//vanlig funktion

function greetMe(name) {
  return "Hej " + name
}

const greetMe2 = function (name) {
  return "Hej " + name
}

const greetMe3 = (name) => {
  return "Hej" + name
}

const greetMe4 = (name) => "Hej" + name

const greetMe5 = (name) => `Hej ${name}`


/*
fruitsArray.forEach(function(x){
  console.log(x);
});
*/

//arrow function
//foreach för att köra funktion på varje element i array
//returnerar inget (muterar ej)
fruitsArray.forEach(fruit => {
  console.log(fruit)
});

//map för att utföra en operation göra en ny array med returnvärdet (lika många index)
//returnerar ny array (muterar ej)
let milkshakes = fruitsArray.map( (fruit) => { 
  return fruit + "-milkshake"
})

console.log(milkshakes)

let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.map((number)=> {
  return number * 2
});

console.log(newNumbers);

//filter
//returner ny array (muterar ej)

let fruitsWithoutPears = fruitsArray.filter((fruit) => {
  return fruit !== "päron"
})
console.log(fruitsWithoutPears);

let ages = [18, 20, 40, 14, 9, 25, 39];

let cafeOpera = ages.filter(age => {
  return age >= 21
})

console.log(cafeOpera);

/*
let test = 1;
function testIt() {
  let test = 0;
  console.log(test)  
}

testIt();
*/


/*
JavaScript-övningar #3 - Loopar & Array-metoder

*/

//1 - filter
//Skapa en funktion som loopar igenom en array, och returnera alla jämna tal (som en sträng eller som en ny array.)

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let evenNumbers = numArray.filter(number => number % 2 === 0);
console.log(evenNumbers);

//2 - reduce
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// Skapa en funktion som loopar igenom en array, och multiplicerar alla tal med varandra. T.ex [2,3,4] ska funktionen returnera 24. (2*3*4 = 24)

let multipliedNumbers = numArray.reduce((total, current) => total *= current);
console.log(multipliedNumbers);

//3 - 
//Skapa en funktion som loopar igenom en array och kollar om den innehåller “jordgubbar”. Om den innehåller jordgubbar bör den returnera true, annars returneras false.

let stringArray = [];
stringArray = ["bananer", "jordgubbar", "äpplen"];
//stringArray = ["bananer", "äpplen"];

/* med .filter
let containsJordgubbar = stringArray.filter(fruit => {
  return fruit === "jordgubbar";
})
let result = containsJordgubbar.length !== 0 ? true : false
console.log(result);
*/

let containsJordgubbar = stringArray.map((fruit) => {
  let outputFruit = fruit === "jordgubbar" ? true : false
  return outputFruit
});
containsJordgubbar = containsJordgubbar.some(x => x === true);
console.log(containsJordgubbar);

//4 - 
//Skapa en funktion som ska kunna ta in en array av siffror. Om arrayen har fler jämna tal än ojämna, returnera “Even array”. Om den har fler ojämna //än jämna tal, returnera “Odd array”. Om den har lika många jämna som ojämna tal, returnera “Balanced array”.

let evenOrOddArray = (numberArray => {
  let evenNumberCount = numberArray.filter(number => number % 2 === 0);
  let oddNumberCount = numberArray.filter(number => number % 2 !== 0);
  return evenNumberCount.length > oddNumberCount.length ? "Even array" :
         evenNumberCount.length < oddNumberCount.length ? "Odd array" : "Balanced array"
});

console.log(evenOrOddArray(numArray));

//5 - 
//Svår (Överkurs just nu - Läs på om array-metoden filter)
//Skapa en funktion som tar in en lista över förnamn, och filtrerar ut (dvs tar bort) alla namn som är längre än 6 bokstäver långa.

let nameArray = ["Brandon", "Henrik", "Tommy"]
let shortNames = nameArray.filter(inputName => inputName.length < 6)

console.log(shortNames);
