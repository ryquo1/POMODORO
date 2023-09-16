let workDef = document.getElementById("work").textContent
let breakDef = document.getElementById("break").textContent
let buttonSart = document.getElementById("button")

let workTime = 1;
let breakTime = 5;
let second = 0;
let stopTime = 0;

let isStart = true;

buttonSart.addEventListener('click', ()=>{

    if(isStart == true){
        document.getElementById("button").innerHTML = '<em class="fa-solid fa-arrow-rotate-left"></em>';
        document.getElementById('minute').textContent = workTime;
        start();
        isStart = false;
    }else{
        reset();
        document.getElementById("button").innerHTML = '<em class="fa-solid fa-play"></em>';
        isStart = true;
    }  
})



function start(){

    document.getElementById('work').style.display ='block';
    document.getElementById('break').style.display ='none';

    let workMinute = workTime-1;
    let breakMinute = breakTime -1;
    second = 59;
    let count = false;
    

let timerDecrease = () =>{
    document.getElementById('minute').textContent = workMinute < 10 ? `0${workMinute}` : workMinute;
    document.getElementById('second').textContent = second < 10 ? `0${second}` : second;
    second--;

    if(second === 0){
        workMinute--;
        if(workMinute === -1){
            if(!count){
                document.getElementById('work').style.display = 'none';
                document.getElementById('break').style.display = 'block';
                workMinute = breakMinute;
                count = true;
    }else{
        workMinute--;
        count = false;
        }
    }
    second = 59;
}

} 
stopTime = setInterval(timerDecrease, 1000);
}

function reset(){
    clearInterval(stopTime);
    second = 0;
    document.getElementById('minute').textContent = workTime;
    document.getElementById('second').textContent = second +"0";
    document.getElementById('work').style.display = 'block';
    document.getElementById('break').style.display = 'block';
}