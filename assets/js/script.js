timer = document.getElementById("timer");
timetitle = document.getElementById("time");
start = document.getElementById("start");
option1 = document.getElementById("option1");
option2 = document.getElementById("option2");
option3 = document.getElementById("option3");
option4 = document.getElementById("option4");
question = document.getElementById("question");
highscore = document.getElementById("highscore");
highscores = document.getElementById("high-scores");
endscore = document.getElementById("score");
initials = document.getElementById("initials");
submit = document.getElementById("submit");
home = document.getElementById("home");

question.style.display = 'none';
option1.style.display = 'none';
option2.style.display = 'none';
option3.style.display = 'none';
option4.style.display = 'none';
highscore.style.display = 'none';
home.style.display = 'none';


//Reloads the page when time runs out
failed = () => {
    question.innerHTML = "Time is up!"
    option1.style.display = 'none';
    option2.style.display = 'none';
    option3.style.display = 'none';
    option4.style.display = 'none';
    setTimeout(() => {
        location.reload();
    }, 3000);
}

//Starts the countdown timer
startTimer = () => {
    time = 60;
    countDown = setInterval(() => {
        time--;
        timer.innerHTML = time;
        if (time <= 0) {
            timer.innerHTML = "Time is up!"
            clearInterval(countDown);
            failed();
        }
    }, 1000)
    stopTimer = () => {
        clearInterval(countDown);
    }
}

//Starts the game when button is clicked
start.addEventListener("click", () => {
    highscores.style.display = "none";
    question.style.display = 'block';
    option1.style.display = 'block';
    option2.style.display = 'block';
    option3.style.display = 'block';
    option4.style.display = 'block';
    score = 0;
    start.style.display = 'none';
    startTimer();
    question.innerHTML = "question"
    option1.innerHTML = "test"
    option2.innerHTML = "test"
    option3.innerHTML = "test"
    option4.innerHTML = "test"

    option1.addEventListener("click", () => {
        if (score == 0) {
            time = time - 10;
        }
    });
    option2.addEventListener("click", () => {
        if (score == 0) {
            question2();
            score = score + 1;
        }
    });
    option3.addEventListener("click", () => {
        if (score == 0) {
            time = time - 10;
        }
    });
    option4.addEventListener("click", () => {
        if (score == 0) {
            time = time - 10;
        }
    });
})

//Display Question 2
question2 = () => {
    question.innerHTML = "question2"
    option1.innerHTML = "test2"
    option2.innerHTML = "test2"
    option3.innerHTML = "test2"
    option4.innerHTML = "test2"

    option1.addEventListener("click", () => {
        if (score == 1) {
            time = time - 10;
        }
    });
    option2.addEventListener("click", () => {
        if (score == 1) {
            time = time - 10;
        }
    });
    option3.addEventListener("click", () => {
        if (score == 1) {
            question3();
            score = score + 1;
        }
    });
    option4.addEventListener("click", () => {
        if (score == 1) {
            time = time - 10;
        }
    });
}

//Display Question 3
question3 = () => {
    question.innerHTML = "question3"
    option1.innerHTML = "test3"
    option2.innerHTML = "test3"
    option3.innerHTML = "test3"
    option4.innerHTML = "test3"

    option1.addEventListener("click", () => {
        if (score == 2) {
            time = time - 10;
        }
    });
    option2.addEventListener("click", () => {
        if (score == 2) {
            time = time - 10;
        }
    });
    option3.addEventListener("click", () => {
        if (score == 2) {
            time = time - 10;
        }
    });
    option4.addEventListener("click", () => {
        if (score == 2) {
            question4()
            score = score + 1;
        }
    });
}

//Display Question 4
question4 = () => {
    question.innerHTML = "question4"
    option1.innerHTML = "test4"
    option2.innerHTML = "test4"
    option3.innerHTML = "test4"
    option4.innerHTML = "test4"

    option1.addEventListener("click", () => {
        if (score == 3) {
            time = time - 10;
        }
    });
    option2.addEventListener("click", () => {
        if (score == 3) {
            time = time - 10;
        }
    });
    option3.addEventListener("click", () => {
        if (score == 3) {
            time = time - 10;
        }
    });
    option4.addEventListener("click", () => {
        if (score == 3) {
            score = score + 1;
            highscoreEntry();
            stopTimer();
        }
    });
}

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
const max_high_scores = 4;
highscoreEntry = () => {
    timetitle.style.display = 'none';
    timer.style.display = 'none';
    question.style.display = 'none';
    option1.style.display = 'none';
    option2.style.display = 'none';
    option3.style.display = 'none';
    option4.style.display = 'none';

    highscore.style.display = 'block';

    endscore.innerHTML = score + time;
    endscore = score + time;

    submit.addEventListener("click", () => {
        const score = {
            score: endscore,
            name: initials.value
        };
        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score)
        highScores.splice(4);
        localStorage.setItem("highScores", JSON.stringify(highScores));

        highscoreDisplay();
    })
}

highscoreDisplay = () => {
    highscore.style.display = 'none';
    home.style.display = 'block';

    if (highScores[0]) {
        option1.style.display = 'block';
    }
    if (highScores[1]) {
        option2.style.display = 'block';
    }
    if (highScores[2]) {
        option3.style.display = 'block';
    }
    if (highScores[3]) {
        option4.style.display = 'block';
    }

    option1.innerHTML = highScores[0].name + " " + highScores[0].score
    option2.innerHTML = highScores[1].name + " " + highScores[1].score
    option3.innerHTML = highScores[2].name + " " + highScores[2].score
    option4.innerHTML = highScores[3].name + " " + highScores[3].score

    home.addEventListener("click", () => {
        location.reload();
    })
}