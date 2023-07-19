/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //Create and position the button
  cardGenerator();
  createButton();
  createCountdown();
  createSizeInput();
};
function cardGenerator() {
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const symbols = ["♥", "♦", "♠", "♣"];
  let number = randomValue(numbers);
  let symbol = randomValue(symbols);
  let color = symbol == "♥" || symbol == "♦" ? "red" : "black";
  //Changing card info
  let cardDom = document.querySelector(".card");
  if (cardDom.classList.contains("red")) {
    cardDom.classList.remove("red");
  } else if (cardDom.classList.contains("black")) {
    cardDom.classList.remove("black");
  }
  cardDom.classList.add(color == "red" ? "red" : "black");
  let symbolDom = document.querySelectorAll(".symbol");
  for (let i = 0; i < symbolDom.length; i++) {
    symbolDom[i].innerHTML = symbol;
  }
  document.querySelector(".number").innerHTML = number;
}

function randomValue(arr) {
  let value = Math.floor(Math.random() * arr.length);
  return arr[value];
}
function createButton() {
  let button = document.createElement("button");
  button.innerHTML = "<p>Cambiar carta</p>";
  button.addEventListener("click", cardGenerator);
  document.querySelector(".card").insertAdjacentElement("afterend", button);
  //button.style.width = document.querySelector(".card").offsetWidth + "px";
  button.style.height = "30px";
}
function createCountdown() {
  let timerDom = document.createElement("p");
  timerDom.innerHTML = "Nueva carta en 10s";
  document.querySelector(".card").insertAdjacentElement("afterend", timerDom);
  timerDom.style.marginBottom = "10px";
  timerDom.style.color = "white";
  let fullTime = 10;
  let x = setInterval(function() {
    if (fullTime <= 0) {
      timerDom.innerHTML = "NUEVA CARTA!";
      cardGenerator();
      fullTime = 10;
    } else {
      timerDom.innerHTML = `Nueva carta en ${fullTime}s`;
      fullTime--;
    }
  }, 1000);
}
function createSizeInput() {
  let form = document.createElement("form");
  form.style.marginBottom = "10px";
  document.querySelector(".card").insertAdjacentElement("afterend", form);
  let widthLabel = document.createElement("label");
  widthLabel.style.marginRight = "5px";
  widthLabel.innerHTML = "<strong>width:</strong>";
  widthLabel.setAttribute("for", "widthIn");
  form.appendChild(widthLabel);
  let widthInput = document.createElement("input");
  widthInput.style.marginRight = "5px";
  widthInput.style.width = "50px";
  widthInput.setAttribute("type", "text");
  widthInput.setAttribute("id", "widthIn");
  form.appendChild(widthInput);
  widthInput.addEventListener("change", function() {
    var element = document.getElementById("card");
    element.style.width =
      document.getElementById("widthIn").value.toString() + "px";
  });
  let heightLabel = document.createElement("label");
  heightLabel.style.marginRight = "5px";
  heightLabel.innerHTML = "<strong>height:</strong>";
  heightLabel.setAttribute("for", "heightIn");
  form.appendChild(heightLabel);
  let heightInput = document.createElement("input");
  heightInput.style.width = "50px";
  heightInput.setAttribute("type", "text");
  heightInput.setAttribute("id", "heightIn");
  form.appendChild(heightInput);
  heightInput.addEventListener("change", function() {
    var element = document.getElementById("card");
    element.style.height =
      document.getElementById("heightIn").value.toString() + "px";
  });
}
