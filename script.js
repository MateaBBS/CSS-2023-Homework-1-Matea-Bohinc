//Quiz questions
const questions = [
  {
    question: "What country has the most natural lakes?",
    a: "Canada",
    b: "Finland",
    c: "India",
    d: "Greece",
    e: "Scotland",
    correct: "a",
  },
  {
    question: "Which African nation has the most pyramids?",
    a: "Egypt",
    b: "Sudan",
    c: "Algeria",
    d: "Lybia",
    e: "Somalia",
    correct: "b",
  },
  {
    question: "What was the name of the supercontinent of 200 million years ago?",
    a: "Pangloss",
    b: "Pangaea",
    c: "Panama",
    d: "Pantarctica",
    e: "none of the above",
    correct: "b",
  },
  {
    question: "Where is the world’s highest annual average rainfall?",
    a: "Greenland",
    b: "Hawaii",
    c: "Costa Rica",
    d: "India",
    e: "Thailand",
    correct: "b",
  },
  {
    question: "What capital city is officially called Krung Thep Mahanakhon Amon Rattanakosin Mahinthara Yuthaya Mahadilok Phop Noppharat Ratchathani Burirom Udomratchaniwet Mahasathan Amon Piman Awatan Sathit Sakkathattiya Witsanukam Prasit?",
    a: "Beijing",
    b: "Cardiff",
    c: "Bangkok",
    d: "Vientiane",
    e: "Hanoi",
    correct: "c",
  },
];

//Fetching the HTML elements
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitButton = document.getElementById("submit");

//Counters
let currentQuiz = 0;
let score = 0;

//Function that deselects all answers
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

//Function that deselects all answers
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

//Function that loads the quiz (deselects the answers, sets the initial questions and it's possible answers)
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = questions[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
};

//Loading the quiz
loadQuiz();

//Trigger that checks the validity of the answer
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === questions[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < questions.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${questions.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});

