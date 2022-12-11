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
mainPage = document.getElementById("startbtn")

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
    question.innerHTML = "Which five colours make up the Olympic rings?"
    option1.innerHTML = "Purple, yellow, black, green and red"
    option2.innerHTML = "Blue, yellow, black, green and red"
    option3.innerHTML = "Blue, yellow, white, green and red"
    option4.innerHTML = "Blue, organge, white, green and red"

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
    question.innerHTML = "What is the biggest animal in the world?"
    option1.innerHTML = "Kodiak bear"
    option2.innerHTML = "Lion"
    option3.innerHTML = "Blue whale"
    option4.innerHTML = "Elephant"

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
    question.innerHTML = "Which is the closest planet to the sun?"
    option1.innerHTML = "Mars"
    option2.innerHTML = "Earth"
    option3.innerHTML = "Neptune"
    option4.innerHTML = "Mercury"

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
    question.innerHTML = "How many valves does the heart have?"
    option1.innerHTML = "1"
    option2.innerHTML = "2"
    option3.innerHTML = "3"
    option4.innerHTML = "4"

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


//Stores highscores in local storage from highest to lowest
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
const max_high_scores = 4;
highscoreEntry = () => {
    mainPage.style.display = 'none';
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

//Displays highscore screen
highscoreDisplay = () => {
    highscore.style.display = 'none';
    home.style.display = 'block';
    highscores.style.display = 'block';
    mainPage.style.display = 'none';

    if (highScores[0]) {
        option1.style.display = 'block';
        option1.innerHTML = highScores[0].name + " " + highScores[0].score
    }
    if (highScores[1]) {
        option2.style.display = 'block';
        option2.innerHTML = highScores[1].name + " " + highScores[1].score
    }
    if (highScores[2]) {
        option3.style.display = 'block';
        option3.innerHTML = highScores[2].name + " " + highScores[2].score
    }
    if (highScores[3]) {
        option4.style.display = 'block';
        option4.innerHTML = highScores[3].name + " " + highScores[3].score
    }

    home.addEventListener("click", () => {
        location.reload();
    })
}

//Displays highscore screen when "high scores" is clicked
highscores.addEventListener("click", () => {
    highscoreDisplay();
})