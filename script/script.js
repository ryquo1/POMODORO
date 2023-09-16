let workDef = document.getElementById("work").textContent
let breakDef = document.getElementById("break").textContent
let bSart = document.getElementById("button")

let workTime = 25
let breakTime = 5
let seconde = 0
let stopTime = 0;

let isStart = true;

bSart.addEventListener('click', ()=>{

    if(isStart == true){
        document.getElementById("button").innerHTML = '<em class="fa-solid fa-arrow-rotate-left"></em>';
        document.getElementById('minute').textContent = workTime;
        start();
        isStart = false
    }else{
        reset();
        document.getElementById("button").innerHTML = '<em class="fa-solid fa-play"></em>';
        isStart = true;
    }  
})



function start(){

    document.getElementById('work').style.display ='block'
    document.getElementById('break').style.display ='none'

    let workMinute = workTime-1;
    let breakMinute = breakTime -1;
    seconde = 59;
    let count = false;
    

let timerDecrease = () =>{
    document.getElementById('minute').textContent = workMinute;
    document.getElementById('second').textContent = seconde;
    seconde--

    if(seconde === 0){
        workMinute--
        if(workMinute === -1){
            if(!count){
                document.getElementById('work').style.display = 'none'
                document.getElementById('break').style.display = 'block'
                workMinute = breakMinute
                count = true
    }else{
        workMinute--
        count = false
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
    document.getElementById('second').textContent = seconde +"0";
    document.getElementById('work').style.display = 'block'
    document.getElementById('break').style.display = 'block'
}