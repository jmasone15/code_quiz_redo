const highscoreList = document.getElementById("highscore-list");
const clearHighscores = document.getElementById("clear");

function appendScores() {
    let hs = JSON.parse(localStorage.getItem("scores"));
    let list = document.createElement("h2");
    for (let i = 0; i < hs.length; i++) {
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