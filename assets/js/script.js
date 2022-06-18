var body = document.body;
// var h1El = document.createElement('h1');
// var listEl = document.createElement('ol');
// var a1 = document.createElement('li');
// var a2 = document.createElement('li');
// var a3 = document.createElement('li');
// var a4 = document.createElement('li');

// var questionEl = document.createElement('div');

var timerEl = document.getElementById('timer');
var startButton = document.getElementById('begin');
var instructions = document.getElementById('paragraph');
var questionEl = document.getElementById('question');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');



function timer(){
    // starts with 120 seconds
    var time = 120;

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
questionEl.textContent = 'Question 1';
a1.textContent = 'answer 1';
a2.textContent = 'answer 2';
a3.textContent = 'answer 3';
a4.textContent = 'answer 4';

startButton.addEventListener('click', timer);