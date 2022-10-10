let students = [
  {
    name: "Sofia",
    education: "Frontend",
    city: "Stockholm",
    year: 1
  },
  {
    name: "Henrik",
    education: "Frontend",
    city: "Täby",
    year: 1
  },
  {
    name: "Olivia",
    education: "Frontend",
    city: "Stockholm",
    year: 1
  },
  {
    name: "Spiderman",
    education: "UX-design",
    city: "New York",
    year: 2
  },
  {
    name: "Batman",
    education: "Java",
    city: "Täby",
    year: 2
  },
  {
    name: "Superman",
    education: "Java",
    city: "New York",
    year: 1
  }
];

/*
Skapa en grupp radio-buttons för olika utbildningar (t.ex Frontend, Java, UX etc.). Skapa sedan en Show students-knapp som när du klickar på den, skriver ut samtliga personer som går i den utbildningen i DOM:en. OBS! Det ska finnas ett alternativ för att skriva ut alla utbildningar.
*/
let showStudents = document.querySelector("#showStudents");
let showAllStudents = document.querySelector("#showAllStudents");
let list = document.querySelector("#students");

let radioButtonsEdu = document.querySelectorAll("input[type=radio].education");
// för checked direkt
//let radioButtonsEdu = document.querySelectorAll("input[type=radio].education:checked").value;
let radioButtonsCity = document.querySelectorAll("input[type=radio].city");

let checkBox = document.querySelector("#myCheck");

// console.log(radioButtonsEdu);

// compare student education with radio button value
// if same add the number and return the amount of students
function getStudentLength(radioButton) {
  let number = 0;
  students.forEach((student) => {
    if (student.education === radioButton.value) {
      number++;
    }
  });
  return number;
}

function printStudents(radioButtonsEdu, radioButtonsCity) {
  if (checkBox.checked) {
    let radioButtonEdu;
    for (let i = 0; i < radioButtonsEdu.length; i++) {
      if (radioButtonsEdu[i].checked === true) {
        radioButtonEdu = radioButtonsEdu[i];
      }
    }
    let radioButtonCity;
    for (let i = 0; i < radioButtonsCity.length; i++) {
      if (radioButtonsCity[i].checked === true) {
        radioButtonCity = radioButtonsCity[i];
      }
    }

    // save all lis in variable
    // for each li, run removeChild on the parent element to remove them at the start

    let existingLi = document.querySelectorAll("li");
    existingLi.forEach((li) => {
      li.parentElement.removeChild(li);
    });
    // alt.
    // list.innerHTML = "";

    /* alt. if-sats nedan
    let filteredStudents = students.filter(student => {
      return {
      education === "all" || student.education === education && city === "all" || student.city = city)
      }
    };
    */

    // separation of concern:
    // filtrera, sortera, visa ut (rendering)

    if (
      document.querySelectorAll("li").length <=
      getStudentLength(radioButtonEdu.value)
    ) {
      students.forEach((student) => {
        if (
          radioButtonEdu.value === student.education &&
          radioButtonEdu.checked &&
          radioButtonCity.value === student.city &&
          radioButtonCity.checked
        ) {
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
  printStudents(radioButtonsEdu, radioButtonsCity);
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
Skapa ytterligare en grupp radio-button för olika städer. 
Filtrera eleverna baserat på både utbildning OCH stad, 
när du klickar på Show students-knappen.
*/

/*
Skapa en dropdown där du kan välja att filtrera på antingen 
år 1, år 2 eller alla årskurser.
*/
// Skulle vara uppe egentligen

let yearsBtn = document.querySelector("#yearsBtn");
let years = document.querySelector("#years");
yearsBtn.addEventListener("click", () => {
  list.innerHTML = "";
  let sortedStudents = sortYears();
  sortedStudents.forEach((student) => {
    let li = document.createElement("li");
    li.innerText = student.name;
    list.append(li);
  });
});

function sortYears() {
  if (checkBox.checked) {
    //console.log(years.value);
    let sortedStudents = students.filter((student) => yearComparison(student));
    //console.log(sortedStudents);
    return sortedStudents;
  } else {
    alert("Please confirm that you're a teacher!");
    return false;
  }
}

function yearComparison(student) {
  //console.log(student.year);
  //console.log(+years.value);
  if (student.year === +years.value) {
    return true;
  } else if (years.value === "All years") {
    return true;
  } else {
    return false;
  }
}
