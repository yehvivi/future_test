
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
  app.innerHTML = "";

  const categories = {};
  questions.forEach(q => {
    if (!categories[q.category]) {
      categories[q.category] = [];
    }
    const ans = answers.find(a => a.q === q.number);
    if (ans) categories[q.category].push(ans.score);
  });

  const report = document.createElement("div");
  report.className = "report";
  report.innerHTML = `<h2>原木載體心理適配報告</h2>`;

  // ▶ 各分類得分與風險分析
  let highCount = 0;
  let midCount = 0;
  let lowCount = 0;

  Object.entries(categories).forEach(([cat, scores]) => {
    const total = scores.reduce((a, b) => a + b, 0);
    let riskLabel = "";
    let text = "";

    if (total >= 65) {
      riskLabel = "（風險等級：低）";
      lowCount++;
    } else if (total >= 45) {
      riskLabel = "（風險等級：中）";
      midCount++;
    } else {
      riskLabel = "（風險等級：高）";
      highCount++;
    }

    // 對應建議
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

    report.innerHTML += `
      <h3>${cat}：總分 ${total} ${riskLabel}</h3>
      <p class="advice">${text}</p>
    `;
  });

  // ▶ 總體評估與建議
  let overallLabel = "";
  let suggestion = "";

  if (highCount >= 3) {
    overallLabel = "高";
    suggestion = "⚠ 風險過高，建議暫緩作為原木載體，須進行深層意識穩定訓練。";
  } else if (highCount >= 2 || midCount >= 3) {
    overallLabel = "中";
    suggestion = "可執行短時原木載體任務，需限制角色複雜度並搭配情緒監控模組。";
  } else {
    overallLabel = "低";
    suggestion = "可安全接入原木載體任務，可參與中至高互動節點模擬。";
  }

  report.innerHTML += `
    <hr class="my-4">
    <h2>整體總評</h2>
    <p>風險等級：<strong>${overallLabel}</strong></p>
    <p>${suggestion}</p>
  `;

  // ▶ 夢航公司補述說明（約 500 字）
  report.innerHTML += `
    <hr class="my-4">
    <p style="line-height:1.8;">
      本報告由夢航公司意識對映模組 EULYSIA™ 協同生成，根據您的心理答題結果進行多維度風險評估與適配推算。本評估不僅反映您目前的情緒韌性與人格結構，也揭示了您在「作為未來人載體」時可能面臨的身心挑戰。
      <br><br>
      時空旅行雖為 2201 年的重要文明活動之一，但作為原木載體的人類，仍需承擔由他者意識進入體內所產生的壓力與重組風險。我們深知，每一個人的神經網絡皆獨特而脆弱，因此在開放身體共享之前，必須進行嚴格的心理安全審查。您的本次表現為旅程設計與節點選擇提供了具體依據，未來也將由 EULYSIA 根據此次評估結果擬定推薦訓練模組或安全上限規格。
      <br><br>
      若您對旅程仍有任何猶豫，我們建議您重新檢視您的自我定位與風險承受意願，並可預約進階模擬倉試行一次「同步旅程預演」。
    </p>
  `;

  app.appendChild(report);
}


// 初始顯示
renderPage();
