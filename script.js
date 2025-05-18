let currentQuestion = 0;
let score = 0;
let wrong = 0;
let time = 0;
let timerInterval;

const container = document.getElementById("quiz-container");
const counter = document.getElementById("question-counter");
const scoreEl = document.getElementById("score");
const timer = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");
const skipBtn = document.getElementById("skip-btn");

function startTimer() {
  timerInterval = setInterval(() => {
    time++;
    timer.textContent = `Tempo: ${time}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function loadQuestion(index) {
  const q = questions[index];
  if (!q) return showSummary();

  counter.textContent = `Pergunta ${index + 1} de ${questions.length}`;
  container.innerHTML = `
    <div class="question">
      <h2>${q.q}</h2>
      <div class="options">
        ${q.options
          .map(
            (opt, i) =>
              `<button onclick="selectAnswer(${i})">${opt}</button>`
          )
          .join("")}
      </div>
      <div id="explanation" style="margin-top:1rem; font-style:italic;"></div>
    </div>
  `;
}

function selectAnswer(choice) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".options button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    if (i === choice && i !== q.answer) btn.classList.add("wrong");
  });

  document.getElementById("explanation").textContent = q.explanation;

  if (choice === q.answer) {
    score++;
  } else {
    wrong++;
  }

  scoreEl.textContent = `Acertos: ${score} | Erros: ${wrong}`;
}

function nextQuestion() {
  currentQuestion++;
  loadQuestion(currentQuestion);
}

function skipQuestion() {
  currentQuestion++;
  loadQuestion(currentQuestion);
}

function showSummary() {
  stopTimer();
  container.innerHTML = `
    <div class="question">
      <h2>Fim do simulado!</h2>
      <p>Você acertou ${score} de ${questions.length} questões.</p>
      <p>Erros: ${wrong}</p>
      <p>Tempo total: ${time} segundos</p>
    </div>
  `;
  nextBtn.style.display = "none";
  skipBtn.style.display = "none";
}

nextBtn.addEventListener("click", nextQuestion);
skipBtn.addEventListener("click", skipQuestion);

loadQuestion(currentQuestion);
startTimer();
