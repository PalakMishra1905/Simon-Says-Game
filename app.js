let gameSeq=[];
let userSeq=[];

let btnsColor = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
   btn.classList.add("gameflash");
   setTimeout(function(){
     btn.classList.remove("gameflash");
   }, 250);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function() {
    btn.classList.remove("userflash");
  }, 250);
}

let h3 = document.querySelector("h3");

function levelUp(){
  userSeq = [];
   level++;
   h3.innerText = `Level ${level}`;

   //choose a random button.
   let randIdx = Math.floor(Math.random()* 3);
   let randColor = btnsColor[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
  //  console.log(randIdx);
  //  console.log(randColor);
  //  console.log(randBtn);
   gameSeq.push(randColor);
   console.log(gameSeq);
   gameFlash(randBtn);
}

function checkSeq(idx){

   if(userSeq[idx] === gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
      }
   }else{
      h3.innerHTML=`Game Over ! Your score was <b>${level}</b> <br/> Press any key to start.`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function (){
        document.querySelector("body").style.backgroundColor = "white";
      }, 150);
      reset();
   }
}

function btnPress(){
  console.log(this);
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkSeq(userSeq.length-1);
}


let allbtns = document.querySelectorAll(".btn");
for(btns of allbtns){
  btns.addEventListener("click", btnPress);
}  

function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}