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

  let webProgrammingwordsCopy=[...webProgrammingwords];
  let RandomWord = webProgrammingwordsCopy[Math.floor(Math.random() * webProgrammingwords.length)];

  let arrayword = RandomWord.split("");

  reTry.addEventListener("click", () => {
    score.innerHTML=""
    let word =
      webProgrammingwords[
        Math.floor(Math.random() * webProgrammingwords.length)
      ];
    let arrayword = word.split("");
    mixtheArray(arrayword);
    scramble.innerHTML = arrayword.join(" ").toLowerCase();
  });

  checkButton.addEventListener("click", () => {
    let inputValue = input.value.toLowerCase().split("");
    let arrayword = word.toLowerCase().split("");

    inputValue.forEach((letter, index) => {
      if ((letter === arrayword[index])) {
        wordsYouKnew++
      } else {
        score.innerHTML = `Try again`;
      }
    });
    if (wordsYouKnew === arrayword.length) {
      score.innerHTML = `You guessed the entire word!`;
    } else {
      score.innerHTML = `You know ${wordsYouKnew} letters correctly`;
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
  //This converts the array into a single string without any commas or spaces between the characters.
  scramble.innerHTML = arrayword.join(" ").toLowerCase();
