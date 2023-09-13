let temps;


function Setminuteur(tep){

const departMinutes = tep
temps = departMinutes * 60

const timerElement = document.getElementById("timer")
let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)
minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes
  timerElement.innerText = `${minutes}:${secondes}`
}

 

  function decompte(){
    const timerElement = document.getElementById("timer")
    let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)
minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes
  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1 
}


let trav = document.getElementById("work");
trav.addEventListener('click', ()=>{
  Setminuteur(25);
})

let pau = document.getElementById("break");
pau.addEventListener('click', ()=>{
  Setminuteur(5);
})

let tim = document.getElementById("timer");
tim.addEventListener('click', ()=>{
setInterval(decompte,1000);
})