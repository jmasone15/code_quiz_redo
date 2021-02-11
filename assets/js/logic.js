const startBtn = document.getElementById("start-button");
const startPage = document.getElementById("start-screen");
const questionPage = document.getElementById("questions");
const questionBtns = document.getElementsByClassName("question-button");
const endPage = document.getElementById("end-screen");
const highscorelink = document.getElementById("highscore-link");
const timerVar = document.getElementById("timer");
const answers = [];
for (let i = 0; i < questions.length; i++) {
    answers.push(questions[i].answer)
}
let seconds = 75;
let questionIndex = 0;

startBtn.onclick = startQuiz;

function startQuiz() {
    startPage.setAttribute("class", "hide");
    questionPage.removeAttribute("class");
    questionPage.setAttribute("class", "index")

    setInterval(function timer() {
        timerVar.innerHTML = "Time: " + seconds;
        seconds--;
        if (seconds == 0) {
            alert("Time is up!");

            questionPage.setAttribute("class", "hide");
            endScreen.removeAttribute("class");
            endScreen.setAttribute("class", "index");
            timerVar.setAttribute("class", "hide")
            highscorelink.setAttribute("class", "hide")
        }
    }, 1000);

    renderQuestion(questionIndex)
}

function renderQuestion(num) {
    const questionTitle = document.getElementById("question-title");
    const questionBtn0 = document.getElementById("question0");
    const questionBtn1 = document.getElementById("question1");
    const questionBtn2 = document.getElementById("question2");
    const questionBtn3 = document.getElementById("question3");

    questionTitle.innerHTML = questions[num].title;
    questionBtn0.innerHTML = questions[num].choices[0];
    questionBtn1.innerHTML = questions[num].choices[1];
    questionBtn2.innerHTML = questions[num].choices[2];
    questionBtn3.innerHTML = questions[num].choices[3];
}

for (let i = 0; i < questionBtns.length; i++) {
    const button = questionBtns[i];
    button.addEventListener("click", () => {
        let answer = button.innerHTML;
        if (answers.includes(answer) === true) {
            alert("Correct!");
            if (questionIndex < 9) {
                questionIndex++
                renderQuestion(questionIndex);
            }
            else if (questionIndex === 9) {
                endQuiz();
            }
        } else {
            alert("Incorrect!");
            if (questionIndex < 9) {
                questionIndex++
                seconds -= 10;
                renderQuestion(questionIndex);
            }
            else if (questionIndex === 9) {
                endQuiz();
            }
        }
    });
}

function endQuiz() {
    questionPage.setAttribute("class", "hide");
    endPage.removeAttribute("class");
    endPage.setAttribute("class", "index");
    timerVar.setAttribute("class", "hide");
    highscorelink.setAttribute("class", "hide");
}