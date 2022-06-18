// ________________________________________

let person = [
  { name: "Ahmed", height: 200, gender: "male", mass: 20, eyeColor: "gray" },
  { name: "Ali", height: 180, gender: "male", mass: 10, eyeColor: "black" },
  { name: "Zehar", height: 150, gender: "female", mass: 30, eyeColor: "blue" },
];

const namesAndHight = person.map((per) => {
  return per.name + " " + per.height;
});
console.log("\n---------------------------------------\n");
console.log("\nGet array of all names and height:");
console.log(namesAndHight);

let names = person.map((per) => {
  return per.name;
});

console.log("\nGet array of all first name:");
console.log(names);

//__________________________________________

let masses = person.map((per) => {
  return per.mass;
});

console.log("\n---------------------------------------\n");
let total = masses.reduce(function (total, num) {
  return total + num;
}, 0);

console.log("Total mass of all characters");
console.log(total);

//__________________________________________

console.log("\n---------------------------------------\n");
let totalChar = names.reduce(function (total, name) {
  return total + name.length;
}, 0);

console.log("Get total number of characters in all the character names");
console.log(totalChar);

// //__________________________________________

console.log("\n---------------------------------------\n");
let massMoreThan100 = person.filter(function (per) {
  if (per.mass > 100) {
    return per;
  }
});

console.log("\nGet characters with mass greater than 100");
console.log(massMoreThan100);

//_________________________________________

console.log("\n---------------------------------------\n");
let female = person.filter(function (per) {
  if (per.gender === "female") {
    return per;
  }
});

console.log("\nAll female characters");
console.log(female);

//_________________________________________

console.log("\n---------------------------------------\n");

let sortedByName = person.sort(function (per1, per2) {
  return per1.name - per2.name;
});

console.log("Sort by name");
console.log(sortedByName);
console.log("\n");

let sortedByGender = person.sort(function (per1, per2) {
  return per1.gender - per2.gender;
});

console.log("Sort by gender");
console.log(sortedByGender);
console.log("\n");

// //__________________________________________

console.log("\n---------------------------------------\n");

let blueEyes = person.every(function (per) {
  return per.eyeColor === "blue";
});

console.log("Does every character have blue eyes?");
console.log(blueEyes);

//__________________________________________

console.log("\n---------------------------------------\n");

let isAllMales = person.every(function (per) {
  return per.gender === "male";
});

console.log("Is every character male?");
console.log(isAllMales);

//__________________________________________

console.log("\n---------------------------------------\n");

let isOneMales = person.some(function (per) {
  return per.gender === "male";
});

console.log("Is there at least one male character?");
console.log(isOneMales);

// //__________________________________________

console.log("\n---------------------------------------\n");

let lessThan50 = person.some(function (per) {
  return per.mass < 50;
});

console.log("Is there at least one character that has mass less than 50?");
console.log(lessThan50 + "\n\n");

//__________________________________________

fetch("https://www.breakingbadapi.com/api/characters")
  .then((response) => response.json())
  .then((data) => {
    let div = document.getElementById("container");

    // loop thrugh the results
    for (let index = 0; index < data.length; index++) {
      let cardDiv = document.createElement("div");
      cardDiv.className = "card";

      // create image element
      let img = document.createElement("img");
      img.className = "card-img-top";
      img.src = data[index].img;
      cardDiv.appendChild(img);

      // create card body div
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      // create title element
      let title = document.createElement("h5");
      title.className = "card-title";
      title.innerText = data[index].name;
      cardBody.appendChild(title);

      // create details
      let details = document.createElement("p");
      details.className = "card-text";
      details.innerText =
        "birthday: " +
        data[index].birthday +
        " , nickname: " +
        data[index].nickname;
      details.style.visibility = "hidden";

      img.addEventListener(
        "click",
        (e) => (details.style.visibility = "visible")
      );

      img.addEventListener(
        "dblclick",
        (e) => (details.style.visibility = "hidden")
      );
      cardBody.appendChild(details);

      cardDiv.appendChild(cardBody);
      div.appendChild(cardDiv);
    }
  });

// let cards = document.querySelectorAll(".card");

// for (let index = 0; index < cards.length; index++) {
//   cards[index].addEventListener("mouseover", (e) => {
//     cards[index].querySelector(".card-text").style.visibility = "visible";
//   });
// }
