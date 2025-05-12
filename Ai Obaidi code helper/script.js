// Select DOM elements
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// Predefined programming responses
const responses = {
  javascript: "JavaScript is a powerful scripting language used mainly for adding interactivity to web pages. It runs in the browser and is also widely used in backend development with Node.js.",
  html: "HTML stands for HyperText Markup Language. It's the basic structure of web pages, using elements like <div>, <h1>, and <p> to organize content.",
  css: "CSS (Cascading Style Sheets) controls how HTML elements look—like their color, size, spacing, and layout.",
  function: "A function is a reusable block of code designed to perform a specific task. In JavaScript, you can define a function using the `function` keyword or arrow syntax `()=>{}`.",
  array: "An array is a collection of items stored in a single variable. You can loop through arrays using `for`, `forEach`, or modern methods like `map()`.",
  nodejs: "Node.js is a runtime environment that lets you run JavaScript outside the browser. It’s commonly used to build servers and backend applications.",
  loop: "A loop lets you repeat code multiple times. Common types in JavaScript include `for`, `while`, and `do...while`.",
  variable: "Variables store data values. In JavaScript, you can declare them using `let`, `const`, or `var` (though `var` is outdated).",
  hello:"hello pal how can I help you ? I can you give information  about html ,css, Javascript ,function ,array ,loop , variable and node js",
  bye:"Good bye my friend. See you later",
  thants:"You're welcome. If you have any problem fell free to ask me. "
  
};

// Add a message to the chat window
function addMessage(content, className) {
  const message = document.createElement("div");
  message.classList.add("message", className);
  message.innerText = content;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle form submission
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = userInput.value.trim();
  if (input === "") return;

  // Add user message
  addMessage(input, "user");

  // Convert input to lowercase and check for keywords
  const lowerInput = input.toLowerCase();
  let found = false;

  for (let keyword in responses) {
    if (lowerInput.includes(keyword)) {
      addMessage(responses[keyword], "bot");
      found = true;
      break;
    }
  }

  // Default fallback if no keyword matches
  if (!found) {
    addMessage("I'm still learning! Try asking about JavaScript, HTML, CSS, or functions.", "bot");
  }

  // Clear input field
  userInput.value = "";
});
