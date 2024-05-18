let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red",'blu','green']

let started = false;
let level = 0 ;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false){
        console.log("game is started");
        started = true;
        
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function gameflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}


// Rest of your code remains the same




function levelUp() {
    level++;
    h2.innerText = `level ${level}`;
    // Chose random btn
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
   console.log(randIdx);
   console.log(randColor);
   console.log(randbtn);
    gameflash(randbtn);
}


function btnPress(){
    console.log("btn was pressed");
}
let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn) {
    btn.addEventListener("Click",btnPress)
}