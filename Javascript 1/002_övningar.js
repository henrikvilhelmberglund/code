/*
JavaScript-övningar #3 - Loopar & Array-metoder

Skapa en funktion som loopar igenom en array, och returnera alla jämna tal (som en sträng eller som en ny array.)
*/

let myArray = [1,3,5,15,24,63,73,72,234];

function evenNumbers(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        resultArray.push(arr[i]);
      }
    }
    return resultArray
}
console.log(evenNumbers(myArray));

/*
Skapa en funktion som loopar igenom en array, och multiplicerar alla tal med varandra. T.ex [2,3,4] ska funktionen returnera 24. (2*3*4 = 24)
*/

let myNumArray = [2, 3, 4];

function multiplyNumbers(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result
}
console.log(multiplyNumbers(myNumArray));

/*
Skapa en funktion som loopar igenom en array och kollar om den innehåller “jordgubbar”. Om den innehåller jordgubbar bör den returnera true, annars returneras false.
*/

let myFruitArray = [];
myFruitArray = ["bananer", "päron", "jordgubbar"];
//myFruitArray = ["bananer", "päron", "äpplen"];
function jordgubbCheck(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "jordgubbar") {
      return true
    }
  }
  return false
}

console.log(jordgubbCheck(myFruitArray));

/*
Skapa en funktion som ska kunna ta in en array av siffror. Om arrayen har fler jämna tal än ojämna, returnera “Even array”. Om den har fler ojämna än jämna tal, returnera “Odd array”. Om den har lika många jämna som ojämna tal, returnera “Balanced array”.
*/

let numberArray = [];
numberArray = [1, 2, 3];
numberArray = [1, 2, 3, 4];
//numberArray = [1, 2, 3, 4, 6];

function numberChecker(arr) {
  let evenNumbers = [];
  let oddNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
    else {
      oddNumbers.push(arr[i]);
    }
  }
  return evenNumbers.length > oddNumbers.length ? "Even array" : 
  evenNumbers.length === oddNumbers.length ? "Balanced array" : 
  "Odd array"
}

console.log(numberChecker(numberArray));

/*
Svår (Överkurs just nu - Läs på om array-metoden filter)
Skapa en funktion som tar in en lista över förnamn, och filtrerar ut (dvs tar bort) alla namn som är längre än 6 bokstäver långa.
*/

let myNames = ["Brandon", "Tommy", "Henrik"];

function filterNames(arr) {  
  function isLessThanSixCharacters(name) {
    return name.length < 6
  }
  return arr.filter(isLessThanSixCharacters)
}

console.log(filterNames(myNames));