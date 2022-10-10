let students = [
  {
    name: "Sofia",
    education: "Frontend",
    city: "Stockholm"
  },
  {
    name: "Henrik",
    education: "Frontend",
    city: "Täby"
  },
  {
    name: "Olivia",
    education: "Frontend",
    city: "Stockholm"
  },
  {
    name: "Spiderman",
    education: "UX-design",
    city: "New York"
  },
  {
    name: "Batman",
    education: "Java",
    city: "Gotham"
  },
  {
    name: "Superman",
    education: "Java",
    city: "New York"
  }
];

/*
Skapa en grupp radio-buttons för olika utbildningar (t.ex Frontend, Java, UX etc.). Skapa sedan en Show students-knapp som när du klickar på den, skriver ut samtliga personer som går i den utbildningen i DOM:en. OBS! Det ska finnas ett alternativ för att skriva ut alla utbildningar.
*/
let showStudents = document.querySelector("#showStudents");
let showAllStudents = document.querySelector("#showAllStudents");
let list = document.querySelector("#students");

let radioButtons = document.querySelectorAll("input[type=radio]");
let checkBox = document.querySelector("#myCheck");
// console.log(radioButtons);

// compare student education with radio button value
// if same add the number and return the amount of students
function getStudentLength(education, radioButton) {
  let number = 0;
  students.forEach((student) => {
    if (student.education === radioButton.value) {
      number++;
    }
  });
  return number;
}

function printStudents(radioButtons) {
  if (checkBox.checked) {
    let radioButton;
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked === true) {
        radioButton = radioButtons[i];
      }
    }

    // save all lis in variable
    // for each li, run removeChild on the parent element to remove them at the start

    let existingLi = document.querySelectorAll("li");
    existingLi.forEach((li) => {
      li.parentElement.removeChild(li);
    });

    if (
      document.querySelectorAll("li").length <=
      getStudentLength(radioButton.value, radioButton.value)
    ) {
      students.forEach((student) => {
        if (radioButton.value === student.education && radioButton.checked) {
          let li = document.createElement("li");
          li.innerText = student.name;
          list.append(li);
        }
      });
    }
  } else {
    alert("Please confirm you're a teacher!");
  }
}

showStudents.addEventListener("click", () => {
  printStudents(radioButtons);
});

showAllStudents.addEventListener("click", () => {
  if (checkBox.checked) {
    let existingLi = document.querySelectorAll("li");
    existingLi.forEach((li) => {
      li.parentElement.removeChild(li);
    });

    students.forEach((student) => {
      let li = document.createElement("li");
      li.innerText = student.name;
      list.append(li);
    });
  } else {
    alert("Please confirm you’re a teacher!");
  }
});

/*
Skapa ytterligare en grupp radio-button för olika städer. Filtrera eleverna baserat på både utbildning OCH stad, när du klickar på Show students-knappen.
*/

/*
Skapa en dropdown där du kan välja att filtrera på antingen år 1, år 2 eller alla årskurser.
*/
