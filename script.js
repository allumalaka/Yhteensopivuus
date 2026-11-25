
const questions = [
  {
    tag: "ARKI",
    text: "Mikä pieni asia tekee tavallisesta päivästä paremman?",
    answers: [
      "Hyvä kahvi tai ruoka",
      "Musiikki kuulokkeissa",
      "Yllättävä viesti",
      "Se, että saan olla rauhassa"
    ]
  },
  {
    tag: "VAPAA-AIKA",
    text: "Miten viettäisit täydellisen vapaapäivän?",
    answers: [
      "Spontaani reissu",
      "Koti, hyvä sarja ja ruokaa",
      "Pitkä kävely tai ulkoilu",
      "Ystäviä, musiikkia ja menoa"
    ]
  },
  {
    tag: "UTELIAISUUS",
    text: "Minkä taidon haluaisit osata ilman harjoittelua?",
    answers: [
      "Soittaa mitä tahansa instrumenttia",
      "Puhua kaikkia kieliä",
      "Valmistaa täydellistä ruokaa",
      "Lukea ihmisten ajatuksia"
    ]
  },
  {
    tag: "LUONNE",
    text: "Millaisessa seurassa olet eniten oma itsesi?",
    answers: [
      "Kun saa nauraa typerille jutuille",
      "Kun hiljaisuutta ei tarvitse täyttää",
      "Kun voi puhua ihan mistä vain",
      "Kun tekeminen yhdistää"
    ]
  },
  {
    tag: "ELÄMÄ",
    text: "Jos saisit teleportata tunniksi minne tahansa, minne menisit?",
    answers: [
      "Meren äärelle",
      "Lempikaupunkiin",
      "Luontoon tai vuorille",
      "Jonkun tärkeän ihmisen luo"
    ]
  },
  {
    tag: "ARVOT",
    text: "Mitä arvostat ihmisessä erityisen paljon?",
    answers: [
      "Johdonmukaisuutta",
      "Huumorintajua",
      "Kykyä kuunnella",
      "Rohkeutta olla oma itsensä"
    ]
  },
  {
    tag: "AJATUKSET",
    text: "Milloin tunnet olevasi aidosti ymmärretty?",
    answers: [
      "Kun toinen kuuntelee rauhassa",
      "Kun joku huomaa pienet muutokset",
      "Kun hiljaisuus tuntuu luonnolliselta",
      "Kun voin näyttää keskeneräisyyteni"
    ]
  },
  {
    tag: "KASVU",
    text: "Mitä olet oppinut itsestäsi viime vuosina?",
    answers: [
      "En tarvitse jatkuvaa hyväksyntää",
      "Olen vahvempi kuin luulin",
      "Rauha on joskus tärkeämpää kuin oikeassa oleminen",
      "Opin yhä, eikä se haittaa"
    ]
  },
  {
    tag: "TULEVAISUUS",
    text: "Mikä motivoi sinua eniten?",
    answers: [
      "Oman potentiaalin saavuttaminen",
      "Vapaus ja itsenäisyys",
      "Merkitykselliset ihmiset",
      "Uudet kokemukset"
    ]
  },
  {
    tag: "MUISTOT",
    text: "Millaisen muiston haluaisit kokea uudelleen?",
    answers: [
      "Hetken, jolloin nauroin täysin vapaasti",
      "Onnistumisen, jonka eteen tein töitä",
      "Yksinkertaisen rauhallisen päivän",
      "Hetken jonkun tärkeän ihmisen kanssa"
    ]
  },
  {
    tag: "MIELENRAUHA",
    text: "Mikä auttaa sinua palautumaan kiireestä?",
    answers: [
      "Liikunta tai tekeminen",
      "Oma rauha ja hiljaisuus",
      "Ystävän kanssa puhuminen",
      "Musiikki, elokuvat tai pelaaminen"
    ]
  },
  {
    tag: "ROHKEUS",
    text: "Mitä tekisit, jos et pelkäisi epäonnistumista?",
    answers: [
      "Lähtisin tavoittelemaan suurta unelmaa",
      "Sanoisin suoraan, mitä ajattelen",
      "Kokeilisin jotain täysin uutta",
      "Ottaisin enemmän aikaa itselleni"
    ]
  },
  {
    tag: "YHTEYS",
    text: "Mikä saa sinut kiinnostumaan toisesta ihmisestä?",
    answers: [
      "Aito ja avoin keskustelu",
      "Huumori ja yhteinen energia",
      "Rauhallinen ja turvallinen olemus",
      "Se, että ihmisessä on jotain arvoituksellista"
    ]
  },
  {
    tag: "VIESTINTÄ",
    text: "Miten yleensä osoitat välittäväsi?",
    answers: [
      "Olemalla läsnä",
      "Tekemällä pieniä tekoja",
      "Sanomalla asiat suoraan",
      "Muistamalla yksityiskohtia"
    ]
  },
  {
    tag: "PÄÄTÖKSET",
    text: "Miten teet yleensä tärkeät päätökset?",
    answers: [
      "Analysoin vaihtoehdot tarkasti",
      "Luotan intuitiooni",
      "Puhun asiasta jonkun kanssa",
      "Annan ajatuksen kypsyä"
    ]
  },
  {
    tag: "ELÄMÄNTAPA",
    text: "Mikä kuvaa sinua parhaiten?",
    answers: [
      "Tavoitteellinen ja kunnianhimoinen",
      "Rento ja hetkessä elävä",
      "Pohdiskeleva ja rauhallinen",
      "Utelias ja jatkuvasti kehittyvä"
    ]
  },
  {
    tag: "UNELMAT",
    text: "Mitä haluaisit elämässäsi olevan enemmän?",
    answers: [
      "Seikkailuja ja uusia kokemuksia",
      "Rauhaa ja tasapainoa",
      "Merkityksellisiä ihmissuhteita",
      "Mahdollisuuksia ja onnistumisia"
    ]
  },
  {
    tag: "NÄKÖKULMA",
    text: "Mikä on mielestäsi tärkein elämänopetus?",
    answers: [
      "Kaikkea ei voi kontrolloida",
      "Aika on arvokkainta, mitä meillä on",
      "Ihmiset muistavat, miltä heistä tuntui",
      "Kasvu alkaa mukavuusalueen ulkopuolelta"
    ]
  },
  {
    tag: "SYVEMMÄLLÄ",
    text: "Mitä pelkäät menettäväsi elämäsi muuttuessa?",
    answers: [
      "Ihmiset, jotka tuntevat minut oikeasti",
      "Vapauden tehdä omat valintani",
      "Tutun ja turvallisen arjen",
      "Sen version itsestäni, jonka olen rakentanut"
    ]
  },
  {
    tag: "VIIMEINEN",
    text: "Jos joku muistaisi sinusta vain yhden asian, mikä se olisi?",
    answers: [
      "Sain hänet tuntemaan olonsa turvalliseksi",
      "Uskalsin elää omannäköistä elämää",
      "Osasin nauraa myös vaikeina hetkinä",
      "Olin rehellinen, vaikka se ei ollut helppoa"
    ]
  }
];

