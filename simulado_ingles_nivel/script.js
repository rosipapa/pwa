let currentQuestion = 0;
let score = 0;
let wrong = 0;
let time = 0;
let timerInterval;
let questions = []; // será preenchido dinamicamente

const container = document.getElementById("quiz-container");
const counter = document.getElementById("question-counter");
const scoreEl = document.getElementById("score");
const timer = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const resultEl = document.getElementById("result");

// Embaralhamento de array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Seleciona aleatoriamente 10 questões por nível
function getRandomQuestionsByLevel(allQuestions, countPerLevel = 10) {
  const grouped = {
    B2: allQuestions.filter(q => q.level === "B2"),
    C1: allQuestions.filter(q => q.level === "C1"),
    C2: allQuestions.filter(q => q.level === "C2"),
  };

  return shuffle([
    ...shuffle(grouped.B2).slice(0, countPerLevel),
    ...shuffle(grouped.C1).slice(0, countPerLevel),
    ...shuffle(grouped.C2).slice(0, countPerLevel),
  ]);
}

// Timer
function startTimer() {
  timerInterval = setInterval(() => {
    time++;
    timer.textContent = `Tempo: ${time}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// Carrega a pergunta atual
function loadQuestion(index) {
  const q = questions[index];
  if (!q) return showSummary();

  counter.textContent = `Pergunta ${index + 1} de ${questions.length}`;
  container.innerHTML = `
    <div class="question">
      <h2>${q.q}</h2>
      <div class="options">
        ${q.options
          .map((opt, i) => `<button onclick="selectAnswer(${i})">${opt}</button>`)
          .join("")}
      </div>
      <div id="explanation" style="margin-top:1rem; font-style:italic;"></div>
    </div>
  `;

  nextBtn.disabled = true;
}

// Seleciona a resposta
function selectAnswer(choice) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".options button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    if (i === choice && i !== q.answer) btn.classList.add("wrong");
  });

  const explanationEl = document.getElementById("explanation");
  if (choice === q.answer) {
    explanationEl.textContent = "✅ Resposta correta!";
    score++;
  } else {
    explanationEl.textContent = `❌ Resposta incorreta. ${q.explanation}`;
    wrong++;
  }

  scoreEl.textContent = `Acertos: ${score} | Erros: ${wrong}`;
  nextBtn.disabled = false;
}

// Próxima pergunta
function nextQuestion() {
  currentQuestion++;
  loadQuestion(currentQuestion);
}

// Exibe resultado final
function showSummary() {
  stopTimer();

  const percentage = (score / questions.length) * 100;
  let level = "";
  if (percentage >= 85) {
    level = "Nível C2";
  } else if (percentage >= 65) {
    level = "Nível C1";
  } else {
    level = "Nível B2";
  }

  container.innerHTML = `
    <div class="question">
      <h2>🎉 Fim do simulado!</h2>
      <p>Você acertou ${score} de ${questions.length} questões.</p>
      <p>Erros: ${wrong}</p>
      <p>Tempo total: ${time} segundos</p>
      <p><strong>Seu nível estimado é: ${level}</strong></p>
      <button id="restart-btn2">🔄 Reiniciar</button>
    </div>
  `;

  nextBtn.style.display = "none";

  document.getElementById("restart-btn2").addEventListener("click", startQuiz);
}

// Reinicia tudo
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  time = 0;

  questions = getRandomQuestionsByLevel(allQuestions); // Pega 30 questões novas

  scoreEl.textContent = `Acertos: 0 | Erros: 0`;
  timer.textContent = `Tempo: 0s`;
  nextBtn.style.display = "inline-block";

  startTimer();
  loadQuestion(currentQuestion);
}

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", startQuiz);

startQuiz();
