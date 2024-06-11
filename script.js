let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
const timeRef = document.querySelector("#Display");

let intervalId = null;

document.getElementById("start").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(displayTimer, 10);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(intervalId);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(intervalId);
    milliseconds = seconds = minutes = hours = 0;
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer() {
    milliseconds += 10;
    if(milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds >= 60) {
            seconds = 0;
            minutes++;
            if(minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;
    const ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
