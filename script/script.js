//variable declaration
let workTime = document.getElementById("numberWork");
let breakTime = document.getElementById("numberBreak");
let workMinute ;
let breakMinute ;
let second = 0;
let stopTime = 0;
let isStart = true;
let count = true;
let noSound = false;

const audio = new Audio('./audio/Alarm.mp3');
const buttonSart = document.getElementById("button");
const buttonSound = document.getElementById("sound");


//this listener is used to ON/OFF the sound after the end of a cycle
buttonSound.addEventListener('click', ()=>{
    if(noSound == false){
        document.getElementById("sound").innerHTML = '<img src="./image/speaker-slash.svg" alt="slash-speaker"/>';
        noSound = true;
    }else{
        document.getElementById("sound").innerHTML = '<em class="fa-solid fa-volume-high fa-2xs" id="icon"></em>';
        noSound = false;
    }
})

//a listener in the button start
buttonSart.addEventListener('click', ()=>{
    if(isStart == true){
        document.getElementById("button").innerHTML = '<em class="fa-solid fa-arrow-rotate-left"></em>';
        document.getElementById("minute").textContent = workTime.value;
        document.getElementById("numberWork").disabled = true;
        document.getElementById("numberBreak").disabled = true;
        start();
        isStart = false;
    }else{
        reset();
        document.getElementById("button").innerHTML = '<em class="fa-solid fa-play"></em>';
        document.getElementById("numberWork").disabled = false;
        document.getElementById("numberBreak").disabled = false;
        isStart = true;
    }  
})


//function start the timer decrease and update the first time 
function start(){

    document.getElementById("work").style.display ='block';
    document.getElementById("break").style.display ='none';
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
    document.getElementById("minute").textContent = workMinute < 10 ? `0${workMinute}` : workMinute;
    document.getElementById("second").textContent = second < 10 ? `0${second}` : second;
    second--;


    
    if(second === 0){
        workMinute--;
        if(workMinute === -1){
            if(count == false){
                if(noSound == false){
                    audio.play();
                }
                
                workMinute = breakMinute;
                document.getElementById('work').style.display = 'none';
                document.getElementById('break').style.display = 'block';
                count = true;
    }else{
        if(noSound == false){
            audio.play();
        }
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


//error handler for input number (worktime)
document.getElementById("numberWork").addEventListener("change", function () {
    //gestion d'erreurs
    if (this.value > 120) {
       this.value = workMinute = 120;
    } else if (this.value < 1) {
       this.value = workMinute = 1
    } else {
        workMinute = Math.round(this.value);
        this.value = workMinute;
    }
})


//error handler for input number (breakTime)
document.getElementById("numberBreak").addEventListener("change", function () {
    //gestion d'erreurs
    if (this.value > 25) {
        this.value = breakMinute = 25;
    } else if (this.value < 1) {
       this.value = breakMinute = 1
    } else {
        breakMinute = Math.round(this.value);
        this.value = breakMinute;
    }
})