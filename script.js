
let currentPage = 0;
const questionsPerPage = 20;
let answers = [];

function renderPage() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const pageQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const progress = document.createElement("div");
  progress.className = "progress";
  progress.textContent = `目前進度：${currentPage + 1} / ${questions.length / questionsPerPage}`;
  app.appendChild(progress);

  pageQuestions.forEach((q, index) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";

    const qText = document.createElement("p");
    qText.textContent = `${q.number}｜${q.text}`;
    qDiv.appendChild(qText);

    const optionsList = document.createElement("ul");
    optionsList.className = "options";

    q.options.forEach((opt, i) => {
      const li = document.createElement("li");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `${q.number}`;
      radio.value = opt.score;
      radio.onclick = () => recordAnswer(q.number, opt.score);
      li.appendChild(radio);
      li.appendChild(document.createTextNode(" " + opt.text));
      optionsList.appendChild(li);
    });

    qDiv.appendChild(optionsList);
    app.appendChild(qDiv);
  });

  const nextBtn = document.createElement("button");
  nextBtn.textContent = currentPage < questions.length / questionsPerPage - 1 ? "下一頁" : "送出結果";
  nextBtn.onclick = () => {
    if (currentPage < questions.length / questionsPerPage - 1) {
      currentPage++;
      renderPage();
    } else {
      renderResult();
    }
  };
  app.appendChild(nextBtn);
}

function recordAnswer(qNum, score) {
  const existing = answers.find(a => a.q === qNum);
  if (existing) {
    existing.score = score;
  } else {
    answers.push({ q: qNum, score });
  }
}

function renderResult() {
  const app = document.getElementById("app");
  app.innerHTML = "<h2>測驗結果</h2>";

  const categories = {};
  questions.forEach(q => {
    if (!categories[q.category]) {
      categories[q.category] = [];
    }
    const ans = answers.find(a => a.q === q.number);
    if (ans) categories[q.category].push(ans.score);
  });

  Object.entries(categories).forEach(([cat, scores]) => {
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    const p = document.createElement("p");
    p.textContent = `${cat}：總分 ${scores.reduce((a, b) => a + b, 0)} ／ 平均 ${avg.toFixed(2)}`;
    app.appendChild(p);
  });
}

// 初始顯示
renderPage();
