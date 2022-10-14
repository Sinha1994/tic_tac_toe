let counter = 1;
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let alert = document.querySelector(".success");
const getDiv = (text) => {
  let divElem = document.createElement("div");
  divElem.classList.add("tic");
  divElem.textContent = text;
  return divElem;
};
const isAllSame = function (boxA, boxB, boxC, match) {
  return [boxA.textContent, boxB.textContent, boxC.textContent].every(
    (val) => val == match
  );
};
const isWinner = function (player) {
  if (
    isAllSame(box1, box2, box3, player) ||
    isAllSame(box1, box4, box7, player) ||
    isAllSame(box1, box5, box9, player) ||
    isAllSame(box1, box2, box3, player) ||
    isAllSame(box4, box5, box6, player) ||
    isAllSame(box7, box8, box9, player) ||
    isAllSame(box2, box5, box8, player) ||
    isAllSame(box3, box6, box9, player) ||
    isAllSame(box3, box5, box7, player)
  ) {
    alert.textContent = player + " " + alert.textContent;
    alert.style.display = "block";
  }
};
const play = (event) => {
  if (counter % 2 != 0) {
    event.target.appendChild(getDiv("X"));
    isWinner("X");
  } else {
    event.target.appendChild(getDiv("O"));
    isWinner("O");
  }
  ++counter;
};
