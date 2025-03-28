let gameSeq=[];
let userSeq=[];

let level=0;
let started=false;
let hlevel=0;



let div=document.querySelector(".div");
let h3=document.querySelector("h3");
document.addEventListener("keydown",()=>{
  if(!started){
    console.log("key pressed");
    // h3.innerText="you Can Start the game...";
    started=true;
    levelup();
    
    }
    
  
});
function setflash(d){
  d.classList.add("newFlash");
  setTimeout(() => {
    d.classList.remove("newFlash");
  }, 350);

}
function userflash(d){
  d.classList.add("flash1");
  setTimeout(() => {
    d.classList.remove("flash1");
  }, 250);

}
let boxes=["blue","red","green","purple"];

function levelup(){
  userSeq=[];
  level++;
  if(level>hlevel){
    hlevel=level;
  }
  h3.innerText=`Level ${level}`;
  let ind=Math.floor(Math.random()*4);
  let randDiv=boxes[ind];
  console.log(randDiv);
  console.log(ind);
  let randdiv=document.querySelector(`.${randDiv}`);
  setflash(randdiv);
  

  gameSeq.push(randDiv);
 
  console.log(gameSeq);
  
  
}
let divbtn=document.querySelectorAll(".div");

function btnPress(){
  btn=this;
  userflash(btn);
  console.log(this);
  // console.log();
  userSeq.push(btn.classList[1]);
  
  compare(userSeq.length-1);
  
}

for(btn of divbtn){
  btn.addEventListener("click",btnPress);
}

//COMPARISION
function score(level){
  let highestScore=level;
  return highestScore;
}
function compare(idx){
  
  if(userSeq[idx] == gameSeq[idx]){
    
    if(userSeq.length==gameSeq.length){
      
      setTimeout(levelup,1000);
    }
    
  }
  else{
    h3.innerText=`Game over Your Score  was${level} your highest score is =${hlevel}  press any key to start `;

    document.querySelector("body").style.backgroundColor="red";
    setTimeout(()=>{
      document.querySelector("body").style.backgroundColor="white";
    },250);

    reset();
  }
  
  
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}