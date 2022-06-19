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
var p2 = document.createElement('p');
var input = document.createElement('input');
var btn = document.createElement('button');
btn.innerHTML = "Submit";
var clear = 0; 


list.style.display='none';

// functions
// start timer
// starts with 120 seconds
var time = 200;

function timeInterval(){
    setInterval(() => {
        if (time >= 1)  {
            timerEl.textContent = 'Time: ' + time; 
            time--;
        } else if (clear ===1){
            return; 
        }
        else{
            timerEl.textContent = 'Time: 0';
            clearInterval(time);
            youLost();
            
        }
    }, 1000);
}
function youLost(){
    title.textContent = 'Nice try, so close!';
    instructions.textContent = 'Would you like to try again? Please refresh the page to play again!';
    list.style.display='none';
    questionEl.textContent = '';
}
function questionOne(){
    questionEl.textContent = 'Commonly used data types DO not Include:'
    a1.textContent = 'strings';
    a2.textContent = 'booleans';
    a3.textContent = 'alerts';
    a4.textContent = 'numbers';
    a1.setAttribute('one','false');
    a2.setAttribute('one','false');
    a3.setAttribute('one','true');
    a4.setAttribute('one','false');
    list.addEventListener('click', function (event) {
        var element = event.target;
      
        var one = element.getAttribute('one');
       
        if (one === 'true') {
            questionTwo();
        } else {
            time = time - 10;
            questionTwo();
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
      
        var two = element.getAttribute('two');
       
        if (two === 'true') {
            questionThree();
        } else {
            time = time - 10;
            questionThree();
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
      
        var three = element.getAttribute('three');
       
        if (three === 'true') {
            questionFour();
        } else {
            time = time - 10;
            questionFour();
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
      
        var four = element.getAttribute('four');
       
        if (four === 'true') {
            questionFive();
        } else {
            time = time - 10;
            questionFive();
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
      
        var five = element.getAttribute('five');
       
        if (five === 'true') {
            time = time;
            savePage();
        } else {
            time = time - 10;
            savePage();
        }
        
      });
}

function savePage(){
    list.style.display='none';
    questionEl.textContent = '';
    timerEl.textContent = 'Time: '
    var finalTime = time;
    title.textContent = 'All Done!';
    instructions.textContent = 'Your final score is ' + time; 
    timerEl.textContent = 'Time: 0';
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

