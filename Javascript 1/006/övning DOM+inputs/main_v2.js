// Uppgift 1
let body = document.querySelector("body");
// let body = document.querySelector("h2 + *");
// let body = document.querySelector("input[type="test]");

let div = create("div", body);

function query(tag) {
  return document.querySelector(tag);
}

function create(tag, appendWhere, ...argv) {
  let createdTag = document.createElement(tag);

  console.log(argv.length);

  if (argv.length === 0) {
    appendWhere.append(createdTag);
    return createdTag;
  }
  else if (argv.length === 1) {
    createdTag.innerText = argv[0];
    appendWhere.append(createdTag);
    return createdTag;
  }
  else if (argv.length === 2) {
    createdTag.innerText = argv[0];
    if (tag === "input") {
      createdTag.addEventListener("input", argv[1]);
    }
    else if (tag === "button") {
      createdTag.addEventListener("click", argv[1]);
    }
    appendWhere.append(createdTag);
    return createdTag;
  }
}

function deleteLi(event) {
  //event.target.parentNode.remove();
  event.target.parentElement.remove();
  document.querySelector("#errorMessage").innerText = "";
  return true;
}

// alt. let currentTodos = 0;

function todoButtonFunc() {
  if (!isInputValid()) { return; };
  errorMessage.innerText = "";

  // a.

  if (document.querySelectorAll("li").length >= 5) {
    //alt. if (document.querySelectorAll("ul li").length >= 5) {
    errorMessage.innerText = "Det kan max finnas 5 ärenden.";
  }
  // alt. currentTodos++;

  // b.

  else {
    let li = create("li", todoList, todoInput.value + " ");
    create("button", li, "Ta bort", deleteLi);
    todoInput.value = "";
  }
}

function isInputValid() {
  if (todoInput.value === "") {
    errorMessage.innerText = "Du måste fylla i fältet för att lägga till ett ärende.";
    return false;
  }
  else { return true; }
}

let todoLabel = create("label", div, "Vad ska göras?");
let todoInput = create("input", div);
let todoButton = create("button", div, "Lägg till ärende", todoButtonFunc);
let todoList = create("ol", div);
let errorMessage = create("p", div);
errorMessage.id = "errorMessage";

// Uppgift 2

let calcDiv = create("div", body);
let calcA = create("input", calcDiv);
calcA.type = "number";
let br = create("br", calcDiv);
let calcB = create("input", calcDiv);
calcB.type = "number";
let calcButtonPlus = create("button", calcDiv, "+", (event) => showCalcResult(event, "+"));

// a.

let calcButtonMul = create("button", calcDiv, "*", (event) => showCalcResult(event, "*"));

// b.

let calcButtonMinus = create("button", calcDiv, "-", (event) => showCalcResult(event, "-"));
let calcResult = create("p", calcDiv);

function showCalcResult(event, type) {
  /*
  (type === "+") ? calcResult.innerText = parseFloat(calcA.value) + parseFloat(calcB.value) :
  (type === "*") ? calcResult.innerText = parseFloat(calcA.value) * parseFloat(calcB.value) :
  (type === "-") ? calcResult.innerText = parseFloat(calcA.value) - parseFloat(calcB.value) : ""
  */

  (type === "+") ? calcResult.innerText = +calcA.value + +calcB.value :
    (type === "*") ? calcResult.innerText = +calcA.value * +calcB.value :
      (type === "-") ? calcResult.innerText = +calcA.value - +calcB.value : "";


  // calcA.valueAsNumber
  // ger nummer direkt

  // kan ha event.target istället för parameter

  // teknisk skuld - snabbast idag men skapar problem i framtiden

  // eval() kan köras istället för + * etc


  if (calcResult.innerText < 0) {
    calcResult.innerText = `Resultatet blev mindre än 0. Denna kalkylator visar bara positiva resultat.
    När du använder subtraktion måste talet i det övre fältet vara högre än i det lägre.`;
  }
}

let newBr = create("br", body);

// Uppgift 3

let numberDiv = create("div", body);
let number = create("input", numberDiv, "", (event) => numberEdited(event));
number.id = "numberInput";
number.type = "number";
number.style.fontSize = "32px";

function numberEdited(event) {
  aboveP.innerText = "";
  let value = +event.target.value;
  let numberText = document.querySelector("#numberInput");


  (value > 11 || value < 0) ?
    // error
    aboveEleven() :
    (value < 4) ?
      numberText.style.color = "red" :
      (value <= 7) ?
        numberText.style.color = "yellow" :
        (value <= 11) ?
          numberText.style.color = "green" : "";
}

let aboveP = create("p", numberDiv, "");

function aboveEleven() {
  number.value = "";
  let aboveElevenErrorMsg = "Din input var för hög eller felaktig, skriv ett nummer mellan 0 och 11.";
  console.log("hi");
  aboveP.innerText = aboveElevenErrorMsg;
}





