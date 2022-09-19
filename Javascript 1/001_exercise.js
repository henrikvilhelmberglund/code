/*
JavaScript-övningsuppgift - Functions

Nivå 1 (Normal)
*/
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function incrementNumber(inNum) {
  inNum++;
  return inNum
};
console.log(incrementNumber(36));

//Write a function that converts hours into seconds.

function hoursToSeconds(inHours) {
  let outSeconds = inHours * 60 * 60;
  return outSeconds
}
console.log(hoursToSeconds(2));

//Create a function that takes the users age in years and returns the age in days.

function yearsToDays(inYears) {
  let outDays = inYears * 365;
  return outDays
}
console.log(yearsToDays(28));

// && editorHasSelection (in keybindings.json)


//Write a function that takes the base and height of a triangle and return its area. The area of a triangle is: (base * height) / 2

function returnTriangleArea(inBase, inHeight) {
  return (inBase * inHeight) / 2
}
console.log(returnTriangleArea(10, 10));

//Write a function that converts days into minutes.

function daysToMinutes(inDays) {
  let outMinutes = inDays * 24 * 60
  return outMinutes
}
console.log(daysToMinutes(1));

//Create a function that takes an array containing only numbers and returns the first element.

function returnFirstElement(inArray) {
  let outElement = inArray[0];
  return outElement
}
console.log(returnFirstElement([1, 3, 5]));

//för objekt

function returnFirstKeyAndValueInObject(inObject) {
  let key = Object.keys(inObject)[0];
  let value = Object.values(inObject)[0];
  return `key = ${key} and value = ${value}`
}

let myObject = {
  name : "Batman",
  favoriteFood: "tacos",
};

console.log(returnFirstKeyAndValueInObject(myObject));

function isEven(num) {
  /*
  if(num % 2 === 0) {
    return true
  }
  else {
    return false
  }
  */
  return num % 2 === 0
}
console.log(isEven(12));

//Object.keys(ahash)[0];

//You are counting points for a basketball game. Write a function that takes in 2 parameters - The amount of 2-pointers the team has scored, and the amount of 3-pointers. Return the total amount of points they’ve scored. (For example, finalscore(5,3) should return 19.)

function totalPoints(in2Point, in3Point) {
  let outPoints = in2Point * 2 + in3Point * 3;
  return outPoints
}
console.log(totalPoints(5, 3));

//You’re helping a farmer count the total amount of legs among all his animals. He owns chickens (2 legs), cows(4 legs) and pigs (4 legs). Write a function that, given the amount of each animal, returns the total number of legs.

function countLegs(inChickens, inCows, inPigs) {
  let outLegs = inChickens * 2 + inCows * 4 + inPigs * 4;
  return outLegs
}
console.log(countLegs(3, 5, 8));

/*
Nivå 2 (Medel)

Läs på om if/else-satser : https://www.w3schools.com/js/js_if_else.asp
*/

//Create a function that takes in a number, and returns true if the number is divisible by 2 (no decimals allowed). Otherwise, return false.

function isDivisibleBy2(inNum) {
  if (inNum % 2 === 0) {
    return true
  }
  else {
    return false
  }
}
console.log(isDivisibleBy2(4));

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function isLessOrEqualToZero(inNum) {
  /*
  if (inNum <= 0) {
    return true
  }
  else {
    return false
  }
  */
 return inNum <= 0;
}
console.log(isLessOrEqualToZero(1));

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function isSumLessThan100(inX, inY) {
  /*
  if (inX + inY < 100) {
    return true
  }
  else {
    return false
  }
  */

  //return inX + inY < 100;

  return inX + inY < 100 ? true : inX + inY === 100 ? "exakt 100" : false
}
console.log(isSumLessThan100(50, 50));

//Lycka till! /B

let number = 20;
// WTF
// What ? True : False
console.log(number < 33 ? "Lågt tal" : "Högt tal!");




