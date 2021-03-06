function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("The age of A is 10, B is 5, and C is 3. What was the total of their ages? ", [ "a) 17", "b) 18","c) 16", "d) 20"], "b) 18"),
    new Question("Raju walks towards south then she turns right for some distance. What direction he is facing right now?", [ "a) north", "b) south", "c) west", "d) east"], "c) west"),
    new Question(" 3 + 8(5-3) + 1 = ?", [ "a) 20", "b) 21", "c) 19", "d) 17"], "a) 20"),
    new Question(" A is mother <br> B is father,<br> C is daughter,<br> D is son<br>A and B are Wife and Husband<br>then, C and D are ?", [ "a) strangers ", "b)brothers", "c) wife and husband", "d) sister and brother"], "d) sister and brother"),
    new Question(" (2 + 1)(3)", [ "a) 9", "b) 12", "c) 15", "d) 6"], "a) 9"),
    new Question("Today is sunday. After 8days , it will be?", [ "a) Monday", "b) Tuesday","c) Wednesday", "d) Saturday"], "a) Monday"),
    new Question(" 2x = 4x -2 then x= ?", [ "a) 1", "b) 2", "c) 2", "d) none"], "a) 1"),
    new Question(" 40:30 is equal to ",[ "a) 2:3", "b) 3:4", "c) 4:3", "d) 3:2" ], "c) 4:3"),
    new Question(" 1, 3, 5, 7, ? , 11 find missing number", [ "a) 9", "b) 8", "c) 10", "d) none of the above"], "a) 9"),
    new Question(" 100% of 50 = 50, then 50% of 50 = ?", [ "a) 25", "b) 50", "c) 100", "d) 20"], "a) 25")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
