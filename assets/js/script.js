var timerEl = document.getElementById('timer');
var startButton = document.getElementById('begin');
var instructions = document.getElementById('paragraph');
var questionEl = document.getElementById('question');
var title = document.getElementById('title');
var list = document.getElementById('list')
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');

list.style.display='none';






function startQuiz(){
    title.textContent ='';
    instructions.textContent='';
    questionEl.textContent = 'Commonly used data types DO not Include:'
    a1.textContent = 'strings';
    a2.textContent = 'answer 2';
    a3.textContent = 'answer 3';
    a4.textContent = 'answer 4';
    list.style.display='inherit'
    startButton.style.display = 'none';
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




startButton.addEventListener('click',startQuiz);

