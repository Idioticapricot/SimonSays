let gameseq=[];
let userseq=[];
let btns=['yellow','red','purple','green']
let started = false;
let level=0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is Started")
        started=true;
      levelUp();
    }
});
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function() {
    btn.classList.remove("flash");
},100);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash"); 
    },100);
    }
function levelUp(){
    level++;
    h2.innerText = `level ${level}`
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randombtn=document.querySelector(`.${randomColor}`)
    console.log(randomIdx);
    console.log(randombtn);
    console.log(randomColor);
    
    gameFlash(randombtn);
}  

function btnPress(){
    console.log(this)
    let btn = (this)
    userflash(btn);
}

let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}