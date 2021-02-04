//select start button and store
const startBtn = document.getElementById("start-button");
const questionsScreen = document.getElementById("questions");
const endScreen = document.getElementById("end-screen");
const timerVar = document.getElementById("timer");
const highscorelink = document.getElementById("highscore-link");
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

    questionText0.addEventListener("click", function () {
        let answer = this.innerHTML;
        checkAnswer(answer)
    });
    questionText1.addEventListener("click", function () {
        let answer = this.innerHTML;
        checkAnswer(answer)
    });
    questionText2.addEventListener("click", function () {
        let answer = this.innerHTML;
        checkAnswer(answer)
    });
    questionText3.addEventListener("click", function () {
        let answer = this.innerHTML;
        checkAnswer(answer)
    });

}

function checkAnswer(value) {
    if (questionIndex < 10) {
        if (answers.includes(value) === true) {
            console.log(value);
            alert("Correct!");
            questionIndex++;
            renderQuestion(questionIndex);
        } else {
            alert("Incorrect!");
            console.log(value);
            seconds -= 10;
            questionIndex++;
            renderQuestion(questionIndex);
        }
    } else if (questionIndex = 10) {
        if (answers.includes(value) === true) {
            alert("Correct!");
            console.log(value);
            questionIndex++;
            endQuiz();
        } else {
            alert("Incorrect!");
            console.log(value);
            seconds -= 10;
            questionIndex++;
            endQuiz();
        }
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionsScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    endScreen.setAttribute("class", "index");
    timerVar.setAttribute("class", "hide");
    highscorelink.setAttribute("class", "hide");
}