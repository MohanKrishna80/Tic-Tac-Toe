let box = document.querySelectorAll(".btn");
let rest = document.querySelector(".restart");
let newGame = document.querySelector(".newGame");
let msg=document.querySelector(".msg")
let p1
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];
let turnO = true;
box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "red";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "blue";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for (let item of winPattern) {
     p1 = box[item[0]].innerText;
    let p2 = box[item[1]].innerText;
    let p3 = box[item[2]].innerText;
    if (p1 != "" && p2 != "" && p2 != "") {
      if (p1 === p2 && p2 === p3) {
       
        showWinner(p1);
      }
    }
  }
};

const restart = () => {
  btnEnable();
  turnO = true;
  msg.innerText=""
   msg.classList.remove("msg1")
  
};

const btnDisable = () => {
  for (i of box) {
    i.disabled = true;
  }
};
const btnEnable = () => {
  for (let i of box) {
    i.disabled = false;
    i.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText=`congatulations ! The winner is ${p1}`
  msg.classList.add("msg1")
  btnDisable();
};



rest.addEventListener("click", restart);
newGame.addEventListener("click", restart);
