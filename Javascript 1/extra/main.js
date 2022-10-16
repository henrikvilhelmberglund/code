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
    console.log(`student name: ${student.name}, student age: ${student.age}, student grade: ${student.grade}`);
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