/* ELEMENTS */

const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const result = document.querySelector("#result");

const startBtn = document.querySelector("#startBtn");

const questionNumber = document.querySelector("#questionNumber");
const totalQuestions = document.querySelector("#totalQuestions");
const panelIndex = document.querySelector("#panelIndex");

const progressLabel = document.querySelector("#progressLabel");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");

const questionTag = document.querySelector("#questionTag");
const questionText = document.querySelector("#questionText");
const answersBox = document.querySelector("#answers");
const questionError = document.querySelector("#questionError");

const backBtn = document.querySelector("#backBtn");
const nextBtn = document.querySelector("#nextBtn");

const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");
const resultQuote = document.querySelector("#resultQuote");

const myCode = document.querySelector("#myCode");
const copyCodeBtn = document.querySelector("#copyCodeBtn");
const shareStatus = document.querySelector("#shareStatus");

const otherCode = document.querySelector("#otherCode");
const compareBtn = document.querySelector("#compareBtn");
const compareError = document.querySelector("#compareError");

const compatibilityResult =
  document.querySelector("#compatibilityResult");

const compatibilityPercent =
  document.querySelector("#compatibilityPercent");

const compatibilityDescription =
  document.querySelector("#compatibilityDescription");

const sameCount = document.querySelector("#sameCount");
const differentCount = document.querySelector("#differentCount");
const comparisonList = document.querySelector("#comparisonList");

