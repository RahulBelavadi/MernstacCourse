
import { useEffect, useState } from "react";
import "./App.css";

import lessons from "./lessons";
import cssLessons from "./cssLessons";
import jsLessons from "./jsLessons";
import reactLessons from "./reactLessons";
import nodeLessons from "./nodeLessons";
import expressLessons from "./expressLessons";
import mongodbLessons from "./mongodbLessons";

const courses = [
  {
    id: "html",
    title: "HTML Fundamentals",
    subtitle: "Build the structure of websites",
    icon: "🌐",
    level: "Beginner",
    color: "orange",
    description: "Learn HTML with examples, practice and quizzes.",
    topics: ["HTML structure", "Headings", "Links and images", "Forms"],
  },
  {
    id: "css",
    title: "CSS Mastery",
    subtitle: "Make websites beautiful",
    icon: "🎨",
    level: "Beginner",
    color: "blue",
    description: "Learn CSS with editable code and live previews.",
    topics: ["Selectors", "Box model", "Flexbox", "Grid", "Animations"],
  },
  {
    id: "javascript",
    title: "JavaScript Mastery",
    subtitle: "Make websites interactive",
    icon: "⚡",
    level: "Beginner",
    color: "yellow",
    description: "Learn JavaScript with examples and a code playground.",
    topics: ["Variables", "Conditions", "Loops", "Functions"],
  },
  {
    id: "react",
    title: "React.js",
    subtitle: "Build reusable UI components",
    icon: "⚛️",
    level: "Intermediate",
    color: "cyan",
    description: "Learn components, props, hooks and API integration.",
    topics: ["JSX", "Components", "Props", "useState", "useEffect"],
  },
  {
    id: "node",
    title: "Node.js & Express",
    subtitle: "Build your backend",
    icon: "🟢",
    level: "Beginner to Advanced",
    color: "green",
    description: "Create servers, REST APIs and backend applications.",
    topics: ["Node.js", "Express", "REST APIs", "Middleware"],
  },
  {
    id: "express",
    title: "Express.js",
    subtitle: "Build REST APIs",
    icon: "🚀",
    level: "Beginner to Advanced",
    color: "green",
    description: "Learn routing, middleware, REST APIs and backend security.",
    topics: [
      "Express Setup",
      "Routing",
      "Middleware",
      "REST APIs",
      "Error Handling",
      "Authentication",
    ],
  },
  {
    id: "mongodb",
    title: "MongoDB",
    subtitle: "Master database fundamentals",
    icon: "🍃",
    level: "Beginner to Advanced",
    color: "green",
    description: "Learn databases, queries, Mongoose and CRUD operations.",
    topics: [
      "Documents & Collections",
      "CRUD Operations",
      "Mongoose",
      "Queries",
      "Database Security",
    ],
  },
];

// Return the correct lesson array for each course.
function getCourseLessons(courseId) {
  switch (courseId) {
    case "html":
      return lessons.html || [];
    case "css":
      return cssLessons;
    case "javascript":
      return jsLessons;
    case "react":
      return reactLessons;
    case "node":
      return nodeLessons;
    case "express":
      return expressLessons;
    case "mongodb":
      return mongodbLessons;
    default:
      return [];
  }
}

function HTMLPreview({ code }) {
  const srcDoc = `<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  line-height: 1.6;
  overflow-wrap: anywhere;
  color: #202124;
}
img { max-width: 100%; }
</style>
</head>
<body>${code}</body>
</html>`;

  return (
    <iframe
      title="HTML live preview"
      sandbox=""
      srcDoc={srcDoc}
      className="live-preview"
    />
  );
}

function CSSPreview({ html, css }) {
  const srcDoc = `<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  line-height: 1.6;
  overflow-wrap: anywhere;
  color: #202124;
}
img { max-width: 100%; }
${css}
</style>
</head>
<body>${html || "<h2>Hello World!</h2><p>Try changing the CSS.</p>"}</body>
</html>`;

  return (
    <iframe
      title="CSS live preview"
      sandbox=""
      srcDoc={srcDoc}
      className="live-preview"
    />
  );
}

