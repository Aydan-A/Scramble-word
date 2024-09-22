let input = document.querySelector("input");
let checkButton = document.querySelector(".checkButton");
let reTry = document.querySelector(".retry");
let header = document.querySelector("h2");
let scramble = document.querySelector(".scrambleWord");
let score = document.querySelector(".score");

let webProgrammingwords = [
  "HTML", "CSS", "JavaScript", "DOM", "AJAX", "jQuery", "Bootstrap",
  "React", "Angular", "Vue", "SASS", "LESS", "Node.js", "Express", "MongoDB", 
  "SQL", "REST", "GraphQL", "JSON", "API", "Cookies", "Session", "OAuth", 
  "Authentication", "Authorization", "JWT", "Webpack", "Babel", "Git", "GitHub", 
  "CI/CD", "Testing", "Unit Testing", "Responsive Design", "SEO", "PWA", "HTTPS"
];

let wordsYouKnew = 0;
let RandomWord, arrayword;
let webProgrammingwordsCopy = [...webProgrammingwords];

function startGame() {
  if (webProgrammingwordsCopy.length === 0) {
    score.innerHTML = `🎉 Congratulations! You've guessed all the words!`;
    return;
  }
  RandomWord = webProgrammingwordsCopy[Math.floor(Math.random() * webProgrammingwordsCopy.length)];
  arrayword = RandomWord.split("");
  mixtheArray(arrayword);
  scramble.innerHTML = arrayword.join(" ").toLowerCase();
  input.value = "";
}

reTry.addEventListener("click", startGame);

checkButton.addEventListener("click", () => {
  let inputValue = input.value.toLowerCase().split("");
  let arrayword = RandomWord.toLowerCase().split("");

  if (inputValue.join('') === arrayword.join('')) {
    wordsYouKnew++;
    webProgrammingwordsCopy = webProgrammingwordsCopy.filter(word => word !== RandomWord);
    score.innerHTML = `✅ You guessed ${wordsYouKnew} word(s) correctly out of ${webProgrammingwords.length}!`;
    startGame();
  } else {
    score.innerHTML = `❌ Try again!`;
  }
});

function mixtheArray(arrayword) {
  for (let i = 0; i < arrayword.length - 1; i++) {
    const Randomindex = Math.floor(Math.random() * arrayword.length);
    [arrayword[i], arrayword[Randomindex]] = [arrayword[Randomindex], arrayword[i]];
  }
}

startGame();
