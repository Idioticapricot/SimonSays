let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is Started");
    started = true;
    levelUp();
  }
});
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 500);
}
function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;
  let randomIdx = Math.floor(Math.random() * 3);
  let randomColor = btns[randomIdx];
  let randombtn = document.querySelector(`.${randomColor}`);

  gameseq.push(randomColor);
  console.log(gameseq);

  gameFlash(randombtn);
}
function checkAns(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp(), 1000);
    }
  } else {
    h2.innerHTML= `Game Over! Your score was <b>${level}</b> Press any key to start`;
    document.querySelector("body").style.backgroundColor = 'red';
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = '#6E8E59';
    },150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userflash(btn);
  userColor = btn.getAttribute("id");
  // console.log(userColor)
  userseq.push(userColor);
  console.log(userseq);
  checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
