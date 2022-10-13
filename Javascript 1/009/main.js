let clothesArray = [
  {
    name: "Cute t-shirt",
    type: "T-shirt",
    color: "Pink",
    brand: "Japan"
  },
  {
    name: "One Piece t-shirt",
    type: "T-shirt",
    color: "White",
    brand: "Japan"
  },
  {
    name: "Stylish hat",
    type: "Hat",
    color: "White",
    brand: "Stetson"
  },
  {
    name: "Comfy sweater",
    type: "Sweater",
    color: "Blue",
    brand: "The Comfy"
  },
  {
    name: "Warm winter jacket",
    type: "Jacket",
    color: "Black",
    brand: "Peak Performance"
  },
  {
    name: "Cool sneakers",
    type: "Shoes",
    color: "White",
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
  if (!isNotRobotCheck()) {
    alert("Please confirm you're not a robot!");
    return false;
  }
  //selectedDropdown = document.querySelector("#types").value;
  checkedBrandCheckboxes = Array.from(document.querySelectorAll("[name=brand]:checked")).map(element => element.value);
  checkedColorCheckboxes = Array.from(document.querySelectorAll("[name=color-checkbox]:checked")).map(element => element.value);
  checkedTypeCheckboxes = Array.from(document.querySelectorAll("[name=types]:checked")).map(element => element.value);

  clothes = clothes.filter(cloth => filterClothes(cloth));
  console.log(clothes);
  clothes.forEach(cloth => {
    let li = document.createElement("li");
    li.innerText = cloth.name;
    showProductsUl.append(li);
  });
}

function filterClothes(cloth) {

  console.log(checkedTypeCheckboxes);
  console.log(cloth.type);
  console.log(checkedBrandCheckboxes);
  console.log(cloth.brand);
  console.log(checkedColorCheckboxes);
  console.log(cloth.color);
  return checkedTypeCheckboxes.includes(cloth.type) &&
    checkedBrandCheckboxes.includes(cloth.brand) && checkedColorCheckboxes.includes(cloth.color);
}