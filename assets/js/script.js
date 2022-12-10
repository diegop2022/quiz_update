timer = document.getElementById("timer");
start = document.getElementById("start");
option1 = document.getElementById("option1");
option2 = document.getElementById("option2");
option3 = document.getElementById("option3");
option4 = document.getElementById("option4");
question = document.getElementById("question");

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
}

//Starts the game when button is clicked
start.addEventListener("click", () => {
    start.style.display = 'none';
    startTimer();
    question.innerHTML = "question"
    option1.innerHTML = "test"
    option2.innerHTML = "test"
    option3.innerHTML = "test"
    option4.innerHTML = "test"

    option1.addEventListener("click", () => {
        time = time - 10;
    });
    option2.addEventListener("click", () => {
        question2();
    });
    option3.addEventListener("click", () => {
        time = time - 10;
    });
    option4.addEventListener("click", () => {
        time = time - 10;
    });
})

question2 = () => {
    question.innerHTML = "question2"
    option1.innerHTML = "test2"
    option2.innerHTML = "test2"
    option3.innerHTML = "test2"
    option4.innerHTML = "test2"

    option1.addEventListener("click", () => {
        time = time - 10;
    });
    option2.addEventListener("click", () => {
        time = time - 10;
    });
    option3.addEventListener("click", () => {
        question3();
        time = time + 10;
    });
    option4.addEventListener("click", () => {
        time = time - 10;
    });
}

question3 = () => {
    question.innerHTML = "question3"
    option1.innerHTML = "test3"
    option2.innerHTML = "test3"
    option3.innerHTML = "test3"
    option4.innerHTML = "test3"

    option1.addEventListener("click", () => {
        time = time - 10;
    });
    option2.addEventListener("click", () => {
        time = time - 10;
    });
    option3.addEventListener("click", () => {
        time = time - 10;
    });
    option4.addEventListener("click", () => {
        time = time - 10;
    });
}
