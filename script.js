var seconds = 0;
var tens = 0;
var minutes = 0;
var hour = 0;
var buttonLap = document.getElementById('button-laps');
var laps = document.getElementById('laps');
var appendTens = document.getElementById('tens');
var appendseconds = document.getElementById('seconds');
var appendminutes = document.getElementById('minutes')
var appendhour = document.getElementById('hour')
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var interval;
var Lapcounter = 1;



function startTimer(){
    tens++;
    if(tens<9){
        appendTens.innerHTML= 0+tens;
    }
    if(tens>9){
        appendTens.innerHTML= tens;
    }

    if(tens>99){
        seconds++;
        appendseconds.innerHTML=0+seconds;
        tens=0;
        appendTens.innerHTML= 0 +0;
        
    }
    if(seconds>59)
    {
        seconds=0;
        appendminutes.innerHTML= 0+0+minutes;
        minutes++;
        tens=0;
        appendTens.innerHTML= 0 + 0;
        seconds=0;
        appendseconds.innerHTML = 0 + 0 + 0;
    }
    if(minutes>59){
        minutes=0;
        appendhour.innerHTML=0+0+0+hour;
        hour++;
        tens=0;
        appendTens.innerHTML= 0 + 0;
        seconds=0;
        appendseconds.innerHTML = 0 + 0 + 0;
        minutes=0;
        appendminutes.innerHTML = 0 + 0 + 0 + 0;

    }

    appendTens.innerHTML =tens;
    appendseconds.innerHTML=seconds;
    appendminutes.innerHTML=minutes;
    appendhour.innerHTML=hour;
    

    }


   buttonStart.onclick = function(){
    interval = setInterval(startTimer,10);
   };
   buttonStop.onclick = function(){
    clearInterval(interval);
   };
   buttonReset.onclick = function(){
    clearInterval(interval);
    tens = 0;
    seconds= 0;
    minutes=0;
    hour=0;
    appendseconds.innerHTML =seconds;
    appendTens.innerHTML = tens;
    appendminutes.innerHTML = minutes;
    appendhour.innerHTML = hour;
    laps.innerHTML = '';
    Lapcounter = 1;



   };
   buttonLap.onclick = function() {
    var lapTime = document.createElement('li');
    lapTime.innerHTML = "Lap " + Lapcounter + ": " +hour + ":" + minutes + ":" +seconds + ":" +tens;
    laps.appendChild(lapTime);
    Lapcounter++;
};