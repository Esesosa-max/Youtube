let UserChoice;
let computerChoice;
let point = 0;
let choiceEl = document.querySelectorAll("button img");
let scoreEl = document.querySelector(".score");
let game = document.querySelector(".game");
let layout = document.querySelector(".layout");
let display2 = document.querySelector(".__display");

const Game = (e) => {
  const choices = ["paper", "rock", "spock", "scissors", "lizard"];
  let Random = Math.floor(Math.random() * choices.length);
  computerChoice = choices[Random];
  UserChoice = e.target.dataset.chocie;
  console.log(computerChoice, UserChoice);
  // all outcomes that computer has won
  if (
    (computerChoice == "paper" && UserChoice == "rock") ||
    (computerChoice == "scissors" && UserChoice == "paper") ||
    (computerChoice == "rock" && UserChoice == "scissors") ||
    (computerChoice == "paper" && UserChoice == "spock") ||
    (computerChoice == "spock" && UserChoice == "rock") ||
    (computerChoice == "spock" && UserChoice == "scissors") ||
    (computerChoice == "scissors" && UserChoice == "lizard") ||
    (computerChoice == "lizard" && UserChoice == "paper") ||
    (computerChoice == "lizard" && UserChoice == "spock") ||
    (computerChoice == "rock" && UserChoice == "lizard")
  ) {
    point--;
    // render computer won
    RenderUI(computerChoice, UserChoice, display2, "You lost");
    // hide game div
    game.style.display = "none";
    //  hide petagon
    layout.style.display = "none";
    display2.style.display = "flex";
    let btn = document.querySelector(".reset");
    btn.addEventListener("click", (e) => {
      // show game div
      game.style.display = "flex";
      //  shopw petagon
      layout.style.display = "flex";
      display2.style.display = "none";
    });
    console.log("Computer Won");
    // all outcomes that user has won
  } else if (
    (UserChoice == "paper" && computerChoice == "rock") ||
    (UserChoice == "scissors" && computerChoice == "paper") ||
    (UserChoice == "rock" && computerChoice == "scissors") ||
    (UserChoice == "paper" && computerChoice == "spock") ||
    (UserChoice == "spock" && computerChoice == "rock") ||
    (UserChoice == "spock" && computerChoice == "scissors") ||
    (UserChoice == "scissors" && computerChoice == "lizard") ||
    (UserChoice == "lizard" && computerChoice == "paper") ||
    (UserChoice == "lizard" && computerChoice == "spock") ||
    (UserChoice == "rock" && computerChoice == "lizard")
  ) {
    RenderUI(computerChoice, UserChoice, display2, "You won");
    point++;
    console.log("User Won");

    game.style.display = "none";
    //  hide petagon
    layout.style.display = "none";
    display2.style.display = "flex";
    let btn = document.querySelector(".reset");
    btn.addEventListener("click", (e) => {
      // show game div
      game.style.display = "flex";
      //  shopw petagon
      layout.style.display = "flex";
      display2.style.display = "none";
    });
  } else {
    RenderUI(computerChoice, UserChoice, display2, "Draw");
    game.style.display = "none";
    //  hide petagon
    layout.style.display = "none";
    display2.style.display = "flex";
    let btn = document.querySelector(".reset");
    btn.addEventListener("click", (e) => {
      // show game div
      game.style.display = "flex";
      //  shopw petagon
      layout.style.display = "flex";
      display2.style.display = "none";
    });
  }
  scoreEl.innerHTML = point;
};
choiceEl.forEach((each) => {
  each.addEventListener("click", (e) => {
    Game(e);
  });
});

// Render ui

const RenderUI = (comp, user, el, win) => {
  el.innerHTML = `
  <div class=result>

  <div class=computer>
  <h2>The house Picked</h2>
<button class="result-el ${comp}">
<img src=./images/icon-${comp}.svg />
</button>
  </div>
  <div class=center>
<h2>${win}</h2>
<button class=reset>Play again</button>
</button>
  </div>
  <div class=user>
  <h2>You Picked</h2>
<button class="result-el ${user}">
<img src=./images/icon-${user}.svg />
</button>
  </div>
</div>
  `;
};
