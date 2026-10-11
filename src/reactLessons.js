
const reactLessons = [
  {
    id: 1,
    title: "What is React?",
    duration: "5 min",
    explanation: "React is a JavaScript library used to build interactive user interfaces. It lets us create reusable UI components.",
    example: `// React example
function App() {
  return <h1>Hello React!</h1>;
}

export default App;`,
    question: "What is React mainly used for?",
    options: [
      "Managing databases",
      "Building user interfaces",
      "Creating operating systems",
      "Writing CSS only"
    ],
    answer: 1,
    answerExplanation: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    title: "JSX",
    duration: "5 min",
    explanation: "JSX lets us write HTML-like syntax inside JavaScript. React uses JSX to describe what should appear on the screen.",
    example: `function App() {
  const name = "Rahul";

  return <h1>Hello, {name}!</h1>;
}

export default App;`,
    question: "What does JSX allow us to write?",
    options: [
      "SQL inside CSS",
      "HTML-like syntax inside JavaScript",
      "Only plain HTML files",
      "Node.js commands inside MongoDB"
    ],
    answer: 1,
    answerExplanation: "JSX allows HTML-like markup inside JavaScript code."
  },
  {
    id: 3,
    title: "React Components",
    duration: "6 min",
    explanation: "A component is a reusable part of a UI. React components are commonly written as JavaScript functions that return JSX.",
    example: `function Welcome() {
  return <h2>Welcome to my website</h2>;
}

function App() {
  return <Welcome />;
}

export default App;`,
    question: "Why do we create React components?",
    options: [
      "To reuse UI parts",
      "To delete JavaScript",
      "To create database tables",
      "To replace the browser"
    ],
    answer: 0,
    answerExplanation: "Components help us organize and reuse UI."
  },
  {
    id: 4,
    title: "JSX Rules",
    duration: "5 min",
    explanation: "JSX must return one parent element, tags must be closed, and many HTML attributes use camelCase, such as className.",
    example: `function App() {
  return (
    <div>
      <h1>My Website</h1>
      <p className="message">Hello!</p>
      <input type="text" />
    </div>
  );
}

export default App;`,
    question: "Which attribute is normally used instead of HTML class in JSX?",
    options: ["cssClass", "className", "classType", "styleClass"],
    answer: 1,
    answerExplanation: "JSX uses className for CSS classes."
  },
  {
    id: 5,
    title: "JavaScript Expressions in JSX",
    duration: "5 min",
    explanation: "Use curly braces {} to display JavaScript variables and expressions inside JSX.",
    example: `function App() {
  const price = 500;
  const quantity = 2;

  return <h2>Total: ₹{price * quantity}</h2>;
}

export default App;`,
    question: "How do you insert a JavaScript expression in JSX?",
    options: ["Using []", "Using <>", "Using {}", "Using ##"],
    answer: 2,
    answerExplanation: "Curly braces let you evaluate JavaScript expressions inside JSX."
  },
  {
    id: 6,
    title: "Props",
    duration: "7 min",
    explanation: "Props pass data from a parent component to a child component. Props should be treated as read-only.",
    example: `function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return <Greeting name="Rahul" />;
}

export default App;`,
    question: "What are props used for?",
    options: [
      "Passing data to components",
      "Changing CSS files automatically",
      "Connecting to MongoDB directly",
      "Stopping component rendering"
    ],
    answer: 0,
    answerExplanation: "Props let parent components pass data to child components."
  },
  {
    id: 7,
    title: "Destructuring Props",
    duration: "5 min",
    explanation: "Destructuring lets you extract values from props directly in a function parameter, making code shorter and easier to read.",
    example: `function User({ name, age }) {
  return (
    <p>{name} is {age} years old.</p>
  );
}

function App() {
  return <User name="Rahul" age={25} />;
}

export default App;`,
    question: "What is the benefit of destructuring props?",
    options: [
      "It deletes props",
      "It makes accessing prop values easier",
      "It creates a server",
      "It replaces JSX"
    ],
    answer: 1,
    answerExplanation: "Destructuring provides direct access to individual prop values."
  },
  {
    id: 8,
    title: "Rendering Lists with map()",
    duration: "7 min",
    explanation: "Use the JavaScript map() method to convert an array into a list of React elements. Each repeated element should have a stable key.",
    example: `function App() {
  const fruits = ["Apple", "Mango", "Banana"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}

export default App;`,
    question: "Which JavaScript method is commonly used to render arrays in React?",
    options: ["filterHTML()", "map()", "renderArray()", "repeat()"],
    answer: 1,
    answerExplanation: "map() creates a new array of elements from the original array."
  },
  {
    id: 9,
    title: "The key Prop",
    duration: "5 min",
    explanation: "The key prop helps React identify list items when items are added, removed, or reordered. Prefer unique, stable IDs.",
    example: `function App() {
  const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;`,
    question: "Why is the key prop important in lists?",
    options: [
      "It styles list items",
      "It helps React identify items",
      "It connects the list to a server",
      "It automatically sorts items"
    ],
    answer: 1,
    answerExplanation: "Stable keys help React track list elements between renders."
  },
  {
    id: 10,
    title: "Conditional Rendering",
    duration: "6 min",
    explanation: "Conditional rendering displays different UI depending on a condition. You can use if statements, ternary operators, or &&.",
    example: `function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back!</h2>
      ) : (
        <h2>Please log in.</h2>
      )}
    </div>
  );
}

export default App;`,
    question: "Which operator is commonly used for inline conditional rendering?",
    options: ["Ternary operator", "Assignment operator only", "typeof only", "Spread operator only"],
    answer: 0,
    answerExplanation: "The ternary operator selects one of two expressions based on a condition."
  },
  {
    id: 11,
    title: "Event Handling",
    duration: "6 min",
    explanation: "React handles events with props such as onClick. Pass a function to the event handler instead of calling it immediately.",
    example: `function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default App;`,
    question: "How do you attach a click handler in React?",
    options: [
      "onclick='handleClick()'",
      "onClick={handleClick}",
      "click={handleClick}",
      "onPressHTML={handleClick}"
    ],
    answer: 1,
    answerExplanation: "React uses camelCase event props such as onClick."
  },
  {
    id: 12,
    title: "useState Hook",
    duration: "8 min",
    explanation: "useState stores component state. It returns the current value and a setter function that requests a re-render when the state changes.",
    example: `import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;`,
    question: "What does useState return?",
    options: [
      "A database connection",
      "A state value and a setter function",
      "Only a CSS class",
      "A React component and a route"
    ],
    answer: 1,
    answerExplanation: "useState returns the current state and a function to update it."
  },
  {
    id: 13,
    title: "Updating State Correctly",
    duration: "7 min",
    explanation: "When the next state depends on the previous state, use the functional updater form. This helps avoid stale-value problems.",
    example: `import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseTwice() {
    setCount((previous) => previous + 1);
    setCount((previous) => previous + 1);
  }

  return (
    <button onClick={increaseTwice}>
      Count: {count}
    </button>
  );
}

export default App;`,
    question: "When is a functional state update especially useful?",
    options: [
      "When the next state depends on the previous state",
      "When writing HTML comments",
      "When importing CSS",
      "When naming components"
    ],
    answer: 0,
    answerExplanation: "The updater receives the latest queued state value."
  },
  {
    id: 14,
    title: "Handling Input with State",
    duration: "8 min",
    explanation: "A controlled input uses React state for its value. The onChange handler updates state whenever the user types.",
    example: `import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}</p>
    </div>
  );
}

export default App;`,
    question: "In a controlled input, where does the displayed value come from?",
    options: [
      "React state",
      "The CSS file",
      "The component filename",
      "The browser address bar"
    ],
    answer: 0,
    answerExplanation: "The input value is controlled by state and updated through onChange."
  },
  {
    id: 15,
    title: "Form Submission",
    duration: "8 min",
    explanation: "Use onSubmit to handle form submissions. Calling preventDefault() prevents the browser's default page reload.",
    example: `import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Submitted: " + email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;`,
    question: "What does event.preventDefault() do here?",
    options: [
      "Prevents the default form submission behavior",
      "Deletes the form",
      "Clears every state variable",
      "Stops React from loading"
    ],
    answer: 0,
    answerExplanation: "It prevents the browser's default form submission and page reload."
  },
  {
    id: 16,
    title: "useEffect Hook",
    duration: "8 min",
    explanation: "useEffect is used to synchronize a component with external systems, such as browser APIs, subscriptions, or network requests.",
    example: `import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "React Learning";
  }, []);

  return <h1>Learn useEffect</h1>;
}

export default App;`,
    question: "What is a common use for useEffect?",
    options: [
      "Synchronizing with external systems",
      "Replacing all props",
      "Creating CSS selectors",
      "Defining database schemas"
    ],
    answer: 0,
    answerExplanation: "useEffect is useful for effects such as browser API synchronization and fetching data."
  },
  {
    id: 17,
    title: "useEffect Dependencies",
    duration: "7 min",
    explanation: "The dependency array controls when an effect is re-synchronized. An empty array means no reactive dependencies; dependencies should include reactive values used by the effect.",
    example: `import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Count: {count}
    </button>
  );
}

export default App;`,
    question: "When does this effect re-run?",
    options: [
      "Whenever count changes",
      "Only when CSS changes",
      "Never",
      "Only when the user refreshes the browser"
    ],
    answer: 0,
    answerExplanation: "The effect depends on count, so it re-synchronizes when count changes."
  },
  {
    id: 18,
    title: "Fetching Data",
    duration: "9 min",
    explanation: "You can fetch data from an API with fetch() and async/await. Handle loading and error states so users know what is happening.",
    example: `import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Could not load users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;`,
    question: "What does response.json() do?",
    options: [
      "Parses the response body as JSON",
      "Creates a React component",
      "Adds a CSS file",
      "Starts a local server"
    ],
    answer: 0,
    answerExplanation: "response.json() reads and parses the response body as JSON."
  },
  {
    id: 19,
    title: "Component Composition",
    duration: "6 min",
    explanation: "Composition means building larger interfaces by combining smaller components. It makes applications easier to reuse and maintain.",
    example: `function Header() {
  return <h1>My Website</h1>;
}

function Card() {
  return <div>This is a card.</div>;
}

function App() {
  return (
    <main>
      <Header />
      <Card />
      <Card />
    </main>
  );
}

export default App;`,
    question: "What is component composition?",
    options: [
      "Combining components to build a UI",
      "Combining all CSS into HTML",
      "Deleting reusable components",
      "Replacing JavaScript with SQL"
    ],
    answer: 0,
    answerExplanation: "Composition builds larger interfaces from smaller components."
  },
  {
    id: 20,
    title: "Children Prop",
    duration: "6 min",
    explanation: "The special children prop contains the content placed between a component's opening and closing tags.",
    example: `function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>React</h2>
      <p>Learn one step at a time.</p>
    </Card>
  );
}

export default App;`,
    question: "What does children represent?",
    options: [
      "Content nested inside a component",
      "The component's CSS file",
      "A database collection",
      "A special event handler"
    ],
    answer: 0,
    answerExplanation: "children represents the nested content passed between component tags."
  },
  {
    id: 21,
    title: "useRef Hook",
    duration: "7 min",
    explanation: "useRef stores a value between renders without causing a re-render when its current property changes. It can also reference DOM elements.",
    example: `import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Your name" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;`,
    question: "Does changing ref.current normally trigger a re-render?",
    options: ["Yes, always", "No", "Only in CSS", "Only after an API request"],
    answer: 1,
    answerExplanation: "Changing ref.current does not itself trigger a re-render."
  },
  {
    id: 22,
    title: "Lifting State Up",
    duration: "7 min",
    explanation: "When multiple components need the same state, move that state to their closest common parent and pass values or handlers through props.",
    example: `import { useState } from "react";

function Display({ value }) {
  return <h2>Value: {value}</h2>;
}

function App() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Display value={value} />
      <button onClick={() => setValue((v) => v + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;`,
    question: "Why do we lift state up?",
    options: [
      "To share state between related components",
      "To remove all props",
      "To create database indexes",
      "To avoid using JavaScript"
    ],
    answer: 0,
    answerExplanation: "A common parent can coordinate shared state for multiple child components."
  },
  {
    id: 23,
    title: "useContext Hook",
    duration: "8 min",
    explanation: "Context lets components read shared values without passing props through every intermediate component. It is useful for themes, locale, and user session information.",
    example: `import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Heading() {
  const theme = useContext(ThemeContext);

  return <h2>Current theme: {theme}</h2>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Heading />
    </ThemeContext.Provider>
  );
}

export default App;`,
    question: "What problem can Context help reduce?",
    options: [
      "Prop drilling through intermediate components",
      "All JavaScript errors",
      "The need for HTML",
      "Every API request"
    ],
    answer: 0,
    answerExplanation: "Context allows components to access shared values without forwarding props at every level."
  },
  {
    id: 24,
    title: "useReducer Hook",
    duration: "8 min",
    explanation: "useReducer manages state through a reducer function and dispatched actions. It is useful when state transitions are more complex than a simple setter.",
    example: `import { useReducer } from "react";

function reducer(count, action) {
  if (action.type === "increase") return count + 1;
  if (action.type === "decrease") return count - 1;
  return count;
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "increase" })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "decrease" })}>
        Decrease
      </button>
    </div>
  );
}

export default App;`,
    question: "What does dispatch do?",
    options: [
      "Sends an action to the reducer",
      "Creates a CSS selector",
      "Connects directly to MongoDB",
      "Deletes the component"
    ],
    answer: 0,
    answerExplanation: "dispatch sends an action that the reducer uses to calculate the next state."
  },
  {
    id: 25,
    title: "Custom Hooks",
    duration: "8 min",
    explanation: "A custom Hook is a JavaScript function whose name starts with use and that can call other Hooks. It lets you reuse stateful logic across components.",
    example: `import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((value) => value + 1);
  }

  return { count, increase };
}

function App() {
  const { count, increase } = useCounter();

  return (
    <button onClick={increase}>
      Count: {count}
    </button>
  );
}

export default App;`,
    question: "What should a custom Hook name usually start with?",
    options: ["make", "use", "get", "hook"],
    answer: 1,
    answerExplanation: "Custom Hook names start with use, such as useCounter."
  },
  {
    id: 26,
    title: "React Router Basics",
    duration: "9 min",
    explanation: "React Router helps create navigation between pages in a React application. Install react-router-dom and wrap your routes in BrowserRouter.",
    example: `// Install: npm install react-router-dom

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`,
    question: "Which component defines a route in React Router?",
    options: ["Route", "useState", "div", "StyleSheet"],
    answer: 0,
    answerExplanation: "Route associates a URL path with the element to render."
  },
  {
    id: 27,
    title: "Performance and React.memo",
    duration: "8 min",
    explanation: "React.memo can skip re-rendering a component when its props are unchanged. Use it when profiling shows that avoiding renders would help; it is not needed everywhere.",
    example: `import { memo, useState } from "react";

const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting rendered");
  return <h2>Hello, {name}</h2>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Greeting name="Rahul" />
      <button onClick={() => setCount((c) => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;`,
    question: "What can React.memo help avoid?",
    options: [
      "Some unnecessary re-renders when props are unchanged",
      "All network requests",
      "All component rendering",
      "The need for state"
    ],
    answer: 0,
    answerExplanation: "React.memo can skip rendering when the component's props compare equal."
  },
  {
    id: 28,
    title: "useMemo Hook",
    duration: "8 min",
    explanation: "useMemo caches a calculated value between renders while its dependencies remain unchanged. Use it for costly calculations when useful, not for every expression.",
    example: `import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(10);
  const [theme, setTheme] = useState("light");

  const squared = useMemo(() => {
    return number * number;
  }, [number]);

  return (
    <div>
      <p>Square: {squared}</p>
      <button onClick={() => setNumber((n) => n + 1)}>
        Increase Number
      </button>
      <button onClick={() =>
        setTheme((t) => t === "light" ? "dark" : "light")
      }>
        Theme: {theme}
      </button>
    </div>
  );
}

export default App;`,
    question: "What does useMemo cache?",
    options: [
      "A calculated value",
      "An entire database",
      "A CSS file",
      "A URL route"
    ],
    answer: 0,
    answerExplanation: "useMemo caches a calculation result while its dependencies remain unchanged."
  },
  {
    id: 29,
    title: "Error Boundaries",
    duration: "8 min",
    explanation: "Error boundaries are class components that can catch rendering errors in descendant components and show fallback UI. They do not catch every error, such as ordinary event-handler errors or rejected async operations.",
    example: `import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

function BuggyComponent() {
  return <h2>Component content</h2>;
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

export default App;`,
    question: "What can an error boundary catch?",
    options: [
      "Rendering errors in descendant components",
      "Every possible JavaScript error",
      "All network failures automatically",
      "Syntax errors before the app starts"
    ],
    answer: 0,
    answerExplanation: "Error boundaries catch certain errors during rendering and related React lifecycle work in descendants."
  },
  {
    id: 30,
    title: "React Best Practices",
    duration: "10 min",
    explanation: "Keep components focused, use meaningful names, treat props and state as immutable, use stable list keys, handle loading and errors, and follow the Rules of Hooks.",
    example: `import { useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" }
  ]);

  function addStudent() {
    setStudents((current) => [
      ...current,
      { id: Date.now(), name: "New Student" }
    ]);
  }

  return (
    <div>
      <button onClick={addStudent}>Add Student</button>

      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;`,
    question: "How should you update an array stored in React state?",
    options: [
      "Mutate the original array directly",
      "Create a new array with the changes",
      "Change the array only in CSS",
      "Use document.write()"
    ],
    answer: 1,
    answerExplanation: "Treat state as immutable and create a new array when updating it."
  }
];

export default reactLessons;
