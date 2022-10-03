function myConsole(input) {
  let p = document.createElement("p");
  p.innerText += "console output: " + input;
  document.body.append(p);
}


let myButton = document.querySelector("#buyCar");
let input = document.querySelector("#nameInput");
let messageBox = document.querySelector("#messageBox");
console.log(messageBox);

let clickOne = document.querySelector("#click1");
let clickTwo = document.querySelector("#click2");
let clickThree = document.querySelector("#click3");

clickOne.addEventListener("click", handleClick);
clickTwo.addEventListener("click", handleClick);
clickThree.addEventListener("click", handleClick);

function handleClick(event) {
  for (const key in event) {
    //if (Object.hasOwnProperty.call(event, key)) {
      //myConsole(key);
      console.log(key);
      //const element = event[key];
      
    //}
  }
}
  //event.forEach(element => {
    // 
    // event.target.nextElementSibling
    
/*
  }
)};
*/

/*

myButton.addEventListener("click", () => {
  

  // myConsole(input.value);
  
  // Get value from radio button
  let colorValue = document.querySelector("[name='color']:checked");
  
  // Get value from select (dropdown)
  let typeValue = document.querySelector("#typeDropdown").value;
  //myConsole(typeValue);

  // Get value from checkbox
  let checkboxValue = document.querySelector("#terms").checked;
  //myConsole(checkboxValue);

  if (checkboxValue) {
    messageBox.innerText = `Congratulations! ${input.value} bought a ${colorValue.value} ${typeValue}`;
  }
    else {
    messageBox.innerText = `${input.value} did not sell his soul for a ${colorValue.value} ${typeValue}`;  
  }
    // to remove input text
  // document.querySelector("#nameInput").value = "";
  // console.log("hi " + input.value);

 
});
*/