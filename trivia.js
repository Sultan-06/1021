const questions = [
  {
    question: "What was the best part of our first date? ☕",
    options: [
      "Talking and laughing so long we lost track of time 💬",
      "Staring at the menu for 45 minutes 📖",
      "Arguing about pineapple on pizza 🍍"
    ],
    correct: 0
  },
  {
    question: "What happens when 'Our Song' comes on? 🎵",
    options: [
      "We sit quietly 🤫",
      "Instant car concert and terrible high notes! 🎤🚗",
      "We change the radio station 📻"
    ],
    correct: 1
  },
  {
    question: "What do we do beneath the night sky? ✨",
    options: [
      "Go stargazing under one giant blanket 🌙",
      "Build a sandcastle 🏖️",
      "Go shopping at the mall 🛍️"
    ],
    correct: 0
  },
  {
    question: "What is my favorite sound in the world? 😂",
    options: [
      "The morning alarm ⏰",
      "The sound of rain 🌧️",
      "Your laugh 💕"
    ],
    correct: 2
  },
  {
    question: "Who is the cutest birthday girl in the world today? 👑",
    options: [
      "Chloe, of course! 💖",
      "A random penguin 🐧",
      "The birthday cake 🎂"
    ],
    correct: 0
  }
];

let currentQuestion = 0;

const questionView = document.getElementById("trivia-question-view");
const completeView = document.getElementById("trivia-complete-view");
const questionText = document.getElementById("trivia-question");
const stepBadge = document.getElementById("trivia-step-badge");
const progressDots = document.getElementById("trivia-progress-dots");
const optionsContainer = document.getElementById("trivia-options");
const feedback = document.getElementById("trivia-feedback");

function renderQuestion() {
  const question = questions[currentQuestion];
  stepBadge.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionText.textContent = question.question;
  feedback.hidden = true;
  progressDots.replaceChildren(...questions.map((_, index) => {
    const dot = document.createElement("span");
    dot.className = `h-3.5 w-3.5 rounded-full border-2 border-[#3A2A29] ${index <= currentQuestion ? "bg-[#DFB45A]" : "bg-white"}`;
    dot.setAttribute("aria-hidden", "true");
    return dot;
  }));

  optionsContainer.replaceChildren(...question.options.map((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "flex w-full items-center justify-between rounded-xl border-2 border-[#3A2A29] bg-[#FCEEE2] p-3.5 text-left text-sm font-bold text-[#3A2A29] transition hover:translate-x-1 hover:bg-[#FDE8B2]";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(index));
    return button;
  }));
}

function checkAnswer(selectedIndex) {
  if (selectedIndex !== questions[currentQuestion].correct) {
    feedback.textContent = "Not quite! Try again to unlock the next question. 💕";
    feedback.hidden = false;
    return;
  }

  currentQuestion += 1;
  if (currentQuestion === questions.length) {
    questionView.hidden = true;
    completeView.hidden = false;
    return;
  }

  renderQuestion();
}

renderQuestion();
