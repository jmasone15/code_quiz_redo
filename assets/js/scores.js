const highscoreList = document.getElementById("highscore-list");
const clearHighscores = document.getElementById("clear");

function appendScores() {
    let hs = JSON.parse(localStorage.getItem("highscores"));

    hs.sort((score, otherScore) => {
        return score.score - otherScore.score
    });

    for (let i = 0; i < hs.length; i++) {
        let list = document.createElement("li");
        list.innerText = (hs[i].initials + " : " + hs[i].score);
        highscoreList.insertAdjacentElement("afterend", list);
        list.setAttribute("class", "score")
    }
};

clearHighscores.addEventListener("click", function () {
    alert("All highscores have been cleared!");
    localStorage.clear();
    window.location.reload();
});

appendScores();