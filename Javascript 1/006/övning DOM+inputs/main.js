// Uppgift 1
let body = document.querySelector("body");
let div = document.createElement("div");
body.append(div);

function deleteLi(event) {
  event.target.parentNode.remove();
  document.querySelector("#errorMessage").innerText = "";
  return true
}

function isInputValid() {
  if (todoInput.value === "") { 
    errorMessage.innerText = "Du måste fylla i fältet för att lägga till ett ärende.";
    return false 
  }
  else { return true }
}

let todoLabel = document.createElement("label");
todoLabel.innerText = "Vad ska göras? "
div.append(todoLabel);

let todoInput = document.createElement("input");
todoInput.type = "text";
div.append(todoInput);

let todoButton = document.createElement("button");
todoButton.innerText = "Lägg till ärende";
todoButton.addEventListener("click", () => {
  if (!isInputValid()) { return };
  errorMessage.innerText = "";

// a.

  if (document.querySelectorAll("li").length >= 5) {
    errorMessage.innerText = "Det kan max finnas 5 ärenden.";
  }

// b.

  else {
    let li = document.createElement("li");
    li.innerText = todoInput.value + " ";
    let deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", (event) => deleteLi(event));
    deleteButton.innerText = "Ta bort";
    li.append(deleteButton);
    todoList.append(li);
    todoInput.value = "";
  }
});
div.append(todoButton);

let todoList = document.createElement("ol");
div.append(todoList);

let errorMessage = document.createElement("p");
errorMessage.id = "errorMessage";
div.append(errorMessage);


// Uppgift 2

let calcDiv = document.createElement("div");
body.append(calcDiv);

let calcA = document.createElement("input");
calcA.type = "text";
calcDiv.append(calcA);

let br = document.createElement("br");
calcDiv.append(br);

let calcB = document.createElement("input");
calcB.type = "text";
calcDiv.append(calcB);

let calcButtonPlus = document.createElement("button");
calcButtonPlus.addEventListener("click", (event) => showCalcResult(event, "+"));
calcButtonPlus.innerText = "+";
calcDiv.append(calcButtonPlus);

// a.

let calcButtonMul = document.createElement("button");
calcButtonMul.addEventListener("click", (event) => showCalcResult(event, "*"));
calcButtonMul.innerText = "*";
calcDiv.append(calcButtonMul);

// b.

let calcButtonMinus = document.createElement("button");
calcButtonMinus.addEventListener("click", (event) => showCalcResult(event, "-"));
calcButtonMinus.innerText = "-";
calcDiv.append(calcButtonMinus);


let calcResult = document.createElement("p");

function showCalcResult(event, type) {
  if (type === "+") { 
    calcResult.innerText = parseFloat(calcA.value) + parseFloat(calcB.value) 
  }
  else if (type === "*") { 
    calcResult.innerText = parseFloat(calcA.value) * parseFloat(calcB.value)  
  }
  else if (type === "-") {
    calcResult.innerText = parseFloat(calcA.value) - parseFloat(calcB.value)  
    if (calcResult.innerText < 0) {
      calcResult.innerText = `Resultatet blev mindre än 0. Denna kalkylator visar bara positiva resultat.
      När du använder subtraktion måste talet i det övre fältet vara högre än i det lägre.`
    }
  }
  calcDiv.append(calcResult);
}

let newBr = document.createElement("br");
body.append(newBr);

// Uppgift 3

let numberDiv = document.createElement("div");
body.append(numberDiv);

let number = document.createElement("input");
number.type = "text";
number.id = "numberInput"
number.addEventListener("input", (event) => numberEdited(event));

function numberEdited(event) {
  aboveP.innerText = "";
  let value = event.target.value;
  let numberText = document.querySelector("#numberInput");
  (parseFloat(value) < 4) ? 
  numberText.style.color = "red" :
  (parseFloat(value) >= 4 && parseFloat(value) <= 7) ?
  numberText.style.color = "yellow" :
  (parseFloat(value) > 7 && parseFloat(value) <= 11) ?
  numberText.style.color = "green" :
  (value === "") ? "cool" :
  aboveEleven();
}

numberDiv.append(number);

let aboveP = document.createElement("p");

function aboveEleven() {
  let numberText = document.querySelector("#numberInput");
  number.value = "";
  let aboveElevenErrorMsg = "Din input var för hög, skriv ett nummer mellan 0 och 11."
  aboveP.innerText = aboveElevenErrorMsg;
  numberDiv.append(aboveP);
}





