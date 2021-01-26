//select start button and store
const startBtn = document.getElementById("start-button");
const questionsScreen = document.getElementById("questions");
const endScreen = document.getElementById("end-screen");
const timerVar = document.getElementById("timer");
const highscorelink = document.getElementById("highscore-link");
var seconds = 75;
const questionTitle = document.getElementById("question-title");
const questionBtn = document.getElementsByClassName("question-button");
const questionText0 = document.getElementById("question0");
const questionText1 = document.getElementById("question1");
const questionText2 = document.getElementById("question2");
const questionText3 = document.getElementById("question3");

//call quiz function on button click
startBtn.onclick = startQuiz;

//function that starts the quiz
function startQuiz() {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");

    questionsScreen.removeAttribute("class");
    questionsScreen.setAttribute("class", "index");

    //timer function
    setInterval(function timer() {
        timerVar.innerHTML = "Time: " + seconds;
        seconds--;
        if (seconds == 0) {
            alert("Time is up!");

            questionsScreen.setAttribute("class", "hide");
            endScreen.removeAttribute("class");
            endScreen.setAttribute("class", "index");
            timerVar.setAttribute("class", "hide")
            highscorelink.setAttribute("class", "hide")
        }
    }, 1000);

    for (var i = 0; i < questionBtn.length; i++) {
        questionBtn[i].addEventListener("click", function () {
            let userChoice = this.innerHTML;
            console.log(userChoice);

            if (userChoice === questions[0].answer) {
                alert("Corret!");         
            } else {
                alert("Incorrect!");
            }
        });
    }


    function questionUser(num) {
        questionTitle.innerHTML = questions[num].title;
        questionText0.innerHTML = questions[num].choices[0];
        questionText1.innerHTML = questions[num].choices[1];
        questionText2.innerHTML = questions[num].choices[2];
        questionText3.innerHTML = questions[num].choices[3];
    }
    questionUser(0);

}





// function correctAnswer(button) {
//     if (questionText0[button] === questions[button].answer) {
//         alert = "Correct!";
//     } else {
//         alert = "Incorrect! The correct answer was " + questions[button].answer;
//     }
// };




// function appendQuestions(num) {

//     //grabs the correct div for the question choices
//     var choicesDiv = document.getElementById("choices");

//     //creates a p tag for the button to go inside of
//     var questionP1 = document.createElement('P')
//     var questionP2 = document.createElement('P')
//     var questionP3 = document.createElement('P')
//     var questionP4 = document.createElement('P')

//     //creates a button for the question choices
//     var buttonQuestion1 = document.createElement('BUTTON');
//     var buttonQuestion2 = document.createElement('BUTTON');
//     var buttonQuestion3 = document.createElement('BUTTON');
//     var buttonQuestion4 = document.createElement('BUTTON');

//     //creates the text to go inside the button
//     var buttonText1 = document.createTextNode(questions[num].choices[0]);
//     var buttonText2 = document.createTextNode(questions[num].choices[1]);
//     var buttonText3 = document.createTextNode(questions[num].choices[2]);
//     var buttonText4 = document.createTextNode(questions[num].choices[3]);

//     //append question title to the page
//     questionTitle.innerHTML = questions[num].title;

//     //adds text to the button
//     buttonQuestion1.appendChild(buttonText1);
//     buttonQuestion2.appendChild(buttonText2);
//     buttonQuestion3.appendChild(buttonText3);
//     buttonQuestion4.appendChild(buttonText4);

//     //adds a class to each button
//     buttonQuestion1.setAttribute("class", "button-choice1");
//     buttonQuestion2.setAttribute("class", "button-choice2");
//     buttonQuestion3.setAttribute("class", "button-choice3");
//     buttonQuestion4.setAttribute("class", "button-choice4");

//     //adds an id to each button
//     buttonQuestion1.setAttribute("id", "choice");
//     buttonQuestion2.setAttribute("id", "choice");
//     buttonQuestion3.setAttribute("id", "choice");
//     buttonQuestion4.setAttribute("id", "choice");


//     //adds button to the p tag
//     questionP1.appendChild(buttonQuestion1);
//     questionP2.appendChild(buttonQuestion2);
//     questionP3.appendChild(buttonQuestion3);
//     questionP4.appendChild(buttonQuestion4);


//     //adds p tag to the page
//     choicesDiv.appendChild(questionP1);
//     choicesDiv.appendChild(questionP2);
//     choicesDiv.appendChild(questionP3);
//     choicesDiv.appendChild(questionP4);

// };




