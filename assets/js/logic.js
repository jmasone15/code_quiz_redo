const startBtn = document.getElementById("start-button");
const startPage = document.getElementById("start-screen");
const questionPage = document.getElementById("questions");
const questionBtns = document.getElementsByClassName("question-button");
const endPage = document.getElementById("end-screen");
const highscorelink = document.getElementById("highscore-link");
const timerVar = document.getElementById("timer");
const answers = [];
const userHighscores = [];
for (let i = 0; i < questions.length; i++) {
    answers.push(questions[i].answer)
}
let seconds = 74;
let questionIndex = 0;
let score = 0;

startBtn.onclick = startQuiz;

function startQuiz() {
    startPage.setAttribute("class", "hide");
    questionPage.removeAttribute("class");
    questionPage.setAttribute("class", "index");
    timerVar.removeAttribute("style");

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
                score += seconds;
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
                seconds -= 10;
                score += seconds;
                endQuiz();
            }
        }
    });
}

function endQuiz() {
    let finalScore = document.getElementById("score");
    finalScore.innerHTML = score;

    questionPage.setAttribute("class", "hide");
    endPage.removeAttribute("class");
    endPage.setAttribute("class", "index");
    timerVar.setAttribute("class", "hide");
    highscorelink.setAttribute("class", "hide");
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function () {
    let userInitials = document.getElementById("initials").value;
    let finalScore = score;
    let userFinal = {
        initials: userInitials,
        score: finalScore
    }

    userHighscores.push(userFinal);

    localStorage.setItem("scores", JSON.stringify(userHighscores));
});