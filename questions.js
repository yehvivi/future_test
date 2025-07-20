const questions = [

  {
    number: "Q1",
    category: "心理穩定性",
    text: `你正專⼼⼯作時，有⼈突然在你⽿邊⼤喊「⽕災了！」但轉頭發現什麼事也沒有。你
會︖`,
    options: [
      { text: `⾺上尖叫並逃離現場`, score: 1 },
      { text: `氣急敗壞，質問對⽅是不是瘋了`, score: 4 },
      { text: `深呼吸，請對⽅說清楚發⽣什麼事`, score: 2 },
      { text: `表情不變，內⼼暗笑對⽅戲太差`, score: 3 }
    ]
  },
  {
    number: "Q2",
    category: "心理穩定性",
    text: `半夜夢⾒⾃⼰被困在透明⽔箱裡，醒來後仍喘不過氣。你怎麼處理︖`,
    options: [
      { text: `⾺上上網查是否是⼼理疾病`, score: 2 },
      { text: `⼀整天⼼神不寧`, score: 1 },
      { text: `跟朋友聊聊或寫下夢的內容`, score: 3 },
      { text: `覺得是⼤腦⾃我排毒，沒什麼好怕的`, score: 4 }
    ]
  },
  {
    number: "Q3",
    category: "心理穩定性",
    text: `當你講了⼀個笑話，現場⼀⽚寂靜無⼈反應時，你會︖`,
    options: [
      { text: `想⽴刻消失`, score: 2 },
      { text: `強顏歡笑，⼼裡很難受`, score: 1 },
      { text: `補⼀句「好吧這是冷笑話」`, score: 3 },
      { text: `故意再講⼀個更冷的試試`, score: 4 }
    ]
  },
  {
    number: "Q4",
    category: "心理穩定性",
    text: `你⾛錯路卻沒發現，結果繞了⼀整圈才回到原點，你會︖`,
    options: [
      { text: `氣急敗壞想怪罪導航`, score: 4 },
      { text: `⼀路碎唸到終點`, score: 1 },
      { text: `默默調整，當作鍛鍊耐性`, score: 2 },
      { text: `想：「反正路也是風景」`, score: 3 }
    ]
  },
  {
    number: "Q5",
    category: "心理穩定性",
    text: `你正在演講時，投影機忽然故障，怎麼辦︖`,
    options: [
      { text: `⾺上慌張，覺得⾃⼰丟臉`, score: 2 },
      { text: `試著道歉並請⼯作⼈員處理`, score: 3 },
      { text: `⾃然接話或講冷笑話帶過`, score: 1 },
      { text: `當作挑戰，享受即興處理的快感`, score: 4 }
    ]
  },
  {
    number: "Q6",
    category: "心理穩定性",
    text: `當你在⼀群⼈⾯前摔了⼀跤，你會︖`,
    options: [
      { text: `想⽴刻逃離現場`, score: 1 },
      { text: `裝作若無其事但很尷尬`, score: 2 },
      { text: `跟著⼤家⼀起笑`, score: 3 },
      { text: `當場表演摔倒續集`, score: 4 }
    ]
  },
  {
    number: "Q7",
    category: "心理穩定性",
    text: `有⼈當眾質疑你能⼒時，你會︖`,
    options: [
      { text: `覺得被否定、委屈難忍`, score: 2 },
      { text: `想證明⾃⼰沒錯`, score: 3 },
      { text: `冷靜反問或引導對⽅說明`, score: 4 },
      { text: `把它當作⼀種⼈性反應`, score: 1 }
    ]
  },
  {
    number: "Q8",
    category: "心理穩定性",
    text: `當朋友突然消失幾個禮拜、不聯絡你，你會︖`,
    options: [
      { text: `感到極度焦慮與失落`, score: 2 },
      { text: `會私訊很多次試圖聯絡`, score: 3 },
      { text: `有點困惑但選擇尊重`, score: 1 },
      { text: `完全可以接受，不特別在意`, score: 4 }
    ]
  },
  {
    number: "Q9",
    category: "心理穩定性",
    text: `有⼈突然邀你參加陌⽣的活動，你會︖`,
    options: [
      { text: `拒絕，因為沒準備`, score: 4 },
      { text: `看情況，有⼈陪才去`, score: 2 },
      { text: `可能會參加，嘗試看看`, score: 3 },
      { text: `很喜歡這樣的突發邀請`, score: 1 }
    ]
  },
  {
    number: "Q10",
    category: "心理穩定性",
    text: `⼯作中出現不可控的錯誤，你的第⼀反應是︖`,
    options: [
      { text: `覺得是⾃⼰無能`, score: 3 },
      { text: `焦躁但試圖解決`, score: 2 },
      { text: `想到幾個備案應對`, score: 4 },
      { text: `認為錯誤是系統⼀部分`, score: 1 }
    ]
  },
  {
    number: "Q11",
    category: "記憶與意識邊界感",
    text: `有天醒來，發現⾃⼰⼿機裡多了幾百段不認得的語⾳備忘錄，每段都是你的聲⾳。你
會︖`,
    options: [
      { text: `⾺上刪掉，這太詭異了`, score: 2 },
      { text: `把其中⼀段放⼤⾳量反覆聽`, score: 3 },
      { text: `上傳到網路問別⼈意⾒`, score: 4 },
      { text: `記錄時間與語調，試圖拼湊其背後邏輯`, score: 1 }
    ]
  },
  {
    number: "Q12",
    category: "記憶與意識邊界感",
    text: `你總覺得某本你從未看過的⼩說，是你寫的。你會︖`,
    options: [
      { text: `拼命否認這個荒謬想法`, score: 4 },
      { text: `去圖書館翻完全部版本`, score: 2 },
      { text: `接受有些創作可能是集體潛意識的產物`, score: 3 },
      { text: `想把那本⼩說再續寫下去，看能否記得劇情`, score: 1 }
    ]
  },
  {
    number: "Q13",
    category: "記憶與意識邊界感",
    text: `某天你在路上看到⼀個⼩孩叫你「媽媽／爸爸」，語氣篤定，你會︖`,
    options: [
      { text: `嚇壞，⾺上轉身逃⾛`, score: 3 },
      { text: `向周圍尋求協助`, score: 1 },
      { text: `詢問⼩孩對你的認識細節`, score: 4 },
      { text: `陪他⾛⼀段路，看看會發⽣什麼`, score: 2 }
    ]
  },
  {
    number: "Q14",
    category: "記憶與意識邊界感",
    text: `你開始頻繁做同⼀個夢，夢中你有不同的名字與家庭。你會︖`,
    options: [
      { text: `當成夢魘試圖阻⽌`, score: 4 },
      { text: `查有無相同案例`, score: 3 },
      { text: `覺得那是另⼀段⼈⽣的遺留`, score: 2 },
      { text: `把那段夢境⼈⽣做成漫畫或⼩說發表`, score: 1 }
    ]
  },
  {
    number: "Q15",
    category: "記憶與意識邊界感",
    text: `朋友跟你提起⼀段共同回憶，但你完全沒印象。你會︖`,
    options: [
      { text: `拒絕承認那段經歷`, score: 1 },
      { text: `強顏歡笑應付過去`, score: 4 },
      { text: `嘗試模擬當下情境重建記憶`, score: 3 },
      { text: `認為也許是朋友記錯或你在另⼀版本的你做過`, score: 2 }
    ]
  },
  {
    number: "Q16",
    category: "記憶與意識邊界感",
    text: `你從未學過鋼琴，但某天⼿會⾃動彈奏。你會︖`,
    options: [
      { text: `拒絕彈奏並封存鋼琴`, score: 4 },
      { text: `詢問家⼈是否曾教過你`, score: 3 },
      { text: `試著練習並記錄⼿感與情緒`, score: 2 },
      { text: `錄⾳，讓未來的⾃⼰分析動機`, score: 1 }
    ]
  },
  {
    number: "Q17",
    category: "記憶與意識邊界感",
    text: `有⼈說你在某個場合做出驚⼈之舉，但你完全不記得，你會︖`,
    options: [
      { text: `否認並要求證據`, score: 2 },
      { text: `覺得像是喝醉或被下藥`, score: 3 },
      { text: `想知道當時的⾃⼰是誰`, score: 1 },
      { text: `默默接受那是「另⼀種⾃⼰」`, score: 4 }
    ]
  },
  {
    number: "Q18",
    category: "記憶與意識邊界感",
    text: `如果能切換成別⼈的記憶與身體，你希望使⽤期限是︖`,
    options: [
      { text: `不超過⼀⼩時`, score: 2 },
      { text: `⼀天內體驗完就好`, score: 1 },
      { text: `⼀週能感受⽣活節奏`, score: 4 },
      { text: `永久切換也無妨`, score: 3 }
    ]
  },
  {
    number: "Q19",
    category: "記憶與意識邊界感",
    text: `當你忘記⼀段重要回憶時，你的第⼀反應是︖`,
    options: [
      { text: `恐慌，覺得記憶構成了我`, score: 1 },
      { text: `難過，但接受⼈腦有局限`, score: 3 },
      { text: `尋找能填補它的⽅法`, score: 2 },
      { text: `當成⼀種清空與重建的機會`, score: 4 }
    ]
  },
  {
    number: "Q20",
    category: "記憶與意識邊界感",
    text: `你夢到⾃⼰⽤別⼈的身體在⽣活，醒來後那種感覺非常真實。你會︖`,
    options: [
      { text: `嘗試擺脫這種不適感`, score: 1 },
      { text: `研究夢裡場景的細節`, score: 4 },
      { text: `把它當成跨意識體驗`, score: 2 },
      { text: `更希望明晚能再接著夢`, score: 3 }
    ]
  },
  {
    number: "Q21",
    category: "記憶與意識邊界感",
    text: `有⼈說你和他⼩時候在某個機構⼀起長⼤，但你完全沒這段記憶。你會︖`,
    options: [
      { text: `認為對⽅搞錯了⼈`, score: 2 },
      { text: `找機會去那個地⽅看看`, score: 1 },
      { text: `嘗試觸發記憶`, score: 3 },
      { text: `開始懷疑⾃⼰從哪來`, score: 4 }
    ]
  },
  {
    number: "Q22",
    category: "記憶與意識邊界感",
    text: `有時你在照鏡⼦時會覺得「那個⼈」不太像你，這種情況你會︖`,
    options: [
      { text: `避免照鏡⼦`, score: 2 },
      { text: `覺得是光線問題`, score: 1 },
      { text: `開始審視⾃⼰變化了什麼`, score: 4 },
      { text: `跟鏡中⾃⼰對話找出不同`, score: 3 }
    ]
  },
  {
    number: "Q23",
    category: "記憶與意識邊界感",
    text: `如果某天你發現別⼈也擁有你⼀模⼀樣的記憶與情感，你會︖`,
    options: [
      { text: `把對⽅當成威脅排除掉`, score: 3 },
      { text: `強烈想知道對⽅的存在原因`, score: 4 },
      { text: `與他合作探索共同記憶`, score: 2 },
      { text: `問對⽅你們誰是原始版本`, score: 1 }
    ]
  },
  {
    number: "Q24",
    category: "記憶與意識邊界感",
    text: `你對「我是誰」這件事，最接近哪種理解︖`,
    options: [
      { text: `⼀連串不連續記憶的集合`, score: 2 },
      { text: `⼀套穩定的核⼼與身份`, score: 3 },
      { text: `⼀種浮動的社會角⾊組合`, score: 4 },
      { text: `⼀個意識乘載器在不斷變形`, score: 1 }
    ]
  },
  {
    number: "Q25",
    category: "道德彈性與自我認同",
    text: `每次你說謊，路邊的狗就會吐。你會︖`,
    options: [
      { text: `嘗試說出更多謊測試牠們的極限`, score: 1 },
      { text: `開始完全不說謊`, score: 3 },
      { text: `只在沒狗的地⽅說謊`, score: 4 },
      { text: `覺得狗的反應是⼀種誠實提醒`, score: 2 }
    ]
  },
  {
    number: "Q26",
    category: "道德彈性與自我認同",
    text: `每當你對某⼈產⽣同情，那⼈會莫名變成你。你會︖`,
    options: [
      { text: `避免對任何⼈產⽣感情`, score: 1 },
      { text: `測試變化範圍，找出規律`, score: 4 },
      { text: `享受當他⼈的過程`, score: 3 },
      { text: `與「變成⾃⼰的⼈」⼀起⽣活`, score: 2 }
    ]
  },
  {
    number: "Q27",
    category: "道德彈性與自我認同",
    text: `有⼈把你⼗年前的想法寫成⼀本書並出版，你發現全世界都以那本書的內容為道德依
據。你會︖`,
    options: [
      { text: `對此感到愧疚`, score: 1 },
      { text: `重新修訂那本書`, score: 4 },
      { text: `利⽤這地位建⽴教派`, score: 2 },
      { text: `裝作與你無關`, score: 3 }
    ]
  },
  {
    number: "Q28",
    category: "道德彈性與自我認同",
    text: `你在超市看到⼀架空的購物⾞寫著「請偷我」，你會︖`,
    options: [
      { text: `覺得這是陷阱，不理會`, score: 4 },
      { text: `偷⾛它看看會發⽣什麼`, score: 2 },
      { text: `報告給店員`, score: 1 },
      { text: `把⾃⼰的東西放上去測試別⼈反應`, score: 3 }
    ]
  },
  {
    number: "Q29",
    category: "道德彈性與自我認同",
    text: `你發現你每做⼀次好事，某個陌⽣⼈就遭遇壞運。你會︖`,
    options: [
      { text: `停⽌所有好事⾏為`, score: 1 },
      { text: `試圖追蹤影響範圍`, score: 3 },
      { text: `把「做好事」定義為內在無⾏動的善意`, score: 2 },
      { text: `嘗試讓壞運的⼈們團結起來`, score: 4 }
    ]
  },
  {
    number: "Q30",
    category: "道德彈性與自我認同",
    text: `你正在社群平台上維持⼀個完全與你現實不同的虛構⼈格，且已成為網紅。你會︖`,
    options: [
      { text: `壓⼒太⼤選擇關掉帳號`, score: 1 },
      { text: `繼續扮演，並享受身份切換`, score: 4 },
      { text: `把真實的你也納入角⾊中`, score: 3 },
      { text: `讓兩個⼈格開始公開對話`, score: 2 }
    ]
  },
  {
    number: "Q31",
    category: "道德彈性與自我認同",
    text: `有⼈請你假扮他，參加他母親的喪禮，你會︖`,
    options: [
      { text: `拒絕，太荒謬`, score: 4 },
      { text: `覺得很有挑戰性，願意嘗試`, score: 1 },
      { text: `仔細練習模仿再出席`, score: 2 },
      { text: `利⽤這機會觀察他⼈對他的感情`, score: 3 }
    ]
  },
  {
    number: "Q32",
    category: "道德彈性與自我認同",
    text: `每當你說出「我」這個字，你就會失去⼀個記憶⽚段。你會︖`,
    options: [
      { text: `徹底避免使⽤「我」`, score: 3 },
      { text: `記錄下記憶流失過程`, score: 2 },
      { text: `開始改變說話⽅式`, score: 1 },
      { text: `測試是否只有「我」這個⾳才有效`, score: 4 }
    ]
  },
  {
    number: "Q33",
    category: "道德彈性與自我認同",
    text: `你夢⾒⾃⼰正在吃⾃⼰。醒來後發現少了⼀根指甲。你會︖`,
    options: [
      { text: `驚慌檢查全身`, score: 4 },
      { text: `嘗試還原夢境找答案`, score: 2 },
      { text: `把指甲做成項鍊`, score: 3 },
      { text: `覺得⾃體消耗是⾃然現象`, score: 1 }
    ]
  },
  {
    number: "Q34",
    category: "道德彈性與自我認同",
    text: `你打開錄影檔發現⾃⼰昨天做了⼀件完全不記得的事，還非常投入。你會︖`,
    options: [
      { text: `想辦法查清真相`, score: 4 },
      { text: `感到不安但當作⼈⽣⽚段`, score: 1 },
      { text: `上傳影⽚並觀察網友反應`, score: 3 },
      { text: `懷疑是不是另⼀個你在⾏動`, score: 2 }
    ]
  },
  {
    number: "Q35",
    category: "道德彈性與自我認同",
    text: `你開始收到陌⽣⼈寄來的道歉信，稱你是他們的受害者。你會︖`,
    options: [
      { text: `完全否認曾與他們接觸`, score: 1 },
      { text: `保存所有信件調查事件背景`, score: 2 },
      { text: `感到困惑但接受他們的懺悔`, score: 3 },
      { text: `覺得世界正在把你寫成某種角⾊`, score: 4 }
    ]
  },
  {
    number: "Q36",
    category: "壓力適應力與情緒彈性",
    text: `你在夢裡死去，醒來後感到極度平靜。你會怎麼解讀這種感覺︖`,
    options: [
      { text: `這代表某種⼼靈結束，我應該重新做⼈`, score: 2 },
      { text: `我可能正在壓抑某些痛苦⽽不⾃知`, score: 4 },
      { text: `我只是接受死亡的其中⼀種樣貌`, score: 1 },
      { text: `死亡是種解脫，這很正常`, score: 3 }
    ]
  },
  {
    number: "Q37",
    category: "壓力適應力與情緒彈性",
    text: `當你無法控制情緒時，你會︖`,
    options: [
      { text: `完全封鎖⾃⼰，直到冷靜`, score: 1 },
      { text: `急著找出⼜發洩出去`, score: 3 },
      { text: `讓情緒全盤接管我`, score: 2 },
      { text: `觀察它，就像看別⼈發瘋`, score: 4 }
    ]
  },
  {
    number: "Q38",
    category: "壓力適應力與情緒彈性",
    text: `當⼀切計劃都泡湯，你⼼中第⼀個念頭是︖`,
    options: [
      { text: `「都是誰害的」`, score: 1 },
      { text: `「這代表我根本沒能⼒」`, score: 3 },
      { text: `「⼀定還有其他選項」`, score: 4 },
      { text: `「沒關係，我還活著」`, score: 2 }
    ]
  },
  {
    number: "Q39",
    category: "壓力適應力與情緒彈性",
    text: `你掉進⼀個不停循環的場景中，你的第⼀反應是︖`,
    options: [
      { text: `想盡辦法逃出去`, score: 4 },
      { text: `以為⾃⼰精神出了問題`, score: 1 },
      { text: `嘗試找出其中的規律`, score: 3 },
      { text: `沉浸其中，看它會發展到哪`, score: 2 }
    ]
  },
  {
    number: "Q40",
    category: "壓力適應力與情緒彈性",
    text: `當你⽬睹⾃⼰最愛的⼈在夢中不斷毀壞你熟悉的事物時，你醒來會︖`,
    options: [
      { text: `無法原諒對⽅，即便那只是夢`, score: 1 },
      { text: `覺得這是潛意識的警訊`, score: 2 },
      { text: `不太在意，夢⽽已`, score: 3 },
      { text: `產⽣⼀種新的理解與距離感`, score: 4 }
    ]
  },
  {
    number: "Q41",
    category: "壓力適應力與情緒彈性",
    text: `被困在⼤霧中，你什麼也看不⾒，只能原地等待。你內⼼︖`,
    options: [
      { text: `焦躁不安，不斷計時`, score: 2 },
      { text: `想像恐怖情節會不會發⽣`, score: 3 },
      { text: `專注感受⾃⼰的呼吸與存在`, score: 4 },
      { text: `覺得這是⼀場很美的孤獨體驗`, score: 1 }
    ]
  },
  {
    number: "Q42",
    category: "壓力適應力與情緒彈性",
    text: `當陌⽣⼈無故攻擊你⼈格，你最可能的反應是︖`,
    options: [
      { text: `⽴刻反擊與辯護`, score: 3 },
      { text: `表⾯笑笑，內⼼痛罵`, score: 2 },
      { text: `試圖理解對⽅為什麼這麼說`, score: 1 },
      { text: `覺得這跟我無關`, score: 4 }
    ]
  },
  {
    number: "Q43",
    category: "壓力適應力與情緒彈性",
    text: `在完全⿊暗中你無法確認⾃⼰是否還存在時，你會︖`,
    options: [
      { text: `呼叫外界尋找證據`, score: 4 },
      { text: `⽤⼒觸碰⾃⼰的身體`, score: 2 },
      { text: `開始與⾃⼰對話`, score: 1 },
      { text: `接受這種「可能不在」的狀態`, score: 3 }
    ]
  },
  {
    number: "Q44",
    category: "壓力適應力與情緒彈性",
    text: `當所有⼈都認為你錯了，你卻覺得⾃⼰是對的，你會︖`,
    options: [
      { text: `壓下⾃⼰，接受眾意`, score: 4 },
      { text: `激烈反抗並堅持⾃⼰`, score: 3 },
      { text: `懷疑⾃⼰是不是瘋了`, score: 1 },
      { text: `⽤⾏動證明什麼才是真的`, score: 2 }
    ]
  },
  {
    number: "Q45",
    category: "壓力適應力與情緒彈性",
    text: `你正經歷巨⼤打擊，朋友說：「你會從這學到寶貴的教訓。」你⼼裡︖`,
    options: [
      { text: `覺得對⽅根本不懂我`, score: 3 },
      { text: `想咬牙忍過去，證明⾃⼰很強`, score: 1 },
      { text: `疑問⼈⽣到底要學幾課`, score: 4 },
      { text: `默默記下，將來再說`, score: 2 }
    ]
  },
  {
    number: "Q46",
    category: "壓力適應力與情緒彈性",
    text: `當你快崩潰時，你最常做什麼︖`,
    options: [
      { text: `找朋友傾訴`, score: 3 },
      { text: `逃避⼀切，關機躲起來`, score: 1 },
      { text: `看⼀場悲劇電影來排毒`, score: 2 },
      { text: `故意過度忙碌轉移注意`, score: 4 }
    ]
  },
  {
    number: "Q47",
    category: "壓力適應力與情緒彈性",
    text: `⼀個⼈說：「你越痛苦，代表越接近真理。」你會︖`,
    options: [
      { text: `覺得這是虐待⾃⼰的藉口`, score: 1 },
      { text: `反問對⽅什麼是真理`, score: 3 },
      { text: `⼀半相信⼀半懷疑`, score: 2 },
      { text: `默默記下這句話`, score: 4 }
    ]
  },
  {
    number: "Q48",
    category: "壓力適應力與情緒彈性",
    text: `你是否相信所有情緒都是「有⽤的訊號」︖`,
    options: [
      { text: `不可能，有些情緒只會害⼈`, score: 2 },
      { text: `是的，每⼀種情緒都值得尊重`, score: 4 },
      { text: `我不確定，但我試圖相信`, score: 3 },
      { text: `我不相信，但我會利⽤它們`, score: 1 }
    ]
  },
  {
    number: "Q49",
    category: "壓力適應力與情緒彈性",
    text: `⼀件事讓你痛苦了⼗年。現在有⼈說：「你早該放下。」你會︖`,
    options: [
      { text: `憤怒與羞愧交雜`, score: 3 },
      { text: `認為他說的有道理`, score: 1 },
      { text: `覺得「放下」本身是暴⼒的要求`, score: 2 },
      { text: `嘗試重新定義「放下」`, score: 4 }
    ]
  },
  {
    number: "Q50",
    category: "壓力適應力與情緒彈性",
    text: `你無法再愛任何⼈，但也無法感到孤單。這種狀態你會︖`,
    options: [
      { text: `覺得⾃⼰有病`, score: 3 },
      { text: `接受這就是⼀種情緒樣貌`, score: 1 },
      { text: `重新思考「愛」的定義`, score: 4 },
      { text: `將之視為⼀種新的⼈⽣段落`, score: 2 }
    ]
  },
  {
    number: "Q51",
    category: "身份邊界與意識界線穩定度",
    text: `有⼈⽤你名字在網路上發⽂，內容和你無關但沒⼈發現錯誤。你會︖`,
    options: [
      { text: `⾺上澄清並要求刪除`, score: 2 },
      { text: `感到不舒服但懶得處理`, score: 3 },
      { text: `有點好奇別⼈怎麼看你`, score: 4 },
      { text: `覺得「也許那也是我某⼀⾯」`, score: 1 }
    ]
  },
  {
    number: "Q52",
    category: "身份邊界與意識界線穩定度",
    text: `有⼈叫錯你名字，你懶得糾正。三個⽉後他還是這樣叫，你會︖`,
    options: [
      { text: `正式更正，不能再忍了`, score: 1 },
      { text: `覺得這樣叫也蠻有趣`, score: 4 },
      { text: `想看看他什麼時候發現`, score: 3 },
      { text: `開始懷疑⾃⼰是不是真叫那個名字`, score: 2 }
    ]
  },
  {
    number: "Q53",
    category: "身份邊界與意識界線穩定度",
    text: `當你在閱讀⼩說時，有時會完全進入角⾊的情緒，你覺得︖`,
    options: [
      { text: `很不喜歡，覺得⼈格被混淆`, score: 3 },
      { text: `有時會覺得難以抽離`, score: 4 },
      { text: `這是種深度閱讀經驗`, score: 1 },
      { text: `我其實很常不知道我在哪邊結束`, score: 2 }
    ]
  },
  {
    number: "Q54",
    category: "身份邊界與意識界線穩定度",
    text: `你幫別⼈代筆寫信，對⽅說「這就像我⾃⼰寫的」，你會︖`,
    options: [
      { text: `覺得被模糊界線，不舒服`, score: 2 },
      { text: `有點得意但也疑惑`, score: 1 },
      { text: `很開⼼⾃⼰的⽂風被認可`, score: 4 },
      { text: `開始思考語⾔是不是會擁有我`, score: 3 }
    ]
  },
  {
    number: "Q55",
    category: "身份邊界與意識界線穩定度",
    text: `某天你在街上被陌⽣⼈熱情打招呼，對⽅堅持你們以前⾒過。你會︖`,
    options: [
      { text: `堅定否認並快步離開`, score: 1 },
      { text: `尷尬地敷衍幾句就⾛`, score: 2 },
      { text: `假裝熟悉聊⼀下`, score: 4 },
      { text: `懷疑⾃⼰有另⼀個⼈⽣`, score: 3 }
    ]
  },
  {
    number: "Q56",
    category: "身份邊界與意識界線穩定度",
    text: `如果你需要長期照顧⼀個失智長輩，他常把你認成他兒⼦。你會︖`,
    options: [
      { text: `每次都糾正他`, score: 1 },
      { text: `偶爾配合但內⼼不適`, score: 2 },
      { text: `覺得只要他安⼼就好`, score: 3 },
      { text: `開始進入這個角⾊，不再抗拒`, score: 4 }
    ]
  },
  {
    number: "Q57",
    category: "身份邊界與意識界線穩定度",
    text: `當你在社群上創造⼀個分身帳號久了，你覺得︖`,
    options: [
      { text: `這樣太分裂，不健康`, score: 2 },
      { text: `分身常變成主要帳號`, score: 1 },
      { text: `分身像是我某⼀個版本`, score: 3 },
      { text: `有時我更相信那個才是我`, score: 4 }
    ]
  },
  {
    number: "Q58",
    category: "身份邊界與意識界線穩定度",
    text: `有朋友說你很容易「適應別⼈的情緒」，你怎麼看︖`,
    options: [
      { text: `其實我都很清楚那不是我`, score: 2 },
      { text: `有時會被牽著⾛`, score: 4 },
      { text: `我把這當⼀種天賦`, score: 1 },
      { text: `我早就搞不清哪些是我⾃⼰的情緒了`, score: 3 }
    ]
  },
  {
    number: "Q59",
    category: "身份邊界與意識界線穩定度",
    text: `在不同語⾔裡，你的性格會轉變嗎︖`,
    options: [
      { text: `我努⼒讓⾃⼰保持⼀致`, score: 2 },
      { text: `語⾔多少會影響我表現`, score: 1 },
      { text: `會有明顯變化但我能接受`, score: 3 },
      { text: `我是誰，完全取決於我說什麼語⾔`, score: 4 }
    ]
  },
  {
    number: "Q60",
    category: "身份邊界與意識界線穩定度",
    text: `當你在鏡⼦前連續盯著⾃⼰看	10	分鐘，你的感覺是︖`,
    options: [
      { text: `很快分神，覺得無趣`, score: 4 },
      { text: `感到輕微不適`, score: 2 },
      { text: `有點出神但仍清楚⾃⼰`, score: 3 },
      { text: `覺得⾯孔開始變得陌⽣`, score: 1 }
    ]
  },
  {
    number: "Q61",
    category: "身份邊界與意識界線穩定度",
    text: `你是否曾在對話中感到「對⽅說的話其實是我應該說的」︖`,
    options: [
      { text: `從不會這樣感覺`, score: 3 },
      { text: `有幾次這種錯覺`, score: 2 },
      { text: `常常有奇妙同步感`, score: 4 },
      { text: `我懷疑我們曾是同⼀個⼈`, score: 1 }
    ]
  },
  {
    number: "Q62",
    category: "身份邊界與意識界線穩定度",
    text: `你願意為了⽣存、徹底換⼀種⼈格⽣活嗎︖`,
    options: [
      { text: `不願意，這樣就不是我了`, score: 1 },
      { text: `會猶豫但能嘗試調整`, score: 4 },
      { text: `若有需求，角⾊是可以改變的`, score: 2 },
      { text: `我本來就不只⼀個我`, score: 3 }
    ]
  },
  {
    number: "Q63",
    category: "身份邊界與意識界線穩定度",
    text: `如果你發現別⼈使⽤你照⽚假裝是你，還被多⼈認同。你會︖`,
    options: [
      { text: `⾺上反擊並報警`, score: 3 },
      { text: `感到受辱但懶得理`, score: 1 },
      { text: `觀察⼀段時間再決定`, score: 4 },
      { text: `看著那個⼈活成某個「我」其實也蠻震撼的`, score: 2 }
    ]
  },
  {
    number: "Q64",
    category: "身份邊界與意識界線穩定度",
    text: `如果所有⼈都⼀致告訴你：「你不是你」，你會︖`,
    options: [
      { text: `極⼒反駁，保護真實⾃我`, score: 1 },
      { text: `動搖但會找證據⾃證`, score: 3 },
      { text: `觀察他們為何這麼說`, score: 2 },
      { text: `開始思考「那我是誰︖」`, score: 4 }
    ]
  },
];
