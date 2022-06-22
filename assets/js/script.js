var timerEl = document.getElementById('timer');
var startButton = document.getElementById('begin');
var instructions = document.getElementById('paragraph');
var questionEl = document.getElementById('question');
var title = document.getElementById('title');
var list = document.getElementById('list')
var scoreEl = document.getElementById('score');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
var p2 = document.createElement('p');
var input = document.createElement('input');
var btn = document.createElement('button');

btn.innerHTML = "Submit";




list.style.display='none';

// functions
// start timer
// starts with 120 seconds
var time = 60;

var fakeArray = 0;

var c = 0;
function timeInterval(){
    setInterval(() => {
        if (time >= 1 && fakeArray < 5)  {
            timerEl.textContent = 'Time: ' + time; 
            time--;
        }
        else if(time >= 1 && fakeArray === 5){
            clearInterval(timeInterval)
        }
        else{
            timerEl.textContent = 'Time: 0';
            clearInterval(timeInterval);
            youLost();
            
        }
    }, 1000);
}
function youLost(){
    title.textContent = 'Nice try, so close!';
    instructions.textContent = 'Would you like to try again?';
    list.style.display='none';
    questionEl.textContent = '';
    p2.textContent = '';
    var btn4 = document.createElement('button');
    instructions.appendChild(btn4);
    btn4.className = 'btn';
    btn4.innerHTML = "Try Again";
    btn4.addEventListener('click',function(){
        window.location.reload();
    });
}



function answerTrueFalse() {
    list.addEventListener('click', function (event) {
        var element = event.target;
      
        var answer = element.getAttribute('answer');
       
        if (answer === 'false') {
            time = time - 10;
        };
        fakeArray++;
        switchQuestion();
    });
};

function switchQuestion() {
        switch (fakeArray) {
            case 1:
                questionTwo();
            case 2:
                questionThree();
            case 3:
                questionFour();
            case 4:
                questionFive();
            default:
                savePage();
        }    
};

function questionOne(){
    questionEl.textContent = 'Commonly used data types DO not Include:'
    a1.textContent = 'strings';
    a2.textContent = 'booleans';
    a3.textContent = 'alerts';
    a4.textContent = 'numbers';
    a1.setAttribute('answer','false');
    a2.setAttribute('answer','false');
    a3.setAttribute('answer','true');
    a4.setAttribute('answer','false');
    answerTrueFalse();
}
function questionTwo(){
    questionEl.textContent = 'The condition in an if/else statement is enclosed with ________.'
    a1.textContent = 'quotes';
    a2.textContent = 'curly brackets';
    a3.textContent = 'parenthesis';
    a4.textContent = 'square brackets';
    a1.setAttribute('answer','false');
    a2.setAttribute('answer','false');
    a3.setAttribute('answer','true');
    a4.setAttribute('answer','false');
    switchQuestion();
}

function questionThree(){
    questionEl.textContent = 'Arrays in Javascript can be used to store ________.'
    a1.textContent = 'numbers and strings';
    a2.textContent = 'other arrays';
    a3.textContent = 'booleans';
    a4.textContent = 'all of the above';
    a1.setAttribute('answer','false');
    a2.setAttribute('answer','false');
    a3.setAttribute('answer','false');
    a4.setAttribute('answer','true');
    switchQuestion();
}
function questionFour(){
    questionEl.textContent = 'String values must be enclosed within _______ when being assigned to variables.'
    a1.textContent = 'commas';
    a2.textContent = 'curly brackets';
    a3.textContent = 'quotes';
    a4.textContent = 'parenthesis';
    a1.setAttribute('answer','false');
    a2.setAttribute('answer','true');
    a3.setAttribute('answer','false');
    a4.setAttribute('answer','false');
    switchQuestion();
}

function questionFive(){
    questionEl.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:'
    a1.textContent = 'JavaScript';
    a2.textContent = 'terminal/bash';
    a3.textContent = 'for loops';
    a4.textContent = 'console.log';
    a1.setAttribute('answer','false');
    a2.setAttribute('answer','false');
    a3.setAttribute('answer','false');
    a4.setAttribute('answer','true');
    switchQuestion();
}

function savePage(){
    clearInterval(timeInterval);
    list.style.display='none';
    questionEl.textContent = '';
    timerEl.textContent = 'Time: '
    var finalTime = time;
    title.textContent = 'All Done!';
    instructions.textContent = 'Your final score is ' + time; 
    instructions.appendChild(p2);
    p2.textContent = 'Enter Initials:';
    p2.appendChild(input);
    p2.appendChild(btn);
    btn.className = 'btn';
    
   
    

    btn.addEventListener("click", function(event) {
        event.preventDefault();
        var user = {
            initial: input.value,
            finalScore: finalTime
          };
        // set new submission to local storage 
        localStorage.setItem("user", JSON.stringify(user));
        
    });

};
scoreEl.addEventListener("click", function() {
    var btn2 = document.createElement('button');
    var btn3 = document.createElement('button');
    btn2.innerHTML = "Go Back";
    btn3.innerHTML = "Clear High Scores";
    title.textContent ='High Scores';
    instructions.textContent='';
    list.style.display='none';
    startButton.style.display = 'none';
    objectUser = JSON.parse(window.localStorage.getItem('user'));
    title.appendChild(p2);
    p2.textContent = objectUser.initial + '-' + objectUser.finalScore;
    title.appendChild(btn2);
    title.appendChild(btn3);
    btn2.className = 'btn';
    btn3.className = 'btn';
    
    
  
    btn2.addEventListener('click',function(){
        window.location.reload();
    });
    btn3.addEventListener('click',function(){
  
        window.localStorage.clear();
        p2.textContent = "";
        title.appendChild(btn2);
        title.appendChild(btn3);
  
       
    });
   
  });
 


function startQuiz(){
    title.textContent ='';
    instructions.textContent='';
    list.style.display='inherit';
    startButton.style.display = 'none';


    timeInterval();

    // display quiz questions
    questionOne();

 return;
};



startButton.addEventListener('click',startQuiz);

