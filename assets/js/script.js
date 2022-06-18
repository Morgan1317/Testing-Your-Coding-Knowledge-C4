var timerEl = document.getElementById('timer');

function timer(){
    // starts with 120 seconds
    var time = 5;

    var timeInterval = setInterval(function(){
        if (time >= 1){
            timerEl.textContent = 'Time: ' + time + ' s'; 
            time--;
        }
        else{
            timerEl.textContent = 'Time:0';
            clearInterval(timeInterval);
        }
    },1000);
};
