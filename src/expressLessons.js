
const expressLessons = [
  {
    id: 1,
    title: "What is Express.js?",
    duration: "5 min",
    explanation:
      "Express.js is a web framework for Node.js. It makes creating web servers, handling requests, and building APIs easier.",
    example: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    question: "What is Express.js?",
    options: [
      "A database",
      "A JavaScript framework for Node.js",
      "A CSS library",
      "An operating system",
    ],
    answer: 1,
    answerExplanation:
      "Express.js is a web framework that simplifies building servers and APIs with Node.js.",
  },
  {
    id: 2,
    title: "Installing Express.js",
    duration: "5 min",
    explanation:
      "Create a Node.js project and install Express using npm before importing it into your application.",
    example: `npm init -y
npm install express

// Save your server code in app.js
// Run it with:
node app.js`,
    question: "Which command installs Express.js?",
    options: [
      "node express",
      "npm create express",
      "npm install express",
      "install node express",
    ],
    answer: 2,
    answerExplanation:
      "npm install express installs Express as a dependency in your Node.js project.",
  },
  {
    id: 3,
    title: "Your First Express Server",
    duration: "7 min",
    explanation:
      "The express() function creates an application. The listen() method starts the server on a port.",
    example: `const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("My first server!");
});

app.listen(3000);`,
    question: "What does app.listen(3000) do?",
    options: [
      "Starts the server on port 3000",
      "Creates a database",
      "Installs Express",
      "Deletes a route",
    ],
    answer: 0,
    answerExplanation:
      "app.listen(3000) starts the Express application listening for incoming requests on port 3000.",
  },
  {
    id: 4,
    title: "Routes and HTTP Methods",
    duration: "8 min",
    explanation:
      "Routes define how an application responds to a URL and HTTP method. Common methods include GET, POST, PUT, PATCH, and DELETE.",
    example: `app.get("/users", (req, res) => {
  res.send("Get users");
});

app.post("/users", (req, res) => {
  res.send("Create a user");
});`,
    question: "Which HTTP method is commonly used to retrieve data?",
    options: ["POST", "DELETE", "GET", "PATCH"],
    answer: 2,
    answerExplanation:
      "GET is commonly used to retrieve resources from a server.",
  },
  {
    id: 5,
    title: "Request and Response",
    duration: "8 min",
    explanation:
      "The req object contains information about an incoming request. The res object is used to send a response.",
    example: `app.get("/hello", (req, res) => {
  res.status(200).send("Hello there!");
});`,
    question: "What is the purpose of the res object?",
    options: [
      "To install dependencies",
      "To send a response to the client",
      "To create JavaScript variables",
      "To connect a keyboard",
    ],
    answer: 1,
    answerExplanation:
      "The res object provides methods to send response data, set status codes, and return JSON.",
  },
  {
    id: 6,
    title: "Route Parameters",
    duration: "8 min",
    explanation:
      "Route parameters capture values from a URL. Express makes them available through req.params.",
    example: `app.get("/users/:id", (req, res) => {
  res.json({
    userId: req.params.id
  });
});

// GET /users/25 returns userId "25"`,
    question: "Where can you read the id in /users/:id?",
    options: [
      "req.body.id",
      "res.id",
      "req.params.id",
      "app.params.id",
    ],
    answer: 2,
    answerExplanation:
      "Express stores named route parameters in req.params. URL parameter values are strings.",
  },
  {
    id: 7,
    title: "Query Parameters",
    duration: "8 min",
    explanation:
      "Query parameters appear after ? in a URL. They are useful for searching, filtering, and pagination.",
    example: `app.get("/products", (req, res) => {
  const category = req.query.category;

  res.json({
    selectedCategory: category
  });
});

// GET /products?category=books`,
    question: "How do you access category in this URL: /products?category=books?",
    options: [
      "req.query.category",
      "req.params.category",
      "res.query.category",
      "app.category",
    ],
    answer: 0,
    answerExplanation:
      "Query string values are available through req.query in Express.",
  },
  {
    id: 8,
    title: "Middleware",
    duration: "10 min",
    explanation:
      "Middleware functions can inspect requests, modify request or response objects, end a response, or pass control to the next middleware using next().",
    example: `app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Home page");
});`,
    question: "What does next() normally do in middleware?",
    options: [
      "Stops the server permanently",
      "Deletes the request",
      "Installs another package",
      "Passes control to the next middleware or handler",
    ],
    answer: 3,
    answerExplanation:
      "Calling next() passes control to the next matching middleware or route handler.",
  },
  {
    id: 9,
    title: "Handling JSON and POST Requests",
    duration: "10 min",
    explanation:
      "express.json() parses incoming JSON request bodies. Use it before routes that read req.body.",
    example: `const express = require("express");
const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  res.status(201).json({
    message: "User received",
    user: req.body
  });
});`,
    question: "What does express.json() do?",
    options: [
      "Connects to MongoDB",
      "Parses incoming JSON request bodies",
      "Creates HTML pages automatically",
      "Encrypts all passwords",
    ],
    answer: 1,
    answerExplanation:
      "express.json() parses valid JSON request bodies and makes the resulting data available through req.body.",
  },
  {
    id: 10,
    title: "Building REST APIs",
    duration: "12 min",
    explanation:
      "REST APIs expose resources through URLs and HTTP methods. They commonly exchange JSON and use appropriate HTTP status codes.",
    example: `app.get("/api/users", (req, res) => {
  res.status(200).json([
    { id: 1, name: "Asha" },
    { id: 2, name: "Ravi" }
  ]);
});`,
    question: "Which response method sends JSON?",
    options: [
      "res.json()",
      "res.install()",
      "res.route()",
      "res.database()",
    ],
    answer: 0,
    answerExplanation:
      "res.json() sends a JSON response and sets the appropriate content type.",
  },
  {
    id: 11,
    title: "Error Handling Middleware",
    duration: "12 min",
    explanation:
      "Express error-handling middleware uses four parameters: err, req, res, and next. It helps return consistent error responses.",
    example: `app.get("/error", (req, res, next) => {
  next(new Error("Something went wrong"));
});

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    message: "Internal server error"
  });
});`,
    question: "How many parameters identify Express error-handling middleware?",
    options: ["One", "Two", "Four", "Six"],
    answer: 2,
    answerExplanation:
      "Express identifies error-handling middleware by its four parameters: err, req, res, and next.",
  },
  {
    id: 12,
    title: "Project Structure and Routers",
    duration: "12 min",
    explanation:
      "Express Router lets you group related routes into separate modules instead of keeping every route in one file.",
    example: `// routes/users.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([]);
});

module.exports = router;

// In app.js:
// app.use("/api/users", require("./routes/users"));`,
    question: "Why use express.Router()?",
    options: [
      "To replace JavaScript",
      "To organize related routes into separate modules",
      "To store images in a database",
      "To install Node.js",
    ],
    answer: 1,
    answerExplanation:
      "express.Router() creates modular route handlers that can be mounted at a URL prefix.",
  },
  {
    id: 13,
    title: "CORS and Security Basics",
    duration: "12 min",
    explanation:
      "CORS controls which browser origins may read responses. Production APIs should also validate input, limit access, and avoid exposing secrets.",
    example: `const cors = require("cors");

// Install first: npm install cors
app.use(cors({
  origin: "http://localhost:5173"
}));`,
    question: "What does CORS help control?",
    options: [
      "The JavaScript version",
      "The database password",
      "Which browser origins can access responses",
      "The server's folder name",
    ],
    answer: 2,
    answerExplanation:
      "CORS lets a server specify which origins browsers may allow to access its responses. It is not a replacement for authentication or authorization.",
  },
  {
    id: 14,
    title: "Authentication and Authorization",
    duration: "15 min",
    explanation:
      "Authentication checks who a user is. Authorization checks what that user is allowed to do. APIs often use sessions or verified tokens.",
    example: `function requireAuth(req, res, next) {
  if (!req.user) {
    return res.status(401).json({
      message: "Please log in"
    });
  }

  next();
}

app.get("/profile", requireAuth, (req, res) => {
  res.json({ message: "Private profile" });
});`,
    question: "What is the difference between authentication and authorization?",
    options: [
      "They mean exactly the same thing",
      "Authentication verifies identity; authorization checks permissions",
      "Authorization installs packages",
      "Authentication creates database tables",
    ],
    answer: 1,
    answerExplanation:
      "Authentication verifies identity, while authorization determines whether that identity has permission to perform an action. This example assumes req.user is set by trusted authentication middleware.",
  },
  {
    id: 15,
    title: "Advanced Express Best Practices",
    duration: "15 min",
    explanation:
      "Production Express apps benefit from validation, centralized error handling, secure configuration, logging, testing, and graceful shutdowns.",
    example: `app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

// Also add input validation,
// centralized error handling,
// logging, and tests.`,
    question: "Which is a good production API practice?",
    options: [
      "Ignore all errors",
      "Expose secret keys in responses",
      "Accept every input without validation",
      "Validate inputs and handle errors consistently",
    ],
    answer: 3,
    answerExplanation:
      "Input validation and consistent error handling make APIs safer, easier to debug, and more reliable.",
  },
];

export default expressLessons;
