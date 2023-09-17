//variable declaration
let workTime = 25,
    breakTime = 5,
    workMinute,
    breakMinute,
    second = 0,
    stopTime = 0,
    isStart = true,
    count;


let workDef = document.getElementById("work").textContent,
    breakDef = document.getElementById("break").textContent,
    buttonSart = document.getElementById("button");


//a listener in the button start
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


//function start the timer decrease and update the first time 
function start(){

    document.getElementById('work').style.display ='block';
    document.getElementById('break').style.display ='none';

    workMinute = workTime-1;
    breakMinute = breakTime -1;
    second = 59;
    count = false;
    
//function decrease the work and break timer every second
const timerDecrease = () =>{
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

//reset the timer and the display and clear the interval
function reset(){
    clearInterval(stopTime);
    second = 0;
    document.getElementById('minute').textContent = workTime;
    document.getElementById('second').textContent = second +"0";
    document.getElementById('work').style.display = 'block';
    document.getElementById('break').style.display = 'block';
}