function HTMLRunner({ initialCode = "" }) {
  const [code, setCode] = useState(initialCode);

  return (
    <div className="try-panel">
      <p className="eyebrow">YOUR TURN</p>
      <h3>🌐 Try HTML Now</h3>
      <p className="section-subtitle">
        Change the HTML and see your result below.
      </p>

      <textarea
        className="lesson-code-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        aria-label="HTML practice editor"
      />

      <div className="editor-actions">
        <button
          className="primary-button"
          onClick={() => setCode(initialCode)}
        >
          Reset Code
        </button>
      </div>

      <h4>Live Preview</h4>
      <HTMLPreview code={code} />
    </div>
  );
}

function CSSRunner({ lesson }) {
  const [code, setCode] = useState(lesson.example || "");

  return (
    <div className="try-panel">
      <p className="eyebrow">YOUR TURN</p>
      <h3>🎨 Try CSS Now</h3>
      <p className="section-subtitle">
        Edit the CSS and watch the preview update.
      </p>

      <textarea
        className="lesson-code-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        aria-label="CSS practice editor"
      />

      <div className="editor-actions">
        <button
          className="primary-button"
          onClick={() => setCode(lesson.example || "")}
        >
          Reset Code
        </button>
      </div>

      <h4>Live Preview</h4>
      <CSSPreview html={lesson.previewHTML} css={code} />
    </div>
  );
}

