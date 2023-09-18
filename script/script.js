//variable declaration
let workTime = document.getElementById("numberWork");
let breakTime = document.getElementById("numberBreak");
let workMinute = parseInt(workTime.getAttribute("value"));
let breakMinute = parseInt(breakTime.getAttribute("value"));



let second = 0;
let stopTime = 0;
let isStart = true;
let count = true;

const audio = new Audio('./audio/Alarm.mp3');

let workDef = document.getElementById("work").textContent,
    breakDef = document.getElementById("break").textContent,
    buttonSart = document.getElementById("button");


//a listener in the button start
buttonSart.addEventListener('click', ()=>{
    if(isStart == true){
        document.getElementById("button").innerHTML = '<em class="fa-solid fa-arrow-rotate-left"></em>';
        document.getElementById('minute').textContent = workTime.value;
        start();
        isStart = false;
    }else{
        reset();
        document.getElementById("button").innerHTML = '<em class="fa-solid fa-play"></em>';
        isStart = true;
    }  
})


//function start the timer decrease and update the first time 
function start(){

    document.getElementById('work').style.display ='block';
    document.getElementById('break').style.display ='none';

    workMinute = workTime.value;
    workMinute--;
    breakMinute = breakTime.value;
    breakMinute--;
    second = 59;
    count = false;
    
    timerDecrease();
    
    stopTime = setInterval(timerDecrease, 1000);
}

//function decrease the work and switch to break
function timerDecrease() {
    document.getElementById('minute').textContent = workMinute < 10 ? `0${workMinute}` : workMinute;
    document.getElementById('second').textContent = second < 10 ? `0${second}` : second;
    second--;


    
    if(second === 0){
        workMinute--;
        if(workMinute === -1){
            if(count == false){
                audio.play();
                workMinute = breakMinute;
                document.getElementById('work').style.display = 'none';
                document.getElementById('break').style.display = 'block';
                count = true;
    }else{
        audio.play();
        workMinute = workTime.value;
        count = false;
        workMinute--;
        document.getElementById('work').style.display = 'block';
        document.getElementById('break').style.display = 'none';
        }
        }
    second = 59;
    }
} 

//reset the timer and the display and clear the interval
function reset(){
    clearInterval(stopTime);
    second = 0;
    document.getElementById('minute').textContent = workTime.value;
    document.getElementById('second').textContent = second +"0";
    document.getElementById('work').style.display = 'block';
    document.getElementById('break').style.display = 'block';
}