const shareBtn = document.querySelector("#shareBtn");
const restartBtn = document.querySelector("#restartBtn");

/* STATE */

let currentQuestion = 0;
let chosenAnswers = questions.map(() => []);
let personalCode = "";

totalQuestions.textContent = questions.length;

/* HELPERS */

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function getLetter(index) {
  return String.fromCharCode(65 + index);
}

function getAnswerLetters(answerIndexes) {
  return answerIndexes
    .slice()
    .sort((a, b) => a - b)
    .map(getLetter)
    .join(", ");
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* SHOW QUESTION */

function showQuestion() {
  const question = questions[currentQuestion];

  const number = currentQuestion + 1;
  const percentage = Math.round(
    (number / questions.length) * 100
  );

  questionNumber.textContent = formatNumber(number);
  panelIndex.textContent = formatNumber(number);

  progressLabel.textContent =
    `QUESTION ${formatNumber(number)}`;

  progressText.textContent =
    `${percentage}% valmis`;

  progressFill.style.width = `${percentage}%`;

  questionTag.textContent = question.tag;
  questionText.textContent = question.text;

  backBtn.disabled = currentQuestion === 0;

  nextBtn.innerHTML =
    currentQuestion === questions.length - 1
      ? 'Näytä tulos <span>↗</span>'
      : 'Seuraava <span>→</span>';

  questionError.textContent = "";
  answersBox.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "answer";

    const selected =
      chosenAnswers[currentQuestion].includes(index);

    if (selected) {
      button.classList.add("selected");
    }

    button.setAttribute(
      "aria-pressed",
      String(selected)
    );

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = getLetter(index);

    const answerText = document.createElement("span");
    answerText.className = "answer-text";
    answerText.textContent = answer;

    button.append(letter, answerText);

    button.addEventListener("click", () => {
      toggleAnswer(index);
    });

    answersBox.appendChild(button);
  });
}

/* MULTIPLE ANSWERS */

function toggleAnswer(answerIndex) {
  const selected = chosenAnswers[currentQuestion];

  if (selected.includes(answerIndex)) {
    chosenAnswers[currentQuestion] =
      selected.filter(index => index !== answerIndex);
  } else {
    chosenAnswers[currentQuestion] = [
      ...selected,
      answerIndex
    ];
  }

  showQuestion();
}

/* NAVIGATION */

