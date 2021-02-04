//select start button and store
const startBtn = document.getElementById("start-button");
const questionsScreen = document.getElementById("questions");
const endScreen = document.getElementById("end-screen");
const timerVar = document.getElementById("timer");
const highscorelink = document.getElementById("highscore-link");
const questionBtn = document.getElementsByClassName("question-button");
const userChoice = [];
var seconds = 75;
let questionIndex = 0;

// Build answers array to pull from
const answers = [];
for (let i = 0; i < questions.length; i++) {
    answers.push(questions[i].answer)
}
console.log(answers);


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
    renderQuestion(questionIndex);
}

// Function that adds text to buttons and checks answer choice
function renderQuestion(num) {

    let questionTitle = document.getElementById("question-title");
    let questionText0 = document.getElementById("question0");
    let questionText1 = document.getElementById("question1");
    let questionText2 = document.getElementById("question2");
    let questionText3 = document.getElementById("question3");

    questionTitle.innerHTML = questions[num].title;
    questionText0.innerHTML = questions[num].choices[0];
    questionText1.innerHTML = questions[num].choices[1];
    questionText2.innerHTML = questions[num].choices[2];
    questionText3.innerHTML = questions[num].choices[3];

    questionIndex++
    checkAnswer(num)
}

function checkAnswer(num) {
    if (questionIndex < 10) {
        for (var i = 0; i < questionBtn.length; i++) {
            questionBtn[i].addEventListener("click", function () {
                userChoice.push(this.innerHTML);
                console.log(userChoice);

                if (userChoice[num] === questions[num].answer) {
                    alert("Correct!");
                    renderQuestion(questionIndex);
                } else if (userChoice[num] !== questions[num].answer) {
                    alert("Incorrect!");
                    seconds -= 10;
                    renderQuestion(questionIndex);
                }
            });
        }
    } else if (questionIndex = 10) {
        for (var i = 0; i < questionBtn.length; i++) {
            questionBtn[i].addEventListener("click", function () {
                userChoice.push(this.innerHTML);
                console.log(userChoice);

                if (userChoice[num] === questions[num].answer) {
                    alert("Correct!");
                    endQuiz();
                } else if (userChoice[num] !== questions[num].answer) {
                    alert("Incorrect!");
                    seconds -= 10;
                    endQuiz();
                }
            });
        }
    }
}

function endQuiz() {
    questionsScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    endScreen.setAttribute("class", "index");
    timerVar.setAttribute("class", "hide");
    highscorelink.setAttribute("class", "hide");
}