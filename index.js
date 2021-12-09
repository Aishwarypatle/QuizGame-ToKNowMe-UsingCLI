var readlineSync = require('readline-sync');

var score = 0;

var topscorer = [
  {
    name: "Pankhudi",
    score: "4"
  },
  {
    name: "Aniket",
    score: "3"
  }
]

var questions = [
  {
    question: "Where do I Live (native) ? ",
    answer: "Gondia"
  },
  {
    question: "What's my pet name ? ",
    answer: "Trippy"
  },
  {
    question: "What i Am Studying currently ?",
    answer: "Engineering"
  },
  {
    question: "Which is my fav country ?",
    answer: "Australia"
  },
  {
    question: "What is my fav color ?",
    answer: "Black"
  }
]

function welcome() {
  var userName = readlineSync.question("Enter Your Name here : ");
  console.log("Welcome " + userName);
  console.log("\n Lets see how much you know me ")
}

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    score = score + 1;
    console.log("You are right")
  }
  else {
    console.log("You are wrong")
  }

  console.log("Your score is : " + score);
  console.log("-----------------------");

}


function play() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Chack the list of Top Scorer , If you have scored more ,Tell me I'll add your name ");

  topscorer.map(score => console.log(score.name, " : ", score.score))
}

welcome();
play();
showScores();