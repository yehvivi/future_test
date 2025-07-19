
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

  // 顯示每一類的分數與文字建議
  Object.entries(categories).forEach(([cat, scores]) => {
    const total = scores.reduce((a, b) => a + b, 0);
    const avg = total / scores.length;

    const p = document.createElement("p");
    p.innerHTML = `<strong>${cat}</strong>：總分 ${total} ／ 平均 ${avg.toFixed(2)}`;
    app.appendChild(p);

    const advice = document.createElement("div");
    advice.className = "advice";

    let text = "";

    if (cat === "心理穩定性") {
      if (total >= 65) text = "您具備高抗壓與精神穩定性，適合進入高互動節點。";
      else if (total >= 45) text = "整體心理穩定性尚可，建議限制旅程時長並搭配情緒緩衝模組。";
      else text = "心理穩定度偏低，不建議接入旅程。建議接受進一步意識穩定訓練。";
    }

    if (cat === "記憶與意識邊界感") {
      if (total >= 65) text = "記憶區分與自我感強烈，可承受深層角色記憶植入與同步體驗。";
      else if (total >= 45) text = "偶有邊界模糊情形，建議搭配認知屏障模組使用。";
      else text = "邊界感薄弱，容易產生身份混淆與記憶漂移，不建議植入他人記憶。";
    }

    if (cat === "道德彈性與自我認同") {
      if (total >= 65) text = "道德與身份結構穩定，可承擔多重角色模擬任務。";
      else if (total >= 45) text = "認同感略有漂移，建議避開高衝突任務與倫理模擬節點。";
      else text = "道德界線與自我結構極不穩定，不建議用於任何載體。";
    }

    if (cat === "壓力適應力與情緒彈性") {
      if (total >= 65) text = "具備良好情緒彈性，適合進入哲學性與高壓節點任務。";
      else if (total >= 45) text = "可適應常規壓力，但建議避免暴露於過度情緒環境。";
      else text = "壓力耐受度低，建議延後旅程並接受情緒結構強化訓練。";
    }

    if (cat === "身份邊界與意識界線穩定度") {
      if (total >= 65) text = "自我邊界清晰，適合執行身份變化與角色重構任務。";
      else if (total >= 45) text = "存在角色融入傾向，建議限制多重模擬與高仿真環境。";
      else text = "身份解離風險高，請暫緩作為載體，並接受深層回歸訓練。";
    }

    advice.textContent = text;
    app.appendChild(advice);
  });

  // 補上一段整體說明 footer
  const footer = document.createElement("div");
  footer.className = "mt-8 text-sm text-gray-500";
  footer.innerHTML = `
    <hr class="my-4">
    <p>本測驗結果僅作為原木載體適配之初步評估，實際接入需通過 EULYSIA™ 系統之完整人格映射與旅程模擬。</p>
    <p class="mt-2">夢航公司將以最高標準確保所有時空旅客與當地節點意識結構之倫理安全。</p>
  `;
  app.appendChild(footer);
}

// 初始顯示
renderPage();
