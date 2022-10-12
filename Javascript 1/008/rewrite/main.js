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

let showStudentsBtn = document.querySelector("#show-students-btn");
showStudentsBtn.addEventListener("click", () => showStudents());
let div = document.querySelector("#add-ul-here");
let checkedEducationRadio;
let checkedCityRadio;
let ul = document.createElement("ul");
div.append(ul);
let teacherCheckbox = document.querySelector("#teacher");

/**
 * Run on showStudentsBtn click. Creates li elements 
 * for each student that passes all the filter functions.
 */
function showStudents() {
  if (teacherNotChecked()) { return; };
  ul.innerHTML = "";
  checkedEducationRadio = document.querySelector(".education:checked");
  checkedCityRadio = document.querySelector(".city:checked");
  let filteredStudents = students.filter(educationFilter);
  filteredStudents = filteredStudents.filter(cityFilter);
  filteredStudents.forEach((student) => {
    let li = document.createElement("li");
    li.innerText = student.name;
    ul.append(li);
  });
  return true;
}

/**
 * Checks if the teacher checkbox is checked. 
 * If not, alert and early return in calling function.
 */
function teacherNotChecked() {
  if (!teacherCheckbox.checked) {
    alert("Please confirm you're a teacher!");
    return true;
  }
  else {
    return false;
  }
}

/**
 * Outputs true or false to filter function, sorting by education.
 */
function educationFilter(student) {
  return (
    student.education === checkedEducationRadio.value ? true :
      checkedEducationRadio.value === "all" ? true : false
  );
}

/**
 * Outputs true or false to filter function, sorting by city.
 */
function cityFilter(student) {
  return (
    student.city === checkedCityRadio.value ? true :
      checkedCityRadio.value === "all" ? true : false
  );
}