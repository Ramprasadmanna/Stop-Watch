window.onload = function () {
    var Min = document.querySelector("#min");
    var Sec = document.querySelector("#sec");
    var Msec = document.querySelector("#msec");
    var Start = document.querySelector(".start");
    var Stop = document.querySelector(".stop");
    var Restart = document.querySelector(".flag");
    var colon = document.querySelector(".divide");
    var toggleBtnLen = document.querySelectorAll(".toggle").length;
    var startClock = false;
    var ms = 0;
    var seconds = 0;
    var minutes = 0;
    var timeInterval = null;
    var colonInterval = null;

    Start.addEventListener("click", function () {
        if (!startClock) {
            animateBtn(this.innerHTML);
            startClock = true;
            timeInterval = setInterval(function () {
                ms++;
                Msec.innerHTML = ms < 10 ? "0" + ms : ms;
                if (ms == 100) {
                    seconds++
                    Sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;
                    ms = 0;
                    Msec.innerHTML = "0" + 0;
                }

                if (seconds == 60) {
                    minutes++;
                    Min.innerHTML = minutes < 10 ? "0" + minutes : minutes;
                    seconds = 0;
                    Sec.innerHTML = "0" + 0;
                }
            }, 1000)
            Start.style.display = "none"
            Stop.style.display = "inline-block"
        }
    });

    Stop.addEventListener("click", function stop() {
        if (startClock) {
            animateBtn(this.innerHTML)
            clearInterval(timeInterval);
            startClock = false;
            Start.style.display = "inline-block"
            Stop.style.display = "none"
        }
    });

    Restart.addEventListener("click", function () {
        animateBtn(this.innerHTML);
        clearInterval(timeInterval);
        if (startClock) {
            Stop.style.display = "none"
            Start.style.display = "inline-block"
        }
        startClock = false;
        seconds = 0;
        hours = 0;
        minutes = 0;
        Min.innerHTML = "00"
        Sec.innerHTML = "00"
        Msec.innerHTML = "00"
    });


    function animateBtn(btn) {
        console.log("hehe")
        var activeButton = document.querySelector("#" + btn);

        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100)
    }
}

window.onbeforeunload = function () {
    return "The Watch Will Be Restarted!!!!";
}