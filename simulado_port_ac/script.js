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

  nextBtn.disabled = true;
  skipBtn.disabled = false;
}

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
    explanationEl.textContent = "Resposta correta!";
    score++;
  } else {
    explanationEl.textContent = `Resposta incorreta! ${q.explanation}`;
    wrong++;
  }

  scoreEl.textContent = `Acertos: ${score} | Erros: ${wrong}`;
  nextBtn.disabled = false;
  skipBtn.disabled = true;
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
      <button id="restart-btn">Reiniciar</button>
      <button id="rules-btn">Regras de Ortografia</button>
    </div>
  `;
  nextBtn.style.display = "none";
  skipBtn.style.display = "none";

  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
  document.getElementById("rules-btn").addEventListener("click", showRules);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  time = 0;
  nextBtn.style.display = "inline-block";
  skipBtn.style.display = "inline-block";
  scoreEl.textContent = `Acertos: 0 | Erros: 0`;
  timer.textContent = `Tempo: 0s`;
  startTimer();
  loadQuestion(currentQuestion);
}

function showRules() {
  const modal = document.createElement("div");
  modal.id = "rules-modal";
  modal.innerHTML = `
    <div id="rules-content">
      <h2>Regras de Acentuação Gráfica</h2>
      <p>
        <strong>Regras principais:</strong><br>
        1. Palavras oxítonas terminadas em a, e, o, em, ens levam acento.<br>
        2. Palavras paroxítonas não terminadas em a, e, o, em, ens levam acento.<br>
        3. Proparoxítonas sempre levam acento.<br>
        4. Hiatos formados por vogais tônicas seguidas de 'i' ou 'u' levam acento, exceto quando vêm acompanhados de 'nh'.<br>
        5. Palavras com ditongos abertos (éi, ói) levam acento.<br>
        6. A reforma ortográfica eliminou o trema e alguns acentos em ditongos.<br><br>

        <strong>Dicas mnemônicas:</strong><br>
        • "OXI TÃO" - Oxítonas terminadas em A, E, O, EM, ENS são acentuadas.<br>
        • "PRO PAR OXI" - Proparoxítonas sempre acentuadas.<br>
        • "HIATO com I e U" - Atenção ao hiato em vogais I e U que recebem acento.<br>
        • "DITONGOS ABERTOS" - Sempre acentuados.<br><br>

        Para mais detalhes, consulte seu material didático!
      </p>
      <button id="close-rules-btn">Fechar</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("close-rules-btn").addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}

nextBtn.addEventListener("click", nextQuestion);
skipBtn.addEventListener("click", skipQuestion);

loadQuestion(currentQuestion);
startTimer();
