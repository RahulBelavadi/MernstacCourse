
const mongodbLessons = [
  {
    id: 1,
    title: "What is MongoDB?",
    duration: "5 min",
    explanation:
      "MongoDB is a NoSQL database. It stores data in documents instead of traditional rows and tables. Documents use a JSON-like format called BSON.",
    example: `// Example MongoDB document
{
  name: "Rahul",
  phone: "9876543210",
  city: "Bengaluru"
}`,
    question: "What type of database is MongoDB?",
    options: [
      "Relational database only",
      "NoSQL document database",
      "HTML database",
      "CSS database",
    ],
    answer: 1,
    answerExplanation:
      "MongoDB is a NoSQL document database that stores data in BSON documents.",
  },
  {
    id: 2,
    title: "SQL vs NoSQL",
    duration: "6 min",
    explanation:
      "SQL databases commonly organize data into tables with rows and columns. MongoDB organizes data into collections containing documents. Both can store and query structured information.",
    example: `// MongoDB document
{
  name: "Rahul",
  age: 25
}`,
    question: "How does MongoDB primarily organize data?",
    options: [
      "Only in HTML files",
      "In CSS classes",
      "In collections and documents",
      "Only in spreadsheets",
    ],
    answer: 2,
    answerExplanation:
      "MongoDB stores documents inside collections, rather than using traditional relational tables as its primary model.",
  },
  {
    id: 3,
    title: "Database, Collections and Documents",
    duration: "6 min",
    explanation:
      "A database contains collections. A collection contains documents. A document stores individual fields and their values.",
    example: `Database: college
Collection: students
Document:
{
  name: "Rahul",
  phone: "9876543210"
}`,
    question: "What does a MongoDB collection contain?",
    options: [
      "Documents",
      "Only databases",
      "React components",
      "CSS files",
    ],
    answer: 0,
    answerExplanation:
      "A collection groups related documents, such as student records.",
  },
  {
    id: 4,
    title: "MongoDB and Compass",
    duration: "7 min",
    explanation:
      "MongoDB Community Server can run a database on your computer. MongoDB Compass is a graphical tool for viewing databases, collections and documents. You can also use MongoDB Atlas, a cloud database service.",
    example: `// Local MongoDB connection string
mongodb://127.0.0.1:27017/studentDB`,
    question: "What is MongoDB Compass used for?",
    options: [
      "Writing CSS animations",
      "Designing React components",
      "Editing images only",
      "Viewing and managing MongoDB data graphically",
    ],
    answer: 3,
    answerExplanation:
      "Compass provides a graphical interface to explore and manage MongoDB databases.",
  },
  {
    id: 5,
    title: "Connect MongoDB with Node.js",
    duration: "8 min",
    explanation:
      "A Node.js application can connect to MongoDB using the MongoDB driver or Mongoose. Mongoose provides schemas and models to help organize database operations.",
    example: `// Install the Mongoose package first:
// npm install mongoose

const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
}

connectDB().catch(console.error);`,
    question: "Which package provides schemas and models for MongoDB in Node.js?",
    options: ["Express", "Mongoose", "React", "Nodemon"],
    answer: 1,
    answerExplanation:
      "Mongoose is an ODM library that helps Node.js applications work with MongoDB.",
  },
  {
    id: 6,
    title: "MongoDB CRUD Operations",
    duration: "8 min",
    explanation:
      "CRUD stands for Create, Read, Update and Delete. These are the four basic operations used to manage records in a database.",
    example: `// Mongoose model examples
await Student.create({ name: "Rahul" }); // Create
await Student.find();                   // Read
await Student.updateOne(
  { name: "Rahul" },
  { $set: { name: "Rahul B" } }
);                                       // Update
await Student.deleteOne({ name: "Rahul B" }); // Delete`,
    question: "What does CRUD stand for?",
    options: [
      "Create, Read, Update, Delete",
      "Copy, Run, Upload, Download",
      "Create, Remove, Use, Display",
      "Connect, React, Update, Deploy",
    ],
    answer: 0,
    answerExplanation:
      "CRUD describes the four basic ways to manage stored data.",
  },
  {
    id: 7,
    title: "Mongoose Schemas",
    duration: "8 min",
    explanation:
      "A Mongoose schema defines the expected fields and types for documents. It can also specify validation rules and default values.",
    example: `const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true }
});`,
    question: "What is the main purpose of a Mongoose schema?",
    options: [
      "To create webpage styles",
      "To start a React application",
      "To define document fields and their rules",
      "To replace Node.js",
    ],
    answer: 2,
    answerExplanation:
      "A schema defines the shape of documents and can specify validation and defaults.",
  },
  {
    id: 8,
    title: "Mongoose Models",
    duration: "7 min",
    explanation:
      "A Mongoose model is created from a schema. You use the model to create, find, update and delete documents in its collection.",
    example: `const Student = mongoose.model(
  "Student",
  studentSchema
);

// Read all students
const students = await Student.find();`,
    question: "What do you use a Mongoose model for?",
    options: [
      "Creating CSS variables",
      "Performing database operations",
      "Writing HTML headings",
      "Opening the browser console",
    ],
    answer: 1,
    answerExplanation:
      "Models provide methods to work with documents in the associated MongoDB collection.",
  },
  {
    id: 9,
    title: "Finding, Updating and Deleting",
    duration: "9 min",
    explanation:
      "Mongoose provides methods such as find(), findById(), findByIdAndUpdate() and findByIdAndDelete(). Always validate incoming data and handle errors.",
    example: `// Find one student
const student = await Student.findById(id);

// Update a student
const updated = await Student.findByIdAndUpdate(
  id,
  { name: "Rahul B" },
  { new: true, runValidators: true }
);

// Delete a student
await Student.findByIdAndDelete(id);`,
    question: "Which method finds a document using its MongoDB ID?",
    options: [
      "findById()",
      "createCSS()",
      "useState()",
      "listen()",
    ],
    answer: 0,
    answerExplanation:
      "findById() searches for a document by its _id value.",
  },
  {
    id: 10,
    title: "Filtering and Sorting",
    duration: "8 min",
    explanation:
      "MongoDB queries can filter documents using conditions. Mongoose also supports sorting, selecting fields and limiting results.",
    example: `// Find students from Bengaluru
const students = await Student.find({
  city: "Bengaluru"
})
  .sort({ name: 1 })
  .limit(10);`,
    question: "What does sort({ name: 1 }) do?",
    options: [
      "Deletes every student",
      "Connects to Express",
      "Sorts names in ascending order",
      "Changes names to numbers",
    ],
    answer: 2,
    answerExplanation:
      "A sort value of 1 sorts in ascending order; -1 sorts in descending order.",
  },
  {
    id: 11,
    title: "Relationships and References",
    duration: "8 min",
    explanation:
      "MongoDB documents can contain embedded data or references to other documents. Mongoose supports references using ObjectId fields and can retrieve referenced data with populate().",
    example: `const courseSchema = new mongoose.Schema({
  title: String,
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }
});

// Example query
const courses = await Course.find().populate("student");`,
    question: "What does Mongoose populate() help you do?",
    options: [
      "Create a CSS layout",
      "Retrieve referenced documents",
      "Install MongoDB",
      "Start an HTTP server",
    ],
    answer: 1,
    answerExplanation:
      "populate() can replace a referenced ObjectId with the related document's data.",
  },
  {
    id: 12,
    title: "MongoDB Error Handling",
    duration: "7 min",
    explanation:
      "Database operations can fail because of connection problems, invalid IDs or validation errors. Use try/catch in async functions and send appropriate error responses from your API.",
    example: `async function getStudents(req, res, next) {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    next(error);
  }
}`,
    question: "Why should database operations use error handling?",
    options: [
      "To prevent all errors from ever happening",
      "To remove the database",
      "To make JavaScript unnecessary",
      "To handle failures safely",
    ],
    answer: 3,
    answerExplanation:
      "Error handling helps the application respond safely when database operations fail.",
  },
  {
    id: 13,
    title: "Environment Variables and Security",
    duration: "8 min",
    explanation:
      "Keep database credentials and connection strings in environment variables instead of hardcoding them. Never expose database passwords in frontend code or public repositories.",
    example: `// Install dotenv:
// npm install dotenv

require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

// Add MONGO_URI=your_connection_string
// to your private .env file.`,
    question: "Where should a private MongoDB connection string be stored?",
    options: [
      "In a public frontend JavaScript file",
      "In a protected environment variable",
      "Inside a public HTML heading",
      "In a CSS file",
    ],
    answer: 1,
    answerExplanation:
      "Environment variables help keep connection strings out of source code. Protect your .env file and configure secrets securely in deployment.",
  },
  {
    id: 14,
    title: "MongoDB with Express APIs",
    duration: "9 min",
    explanation:
      "Express receives HTTP requests, Mongoose communicates with MongoDB, and Express sends the result back as an HTTP response. This is a common pattern in MERN applications.",
    example: `app.get("/students", async (req, res, next) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    next(error);
  }
});`,
    question: "In a typical MERN backend, what connects Express routes to MongoDB models?",
    options: [
      "CSS",
      "HTML",
      "Mongoose",
      "React Router only",
    ],
    answer: 2,
    answerExplanation:
      "Mongoose lets backend route handlers query and update MongoDB documents.",
  },
  {
    id: 15,
    title: "Mini Project: Student Management API",
    duration: "12 min",
    explanation:
      "Build a small API that creates, lists, updates and deletes students. Use an Express router, a Mongoose model, input validation and proper error handling. Test the endpoints with Thunder Client or Postman.",
    example: `// Create a student
app.post("/students", async (req, res, next) => {
  try {
    const student = await Student.create({
      name: req.body.name,
      phone: req.body.phone
    });

    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
});`,
    question: "Which HTTP status code commonly indicates a resource was created successfully?",
    options: ["404", "500", "401", "201"],
    answer: 3,
    answerExplanation:
      "HTTP 201 Created is commonly returned when a new resource is successfully created.",
  },
];

export default mongodbLessons;
