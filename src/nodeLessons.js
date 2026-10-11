
const nodeLessons = [
  {
    id: 1,
    title: "What is Node.js?",
    duration: "5 min",
    explanation:
      "Node.js is a JavaScript runtime that lets us run JavaScript outside the browser, such as on a server.",
    example: `console.log("Hello from Node.js!");`,
    question: "What is Node.js?",
    options: [
      "A database",
      "A JavaScript runtime",
      "A CSS framework",
      "An HTML editor",
    ],
    answer: 1,
    answerExplanation:
      "Node.js runs JavaScript outside the browser, including on servers.",
  },
  {
    id: 2,
    title: "Installing Node.js",
    duration: "5 min",
    explanation:
      "Install Node.js to run JavaScript on your computer. npm is included and helps manage packages.",
    example: `node -v
npm -v`,
    question: "Which command checks the installed Node.js version?",
    options: [
      "node --check",
      "npm start",
      "node -v",
      "version node",
    ],
    answer: 2,
    answerExplanation:
      "The node -v command displays the installed Node.js version.",
  },
  {
    id: 3,
    title: "Running Your First Program",
    duration: "5 min",
    explanation:
      "Save JavaScript in a file and run it using the node command in your terminal.",
    example: `// app.js
console.log("My first Node.js program!");

// Terminal: node app.js`,
    question: "How do you run app.js using Node.js?",
    options: [
      "html app.js",
      "node app.js",
      "npm app.js",
      "run html",
    ],
    answer: 1,
    answerExplanation:
      "Run node app.js in the terminal to execute the JavaScript file.",
  },
  {
    id: 4,
    title: "Node.js and JavaScript",
    duration: "7 min",
    explanation:
      "JavaScript is the language. Node.js provides an environment to execute it outside the browser.",
    example: `const name = "Rahul";
console.log("Hello " + name);`,
    question: "What is the relationship between JavaScript and Node.js?",
    options: [
      "They are both databases",
      "Node.js replaces JavaScript",
      "JavaScript is a language and Node.js runs it outside browsers",
      "JavaScript only works in Node.js",
    ],
    answer: 2,
    answerExplanation:
      "JavaScript is the programming language; Node.js is a runtime environment for executing it outside the browser.",
  },
  {
    id: 5,
    title: "Global Objects",
    duration: "8 min",
    explanation:
      "Node.js provides useful global features such as console, process, and setTimeout.",
    example: `console.log("Node version:", process.version);
console.log("Current folder:", process.cwd());`,
    question: "What does process.version return?",
    options: [
      "The Node.js version",
      "The current username",
      "The database name",
      "The browser version",
    ],
    answer: 0,
    answerExplanation:
      "process.version contains the version of the currently running Node.js runtime.",
  },
  {
    id: 6,
    title: "Working with Modules",
    duration: "10 min",
    explanation:
      "Modules let us organize code into separate files and reuse functions.",
    example: `// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;

// app.js
const add = require("./math");
console.log(add(10, 20));`,
    question: "In CommonJS, what does module.exports do?",
    options: [
      "Deletes a module",
      "Exports values so other files can use them",
      "Installs Node.js",
      "Starts a server automatically",
    ],
    answer: 1,
    answerExplanation:
      "module.exports lets a file expose a function, object, or other value to modules that require it.",
  },
  {
    id: 7,
    title: "Built-in Modules",
    duration: "10 min",
    explanation:
      "Node.js includes modules such as path and os for working with file paths and system information.",
    example: `const path = require("path");

console.log(path.basename("/users/rahul/app.js"));`,
    question: "What is the path module used for?",
    options: [
      "Styling web pages",
      "Creating database tables",
      "Working with file and directory paths",
      "Building React components",
    ],
    answer: 2,
    answerExplanation:
      "The path module provides utilities for handling file paths across operating systems.",
  },
  {
    id: 8,
    title: "File System (fs)",
    duration: "12 min",
    explanation:
      "The fs module lets us read, create, update, and delete files.",
    example: `const fs = require("fs");

fs.writeFileSync("notes.txt", "Learning Node.js");
console.log(fs.readFileSync("notes.txt", "utf8"));`,
    question: "Which built-in module works with files?",
    options: ["http", "fs", "path only", "events only"],
    answer: 1,
    answerExplanation:
      "The fs module provides functions to read, write, update, and delete files.",
  },
  {
    id: 9,
    title: "NPM and Packages",
    duration: "10 min",
    explanation:
      "npm installs packages and manages dependencies used by a Node.js project.",
    example: `// Run these commands in your terminal:
npm init -y
npm install`,
    question: "What is npm mainly used for?",
    options: [
      "Managing JavaScript packages and dependencies",
      "Writing HTML tags",
      "Creating CSS animations",
      "Replacing MongoDB",
    ],
    answer: 0,
    answerExplanation:
      "npm is the package manager commonly used to install and manage project dependencies.",
  },
  {
    id: 10,
    title: "Asynchronous JavaScript",
    duration: "12 min",
    explanation:
      "Asynchronous operations allow Node.js to handle tasks such as file reading without blocking the entire workflow.",
    example: `const fs = require("fs");

fs.readFile("notes.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }

  console.log(data);
});

console.log("Reading file...");`,
    question: "Why use asynchronous file reading?",
    options: [
      "It automatically deletes files",
      "It converts JavaScript to HTML",
      "It helps avoid blocking execution while waiting for the file",
      "It removes the need for error handling",
    ],
    answer: 2,
    answerExplanation:
      "Asynchronous file reading allows other JavaScript work to continue while the file operation completes.",
  },
  {
    id: 11,
    title: "Callbacks, Promises and async/await",
    duration: "15 min",
    explanation:
      "Promises and async/await help us write asynchronous code in a clearer and more manageable way.",
    example: `async function greet() {
  return "Hello, Node.js!";
}

greet().then(console.log);`,
    question: "What does an async function return?",
    options: [
      "Always a string directly",
      "A Promise",
      "A database",
      "A callback function only",
    ],
    answer: 1,
    answerExplanation:
      "An async function always returns a Promise. Returning a value fulfills that Promise with the value.",
  },
  {
    id: 12,
    title: "Creating an HTTP Server",
    duration: "12 min",
    explanation:
      "The built-in http module lets Node.js receive requests and send responses.",
    example: `const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from my server!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    question: "What does server.listen(3000) do?",
    options: [
      "Creates a React component",
      "Deletes port 3000",
      "Connects to MongoDB",
      "Starts listening for requests on port 3000",
    ],
    answer: 3,
    answerExplanation:
      "server.listen(3000) starts the HTTP server on port 3000 so it can receive incoming requests.",
  },
  {
    id: 13,
    title: "Environment Variables",
    duration: "10 min",
    explanation:
      "Environment variables store configuration outside your source code. The dotenv package can load variables from a .env file.",
    example: `// Install dotenv first: npm install dotenv
require("dotenv").config();

console.log(process.env.PORT);`,
    question: "Why use environment variables?",
    options: [
      "To store configuration separately from source code",
      "To replace all JavaScript variables",
      "To style web pages",
      "To create HTML forms",
    ],
    answer: 0,
    answerExplanation:
      "Environment variables keep configuration outside source code. Sensitive values should not be committed to version control.",
  },
  {
    id: 14,
    title: "Error Handling",
    duration: "12 min",
    explanation:
      "Use try/catch to handle errors from operations that may fail, including awaited promises.",
    example: `async function main() {
  try {
    const result = await Promise.resolve("Success");
    console.log(result);
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}

main();`,
    question: "What is the purpose of try/catch?",
    options: [
      "To install packages",
      "To handle errors when they occur",
      "To create CSS classes",
      "To start a database",
    ],
    answer: 1,
    answerExplanation:
      "try/catch lets you handle errors thrown inside the try block, including errors from awaited Promises.",
  },
  {
    id: 15,
    title: "Event Loop",
    duration: "15 min",
    explanation:
      "The event loop coordinates JavaScript execution and asynchronous callbacks so Node.js can handle many operations efficiently.",
    example: `console.log("First");

setTimeout(() => {
  console.log("Third");
}, 0);

console.log("Second");`,
    question: "What is the output order in this example?",
    options: [
      "Third, First, Second",
      "First, Third, Second",
      "First, Second, Third",
      "Second, First, Third",
    ],
    answer: 2,
    answerExplanation:
      "The synchronous logs run first. The timer callback runs later, so the output is First, Second, Third.",
  },
  {
    id: 16,
    title: "Streams and Buffers",
    duration: "15 min",
    explanation:
      "Buffers represent binary data. Streams process data in chunks instead of requiring an entire file to be loaded at once.",
    example: `const fs = require("fs");

const stream = fs.createReadStream("notes.txt", {
  encoding: "utf8",
});

stream.on("data", (chunk) => {
  console.log(chunk);
});`,
    question: "What is a key advantage of streams?",
    options: [
      "They remove all errors",
      "They can process data in chunks",
      "They only work with CSS",
      "They automatically create databases",
    ],
    answer: 1,
    answerExplanation:
      "Streams process data piece by piece, which can reduce memory use for large files.",
  },
  {
    id: 17,
    title: "Node.js Project Structure",
    duration: "10 min",
    explanation:
      "Organizing files into modules makes a project easier to understand, test, and maintain.",
    example: `my-app/
  package.json
  .env
  src/
    app.js
    utils/
      helpers.js`,
    question: "Why organize code into separate modules?",
    options: [
      "To make code easier to maintain and reuse",
      "To make every file larger",
      "To avoid using functions",
      "To prevent the application from running",
    ],
    answer: 0,
    answerExplanation:
      "A clear project structure separates responsibilities and makes code easier to reuse, test, and maintain.",
  },
  {
    id: 18,
    title: "Security Best Practices",
    duration: "15 min",
    explanation:
      "Keep secrets out of source control, validate untrusted input, update dependencies, and avoid exposing sensitive errors.",
    example: `// Never hardcode real secrets.
const apiKey = process.env.API_KEY;

if (!apiKey) {
  throw new Error("API_KEY is not configured");
}`,
    question: "How should API keys and secrets be handled?",
    options: [
      "Put them directly in public source code",
      "Share them in error messages",
      "Store them in source control",
      "Use environment variables and keep them private",
    ],
    answer: 3,
    answerExplanation:
      "Keep secrets private, use environment variables or a secret manager, and never commit real credentials to source control.",
  },
  {
    id: 19,
    title: "Testing Node.js Code",
    duration: "15 min",
    explanation:
      "Tests check whether functions behave as expected and help prevent regressions when code changes.",
    example: `const assert = require("node:assert/strict");

function add(a, b) {
  return a + b;
}

assert.equal(add(2, 3), 5);
console.log("Test passed!");`,
    question: "Why do developers write tests?",
    options: [
      "To replace all application code",
      "To check that code behaves as expected",
      "To install Node.js",
      "To hide bugs from users",
    ],
    answer: 1,
    answerExplanation:
      "Tests verify expected behavior and help catch bugs when code changes.",
  },
  {
    id: 20,
    title: "Advanced Node.js and Best Practices",
    duration: "20 min",
    explanation:
      "Advanced Node.js development includes performance profiling, graceful shutdowns, logging, testing, and choosing appropriate concurrency patterns.",
    example: `process.on("SIGTERM", () => {
  console.log("Shutdown signal received");

  // Close servers and database connections here.
  process.exit(0);
});`,
    question: "What is graceful shutdown?",
    options: [
      "Immediately deleting project files",
      "Ignoring all server errors",
      "Closing servers and resources safely before exiting",
      "Restarting the browser",
    ],
    answer: 2,
    answerExplanation:
      "A graceful shutdown gives the application a chance to stop accepting requests and close resources, such as database connections, before exiting.",
  },
];

export default nodeLessons;
