let clothesArray = [
  {
    name: "Cute t-shirt",
    type: "t-shirt",
    color: "pink",
    brand: "Japan"
  },
  {
    name: "One Piece t-shirt",
    type: "t-shirt",
    color: "white",
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
    brand: "The Comfy"
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
//let selectedDropdown;
let checkedTypeCheckboxes;
let checkedTypeCheckboxesValue = [];
let checkedBrandCheckboxes;
let checkedBrandCheckboxesValue = [];
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
  checkedBrandCheckboxesValue = [];
  checkedTypeCheckboxesValue = [];
  if (!isNotRobotCheck()) {
    alert("Please confirm you're not a robot!");
    return false;
  }
  //selectedDropdown = document.querySelector("#types").value;
  checkedBrandCheckboxes = Array.from(document.querySelectorAll("[name=brand]:checked"));
  checkedColorCheckboxes = Array.from(document.querySelectorAll("[name=color-checkbox]:checked"));
  checkedTypeCheckboxes = Array.from(document.querySelectorAll("[name=types]:checked"));

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
  checkedBrandCheckboxes.forEach((element) => {
    checkedBrandCheckboxesValue.push(element.value);
  });
  checkedTypeCheckboxes.forEach((element) => {
    checkedTypeCheckboxesValue.push(element.value.toLowerCase());
  });

  return checkedTypeCheckboxesValue.includes(cloth.type) &&
    checkedBrandCheckboxesValue.includes(cloth.brand) && checkedColorCheckboxesValue.includes(cloth.color);
}