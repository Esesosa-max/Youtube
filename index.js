//variable global
let score = 0;
let time = 2;
let state;
window.onload = init;
//dom elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "Html Sucks",
  "definition",
];

function init() {
  // get a Random word
  showWords(words);
  wordInput.addEventListener("input", startMatch);
  // check the game status
  setInterval(checkStatus, 50);
  seconds.innerHTML = time;
  setInterval(countdown, 1000);
}

function startMatch() {
  if (wordInput.value == currentWord.innerHTML) {
    message.innerHTML = "Correct";
    showWords(words);
    wordInput.value = "";
    time = 6;
    score++;
  }
  scoreDisplay.innerHTML = score;

  if (score == -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function showWords(words) {
  const randomIndex = Math.floor(Math.random() * words.length);

  currentWord.innerHTML = words[randomIndex];
}
function countdown() {
  if (time !== 0) {
    time--;
    state = true;
  } else {
    state = false;
  }
  timeDisplay.innerHTML = time;
}
function checkStatus() {
  if (state === false && time == 0) {
    message.innerHTML = "Game Over Sucker";
    score = -1;
  }
}
