let input = document.querySelector("input");
let checkButton = document.querySelector(".checkButton");
let reTry = document.querySelector(".retry");
let header = document.querySelector("h2");
let scramble = document.querySelector(".srambleWord");
let score = document.querySelector(".score");

let webProgrammingwords = [
  "HTML",
  "CSS",
  "JavaScript",
  "DOM",
  "AJAX",
  "jQuery",
  "Bootstrap",
  "React",
  "Angular",
  "Vue",
  "SASS",
  "LESS",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "REST",
  "GraphQL",
  "JSON",
  "API",
  "Cookies",
  "Session",
  "OAuth",
  "Authentication",
  "Authorization",
  "JWT",
  "Webpack",
  "Babel",
  "Version Control",
  "Git",
  "GitHub",
  "CI/CD",
  "Testing",
  "Unit Testing",
  "Integration Testing",
  "Responsive Design",
  "Cross-Browser Compatibility",
  "SEO",
  "Web Accessibility",
  "W3C",
  "WebSockets",
  "Server-Side Rendering",
  "Client-Side Rendering",
  "Lazy Loading",
  "Minification",
  "Performance Optimization",
  "CDN",
  "Service Workers",
  "PWA",
  "HTTPS",
  "SSL",
  "WebAssembly",
  "TypeScript",
  "GraphQL",
  "Promise",
  "Callback",
  "Event Loop",
  "Local Storage",
  "Session Storage",
  "CORS",
  "XSS",
  "CSRF",
];

let wordsYouKnew = 0;
let RandomWord, arrayword;

let webProgrammingwordsCopy = [...webProgrammingwords];

function startGame() {
  if (webProgrammingwordsCopy.length === 0) {
    score.innerHTML = `Congratulations! You guessed all the words!`;
    return;
  }
  RandomWord =
    webProgrammingwordsCopy[
      Math.floor(Math.random() * webProgrammingwordsCopy.length)
    ];
  arrayword = RandomWord.split("");
  mixtheArray(arrayword);
  scramble.innerHTML = arrayword.join(" ").toLowerCase();
  input.value = "";
}

reTry.addEventListener("click", startGame);

checkButton.addEventListener("click", () => {
  let inputValue = input.value.toLowerCase().split("");
  let arrayword = RandomWord.toLowerCase().split("");

  
  // Check if the input matches the word
  if (
    inputValue.join('') === arrayword.join('')
  ) {
    // Word guessed correctly for the first time
    console.log(inputValue)
    console.log(arrayword);
    wordsYouKnew++;
    webProgrammingwordsCopy = webProgrammingwordsCopy.filter(
      (word) => word !== RandomWord
    );
    // Update the score
    score.innerHTML = `You knew ${wordsYouKnew} word(s) from ${webProgrammingwords.length} words correctly!`;

    // Move to the next word
    startGame();
  }
  else{
    score.innerHTML = `Try again!`;
  }
});

function mixtheArray(arrayword) {
  for (let i = 0; i < arrayword.length - 1; i++) {
    const Randomindex = Math.floor(Math.random() * arrayword.length);
    //Destructuring assignment
    [arrayword[i], arrayword[Randomindex]] = [
      arrayword[Randomindex],
      arrayword[i],
    ];
  }
}

startGame();
