const digitalClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let AM_PM = "AM";

    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        AM_PM = "PM";
    }
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + AM_PM;

    let clock = document.getElementById("clock");
    clock.innerText = time
    clock.textContent = time
}


setInterval(digitalClock, 1000);


let exercise = document.getElementById("exercise");

exercise.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=aEc6AUFkCo8&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=51")
});

