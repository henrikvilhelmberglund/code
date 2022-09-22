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

