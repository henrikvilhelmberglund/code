const cities = [
  {
    city: "London",
    code: "UK",
    population: 11504632,
    foodRanking: 4
  },
  {
    city: "Manchester",
    code: "UK",
    population: 4280424,
    foodRanking: 5
  },
  {
    city: "Paris",
    code: "FR",
    population: 10830024,
    foodRanking: 9
  },
  {
    city: "Nice",
    code: "FR",
    population: 4250024,
    foodRanking: 10
  },
  {
    city: "Berlin",
    code: "DE",
    population: 8250024,
    foodRanking: 8
  },
  {
    city: "Munich",
    code: "DE",
    population: 5250050,
    foodRanking: 6
  }
];


// Uppgift 1.a

let body = document.querySelector("body");
let ulAllCities = document.querySelector("#allCities");

// 1.b

cities.forEach(city => {
  let li = document.createElement("li");
  li.innerText = city.city;
  li.style.color = 
  city.code === "FR" ? "blue" :
  city.code === "UK" ? "red" : "";
  ulAllCities.append(li);
});

// Uppgift 2

let olCitiesForFoodies = document.querySelector("#citiesForFoodies");

//body.insertBefore(ol, ul);
let foodieCities = cities.filter(city => city.foodRanking >= 8);

// 2.b
foodieCities.sort((a, b) => (a.foodRanking > b.foodRanking) ? -1 : 1)

foodieCities.forEach(city => {
  let li = document.createElement("li");
  li.innerText = city.city + " (" + city.foodRanking + ")";
  olCitiesForFoodies.append(li);
});

// Uppgift 3
let ulSortedByPop = document.querySelector("#sortedByPopulation");

cities.sort(((a, b) => (a.population > b.population) ? -1 : 1));
cities.forEach(city => {
  let li = document.createElement("li");
  li.innerText = city.city + " (" + city.population + ")";
  ulSortedByPop.append(li);
});

