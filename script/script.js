let workDef = document.getElementById("work").textContent
let breakDef = document.getElementById("break").textContent
let bSart = document.getElementById("start")
let bReset = document.getElementById("reset")

let workTime = 25
let breakTime = 5
let seconde = 0
let stopTime = 0;

bSart.addEventListener('click', ()=>{
    document.getElementById('minute').textContent = workTime;
    start();
    
})


bReset.addEventListener('click',()=>{
    reset();
})

function start(){

    let workMinute = workTime-1;
    let breakMinute = breakTime -1;
    seconde = 59;
    let Count = false;
    

let timerDecrease = () =>{
    document.getElementById('minute').textContent = workMinute;
    document.getElementById('second').textContent = seconde;
    seconde--

    if(seconde === 0){
        workMinute--
        if(workMinute === -1){
            if(!Count){
                workMinute = breakMinute
                Count = true
    }else{
        workMinute--
        Count = false
        }
    }
    seconde = 59;
}

} 
stopTime = setInterval(timerDecrease, 1000);
}

function reset(){
    clearInterval(stopTime);
    seconde = 0
    document.getElementById('minute').textContent = workTime;
    document.getElementById('second').textContent = seconde;
}