function nextQuestion() {
  if (chosenAnswers[currentQuestion].length === 0) {
    questionError.textContent =
      "Valitse vähintään yksi vaihtoehto ennen jatkamista.";

    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResult();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

/* PROFILE */

function createProfile() {
  const selectedCount = chosenAnswers.reduce(
    (total, answers) => total + answers.length,
    0
  );

  const profiles = [
    {
      title: "A mind full of possibilities.",
      text:
        "Vastauksistasi välittyy utelias ja avoin mieli. " +
        "Pidät mahdollisuuksista, uusista kokemuksista ja " +
        "siitä, että elämässä on tilaa yllätyksille.",
      quote:
        "The world is wider than the first impression."
    },
    {
      title: "Quiet depth. Rare presence.",
      text:
        "Vaikutat ihmiseltä, joka arvostaa rauhaa, " +
        "merkityksellisiä hetkiä ja aitoa yhteyttä. " +
        "Kaikkea ei tarvitse sanoa ääneen, jotta se olisi tärkeää.",
      quote:
        "Some things are understood without words."
    },
    {
      title: "Built with intention.",
      text:
        "Vastauksissasi näkyy tavoitteellisuutta ja halua " +
        "kehittyä. Sinulle on tärkeää rakentaa elämää, " +
        "joka tuntuu omalta eikä vain näytä hyvältä ulospäin.",
      quote:
        "Become someone you are proud to know."
    },
    {
      title: "A little mystery remains.",
      text:
        "Sinussa tuntuu olevan useita puolia. " +
        "Osaat nauttia hetkestä, mutta pysähdyt myös " +
        "ajatusten äärelle. Kaikkea sinusta ei näe ensimmäisellä vilkaisulla.",
      quote:
        "Not everything meaningful needs to be obvious."
    }
  ];

  if (selectedCount >= 55) {
    return profiles[0];
  }

  if (selectedCount <= 25) {
    return profiles[1];
  }

  const ambitionAnswers = chosenAnswers
    .slice(8, 17)
    .flat()
    .length;

  if (ambitionAnswers >= 15) {
    return profiles[2];
  }

  return profiles[3];
}

/* SHARE CODE */

function encodeAnswers() {
  const payload = {
    version: 1,
    answers: chosenAnswers
  };

  const json = JSON.stringify(payload);

  const bytes = new TextEncoder().encode(json);

  let binary = "";

  bytes.forEach(byte => {
    binary += String.fromCharCode(byte);
  });

  const encoded = btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/g, "");

  return `AH1-${encoded}`;
}

function decodeAnswers(code) {
  const cleaned = code
    .trim()
    .replace(/\s+/g, "")
    .replace(/^AH1-/i, "");

  if (!cleaned) {
    throw new Error("Koodi puuttuu.");
  }

  const base64 = cleaned
    .replaceAll("-", "+")
    .replaceAll("_", "/");

  const padded = base64.padEnd(
    base64.length + ((4 - base64.length % 4) % 4),
    "="
  );

  let json;

  try {
    const binary = atob(padded);

    const bytes = Uint8Array.from(
      binary,
      char => char.charCodeAt(0)
    );

    json = new TextDecoder().decode(bytes);
  } catch {
    throw new Error("Koodi ei ole oikeassa muodossa.");
  }

  let payload;

  try {
    payload = JSON.parse(json);
  } catch {
    throw new Error("Koodin sisältöä ei voitu lukea.");
  }

  if (
    payload.version !== 1 ||
    !Array.isArray(payload.answers) ||
    payload.answers.length !== questions.length
  ) {
    throw new Error(
      "Koodi ei vastaa tätä After Hours -kyselyä."
    );
  }

  const validAnswers = payload.answers.every(
    (answers, questionIndex) =>
      Array.isArray(answers) &&
      answers.length > 0 &&
      answers.every(
        answer =>
          Number.isInteger(answer) &&
          answer >= 0 &&
          answer < questions[questionIndex].answers.length
      ) &&
      new Set(answers).size === answers.length
  );

  if (!validAnswers) {
    throw new Error("Koodissa on virheellisiä vastauksia.");
  }

  return payload.answers;
}

/* SHOW RESULT */

function showResult() {
  intro.classList.add("hidden");
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  const profile = createProfile();

  resultTitle.textContent = profile.title;
  resultText.textContent = profile.text;
  resultQuote.textContent = `“${profile.quote}”`;

  personalCode = encodeAnswers();
  myCode.textContent = personalCode;

  compatibilityResult.classList.add("hidden");

  compareError.textContent = "";
  shareStatus.textContent = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* COMPATIBILITY CALCULATION */

function compareAnswers(first, second) {
  let totalScore = 0;
  let comparedQuestions = 0;

  let same = 0;
  let different = 0;

  const details = [];

  questions.forEach((question, index) => {
    const firstAnswers = first[index];
    const secondAnswers = second[index];

    const firstSet = new Set(firstAnswers);
    const secondSet = new Set(secondAnswers);

    const intersection = [...firstSet].filter(
      answer => secondSet.has(answer)
    );

    const union = new Set([
      ...firstSet,
      ...secondSet
    ]);

    const score =
      intersection.length / union.size;

    totalScore += score;
    comparedQuestions++;

    if (score === 1) {
      same++;
    } else {
      different++;
    }

    details.push({
      question: question.text,
      first: getAnswerLetters(firstAnswers),
      second: getAnswerLetters(secondAnswers),
      score: Math.round(score * 100)
    });
  });

  const percentage = Math.round(
    (totalScore / comparedQuestions) * 100
  );

  return {
    percentage,
    same,
    different,
    details
  };
}

/* DISPLAY COMPATIBILITY */

function showCompatibility() {
  compareError.textContent = "";

  let otherAnswers;

  try {
    otherAnswers = decodeAnswers(otherCode.value);
  } catch (error) {
    compareError.textContent = error.message;
    return;
  }

  const comparison = compareAnswers(
    chosenAnswers,
    otherAnswers
  );

  compatibilityResult.classList.remove("hidden");

  compatibilityPercent.textContent =
    `${comparison.percentage}%`;

  sameCount.textContent = comparison.same;
  differentCount.textContent = comparison.different;

  if (comparison.percentage >= 80) {
    compatibilityDescription.textContent =
      "Vastauksissanne on paljon yhteistä. " +
      "Näette monia asioita samalla tavalla.";
  } else if (comparison.percentage >= 55) {
    compatibilityDescription.textContent =
      "Teillä on yhteisiä näkökulmia, mutta myös " +
      "eroja, jotka voivat tehdä keskusteluista kiinnostavia.";
  } else if (comparison.percentage >= 30) {
    compatibilityDescription.textContent =
      "Näette asioita melko eri tavoin. " +
      "Juuri erilaisuus voi avata uusia näkökulmia.";
  } else {
    compatibilityDescription.textContent =
      "Vastauksenne ovat hyvin erilaisia. " +
      "Se ei tarkoita huonoa yhteyttä — " +
      "vain erilaisia tapoja nähdä maailma.";
  }

  comparisonList.innerHTML = "";

  comparison.details.forEach(detail => {
    const item = document.createElement("div");

    item.className =
      "comparison-item" +
      (detail.score === 100 ? " same" : "");

    const question = document.createElement("p");
    question.className = "comparison-question";
    question.textContent = detail.question;

    const answers = document.createElement("div");
    answers.className = "comparison-answers";

    const first = document.createElement("div");
    first.innerHTML =
      `<strong>Sinä</strong>${escapeHTML(detail.first)}`;

    const second = document.createElement("div");
    second.innerHTML =
      `<strong>Toinen henkilö</strong>${escapeHTML(detail.second)}`;

    answers.append(first, second);

    const status = document.createElement("span");
    status.className = "comparison-status";
    status.textContent = `${detail.score}% samaa`;

    item.append(question, answers, status);
    comparisonList.appendChild(item);
  });

  compatibilityResult.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* COPY CODE */

async function copyCode() {
  try {
    await navigator.clipboard.writeText(personalCode);

    copyCodeBtn.innerHTML =
      "Koodi kopioitu <span>✓</span>";

    shareStatus.textContent =
      "Koodi on valmis lähetettäväksi.";
  } catch {
    const temporary = document.createElement("textarea");

    temporary.value = personalCode;
    document.body.appendChild(temporary);

    temporary.select();

    const copied = document.execCommand("copy");
    temporary.remove();

    shareStatus.textContent = copied
      ? "Koodi kopioitu."
      : "Kopioi koodi käsin.";
  }
}

/* SHARE */

async function shareResult() {
  const shareText =
    `Tein After Hours -kyselyn.\n\n` +
    `${resultTitle.textContent}\n\n` +
    `Vertailukoodini:\n${personalCode}`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: "After Hours",
        text: shareText,
        url: window.location.href
      });
    } else {
      await navigator.clipboard.writeText(shareText);

      shareStatus.textContent =
        "Tulos ja vertailukoodi kopioitu.";
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      shareStatus.textContent =
        "Jakaminen ei onnistunut tällä kertaa.";
    }
  }
}

/* RESTART */

function restart() {
  currentQuestion = 0;
  chosenAnswers = questions.map(() => []);
  personalCode = "";

  result.classList.add("hidden");
  quiz.classList.add("hidden");
  intro.classList.remove("hidden");

  otherCode.value = "";
  compareError.textContent = "";
  shareStatus.textContent = "";

  copyCodeBtn.innerHTML =
    "Kopioi koodi <span>↗</span>";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* EVENTS */

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  quiz.classList.remove("hidden");

  currentQuestion = 0;
  showQuestion();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

nextBtn.addEventListener("click", nextQuestion);
backBtn.addEventListener("click", previousQuestion);

copyCodeBtn.addEventListener("click", copyCode);
compareBtn.addEventListener("click", showCompatibility);

shareBtn.addEventListener("click", shareResult);
restartBtn.addEventListener("click", restart);

/* ENTER TO CONTINUE */

document.addEventListener("keydown", event => {
  if (
    event.key === "Enter" &&
    !quiz.classList.contains("hidden") &&
    event.target.tagName !== "TEXTAREA"
  ) {
    nextQuestion();
  }
});
