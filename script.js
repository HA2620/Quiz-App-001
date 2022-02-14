
const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

var questionCount = 0;
var points = 0;
var userName = "Abc";
var userSelectedAns;
var seconds = 60;



function quizPageLoad() {
  document.querySelector("h1").innerHTML = `Q${questionCount + 1}. ${questions[questionCount].questionText}`
  // document.querySelector(".para").style.display = "none";
  // document.querySelector(".opt-btn").style.display = "block";
  // document.querySelector(".opt-btn").style.display = "block";
  // document.querySelector(".next-btn").style.display = "flex";
  // document.querySelector(".a-btn").style.display = "none";
  // document.querySelector(".name-input").style.display = "none";

  // userName = document.getElementById("f-name").value;

  for (var i = 1; i <= 4; i++) {
    document.querySelector(".opt-" + i).innerHTML = `${questions[questionCount].options[i - 1]}`;
    document.querySelector(".opt-" + i).addEventListener("click", function () {
      userSelectedAns = this.innerHTML;

    });

  }
}

function quizLayout() {
  timer();
  document.querySelector(".para").style.display = "none";
  document.querySelector(".opt-btn").style.display = "block";
  document.querySelector(".opt-btn").style.display = "block";
  document.querySelector(".next-btn").style.display = "flex";
  document.querySelector(".a-btn").style.display = "none";
  document.querySelector(".name-input").style.display = "none";


  userName = document.getElementById("f-name").value;

  if (userName == "") {
    userName = "User";
  }

  quizPageLoad();

  function myFunction() {
    setInterval(function () {
      alert("Hello World!");
    }, 5000);
  }

}

function questionInc() {
  if (userName == '') {
    alert("yey");
  }
  if (userSelectedAns == questions[questionCount].answer) {
    points++;
  }

  if (questionCount == questions.length - 1) {

    scoreShowPage();

  }
  else if (questionCount == questions.length - 2) {
    questionCount++;
    document.querySelector(".next").innerText = "Submit";
    quizPageLoad();
  }

  else {
    questionCount++;
    quizPageLoad();
  }

}

function scoreShowPage() {
  clearInterval(myInterval);
  document.querySelector(".container").setAttribute("style", "text-align: center;");
  document.querySelector(".opt-btn").style.display = "none";
  document.querySelector("h1").innerHTML = `Well Done ! ${userName} <br> You Scored ${points}/5 points <br> Time Remaining : ${seconds} seconds`;
  document.querySelector(".next").setAttribute("style", "margin:auto;");
  document.querySelector(".next").innerHTML = ` <a href="index.html" > Replay ? </a>  `;
}

function timer() {

  var element = document.querySelector(".time");


  myInterval = setInterval(function () {
    if (seconds == 0) {

      ok();
      clearInterval(myInterval);
    }
    if (seconds < 10) {
      element.innerHTML = `00:0${seconds}`;
    }
    else {
      element.innerHTML = `00:${seconds}`;
    }
    seconds--;
  }
    , 1000);

  function ok() {
    scoreShowPage();

  }

}