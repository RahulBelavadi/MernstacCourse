
const lessons = {
  html: [
    {
      id: 1,
      title: "Introduction to HTML",
      duration: "5 min",
      explanation: "HTML stands for HyperText Markup Language. It defines the structure and content of web pages.",
      example: `<h1>Hello World!</h1>
<p>My first website.</p>`,
      preview: { heading: "Hello World!", paragraph: "My first website.", button: "" },
      question: "What is HTML used for?",
      options: ["Database management", "Web page structure", "Styling only", "Server hosting"],
      answer: 1,
      answerExplanation: "HTML defines web page structure. CSS styles it and JavaScript adds behaviour."
    },
    {
      id: 2,
      title: "HTML Document Structure",
      duration: "6 min",
      explanation: "A standard HTML document contains doctype, html, head and body elements.",
      example: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Hello!</h1>
</body>
</html>`,
      preview: { heading: "Hello!", paragraph: "This is a complete HTML document.", button: "" },
      question: "Which element contains visible page content?",
      options: ["head", "meta", "body", "title"],
      answer: 2,
      answerExplanation: "The body element contains the page content displayed in the browser."
    },
    {
      id: 3,
      title: "HTML Elements and Tags",
      duration: "5 min",
      explanation: "Tags mark the beginning and end of many HTML elements. Some elements, such as img and br, are void elements.",
      example: `<p>This is an element.</p>
<br>
<img src="photo.jpg" alt="Sample photo">`,
      preview: { heading: "HTML elements", paragraph: "A paragraph is an HTML element.", button: "" },
      question: "Which is a void element?",
      options: ["p", "div", "br", "h1"],
      answer: 2,
      answerExplanation: "The br element creates a line break and does not have a closing tag."
    },
    {
      id: 4,
      title: "Headings and Paragraphs",
      duration: "5 min",
      explanation: "HTML has six heading levels, h1 through h6. Use p for paragraphs and organise headings logically.",
      example: `<h1>Main heading</h1>
<h2>Section heading</h2>
<h3>Subsection</h3>
<p>This is a paragraph.</p>`,
      preview: { heading: "Main heading", paragraph: "This is a paragraph.", button: "" },
      question: "Which element represents the highest-level heading?",
      options: ["h6", "heading", "h1", "head"],
      answer: 2,
      answerExplanation: "h1 is the highest-level heading; h6 is the lowest."
    },
    {
      id: 5,
      title: "Text Formatting",
      duration: "6 min",
      explanation: "Use strong for importance, em for emphasis, mark for highlighting, and del or ins for edited text.",
      example: `<p><strong>Important</strong></p>
<p><em>Emphasised text</em></p>
<p><mark>Highlighted</mark></p>
<p><del>Old</del> <ins>New</ins></p>`,
      preview: { heading: "Text formatting", paragraph: "Important • Emphasised • Highlighted • Old and New", button: "" },
      question: "Which element indicates strong importance?",
      options: ["small", "strong", "span", "br"],
      answer: 1,
      answerExplanation: "The strong element represents content of strong importance."
    },
    {
      id: 6,
      title: "Comments and Special Characters",
      duration: "5 min",
      explanation: "HTML comments are not displayed on the page. Character references display reserved characters such as less-than and ampersand.",
      example: `<!-- This is a comment -->
<p>5 &lt; 10</p>
<p>Tom &amp; Jerry</p>`,
      preview: { heading: "Special characters", paragraph: "5 < 10 | Tom & Jerry", button: "" },
      question: "How do you write an HTML comment?",
      options: ["// comment", "<!-- comment -->", "** comment **", "# comment"],
      answer: 1,
      answerExplanation: "HTML comments start with <!-- and end with -->."
    },
    {
      id: 7,
      title: "Links and URLs",
      duration: "6 min",
      explanation: "The a element creates links. Its href attribute specifies a destination, which can be a website, file, email or page section.",
      example: `<a href="https://example.com">Visit Example</a>
<a href="#contact">Go to contact</a>
<h2 id="contact">Contact section</h2>`,
      preview: { heading: "Links", paragraph: "Links connect pages and sections.", button: "" },
      question: "Which attribute defines a link destination?",
      options: ["src", "href", "alt", "id"],
      answer: 1,
      answerExplanation: "The href attribute specifies the hyperlink destination."
    },
    {
      id: 8,
      title: "Images and Accessibility",
      duration: "6 min",
      explanation: "The img element displays images. Use src for the image location and meaningful alt text to describe informative images.",
      example: `<img
  src="photo.jpg"
  alt="A mountain beside a lake"
  width="400"
>`,
      preview: { heading: "Images", paragraph: "Use a valid image URL to display a real image. The example filename is a placeholder.", button: "" },
      question: "Why is alt text important?",
      options: ["It creates animations", "It describes images to users who cannot see them", "It connects databases", "It changes font size"],
      answer: 1,
      answerExplanation: "Alt text communicates an image's meaning when it cannot be seen or loaded."
    },
    {
      id: 9,
      title: "Absolute and Relative Paths",
      duration: "5 min",
      explanation: "Absolute URLs specify a full address. Relative paths refer to resources from the current page or site structure.",
      example: `<a href="https://example.com/about">Absolute URL</a>
<a href="about.html">Relative path</a>
<img src="images/logo.png" alt="Logo">`,
      preview: { heading: "File paths", paragraph: "Choose paths based on where your page and resources are located.", button: "" },
      question: "Which is a relative path?",
      options: ["https://example.com", "about.html", "https://google.com", "mailto:a@example.com"],
      answer: 1,
      answerExplanation: "about.html is a relative path resolved from the current location."
    },
    {
      id: 10,
      title: "Lists in HTML",
      duration: "5 min",
      explanation: "Use ul for unordered lists, ol for ordered lists and li for individual list items. The dl element represents description lists.",
      example: `<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
<ol>
  <li>Learn</li>
  <li>Practise</li>
</ol>`,
      preview: { heading: "My learning list", paragraph: "HTML • CSS • JavaScript", button: "" },
      question: "Which element creates a numbered list?",
      options: ["ul", "ol", "li", "dl"],
      answer: 1,
      answerExplanation: "The ol element creates an ordered list."
    },
    {
      id: 11,
      title: "HTML Tables",
      duration: "7 min",
      explanation: "Tables represent tabular data. Use table, tr, th and td. Use thead, tbody and caption to improve structure.",
      example: `<table>
  <caption>Student marks</caption>
  <thead>
    <tr><th>Name</th><th>Marks</th></tr>
  </thead>
  <tbody>
    <tr><td>Rahul</td><td>90</td></tr>
  </tbody>
</table>`,
      preview: { heading: "Student marks", paragraph: "Rahul — 90 marks", button: "" },
      question: "Which element defines a table row?",
      options: ["td", "tr", "th", "thead"],
      answer: 1,
      answerExplanation: "The tr element defines a table row."
    },
    {
      id: 12,
      title: "Forms and Labels",
      duration: "7 min",
      explanation: "Forms collect user input. Associate labels with controls using matching for and id attributes.",
      example: `<form>
  <label for="name">Name</label>
  <input id="name" name="name" type="text">
  <button type="submit">Submit</button>
</form>`,
      preview: { heading: "Student form", paragraph: "A label tells users what to enter into a field.", button: "Submit" },
      question: "How should a label be associated with an input?",
      options: ["Matching for and id", "Matching src and alt", "Using h1", "Using href only"],
      answer: 0,
      answerExplanation: "The label's for value should match the input's id."
    },
    {
      id: 13,
      title: "Input Types",
      duration: "7 min",
      explanation: "Input types include text, email, password, number, date, checkbox, radio, file and more.",
      example: `<input type="text" placeholder="Name">
<input type="email" placeholder="Email">
<input type="date">
<input type="checkbox"> Subscribe`,
      preview: { heading: "Input types", paragraph: "Different input types provide suitable controls for different data.", button: "" },
      question: "Which input type is intended for email addresses?",
      options: ["text", "email", "mailbox", "letter"],
      answer: 1,
      answerExplanation: "type=email provides email-oriented input and browser validation."
    },
    {
      id: 14,
      title: "Select, Textarea and Buttons",
      duration: "6 min",
      explanation: "Select offers a dropdown, textarea accepts multiline text and buttons can submit or reset forms.",
      example: `<select name="course">
  <option>HTML</option>
  <option>CSS</option>
</select>
<textarea name="message"></textarea>
<button type="button">Click me</button>`,
      preview: { heading: "More form controls", paragraph: "Dropdowns and textareas support different input needs.", button: "Click me" },
      question: "Which element accepts multiline text?",
      options: ["input", "textarea", "select", "label"],
      answer: 1,
      answerExplanation: "The textarea element accepts multiline text."
    },
    {
      id: 15,
      title: "Form Validation",
      duration: "7 min",
      explanation: "HTML supports required, minlength, maxlength, min, max and pattern attributes for common browser-side validation.",
      example: `<form>
  <input type="email" required>
  <input type="password" minlength="8" required>
  <button type="submit">Register</button>
</form>`,
      preview: { heading: "Form validation", paragraph: "Try submitting a real form with empty required fields to see browser validation.", button: "" },
      question: "Which attribute makes a field mandatory?",
      options: ["validate", "required", "must", "checked"],
      answer: 1,
      answerExplanation: "The required attribute prevents submission when a required field is empty."
    },
    {
      id: 16,
      title: "HTML Attributes",
      duration: "5 min",
      explanation: "Attributes provide extra information to elements. Common attributes include id, class, title, lang, hidden and data-*.",
      example: `<p id="intro" class="message" title="Helpful note">
  Hello!
</p>
<div data-user-id="123">User</div>`,
      preview: { heading: "Attributes", paragraph: "Attributes configure elements and provide metadata.", button: "" },
      question: "Which attribute should be unique within a document?",
      options: ["class", "id", "style", "title"],
      answer: 1,
      answerExplanation: "An id should uniquely identify one element in a document."
    },
    {
      id: 17,
      title: "Div and Span",
      duration: "5 min",
      explanation: "Div is a generic block-level container, while span is a generic inline container. Use semantic elements when they better describe the content.",
      example: `<div>
  <p>Hello <span>there</span>!</p>
</div>`,
      preview: { heading: "Containers", paragraph: "Div groups content. Span groups inline text.", button: "" },
      question: "Which element is normally inline?",
      options: ["div", "span", "section", "article"],
      answer: 1,
      answerExplanation: "Span is an inline container by default; div is block-level."
    },
    {
      id: 18,
      title: "Semantic HTML",
      duration: "7 min",
      explanation: "Semantic elements describe the purpose of content. Common examples include header, nav, main, section, article, aside and footer.",
      example: `<header>Website header</header>
<nav>Navigation links</nav>
<main>
  <article>Article content</article>
  <aside>Related information</aside>
</main>
<footer>Copyright</footer>`,
      preview: { heading: "Semantic layout", paragraph: "Use meaningful page regions to improve structure and navigation.", button: "" },
      question: "Which element represents the main content of a page?",
      options: ["main", "footer", "small", "mark"],
      answer: 0,
      answerExplanation: "The main element represents the dominant content of the document."
    },
    {
      id: 19,
      title: "Audio and Video",
      duration: "6 min",
      explanation: "The audio and video elements embed media. Controls can provide browser playback controls, and source can offer alternate files.",
      example: `<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>

<video controls width="400">
  <source src="video.mp4" type="video/mp4">
</video>`,
      preview: { heading: "Media elements", paragraph: "Replace the sample file paths with real audio or video files.", button: "" },
      question: "Which attribute displays built-in playback controls?",
      options: ["play", "controls", "media", "buttons"],
      answer: 1,
      answerExplanation: "The controls attribute asks the browser to show media controls."
    },
    {
      id: 20,
      title: "Audio, Video and Captions",
      duration: "5 min",
      explanation: "The track element can provide subtitles, captions or other timed text for video and audio.",
      example: `<video controls>
  <source src="video.mp4" type="video/mp4">
  <track
    src="captions.vtt"
    kind="captions"
    srclang="en"
    label="English"
  >
</video>`,
      preview: { heading: "Captions", paragraph: "Captions help people understand spoken content and relevant sounds.", button: "" },
      question: "Which element provides timed text tracks?",
      options: ["caption", "track", "subtitle", "text"],
      answer: 1,
      answerExplanation: "The track element links timed text resources such as captions."
    },
    {
      id: 21,
      title: "HTML Entities",
      duration: "5 min",
      explanation: "Character references display reserved or special characters. Examples include &amp;lt;, &amp;gt;, &amp;amp; and &amp;nbsp;.",
      example: `<p>Less than: &lt;</p>
<p>Greater than: &gt;</p>
<p>Ampersand: &amp;</p>`,
      preview: { heading: "Special characters", paragraph: "Less than: < | Greater than: > | Ampersand: &", button: "" },
      question: "Which entity displays an ampersand?",
      options: ["&lt;", "&gt;", "&amp;", "&copy;"],
      answer: 2,
      answerExplanation: "&amp; is the character reference for an ampersand."
    },
    {
      id: 22,
      title: "Head, Title and Meta Tags",
      duration: "6 min",
      explanation: "The head contains document metadata and linked resources. Title sets the page title; meta can declare character encoding and a description.",
      example: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Learn HTML basics">
  <title>Learn HTML</title>
</head>`,
      preview: { heading: "Document metadata", paragraph: "Metadata helps browsers and search engines understand the page.", button: "" },
      question: "Which element sets the browser tab title?",
      options: ["meta", "title", "header", "caption"],
      answer: 1,
      answerExplanation: "The title element sets the document title shown in the browser tab."
    },
    {
      id: 23,
      title: "Favicon and External Resources",
      duration: "5 min",
      explanation: "The link element can connect stylesheets and favicons. The script element loads or embeds JavaScript.",
      example: `<link rel="icon" href="/favicon.ico">
<link rel="stylesheet" href="style.css">
<script src="app.js" defer></script>`,
      preview: { heading: "External resources", paragraph: "These elements connect HTML to stylesheets, icons and scripts.", button: "" },
      question: "Which element links an external stylesheet?",
      options: ["style", "css", "link", "design"],
      answer: 2,
      answerExplanation: "The link element commonly connects external CSS files."
    },
    {
      id: 24,
      title: "CSS and JavaScript in HTML",
      duration: "6 min",
      explanation: "Use link to connect an external stylesheet, style for embedded CSS, and script to include JavaScript.",
      example: `<link rel="stylesheet" href="style.css">

<style>
  p { color: blue; }
</style>

<script defer src="app.js"></script>`,
      preview: { heading: "HTML connections", paragraph: "HTML structures content, CSS styles it, and JavaScript adds behaviour.", button: "" },
      question: "Which technology usually handles page styling?",
      options: ["HTML", "CSS", "MongoDB", "Express"],
      answer: 1,
      answerExplanation: "CSS controls presentation such as colours, layout and typography."
    },
    {
      id: 25,
      title: "Iframes and Embedded Content",
      duration: "6 min",
      explanation: "An iframe embeds another browsing context. Only embed trusted sources and use a descriptive title for accessibility.",
      example: `<iframe
  src="https://example.com"
  title="Example website"
  width="500"
  height="300"
></iframe>`,
      preview: { heading: "Embedded content", paragraph: "Some websites prevent embedding. Always use an appropriate, trusted source.", button: "" },
      question: "Which attribute describes an iframe for assistive technology?",
      options: ["alt", "title", "labelled", "caption"],
      answer: 1,
      answerExplanation: "The iframe title describes the embedded content."
    },
    {
      id: 26,
      title: "Details and Summary",
      duration: "5 min",
      explanation: "Details and summary create a disclosure widget that users can open and close without JavaScript.",
      example: `<details>
  <summary>What is HTML?</summary>
  <p>HTML structures web content.</p>
</details>`,
      preview: { heading: "Frequently asked question", paragraph: "Open the details element to read the answer.", button: "" },
      question: "Which element provides the clickable heading for details?",
      options: ["summary", "caption", "header", "label"],
      answer: 0,
      answerExplanation: "The summary element labels the disclosure widget."
    },
    {
      id: 27,
      title: "Progress and Meter",
      duration: "5 min",
      explanation: "Progress represents completion of a task. Meter represents a measurement within a known range.",
      example: `<label for="upload">Upload progress</label>
<progress id="upload" value="60" max="100">60%</progress>

<label for="score">Score</label>
<meter id="score" min="0" max="100" value="75">75%</meter>`,
      preview: { heading: "Progress and measurements", paragraph: "Progress shows task completion; meter shows a scalar measurement.", button: "" },
      question: "Which element shows completion of a task?",
      options: ["meter", "progress", "range", "status"],
      answer: 1,
      answerExplanation: "The progress element represents the completion progress of a task."
    },
    {
      id: 28,
      title: "Blockquote, Quote and Citation",
      duration: "5 min",
      explanation: "Blockquote represents a longer quotation, q represents an inline quotation and cite can identify the title of a creative work.",
      example: `<blockquote>
  <p>Learning takes practice.</p>
</blockquote>
<p>She said, <q>Keep going!</q></p>
<p>Source: <cite>Example Book</cite></p>`,
      preview: { heading: "Quotations", paragraph: "Use the correct element for quoted content.", button: "" },
      question: "Which element represents a longer quotation?",
      options: ["q", "blockquote", "quote", "cite"],
      answer: 1,
      answerExplanation: "Blockquote represents an extended quotation."
    },
    {
      id: 29,
      title: "Date and Time Elements",
      duration: "5 min",
      explanation: "The time element represents a date or time. Its datetime attribute can provide a machine-readable value.",
      example: `<time datetime="2026-10-11">
  October 11, 2026
</time>`,
      preview: { heading: "Date and time", paragraph: "Published on October 11, 2026.", button: "" },
      question: "Which attribute provides a machine-readable date?",
      options: ["datevalue", "datetime", "timestamp", "timecode"],
      answer: 1,
      answerExplanation: "The datetime attribute provides a machine-readable date or time."
    },
    {
      id: 30,
      title: "Data Lists and Output",
      duration: "5 min",
      explanation: "Datalist suggests predefined options for an input. Output represents the result of a calculation or user action.",
      example: `<label for="browser">Browser</label>
<input id="browser" list="browsers">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
</datalist>

<output>Result appears here</output>`,
      preview: { heading: "Suggestions and output", paragraph: "Datalist provides suggestions; output represents a result.", button: "" },
      question: "Which element provides suggestions for an input?",
      options: ["selectlist", "datalist", "suggest", "optiongroup"],
      answer: 1,
      answerExplanation: "Datalist provides predefined suggestions for an associated input."
    },
    {
      id: 31,
      title: "Accessibility Basics",
      duration: "8 min",
      explanation: "Use semantic elements, associated labels, meaningful alt text, logical headings and keyboard-accessible controls. Avoid using colour alone to communicate meaning.",
      example: `<label for="email">Email address</label>
<input id="email" type="email" required>

<button type="submit">Send form</button>`,
      preview: { heading: "Accessible forms", paragraph: "Clear labels and keyboard-friendly controls help more people use your website.", button: "" },
      question: "What should an informative image usually have?",
      options: ["A meaningful alt description", "Only a border", "An h1 inside it", "A database ID"],
      answer: 0,
      answerExplanation: "Meaningful alt text communicates important image information."
    },
    {
      id: 32,
      title: "ARIA Basics",
      duration: "7 min",
      explanation: "ARIA can add accessible names, states and roles when native HTML is insufficient. Prefer native semantic HTML whenever possible.",
      example: `<button aria-label="Close dialog">
  ×
</button>

<div role="status" aria-live="polite">
  Form saved
</div>`,
      preview: { heading: "Accessible interfaces", paragraph: "Native HTML controls are usually the best starting point.", button: "" },
      question: "What should you prefer when suitable?",
      options: ["Custom div controls", "Native semantic HTML", "ARIA on every element", "Images of buttons"],
      answer: 1,
      answerExplanation: "Native semantic elements provide built-in behaviour and accessibility."
    },
    {
      id: 33,
      title: "SEO-Friendly HTML",
      duration: "7 min",
      explanation: "Good HTML supports SEO with descriptive titles, useful meta descriptions, logical headings, meaningful links and helpful content. No single tag guarantees ranking.",
      example: `<title>Beginner HTML Tutorial</title>
<meta name="description"
  content="Learn HTML with practical examples">
<h1>Learn HTML</h1>
<p>Start with the basics.</p>`,
      preview: { heading: "SEO basics", paragraph: "Write useful content and clear document metadata.", button: "" },
      question: "Which element sets the document title?",
      options: ["title", "seo", "description", "hgroup"],
      answer: 0,
      answerExplanation: "The title element defines the document title."
    },
    {
      id: 34,
      title: "Responsive HTML and Viewport",
      duration: "6 min",
      explanation: "The viewport meta tag helps pages use the device's width. Responsive layouts are mainly created with CSS.",
      example: `<meta name="viewport"
  content="width=device-width, initial-scale=1">

<picture>
  <source media="(max-width: 600px)" srcset="small.jpg">
  <img src="large.jpg" alt="A landscape">
</picture>`,
      preview: { heading: "Responsive pages", paragraph: "Use viewport metadata and responsive CSS for different screen sizes.", button: "" },
      question: "Which meta setting configures the viewport width?",
      options: ["width=device-width", "width=full", "screen=mobile", "responsive=true"],
      answer: 0,
      answerExplanation: "width=device-width sets the viewport width to the device width."
    },
    {
      id: 35,
      title: "Picture and Responsive Images",
      duration: "6 min",
      explanation: "Picture and source let browsers choose among image variants. Srcset and sizes can help browsers select an appropriate image size.",
      example: `<picture>
  <source
    media="(max-width: 600px)"
    srcset="small.webp"
  >
  <img
    src="large.webp"
    alt="A mountain landscape"
    width="800"
  >
</picture>`,
      preview: { heading: "Responsive images", paragraph: "Provide suitable image variants for different devices.", button: "" },
      question: "Which element provides alternative image sources inside picture?",
      options: ["track", "source", "media", "imgset"],
      answer: 1,
      answerExplanation: "The source element specifies alternative media resources."
    },
    {
      id: 36,
      title: "SVG and Canvas",
      duration: "6 min",
      explanation: "SVG provides scalable vector graphics. Canvas provides a drawable bitmap surface controlled primarily with JavaScript.",
      example: `<svg viewBox="0 0 100 60" width="200">
  <circle cx="30" cy="30" r="20" fill="green" />
</svg>

<canvas width="200" height="100">
  Canvas is not supported.
</canvas>`,
      preview: { heading: "Graphics", paragraph: "SVG is vector-based; canvas is pixel-based.", button: "" },
      question: "Which technology is vector-based?",
      options: ["SVG", "Canvas bitmap", "JPEG", "MP4"],
      answer: 0,
      answerExplanation: "SVG describes scalable vector graphics."
    },
    {
      id: 37,
      title: "Dialog and Popover",
      duration: "7 min",
      explanation: "Dialog represents a dialog box. Popover features allow content to be shown and hidden with built-in browser behaviour.",
      example: `<button popovertarget="help">Show help</button>
<div id="help" popover>
  Helpful information
</div>

<dialog open>
  Example dialog
</dialog>`,
      preview: { heading: "Dialogs and popovers", paragraph: "These elements support interactive interfaces. Test browser support for your target devices.", button: "" },
      question: "Which attribute can toggle a popover from a button?",
      options: ["popovertarget", "popoverid", "dialogfor", "togglepopup"],
      answer: 0,
      answerExplanation: "The popovertarget attribute connects a button to a popover."
    },
    {
      id: 38,
      title: "Template and Web Components",
      duration: "7 min",
      explanation: "The template element holds HTML that is not rendered immediately. JavaScript can clone its content for reusable UI.",
      example: `<template id="card-template">
  <article class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </article>
</template>`,
      preview: { heading: "HTML templates", paragraph: "Template content is inert until JavaScript uses it.", button: "" },
      question: "Is template content rendered immediately by default?",
      options: ["Yes, always", "No, it is inert by default", "Only in tables", "Only on mobile"],
      answer: 1,
      answerExplanation: "Template content is not rendered until used by code."
    },
    {
      id: 39,
      title: "Security and Safe HTML",
      duration: "8 min",
      explanation: "Avoid injecting untrusted strings as HTML. Use safe DOM APIs, validate data, and apply appropriate security controls when handling user input.",
      example: `// Prefer textContent for plain text
element.textContent = userInput;

// Avoid blindly inserting untrusted HTML
// with innerHTML.`,
      preview: { heading: "Safer HTML", paragraph: "Treat user-supplied content as untrusted.", button: "" },
      question: "Which property is safer for displaying plain text?",
      options: ["innerHTML", "textContent", "outerHTML", "document.write"],
      answer: 1,
      answerExplanation: "textContent inserts text without parsing it as HTML."
    },
    {
      id: 40,
      title: "HTML Best Practices and Final Review",
      duration: "10 min",
      explanation: "Use valid semantic markup, quote attribute values, provide labels and alt text, organise headings, test forms and check accessibility. HTML structures content; CSS and JavaScript add presentation and behaviour.",
      example: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, initial-scale=1">
  <title>My Portfolio</title>
</head>
<body>
  <header><h1>My Portfolio</h1></header>
  <main>
    <section>
      <h2>About me</h2>
      <p>I am learning web development.</p>
    </section>
  </main>
  <footer>Thank you for visiting!</footer>
</body>
</html>`,
      preview: { heading: "My Portfolio", paragraph: "I am learning web development. Thank you for visiting!", button: "" },
      question: "What is the primary responsibility of HTML?",
      options: ["Structure and meaning", "Database queries", "Server deployment", "Image editing"],
      answer: 0,
      answerExplanation: "HTML structures and describes content. CSS handles presentation, and JavaScript handles behaviour."
    }
  ]
};

export default lessons;
