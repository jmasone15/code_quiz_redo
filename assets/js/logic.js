//select start button and store
var startBtn = document.getElementById("start-button");
var questionsScreen = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var timerVar = document.getElementById("timer")
var highscorelink = document.getElementById("highscore-link")
var seconds = 75;

//call quiz function on button click
startBtn.onclick = startQuiz;

//function that starts the quiz
function startQuiz () {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");

    questionsScreen.removeAttribute("class");
    questionsScreen.setAttribute("class", "index");

    setInterval(function timer() {
        document.getElementById("timer").innerHTML = "Time: " + seconds;
        seconds -- ;
        if (seconds == 0) {
            alert ("Time is up!");

            questionsScreen.setAttribute("class", "hide");
            endScreen.removeAttribute("class");
            endScreen.setAttribute("class", "index");
            timerVar.setAttribute("class", "hide")
            highscorelink.setAttribute("class", "hide")
        }
    }, 1000);
}