function JavaScriptRunner({ initialCode = "" }) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("Click Run Code to see output.");

  function runCode() {
    const logs = [];

    const safeConsole = {
      log: (...args) => {
        logs.push(
          args
            .map((value) => {
              if (typeof value === "string") return value;

              try {
                return JSON.stringify(value) ?? String(value);
              } catch {
                return String(value);
              }
            })
            .join(" "),
        );
      },
    };

    try {
      const execute = new Function("console", `"use strict";\n${code}`);
      execute(safeConsole);
      setOutput(logs.join("\n") || "Code executed. No output.");
    } catch (error) {
      setOutput(`${error.name}: ${error.message}`);
    }
  }

  return (
    <div className="try-panel">
      <p className="eyebrow">YOUR TURN</p>
      <h3>⚡ Try JavaScript Now</h3>
      <p className="section-subtitle">
        Write your code and click Run Code.
      </p>

      <textarea
        className="lesson-code-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        aria-label="JavaScript practice editor"
      />

      <div className="editor-actions">
        <button className="primary-button" onClick={runCode}>
          ▶ Run Code
        </button>

        <button
          className="back-button"
          onClick={() => {
            setCode(initialCode);
            setOutput("Click Run Code to see output.");
          }}
        >
          Reset Code
        </button>
      </div>

      <div className="js-output">
        <h4>Output</h4>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [search, setSearch] = useState("");

  // Load previously completed lessons from localStorage.
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("mern-mastery-completed") || "[]",
      );

      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  // Save progress whenever the completed list changes.
  useEffect(() => {
    try {
      localStorage.setItem(
        "mern-mastery-completed",
        JSON.stringify(completed),
      );
    } catch (error) {
      console.error("Could not save learning progress:", error);
    }
  }, [completed]);

  const [activeLesson, setActiveLesson] = useState(0);
  const [showLessonDetail, setShowLessonDetail] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const courseLessons = getCourseLessons(selectedCourse?.id);
  const currentLesson = courseLessons[activeLesson];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()),
  );

  // Calculate totals from the actual lesson arrays.
  const totalLessons = courses.reduce(
    (total, course) => total + getCourseLessons(course.id).length,
    0,
  );

  // Count only lesson completion keys, not manually completed topics.
  const completedLessonCount = completed.filter((key) =>
    key.includes("-lesson-"),
  ).length;

  const progress = Math.min(
    100,
    Math.round(
      (completedLessonCount / Math.max(totalLessons, 1)) * 100,
    ),
  );

  function openCourse(course) {
    setSelectedCourse(course);
    setActivePage("course");
    setActiveLesson(0);
    setShowLessonDetail(false);
    setSelectedAnswer(null);
    setShowAnswer(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openLesson(index) {
    setActiveLesson(index);
    setShowLessonDetail(true);
    setSelectedAnswer(null);
    setShowAnswer(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToLessons() {
    setShowLessonDetail(false);
    setSelectedAnswer(null);
    setShowAnswer(false);
  }

  function toggleTopic(courseId, topic) {
    const key = `${courseId}-${topic}`;

    setCompleted((previous) =>
      previous.includes(key)
        ? previous.filter((item) => item !== key)
        : [...previous, key],
    );
  }

  function completeCurrentLesson() {
    if (!selectedCourse || !currentLesson) return;

    const key = `${selectedCourse.id}-lesson-${currentLesson.id}`;

    setCompleted((previous) =>
      previous.includes(key) ? previous : [...previous, key],
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">{"</>"}</div>
          <div>
            <h2>
              MERN<span>Mastery</span>
            </h2>
            <p>Your coding journey</p>
          </div>
        </div>

        <p className="nav-label">LEARNING SPACE</p>

        <button
          className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}
          onClick={() => setActivePage("dashboard")}
        >
          <span>▦</span> Dashboard
        </button>

        <button
          className={`nav-item ${activePage === "practice" ? "active" : ""}`}
          onClick={() => setActivePage("practice")}
        >
          <span>⌨</span> Code practice
        </button>

        <p className="nav-label">YOUR COURSES</p>

        {courses.map((course) => (
          <button
            key={course.id}
            className={`nav-item ${
              selectedCourse?.id === course.id && activePage === "course"
                ? "active"
                : ""
            }`}
            onClick={() => openCourse(course)}
          >
            <span>{course.icon}</span> {course.title}
          </button>
        ))}

        <div className="sidebar-bottom">
          <div className="streak-icon">🔥</div>
          <h3>Keep showing up!</h3>
          <p>Small steps every day lead to big results.</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="breadcrumb">LEARN / BUILD / GROW</p>
            <h2>
              {activePage === "dashboard"
                ? "Dashboard"
                : activePage === "practice"
                  ? "Code Practice"
                  : showLessonDetail && currentLesson
                    ? currentLesson.title
                    : selectedCourse?.title || "Learning"}
            </h2>
          </div>

          <div className="topbar-right">
            <span className="status-dot" />
            <span>Learning mode</span>
            <div className="avatar">R</div>
          </div>
        </header>

        {activePage === "dashboard" && (
          <>
            <section className="hero">
              <div className="hero-content">
                <span className="eyebrow">YOUR JOURNEY STARTS HERE</span>
                <h1>
                  Learn to code.
                  <br />
                  Build something <span>real.</span>
                </h1>
                <p>
                  Master the MERN stack with simple explanations, practical
                  examples and hands-on projects.
                </p>
                <button
                  className="primary-button"
                  onClick={() => openCourse(courses[0])}
                >
                  Start learning →
                </button>
              </div>

              <div className="hero-art">
                <div className="code-window">
                  <div className="window-dots">
                    <i />
                    <i />
                    <i />
                    <span>hello-world.jsx</span>
                  </div>

                  <div className="code-lines">
                    <p>
                      <b>01</b> <span className="pink">function</span>{" "}
                      <span className="cyan">Learn</span>() {"{"}
                    </p>
                    <p>
                      <b>02</b> &nbsp; <span className="pink">return</span> (
                    </p>
                    <p>
                      <b>03</b> &nbsp;{" "}
                      <span className="green">"Keep building!"</span>
                    </p>
                    <p>
                      <b>04</b> &nbsp; );
                    </p>
                    <p>
                      <b>05</b> {"}"}
                    </p>
                  </div>

                  <div className="code-success">✓ Ready to learn</div>
                </div>

                <div className="floating-badge badge-react">⚛️ React</div>
                <div className="floating-badge badge-js">JS</div>
              </div>
            </section>

            <section className="stats-grid">
              <div className="stat-card">
                <span className="stat-icon purple-bg">📚</span>
                <div>
                  <p>Available courses</p>
                  <h3>{courses.length}</h3>
                </div>
              </div>

              <div className="stat-card">
                <span className="stat-icon green-bg">✓</span>
                <div>
                  <p>Lessons completed</p>
                  <h3>{completedLessonCount}</h3>
                </div>
              </div>

              <div className="stat-card">
                <span className="stat-icon orange-bg">🎯</span>
                <div>
                  <p>Overall progress</p>
                  <h3>{progress}%</h3>
                </div>
              </div>
            </section>

            <section className="section-heading">
              <div>
                <p className="eyebrow">YOUR CURRICULUM</p>
                <h2>Explore your courses</h2>
                <p className="section-subtitle">
                  Start with the basics and work your way up.
                </p>
              </div>

              <div className="search-box">
                <span>⌕</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search courses..."
                />
              </div>
            </section>

            <section className="course-grid">
              {filteredCourses.map((course) => {
                const courseLessonCount = getCourseLessons(course.id).length;

                const done = completed.filter((key) =>
                  key.startsWith(`${course.id}-lesson-`),
                ).length;

                const courseProgress =
                  courseLessonCount > 0
                    ? Math.min(100, (done / courseLessonCount) * 100)
                    : 0;

                return (
                  <article className="course-card" key={course.id}>
                    <div className="course-card-top">
                      <div className={`course-icon ${course.color}`}>
                        {course.icon}
                      </div>
                      <span className="level-tag">{course.level}</span>
                    </div>

                    <h3>{course.title}</h3>
                    <p className="course-subtitle">{course.subtitle}</p>
                    <p className="course-description">{course.description}</p>

                    <div className="course-meta">
                      <span>▤ {courseLessonCount} lessons</span>
                      <span>
                        {done} / {courseLessonCount} completed
                      </span>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ width: `${courseProgress}%` }}
                      />
                    </div>

                    <button
                      className="course-button"
                      onClick={() => openCourse(course)}
                    >
                      Explore course →
                    </button>
                  </article>
                );
              })}

              {filteredCourses.length === 0 && <p>No courses found.</p>}
            </section>

            <section className="roadmap">
              <p className="eyebrow">THE BIG PICTURE</p>
              <h2>Your MERN roadmap</h2>
              <p>Learn how the technologies work together.</p>

              <div className="roadmap-flow">
                {["React", "Node.js", "Express", "MongoDB"].map((name) => (
                  <div className="roadmap-node" key={name}>
                    <b>{name[0]}</b>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activePage === "course" && selectedCourse && (
          <section className="lesson-page">
            {[
              "html",
              "css",
              "javascript",
              "react",
              "node",
              "express",
              "mongodb",
            ].includes(selectedCourse.id) ? (
              showLessonDetail && currentLesson ? (
                <>
                  <button className="back-button" onClick={backToLessons}>
                    ← All {selectedCourse.title} lessons
                  </button>

                  <div className="lesson-panel">
                    <p className="eyebrow">
                      LESSON {activeLesson + 1} OF {courseLessons.length}
                    </p>

                    <h1>{currentLesson.title}</h1>

                    <p className="section-subtitle">
                      ⏱ {currentLesson.duration}
                    </p>

                    <div className="lesson-workspace">
                      <div className="example-panel">
                        <p className="eyebrow">LEARN BY EXAMPLE</p>
                        <p>{currentLesson.explanation}</p>

                        <h3>📘 Code Example</h3>
                        <pre className="lesson-code">
                          <code>{currentLesson.example}</code>
                        </pre>
                      </div>

                      {selectedCourse.id === "html" && (
                        <HTMLRunner
                          key={`${selectedCourse.id}-${currentLesson.id}`}
                          initialCode={currentLesson.example}
                        />
                      )}

                      {selectedCourse.id === "css" && (
                        <CSSRunner
                          key={`${selectedCourse.id}-${currentLesson.id}`}
                          lesson={currentLesson}
                        />
                      )}

                      {selectedCourse.id === "javascript" && (
                        <JavaScriptRunner
                          key={`${selectedCourse.id}-${currentLesson.id}`}
                          initialCode={currentLesson.example}
                        />
                      )}
                    </div>
                  </div>

                  <div className="lesson-panel">
                    <p className="eyebrow">QUICK QUIZ</p>

                    <h2>
                      {currentLesson.question || "Practice this lesson"}
                    </h2>

                    {(currentLesson.options || []).map((option, index) => (
                      <button
                        key={option}
                        className={`topic-row ${
                          showAnswer && index === currentLesson.answer
                            ? "answer-correct"
                            : showAnswer && selectedAnswer === index
                              ? "answer-wrong"
                              : selectedAnswer === index
                                ? "answer-selected"
                                : ""
                        }`}
                        disabled={showAnswer}
                        onClick={() => setSelectedAnswer(index)}
                      >
                        <span className="topic-number">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option}</span>
                      </button>
                    ))}

                    {!showAnswer ? (
                      <button
                        className="primary-button"
                        disabled={selectedAnswer === null}
                        onClick={() => {
                          setShowAnswer(true);

                          if (selectedAnswer === currentLesson.answer) {
                            completeCurrentLesson();
                          }
                        }}
                      >
                        Check answer →
                      </button>
                    ) : (
                      <div className="tip-panel">
                        <span>
                          {selectedAnswer === currentLesson.answer
                            ? "✅"
                            : "💡"}
                        </span>

                        <div>
                          <h3>
                            {selectedAnswer === currentLesson.answer
                              ? "Correct answer!"
                              : "Not quite! Learn from the explanation."}
                          </h3>
                          <p>{currentLesson.answerExplanation}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="lesson-panel">
                    <div className="lesson-navigation">
                      <button
                        className="back-button"
                        disabled={activeLesson === 0}
                        onClick={() => openLesson(activeLesson - 1)}
                      >
                        ← Previous lesson
                      </button>

                      {activeLesson < courseLessons.length - 1 ? (
                        <button
                          className="primary-button"
                          onClick={() => openLesson(activeLesson + 1)}
                        >
                          Next lesson →
                        </button>
                      ) : (
                        <button
                          className="primary-button"
                          onClick={backToLessons}
                        >
                          Finish course ✓
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="back-button"
                    onClick={() => setActivePage("dashboard")}
                  >
                    ← Back to dashboard
                  </button>

                  <div className="lesson-hero">
                    <div
                      className={`course-icon large-icon ${selectedCourse.color}`}
                    >
                      {selectedCourse.icon}
                    </div>

                    <div>
                      <span className="eyebrow">
                        {selectedCourse.level} COURSE
                      </span>
                      <h1>{selectedCourse.title}</h1>
                      <p>{selectedCourse.description}</p>
                    </div>
                  </div>

                  <div className="lesson-panel">
                    <h2>All {selectedCourse.title} lessons</h2>

                    <p className="section-subtitle">
                      Choose a lesson to view its example and quiz.
                    </p>

                    {courseLessons.map((lesson, index) => {
                      const lessonKey =
                        `${selectedCourse.id}-lesson-${lesson.id}`;

                      const isDone = completed.includes(lessonKey);

                      return (
                        <button
                          key={lesson.id}
                          className={`topic-row ${
                            isDone ? "topic-done" : ""
                          }`}
                          onClick={() => openLesson(index)}
                        >
                          <span className="topic-number">
                            {isDone
                              ? "✓"
                              : String(index + 1).padStart(2, "0")}
                          </span>

                          <span>{lesson.title}</span>

                          <span className="topic-action">
                            {isDone ? "Completed ✓" : `${lesson.duration} →`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )
            ) : (
              <>
                <button
                  className="back-button"
                  onClick={() => setActivePage("dashboard")}
                >
                  ← Back to dashboard
                </button>

                <div className="lesson-hero">
                  <div
                    className={`course-icon large-icon ${selectedCourse.color}`}
                  >
                    {selectedCourse.icon}
                  </div>

                  <div>
                    <span className="eyebrow">
                      {selectedCourse.level} COURSE
                    </span>
                    <h1>{selectedCourse.title}</h1>
                    <p>{selectedCourse.description}</p>
                  </div>
                </div>

                <div className="lesson-panel">
                  <h2>Course topics</h2>

                  <p className="section-subtitle">
                    Tick a topic after you have learned and practised it.
                  </p>

                  {selectedCourse.topics.map((topic, index) => {
                    const key = `${selectedCourse.id}-${topic}`;
                    const isDone = completed.includes(key);

                    return (
                      <button
                        key={topic}
                        className={`topic-row ${
                          isDone ? "topic-done" : ""
                        }`}
                        onClick={() => toggleTopic(selectedCourse.id, topic)}
                      >
                        <span className="topic-number">
                          {isDone
                            ? "✓"
                            : String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{topic}</span>

                        <span className="topic-action">
                          {isDone ? "Completed" : "Mark complete"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </section>
        )}

        {activePage === "practice" && (
          <section className="lesson-page">
            <p className="eyebrow">HANDS-ON LEARNING</p>
            <h1>Code practice</h1>

            <p className="section-subtitle">
              Choose a course to start practising.
            </p>

            <div className="lesson-panel">
              {courses.map((course) => (
                <button
                  key={course.id}
                  className="topic-row"
                  onClick={() => openCourse(course)}
                >
                  <span>{course.icon}</span>
                  <span>{course.title}</span>
                  <span className="topic-action">Open →</span>
                </button>
              ))}
            </div>
          </section>
        )}

        <footer className="footer">
          <span>Built for learning, one concept at a time.</span>
          <span>MERN Mastery © 2026</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
