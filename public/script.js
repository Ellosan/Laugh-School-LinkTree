const translations = {
  el: {
    statusOpen: "Open",
    statusLive: "Live",
    subtitle: "Ανώτατη Σχολή Memeολόγων",
    viberTitle: "Κοινότητα Viber",
    viberDesc: "Μπες στην ομάδα των Memeολόγων",
    viberChannelTitle: "Laugh School Chat",
    viberChannelDesc: "Συνομιλία με την κοινότητα του Laugh School™️",
    officialBadge: "Official",
    communityBadge: "Community",
    dropdownTitle: "Όλες οι επιλογές",
    dropdownDesc: "Ιστοσελίδα, φόρμα, social και μαθήματα",
    siteTitle: "Επίσημη Ιστοσελίδα",
    formTitle: "Φόρμα Αστείων",
    formDesc: "Στείλε αστείο ή meme πρόταση",
    whatsappTitle: "WhatsApp Channel",
    whatsappDesc: "Ακολούθησε το WhatsApp κανάλι μας",
    instagramTitle: "Instagram",
    instagramDesc: "@_laugh_school_",
    youtubeTitle: "YouTube",
    youtubeDesc: "@laughschoolmemes",
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
    viberChannelTitle: "Laugh School Chat",
    viberChannelDesc: "Chat with the Laugh School™️ community",
    officialBadge: "Official",
    communityBadge: "Community",
    dropdownTitle: "All Options",
    dropdownDesc: "Website, form, socials, classes and certificate",
    siteTitle: "Official Website",
    formTitle: "Joke Form",
    formDesc: "Send a joke or meme idea",
    whatsappTitle: "WhatsApp Channel",
    whatsappDesc: "Follow our WhatsApp channel",
    instagramTitle: "Instagram",
    instagramDesc: "@_laugh_school_",
    youtubeTitle: "YouTube",
    youtubeDesc: "@laughschoolmemes",
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
