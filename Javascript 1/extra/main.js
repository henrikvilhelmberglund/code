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