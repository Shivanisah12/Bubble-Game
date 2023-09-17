var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
    }

function makeBubble(){
var clutter = '';

for(var i=1; i<=100; i++){
    var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
 
function time(){


function runTimer(){
    var set = setInterval(function(){
        if(timer>0){
        timer --;
        document.querySelector("#timerN").textContent = timer;
        }
else{
    clearInterval(set)
    document.querySelector("#pbtm").innerHTML =`<h1>Game over</h1>`;
}
    },1000)

}

runTimer();
}

function hitval(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = hitrn
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
 var clicked = (Number(dets.target.textContent));

 if(clicked === hitrn){
    increaseScore();
    makeBubble();
    hitval();
 }
 else{
    
 }
})

makeBubble();
time();
hitval();





