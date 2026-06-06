const translations = {
  el: {
    statusOpen: "Open",
    statusLive: "Live",
    subtitle: "Ανώτατη Σχολή Memeολόγων",
    viberTitle: "Κοινότητα Viber",
    viberDesc: "Μπες στην ομάδα των Memeολόγων",
    liveBadge: "Live",
    dropdownTitle: "Όλες οι επιλογές",
    dropdownDesc: "Ιστοσελίδα, ανακοινώσεις, μαθήματα και πτυχίο",
    siteTitle: "Επίσημη Ιστοσελίδα",
    boardTitle: "Ανακοινώσεις",
    boardDesc: "Πίνακας σχολικών meme updates",
    teachersTitle: "Καθηγητές",
    teachersDesc: "Η ακαδημαϊκή ομάδα του σχολείου",
    curriculumTitle: "Πρόγραμμα Σπουδών",
    curriculumDesc: "Μαθήματα memeology και quiz",
    jokesTitle: "Αστεία & Ανέκδοτα",
    jokesDesc: "Το επίσημο εργαστήριο γέλιου",
    classesTitle: "Τάξεις",
    classesDesc: "Πιστοποιητικό Γέλιου",
    sealText: "In Knowledge of Memes,<br>We Achieve Greatness."
  },
  en: {
    statusOpen: "Open",
    statusLive: "Live",
    subtitle: "Higher School of Memeologists",
    viberTitle: "Viber Channel",
    viberDesc: "Join the official Memeologists community",
    liveBadge: "Live",
    dropdownTitle: "All Options",
    dropdownDesc: "Website, announcements, classes, jokes and certificate",
    siteTitle: "Official Website",
    boardTitle: "Announcements",
    boardDesc: "School meme updates board",
    teachersTitle: "Teachers",
    teachersDesc: "The academic staff of Laugh School",
    curriculumTitle: "Curriculum",
    curriculumDesc: "Memeology lessons and quizzes",
    jokesTitle: "Jokes & Anecdotes",
    jokesDesc: "The official laughter lab",
    classesTitle: "Classes",
    classesDesc: "Laughter Certificate",
    sealText: "In Knowledge of Memes,<br>We Achieve Greatness."
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatedNodes = document.querySelectorAll("[data-i18n]");

function applyLanguage(language) {
  const dictionary = translations[language] || translations.el;
  document.documentElement.lang = language;

  translatedNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.innerHTML = dictionary[key];
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("laugh-school-linktree-lang", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(localStorage.getItem("laugh-school-linktree-lang") || "el");
