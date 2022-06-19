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

var questionOne ={
    question:  'Commonly used data types DO not Include:',
    answers :{
    answer1: 'strings',
    answer2: 'booleans',
    answer3: 'alerts',
    answer4: 'numbers'
},
    correct: 'booleans',
}

var questionTwo = {
    question:  'The condition in an if/else statement is enclosed with___________.',
    answers : {
    answer1: 'quotes',
    answer2: 'curly brackets',
    answer3: 'parenthesis',
    answer4: 'square brackets'
},
    correct: 'parenthesis',
};

var questionThree = {
    question:  'testing The condition in an if/else statement is enclosed with___________.',
    answers : {
    answer1: 'quotes',
    answer2: 'curly brackets',
    answer3: 'parenthesis',
    answer4: 'square brackets'
},
    correct: 'parenthesis',
};
var questionArray = [questionOne, questionTwo, questionThree];

// start timer
// starts with 120 seconds
var time = 120;

function timeInterval(){
    setInterval(() => {
        if (time >= 1){
            timerEl.textContent = 'Time: ' + time + ' s'; 
            time--;
        }
        else{
            timerEl.textContent = 'Time: 0';
            clearInterval(timeInterval);
        }
    }, 1000);
}




function startQuiz(){
    title.textContent ='';
    instructions.textContent='';
    list.style.display='inherit';
    startButton.style.display = 'none';
    timeInterval();
    
    // display quiz questions

    
    for (var i = 0; i < questionArray.length; i++){
        
        var questionX = questionArray[i].question;
        var choiceOne = questionArray[i].answers.answer1;
        var choiceTwo = questionArray[i].answers.answer2;
        var choiceThree = questionArray[i].answers.answer3;
        var choiceFour = questionArray[i].answers.answer4;
        var correctAnswer = questionArray[i].correct;
        questionEl.textContent = questionX;
        a1.textContent = choiceOne;
        a2.textContent = choiceTwo;
        a3.textContent = choiceThree;
        a4.textContent = choiceFour;
        list.addEventListener('click', function (event){
            var element = event.target;
          
            // if (element.matches(".box")) {
        
        
        function isTrue(){
            if (state === correctAnswer){
                i++
            } else {
                time = time - 10;
            }
        };    
        // add break to stop on the iteration you want
        
    })
    }
};



startButton.addEventListener('click',startQuiz);

