function myConsole(input) {
  let p = document.createElement("p");
  p.innerText = "console output: " + input;
  document.body.append(p);
}


let myButton = document.querySelector("#buyCar");
let input = document.querySelector("#nameInput");
let messageBox = document.querySelector("#messageBox");
console.log(messageBox);
myButton.addEventListener("click", () => {
  // myConsole(input.value);
  
  // Get value from radio button
  let colorValue = document.querySelector("[name='color']:checked");
  messageBox.innerText = `${input.value} bought a ${colorValue.value} car`;
  // to remove input text
  // document.querySelector("#nameInput").value = "";
  // console.log("hi " + input.value);
});