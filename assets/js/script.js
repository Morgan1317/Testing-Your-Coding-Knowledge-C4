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

// functions
// start timer
// starts with 120 seconds
var time = 120;

function timeInterval(){
    setInterval(() => {
        if (time >= 1){
            timerEl.textContent = 'Time: ' + time; 
            time--;
        }
        else{
            timerEl.textContent = 'Time: 0';
            clearInterval(timeInterval);
        }
    }, 1000);
}

function questionOne(){
    questionEl.textContent = 'Commonly used data types DO not Include:'
    a1.textContent = 'strings';
    a2.textContent = 'booleans';
    a3.textContent = 'alerts';
    a4.textContent = 'numbers';
    a1.setAttribute('one','false');
    a2.setAttribute('one','true');
    a3.setAttribute('one','false');
    a4.setAttribute('one','false');
    list.addEventListener('click', function (event) {
        var element = event.target;
      
        var state = element.getAttribute('one');
       
        if (state === 'true') {
            questionTwo();
        } else {
            time = time - 10;
        }
        
      });

}
function questionTwo(){
    questionEl.textContent = 'The condition in an if/else statement is enclosed with ________.'
    a1.textContent = 'quotes';
    a2.textContent = 'curly brackets';
    a3.textContent = 'parenthesis';
    a4.textContent = 'square brackets';
    a1.setAttribute('two','false');
    a2.setAttribute('two','false');
    a3.setAttribute('two','true');
    a4.setAttribute('two','false');
    list.addEventListener('click', function (event) {
        var element = event.target;
      
        var state = element.getAttribute('two');
       
        if (state === 'true') {
            questionThree();
        } else {
            time = time - 10;
        }
        
      });
}

function questionThree(){
    questionEl.textContent = 'Arrays in Javascript can be used to store ________.'
    a1.textContent = 'numbers and strings';
    a2.textContent = 'other arrays';
    a3.textContent = 'booleans';
    a4.textContent = 'all of the above';
    a1.setAttribute('three','false');
    a2.setAttribute('three','false');
    a3.setAttribute('three','false');
    a4.setAttribute('three','true');
    list.addEventListener('click', function (event) {
        var element = event.target;
      
        var state = element.getAttribute('three');
       
        if (state === 'true') {
            questionFour();
        } else {
            time = time - 10;
            
        }
        
      });
}
function questionFour(){
    questionEl.textContent = 'String values must be enclosed within _______ when being assigned to variables.'
    a1.textContent = 'commas';
    a2.textContent = 'curly brackets';
    a3.textContent = 'quotes';
    a4.textContent = 'parenthesis';
    a1.setAttribute('four','false');
    a2.setAttribute('four','true');
    a3.setAttribute('four','false');
    a4.setAttribute('four','false');
    list.addEventListener('click', function (event) {
        var element = event.target;
      
        var state = element.getAttribute('four');
       
        if (state === 'true') {
            questionFive();
        } else {
            time = time - 10;
        }
        
      });
}
function questionFive(){
    questionEl.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:'
    a1.textContent = 'JavaScript';
    a2.textContent = 'terminal/bash';
    a3.textContent = 'for loops';
    a4.textContent = 'console.log';
    a1.setAttribute('five','false');
    a2.setAttribute('five','false');
    a3.setAttribute('five','false');
    a4.setAttribute('five','true');
    list.addEventListener('click', function (event) {
        var element = event.target;
      
        var state = element.getAttribute('five');
       
        if (state === 'true') {
            list.style.display='none';
            questionEl.textContent = ''
            time = time;
            clearInterval(timeInterval);
            timerEl.textContent = 'Time: 0';
            savePage();

        } else {
            time = time - 10;
        }
        
      });
}

function savePage(){
    title.textContent = 'All Done!'
    instructions.textContent = 'Your final score is ' + time; 
    timerEl.textContent = 'Time: 0';
}


function startQuiz(){
    title.textContent ='';
    instructions.textContent='';
    list.style.display='inherit';
    startButton.style.display = 'none';
    timeInterval();

    // display quiz questions
    questionOne();
  

    

};


startButton.addEventListener('click',startQuiz);

