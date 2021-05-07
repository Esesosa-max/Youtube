let computerChoice;
let score;
let point = 0;
let choiceEl = document.querySelectorAll("button img");
let UserChoice;
let scoreEl = document.querySelector(".score");
let display = document.querySelector(".game");
let layout = document.querySelector(".layou");
let display2 = document.querySelector(".__display");
const Game = (e) => {
  const choices = ["paper", "rock", "scissors", "spock", "lizard"];
  let Random = choices[Math.floor(Math.random() * choices.length)];

  UserChoice = e.target.dataset.chocie;
  computerChoice = Random;
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
    scoreEl.innerHTML = point;
    console.log(computerChoice, UserChoice);
    console.log("Computer Won!");

    RenderUI(computerChoice, UserChoice, display2, "You Lost");
    display.style.display = "none";
    layout.style.display = "none";

    display2.style.display = "flex";

    let btn2 = document.querySelector(".reset-btn");

    btn2.addEventListener("click", (e) => {
      display.style.display = "flex";
      layout.style.display = "flex";
      display2.style.display = "none";
    });
  } else if (
    (UserChoice == "paper" && computerChoice == "rock") ||
    (UserChoice == "scissors" && computerChoice == "paper") ||
    (UserChoice == "rock" && computerChoice == "scissors") ||
    (UserChoice == "paper" && computerChoice == "spock") ||
    (UserChoice == "spock" && computerChoice == "rock") ||
    (UserChoice == "spock" && computerChoice == "scissors") ||
    (UserChoice == "scissors" && computerChoice == "lizard") ||
    (UserChoice == "lizard" && computerChoice == "paper") ||
    (UserChoice == "rock" && computerChoice == "lizard") ||
    (UserChoice == "lizard" && computerChoice == "spock")
  ) {
    point++;
    scoreEl.innerHTML = point;
    RenderUI(computerChoice, UserChoice, display2, "You Won");
    display.style.display = "none";
    display2.style.display = "flex";
    layout.style.display = "none";

    // getting the reset-btn
    let btn = document.querySelector(".reset-btn");
    console.log(btn);
    // Resting the Game
    btn.addEventListener("click", (e) => {
      // chaging the petagon div back to its orignal state
      layout.style.display = "flex";
      display.style.display = "flex";
      display2.style.display = "none";
    });
  } else {
    scoreEl.innerHTML = point;
    RenderUI(computerChoice, UserChoice, display2, "Draw");
    display.style.display = "none";
    display2.style.display = "flex";
    layout.style.display = "none";

    // getting the reset-btn
    let btn = document.querySelector(".reset-btn");
    console.log(btn);
    // Resting the Game
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      // chaging the petagon div back to its orignal state
      layout.style.display = "flex";
      display.style.display = "flex";
      display2.style.display = "none";
    });
  }
};

// listing for events on the user images
choiceEl.forEach((each) => {
  each.addEventListener("click", (e) => {
    e.stopPropagation();
    Game(e);
  });
});

function RenderUI(computer, user, element, winner) {
  element.innerHTML = `<div class=result>
  <div class=computer>

<h1>The House Picked</h1>
  <button class="result-el ${computer}">
  <img src="./images/icon-${computer}.svg" data-chocie="rock" />
</button>
</div>
<div class=center>


<h1>${winner}</h1>
<button class=reset-btn >Play Again</button>
</div>
<div class=user>
<h1>You Picked</h1>
<button class="result-el ${user}">
  <img src="./images/icon-${user}.svg" data-chocie="paper" " />
</button>
</div>
  </div>`;
}
