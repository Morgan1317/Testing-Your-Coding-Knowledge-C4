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
    answers:{
    answer1: 'strings',
    answer2: 'booleans',
    answer3: 'alerts',
    answer4: 'numbers'
},
    correct: 'booleans',
}

var questionTwo = {
    question:  'The condition in an if/else statement is enclosed with___________.',
    answers:{
    answer1: 'quotes',
    answer2: 'curly brackets',
    answer3: 'parenthesis',
    answer4: 'square brackets'
},
    correct: 'parenthesis',
};



var questions = [questionOne, questionTwo];


function startQuiz(){
    title.textContent ='';
    instructions.textContent='';
    list.style.display='inherit'
    startButton.style.display = 'none';
    
    // start timer
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
    
    // display quiz questions
    for (var i = 0; i < questions.length; i--){
        questions(i);
        questionEl.textContent = questions.question;
        var choiceOne = a1.textContent = questions.answers.answer1;
        var choiceTwo = a2.textContent = questions.answers.answer2;
        var choiceThree =a3.textContent = questions.answers.answer3;
        var choiceFour = a4.textContent = questions.answers.answer4;
        var correctAnswer = questions.correct;
    
        

        var isTrue = function(){
            if (choiceOne=== correctAnswer){
                i++;
            }
            else if(choiceTwo === correctAnswer){
                i++;
            }
            else if(choiceThree === correctAnswer){
                i++;
            }
            else if(choiceFour === correctAnswer){
                i++;
            }
            else{
                time = time - 10;
            }
        }

        a1.addEventListener('click',isTrue);
        a2.addEventListener('click',isTrue);
        a3.addEventListener('click', isTrue);
        a4.addEventListener('click',isTrue);
        
    }

};




startButton.addEventListener('click',startQuiz);

