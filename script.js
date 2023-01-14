'use strict'

//Действие при клике на остров
let screen = document.querySelector('.island_popup');
screen.onclick = function(){
    screen.classList.toggle('active')
} 

//часы

function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
        document.getElementById("id_clock").innerHTML = hours + ":" + minutes;
        setTimeout("digitalClock()", 1000);
   }
   digitalClock();

