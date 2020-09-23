"use strict"

function zeroPad(number) {
    if (number.toString(10).length == 1) {
        return "0" + number;
    }
    else {
        return number;
    }
}

function getCurrentTime() {
    let currentTime = new Date();
    return {
        hour: currentTime.getHours(),
        minute: currentTime.getMinutes(),
        second: currentTime.getSeconds()
    }
}

function displayTime() {
    let time = getCurrentTime();
    
    let decimalTimeElement = document.getElementById("decimal-time");
    
    decimalTimeElement.innerHTML = "#" + zeroPad(time.hour) + zeroPad(time.minute) + zeroPad(time.second);
    document.body.style["background-color"] = "#" + zeroPad(time.hour) + zeroPad(time.minute) + zeroPad(time.second);
}

displayTime();
setInterval(displayTime, 1000);

