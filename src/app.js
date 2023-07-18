/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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

  cardGenerator(numbers, symbols);
};
function cardGenerator(arr1, arr2) {
  let number = randomValue(arr1);
  let symbol = randomValue(arr2);
  let color = symbol == "♥" || symbol == "♦" ? "red" : "black";
  //Changing card info
  let colorDom = document.querySelector(".card");
  colorDom.classList.add(color == "red" ? "red" : "black");
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
