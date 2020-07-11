var timer = null;
    var hr_txt= document.getElementById("hr");
    var min_txt = document.getElementById("min");
    var sec_txt = document.getElementById("sec");
    var msec_txt = document.getElementById("msec");
    var hour = Number(hr_txt.innerHTML); 
    var min = Number(min_txt.innerHTML); 
    var sec = Number(sec_txt.innerHTML);
    var msec = Number(msec_txt.innerHTML);
    function stopTimeMilliseconds(timer) {
        if (timer) { 
            clearInterval(timer);
            return timer;
        }
        else return timer;
    }
    function startTimeMilliseconds() {
        var currDate = new Date();
        return currDate.getTime();	
    }
    function getElapsedTimeMilliseconds(startMilliseconds) {
        if (startMilliseconds > 0) {
            var currDate = new Date();
            elapsedMilliseconds = (currDate.getTime() - startMilliseconds);
            return elapsedMilliseconds;
        }
     else {
        return elapsedMilliseconds = 0;
        }
    }
    function start() { 
        timer = stopTimeMilliseconds(timer); 
        var startMilliseconds = startTimeMilliseconds();
        timer = setInterval(function() { 
            var elapsedMilliseconds = getElapsedTimeMilliseconds(startMilliseconds); 
            if (msec < 10) {
                msec_txt.innerHTML = "00" + msec; 
            }
            else if (msec < 100) {
                msec_txt.innerHTML = "0" + msec;
            }
            else {
                msec_txt.innerHTML = msec;
            }
            if (sec < 10) {
                sec_txt.innerHTML = "0" + sec;
            }
            else {
                sec_txt.innerHTML = sec; 
            }
            if (min < 10) {
                min_txt.innerHTML = "0" + min;
            }
            else {
                min_txt.innerHTML = min; 
            }
            if (hour < 10) {
                hr_txt.innerHTML = "0" + hour;
            }
            else {
                hr_txt.innerHTML = hour; 
            }
            
            msec = elapsedMilliseconds;
            if (hour >= 59 &&min >= 59 && sec >=59 && msec > 900) {
                timer = stopTimeMilliseconds(timer);
                return true;
            }
            if (min > 59) {
                min = 0;
                hour++;
            }
            if (sec > 59) {
                sec = 0;
                min++;
            }
            if (msec > 999) {
                msec = 0;
                sec++;
                start();
            }
        }, 10);
    }
    function stop() {
        timer = stopTimeMilliseconds(timer);
        return true;
    }
    function reset() {
        timer = stopTimeMilliseconds(timer);
        msec_txt.innerHTML = "000"; 
        msec = 0;
        sec_txt.innerHTML = "00"; 
        sec = 0;
        min_txt.innerHTML = "00"; 
        min = 0;
        hr_txt.innerHTML = "00"; 
        hour = 0;
        return true;
    }