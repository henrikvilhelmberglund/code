let clothesArray = [
  {
    name: "Cute t-shirt",
    type: "t-shirt",
    color: "pink",
    brand: "Japan"
  },
  {
    name: "Stylish hat",
    type: "hat",
    color: "white",
    brand: "Stetson"
  },
  {
    name: "Comfy sweater",
    type: "sweater",
    color: "blue",
    brand: "The comfy"
  },
  {
    name: "Warm winter jacket",
    type: "jacket",
    color: "black",
    brand: "Peak Performance"
  },
  {
    name: "Cool sneakers",
    type: "shoes",
    color: "white",
    brand: "Nike"
  }
];

let showAllProductsBtn = document.querySelector("#show-all-products-btn");
let showProductsUl = document.querySelector("#show-products-ul");
let showSelectedProductsBtn = document.querySelector("#show-selected-products-btn");
let selectedDropdown;
let selectedRadio;
let checkbox = document.querySelector("#checkbox");
let checkedColorCheckboxes;
let checkedColorCheckboxesValue = [];
showAllProductsBtn.addEventListener("click", () => showAllProducts(clothesArray));
showSelectedProductsBtn.addEventListener("click", () => showSelectedProducts(clothesArray));

function showAllProducts(clothes) {
  showProductsUl.innerHTML = "";
  clothes.forEach(cloth => {
    let li = document.createElement("li");
    li.innerText = cloth.name;
    showProductsUl.append(li);

  });
}

function isNotRobotCheck() {
  if (checkbox.checked === true) {
    return true;
  }
  else {
    return false;
  }
}

function showSelectedProducts(clothes) {
  showProductsUl.innerHTML = "";
  checkedColorCheckboxesValue = [];
  if (!isNotRobotCheck()) {
    alert("Please confirm you're not a robot!");
    return false;
  }
  selectedDropdown = document.querySelector("#types").value;
  selectedRadio = document.querySelector("[type=radio]:checked");
  checkedColorCheckboxes = Array.from(document.querySelectorAll("[name=color-checkbox]:checked"));

  clothes = clothes.filter(cloth => filterClothes(cloth));
  clothes.forEach(cloth => {
    let li = document.createElement("li");
    li.innerText = cloth.name;
    showProductsUl.append(li);
  });
}

function filterClothes(cloth) {
  checkedColorCheckboxes.forEach((element) => {
    checkedColorCheckboxesValue.push(element.value);
  });
  return cloth.type === selectedDropdown.toLowerCase() &&
    cloth.brand === selectedRadio.value && checkedColorCheckboxesValue.includes(cloth.color);
}