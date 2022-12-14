let students = [
  {
    name: "Jessica",
    age: 44,
    grade: "VG"
  },
  {
    name: "Henrik",
    age: 34,
    grade: "G"
  },
  {
    name: "Brandon",
    age: 24,
    grade: "MVG"
  }
];

function printData(studentArray) {
  studentArray.forEach(student => {
    return (`student name: ${student.name}, student age: ${student.age}, student grade: ${student.grade}`);
  });
};
printData(students);

//* 2.
//? Note: When parsing date strings with the Date constructor (and Date.parse, they are equivalent), always make sure that the input conforms to the ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) — the parsing behavior with other formats is implementation-defined and may not work across all browsers. A library can help if many different formats are to be accommodated.

const myDate1 = new Date('1995-12-17T03:24:00');
const myDate2 = new Date('1995-12-20T03:24:00');
const myDate3 = new Date('1993-12-24T03:24:00');
const christmasEve = new Date('1995-12-24T03:24:00');

function isChristmasEve(date) {
  let month = date.getMonth();
  let day = date.getDate();
  let christmasMonth = christmasEve.getMonth();
  let christmasDay = christmasEve.getDate();
  if (month === christmasMonth && day === christmasDay) {
    return true;
  }
  else {
    return false;
  }
}

isChristmasEve(myDate1);
isChristmasEve(myDate2);
isChristmasEve(myDate3);

function f() {
  return 5;
}

function g() {
  return 9;
}

function whichReturnedLarger(f, g) {
  if (f > g) {
    return f;
  }
  else if (f < g) {
    return g;
  }
  else {
    return "neither";
  }
}

whichReturnedLarger(f(), g());

function isBiggerAfterDigitSwap(input) {
  let a = input.toString()[1];
  let b = input.toString()[0];

  if (+(a + b) > input) {
    return true;
  }
  else if (+(a + b) < input) {
    return false;
  }
}

isBiggerAfterDigitSwap(24);
// logpoint {$returnValue}


function countLetters(sentence, letter) {
  let count = 0;
  sentence.split("").forEach(character => {
    if (character === letter) {
      count++;
    }
  });
  return count;
}

countLetters("sentence", "e");

let myArray1 = [1, 3, 5, 7, 9];
let myArray2 = [2, 4, 7, 9];


function returnCommonValues(a, b) {
  let outputArray = [];
  a.forEach(item => {
    if (b.includes(item)) {
      outputArray.push(item);
    }
  });
  b.forEach(item => {
    if (a.includes(item)) {
      if (!outputArray.includes(item)) {
        outputArray.push(item);
      }
    }
  });
  return outputArray;
}

returnCommonValues(myArray1, myArray2);

let dice1 = document.querySelector("#dice_1");
let rollButton1 = document.querySelector("#dice-button1");
let dice2 = document.querySelector("#dice_2");
let rollButton2 = document.querySelector("#dice-button2");
let dice3 = document.querySelector("#dice_3");
let rollButton3 = document.querySelector("#dice-button3");
rollButton1.addEventListener("click", () => rollDice());

let valueP = document.querySelector("#value-calc-p");
valueP.innerHTML = +dice1.innerText + +dice2.innerText + +dice3.innerText;
let highestValueP = document.querySelector("#highest-value-calc-p");
highestValueP.innerText = +valueP.innerText;

function rollDice(input) {
  dice1.innerHTML = Math.ceil(Math.random() * 6);
  dice2.innerHTML = Math.ceil(Math.random() * 6);
  dice3.innerHTML = Math.ceil(Math.random() * 6);
  valueP.innerHTML = +dice1.innerText + +dice2.innerText + +dice3.innerText;
  if (+valueP.innerText > +highestValueP.innerText) {
    highestValueP.innerText = +valueP.innerText;
  }
};

const string1 = "UcUNFYGaFYFYGtNUH";
const string2 = "bEEFGBuFBRrHgUHlNFYaYr";
const string3 = "YFemHUFBbezFBYzFBYLleGBYEFGBMENTment";

function detectWord(string) {
  let output = "";
  string.split("").filter((character) => {
    if (character === character.toLowerCase()) {
      output += character;
    }
  });
  return output;
};

detectWord(string1);
detectWord(string2);
detectWord(string3);

let drinks = [
  {
    name: "lemonade", price: 50
  },
  {
    name: "lime", price: 10
  },
  {
    name: "cola", price: 30
  },
  {
    name: "megabeer", price: 100
  }
];

const sortedDrinksArray = [];
function sortDrinksByPrice(drinksArray) {
  drinksArray.sort((a, b) => (a.price > b.price) ? 1 : -1);
  return drinksArray;
}

sortDrinksByPrice(drinks)





