document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestionIndex = 0 ;
  let score = 0 

  startBtn.addEventListener("click" , stratQuiz)

  function stratQuiz() {
    startBtn.classList.add('hidden');
    resultContainer.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    showQuestion()
  }

  function showQuestion() {
    nextBtn.classList.add('hidden')
    questionText.textContent = questions[currentQuestionIndex].question
    choicesList.innerHTML = "" // clear previous choice
    questions[currentQuestionIndex].choices.forEach(choice => {
      const li = document.createElement('li')
      li.textContent = choice 
      li.addEventListener('click')

    })
  }
  function selectAnswer(choice) {
    
  }
});
