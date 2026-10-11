const cssLessons = [
  {
    id: 1,
    title: "Introduction to CSS",
    duration: "5 min",
    explanation:
      "CSS stands for Cascading Style Sheets. It controls the appearance of HTML elements, including colours, fonts, spacing and layout.",
    example: `h1 {
  color: blue;
  font-size: 32px;
}`,
    previewHTML: `<h1>Hello CSS!</h1>
<p>CSS makes websites beautiful.</p>`,
    question: "What is CSS used for?",
    options: [
      "Database management",
      "Styling web pages",
      "Server hosting",
      "Data storage"
    ],
    answer: 1,
    answerExplanation:
      "CSS styles HTML elements and controls how web pages look."
  },
  {
    id: 2,
    title: "Three Ways to Add CSS",
    duration: "7 min",
    explanation:
      "CSS can be added using inline CSS, internal CSS inside a style element, or external CSS in a separate file.",
    example: `/* External CSS */
p {
  color: green;
}

/* Inline CSS example in HTML:
<p style="color: red;">Hello</p>
*/

/* Internal CSS example in HTML:
<style>
  h1 { color: blue; }
</style>
*/`,
    previewHTML: `<h1>External CSS</h1>
<p>This paragraph uses CSS.</p>`,
    question: "Which method keeps CSS in a separate file?",
    options: [
      "Inline CSS",
      "Internal CSS",
      "External CSS",
      "JavaScript CSS"
    ],
    answer: 2,
    answerExplanation:
      "External CSS stores styles in a separate .css file."
  },
  {
    id: 3,
    title: "CSS Syntax",
    duration: "5 min",
    explanation:
      "A CSS rule contains a selector and a declaration block. Each declaration normally contains a property and a value.",
    example: `h1 {
  color: purple;
  font-size: 30px;
}`,
    previewHTML: `<h1>CSS Syntax</h1>
<p>Selector: h1</p>
<p>Properties: color and font-size</p>`,
    question: "What separates a CSS property from its value?",
    options: [":", ";", "=", ","],
    answer: 0,
    answerExplanation:
      "A colon separates a property from its value. A semicolon usually ends the declaration."
  },
  {
    id: 4,
    title: "CSS Comments",
    duration: "4 min",
    explanation:
      "Comments explain your code and are ignored by the CSS browser engine.",
    example: `/* This is a CSS comment */
h1 {
  color: teal;
}

/* You can use comments
   across multiple lines. */`,
    previewHTML: `<h1>CSS Comments</h1>
<p>Comments help developers understand code.</p>`,
    question: "How do you write a CSS comment?",
    options: [
      "// comment",
      "<!-- comment -->",
      "/* comment */",
      "# comment"
    ],
    answer: 2,
    answerExplanation:
      "CSS comments start with /* and end with */."
  },
  {
    id: 5,
    title: "Element Selectors",
    duration: "5 min",
    explanation:
      "An element selector targets all HTML elements with the specified tag name.",
    example: `h1 {
  color: blue;
}

p {
  color: green;
}`,
    previewHTML: `<h1>Welcome</h1>
<p>First paragraph</p>
<p>Second paragraph</p>`,
    question: "Which selector targets every paragraph?",
    options: ["#p", ".p", "p", "*p"],
    answer: 2,
    answerExplanation:
      "The p selector targets all paragraph elements."
  },
  {
    id: 6,
    title: "Class Selectors",
    duration: "5 min",
    explanation:
      "A class selector starts with a dot. You can reuse the same class on multiple HTML elements.",
    example: `.highlight {
  color: orange;
  background-color: #fff3cd;
  padding: 8px;
}`,
    previewHTML: `<p class="highlight">Highlighted paragraph</p>
<p>Normal paragraph</p>
<p class="highlight">Another highlighted paragraph</p>`,
    question: "Which symbol starts a class selector?",
    options: ["#", ".", "*", ":"],
    answer: 1,
    answerExplanation:
      "A dot (.) selects elements by class name."
  },
  {
    id: 7,
    title: "ID Selectors",
    duration: "5 min",
    explanation:
      "An ID selector starts with # and targets an element with that ID. An ID should be unique within a page.",
    example: `#main-title {
  color: crimson;
  text-align: center;
}`,
    previewHTML: `<h1 id="main-title">Main Title</h1>
<p>This paragraph has no ID styling.</p>`,
    question: "Which symbol starts an ID selector?",
    options: [".", "#", "@", "&"],
    answer: 1,
    answerExplanation:
      "The hash symbol (#) selects an element by ID."
  },
  {
    id: 8,
    title: "Grouping Selectors",
    duration: "5 min",
    explanation:
      "Grouping selectors lets you apply the same styles to multiple selectors using commas.",
    example: `h1, h2, p {
  font-family: Arial, sans-serif;
  color: navy;
}`,
    previewHTML: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>All three elements share the same font and colour.</p>`,
    question: "Which character groups CSS selectors?",
    options: [":", "+", ",", "/"],
    answer: 2,
    answerExplanation:
      "Commas let you apply one rule to multiple selectors."
  },
  {
    id: 9,
    title: "Universal Selector",
    duration: "4 min",
    explanation:
      "The universal selector (*) matches all elements. It is often used in CSS resets, but use it thoughtfully.",
    example: `* {
  box-sizing: border-box;
}

p {
  color: darkgreen;
}`,
    previewHTML: `<h1>Universal Selector</h1>
<p>Every element gets border-box sizing.</p>
<div>A normal div element</div>`,
    question: "What does the * selector match?",
    options: [
      "Only headings",
      "Only classes",
      "All elements",
      "Only paragraphs"
    ],
    answer: 2,
    answerExplanation:
      "The universal selector matches all elements."
  },
  {
    id: 10,
    title: "Descendant Selectors",
    duration: "6 min",
    explanation:
      "A descendant selector uses a space between selectors. It targets matching elements anywhere inside another element.",
    example: `.card p {
  color: darkorange;
}

.card strong {
  color: purple;
}`,
    previewHTML: `<div class="card">
  <h2>My Card</h2>
  <p>This paragraph is inside the card.</p>
  <div>
    <p>This nested paragraph is also inside the card.</p>
  </div>
  <strong>Important text</strong>
</div>
<p>This paragraph is outside the card.</p>`,
    question: "What does .card p select?",
    options: [
      "Every card element",
      "Paragraphs inside an element with class card",
      "Only direct child paragraphs",
      "Every p element with class card"
    ],
    answer: 1,
    answerExplanation:
      "The space selects matching paragraphs anywhere inside .card."
  },
  
  {
    id: 11,
    title: "Attribute Selectors",
    duration: "6 min",
    explanation: "Attribute selectors target elements based on their HTML attributes or attribute values.",
    example: `input[type="text"] {
  border: 2px solid royalblue;
  padding: 8px;
}

a[target="_blank"] {
  color: crimson;
}`,
    previewHTML: `<input type="text" placeholder="Your name">
<input type="email" placeholder="Your email">
<p><a href="#" target="_blank">Open link</a></p>`,
    question: "Which selector targets text inputs?",
    options: ['input.text', 'input[type="text"]', '#text', 'input:text'],
    answer: 1,
    answerExplanation: "The attribute selector matches input elements whose type attribute equals text."
  },
  {
    id: 12,
    title: "Child Selector",
    duration: "5 min",
    explanation: "The > combinator selects only direct children, not deeper descendants.",
    example: `.parent > p {
  color: blue;
}`,
    previewHTML: `<div class="parent">
  <p>Direct child paragraph</p>
  <div>
    <p>Nested paragraph</p>
  </div>
</div>`,
    question: "What does .parent > p select?",
    options: ["All paragraphs", "Only direct child paragraphs", "Only nested paragraphs", "All div elements"],
    answer: 1,
    answerExplanation: "The > combinator matches paragraphs that are direct children of .parent."
  },
  {
    id: 13,
    title: "Adjacent Sibling Selector",
    duration: "5 min",
    explanation: "The + combinator selects the next matching sibling immediately after an element.",
    example: `h2 + p {
  color: green;
  font-weight: bold;
}`,
    previewHTML: `<h2>Heading</h2>
<p>This is immediately after the heading.</p>
<p>This is the second paragraph.</p>`,
    question: "What does h2 + p select?",
    options: ["Every paragraph", "The previous paragraph", "The immediately following sibling paragraph", "All child paragraphs"],
    answer: 2,
    answerExplanation: "The + combinator selects the matching next sibling immediately after h2."
  },
  {
    id: 14,
    title: "General Sibling Selector",
    duration: "5 min",
    explanation: "The ~ combinator selects all matching siblings that appear after the first element under the same parent.",
    example: `h2 ~ p {
  color: purple;
}`,
    previewHTML: `<h2>Heading</h2>
<p>First following paragraph</p>
<div>A div</div>
<p>Another following paragraph</p>`,
    question: "What does h2 ~ p select?",
    options: ["Only the first paragraph", "All following sibling paragraphs", "Only direct children of h2", "Every paragraph before h2"],
    answer: 1,
    answerExplanation: "The general sibling combinator matches all qualifying following sibling paragraphs."
  },
  {
    id: 15,
    title: "Pseudo-Classes: Hover and Focus",
    duration: "6 min",
    explanation: "Pseudo-classes style elements in particular states, such as when a pointer hovers over a button or a form field receives focus.",
    example: `button:hover {
  background: royalblue;
  color: white;
}

input:focus {
  outline: 3px solid orange;
}`,
    previewHTML: `<button>Hover over me</button>
<p><input placeholder="Click or tab here"></p>`,
    question: "Which pseudo-class applies while the pointer is over an element?",
    options: [":focus", ":hover", "::before", ":root"],
    answer: 1,
    answerExplanation: ":hover applies when the pointer is over the element."
  },
  {
    id: 16,
    title: "Structural Pseudo-Classes",
    duration: "7 min",
    explanation: "Structural pseudo-classes select elements based on their position among siblings. Common examples include :first-child, :last-child and :nth-child().",
    example: `li:first-child {
  color: green;
}

li:nth-child(even) {
  background: #e0e7ff;
}`,
    previewHTML: `<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item</li>
</ul>`,
    question: "What does :nth-child(even) match?",
    options: ["Only the first child", "Even-numbered children", "Only the last child", "Every odd-numbered child"],
    answer: 1,
    answerExplanation: ":nth-child(even) matches children in positions 2, 4, 6 and so on."
  },
  {
    id: 17,
    title: "Pseudo-Elements: Before and After",
    duration: "6 min",
    explanation: "Pseudo-elements style a specific part of an element or create generated content. ::before and ::after commonly use the content property.",
    example: `.notice::before {
  content: "TIP: ";
  font-weight: bold;
  color: crimson;
}

.notice::after {
  content: " ✓";
  color: green;
}`,
    previewHTML: `<p class="notice">Practice CSS every day</p>`,
    question: "Which property is commonly required to generate text with ::before?",
    options: ["display", "content", "position", "z-index"],
    answer: 1,
    answerExplanation: "The content property specifies generated content for ::before and ::after."
  },
  {
    id: 18,
    title: "CSS Specificity",
    duration: "7 min",
    explanation: "Specificity helps the browser decide between competing selectors. IDs generally outweigh classes, and classes generally outweigh element selectors. The cascade also considers origin, importance and layer.",
    example: `p {
  color: green;
}

.message {
  color: blue;
}

#intro {
  color: crimson;
}`,
    previewHTML: `<p id="intro" class="message">Which colour wins?</p>`,
    question: "Among these selectors, which has the highest specificity?",
    options: ["p", ".message", "#intro", "*"],
    answer: 2,
    answerExplanation: "An ID selector has higher specificity than a class or element selector in this example."
  },
  {
    id: 19,
    title: "Inheritance and the Cascade",
    duration: "7 min",
    explanation: "Some properties, such as color and font-family, usually inherit from parents. Other properties, such as margin and border, normally do not. The cascade resolves competing declarations.",
    example: `.parent {
  color: navy;
  border: 2px solid orange;
}

.child {
  color: inherit;
}`,
    previewHTML: `<div class="parent">
  Parent text
  <p class="child">Child inherits the text colour, not the border.</p>
</div>`,
    question: "Which property commonly inherits from a parent?",
    options: ["margin", "border", "color", "padding"],
    answer: 2,
    answerExplanation: "The color property normally inherits from the parent element."
  },
  {
    id: 20,
    title: "The !important Rule",
    duration: "6 min",
    explanation: "!important marks a declaration as important and changes how it competes in the cascade. Avoid using it routinely because it can make styles harder to maintain.",
    example: `.message {
  color: blue;
  color: crimson !important;
}`,
    previewHTML: `<p class="message">Important CSS rule</p>`,
    question: "What does !important do?",
    options: ["Creates an animation", "Marks a declaration as important in the cascade", "Makes text bold automatically", "Selects an ID"],
    answer: 1,
    answerExplanation: "!important gives a declaration important status in the cascade; it does not simply override every possible competing rule."
  },
  
  {
    id: 21,
    title: "CSS Named Colours",
    duration: "4 min",
    explanation: "CSS supports named colours such as red, blue, tomato and rebeccapurple. Use the color property for text and background-color for an element's background.",
    example: `h1 {
  color: royalblue;
}

.card {
  background-color: lightyellow;
}`,
    previewHTML: `<div class="card"><h1>Welcome!</h1><p>Named CSS colours</p></div>`,
    question: "Which property changes text colour?",
    options: ["background", "font-style", "color", "text-size"],
    answer: 2,
    answerExplanation: "The color property sets the foreground colour, usually the text colour."
  },
  {
    id: 22,
    title: "HEX Colour Values",
    duration: "5 min",
    explanation: "HEX colours use hexadecimal notation, usually #RRGGBB. Each pair represents red, green and blue. Short forms such as #f00 can represent #ff0000.",
    example: `.box {
  color: #ffffff;
  background-color: #2563eb;
  border: 2px solid #1e3a8a;
}`,
    previewHTML: `<div class="box">White text on a blue background</div>`,
    question: "What does #ff0000 represent?",
    options: ["Green", "Blue", "Red", "White"],
    answer: 2,
    answerExplanation: "In #RRGGBB, ff red with zero green and blue represents red."
  },
  {
    id: 23,
    title: "RGB and RGBA Colours",
    duration: "5 min",
    explanation: "rgb() sets red, green and blue channel values. rgba() is the older notation for adding an alpha channel; modern CSS also allows alpha in rgb(). Alpha ranges from 0 (transparent) to 1 (opaque).",
    example: `.solid {
  background: rgb(37 99 235);
}

.transparent {
  background: rgb(37 99 235 / 50%);
}`,
    previewHTML: `<div class="solid">Solid blue</div><p>Transparent blue lets the background show through.</p><div class="transparent">50% alpha blue</div>`,
    question: "What does alpha 0 mean?",
    options: ["Fully opaque", "Fully transparent", "Pure red", "No green"],
    answer: 1,
    answerExplanation: "An alpha value of 0 means fully transparent; 1 means fully opaque."
  },
  {
    id: 24,
    title: "HSL Colours",
    duration: "5 min",
    explanation: "hsl() represents colour using hue, saturation and lightness. Hue is an angle, saturation controls colour intensity, and lightness controls how light or dark it is.",
    example: `.box {
  background: hsl(220 80% 55%);
  color: white;
}`,
    previewHTML: `<div class="box">HSL colour</div><p>Try changing the hue angle or lightness.</p>`,
    question: "What does the L in HSL mean?",
    options: ["Length", "Lightness", "Layer", "Line-height"],
    answer: 1,
    answerExplanation: "HSL stands for Hue, Saturation and Lightness."
  },
  {
    id: 25,
    title: "CSS Gradients",
    duration: "6 min",
    explanation: "Gradients create smooth colour transitions. Common types are linear-gradient(), radial-gradient() and conic-gradient(). They are treated as background images.",
    example: `.banner {
  background: linear-gradient(
    120deg,
    #7c3aed,
    #2563eb,
    #06b6d4
  );
  color: white;
  padding: 24px;
}`,
    previewHTML: `<div class="banner"><h2>Beautiful Gradient</h2><p>CSS gradient backgrounds</p></div>`,
    question: "Which function creates a circular gradient from a central point?",
    options: ["linear-gradient()", "radial-gradient()", "color-gradient()", "shade()"],
    answer: 1,
    answerExplanation: "radial-gradient() creates a gradient radiating from a central point or shape."
  },
  {
    id: 26,
    title: "Background Images",
    duration: "6 min",
    explanation: "Use background-image to place an image behind an element's content. background-size, background-position and background-repeat control how it appears.",
    example: `.hero {
  background-image:
    linear-gradient(rgb(0 0 0 / 35%), rgb(0 0 0 / 35%)),
    url("https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 48px 20px;
}`,
    previewHTML: `<section class="hero"><h2>Explore the World</h2><p>A background image with an overlay</p></section>`,
    question: "What does background-size: cover do?",
    options: ["Repeats the image", "Scales the image to cover the area, possibly cropping it", "Removes the image", "Makes the image transparent"],
    answer: 1,
    answerExplanation: "cover fills the background area while preserving the image's aspect ratio, so some cropping may occur."
  },
  {
    id: 27,
    title: "Opacity and Transparency",
    duration: "5 min",
    explanation: "The opacity property controls the transparency of an entire element, including its contents. Use an alpha colour when you only want the background colour to be transparent.",
    example: `.card {
  background: royalblue;
  color: white;
  padding: 16px;
  opacity: 0.65;
}

.overlay {
  background: rgb(0 0 0 / 50%);
}`,
    previewHTML: `<div class="card"><strong>Partially transparent card</strong><p>Its text is also transparent.</p></div><p class="overlay">An alpha background can preserve text opacity.</p>`,
    question: "What happens when opacity is 0?",
    options: ["The element is fully transparent", "The element is fully opaque", "The text becomes bold", "The element grows"],
    answer: 0,
    answerExplanation: "opacity: 0 makes an element fully transparent, although it can still occupy layout space."
  },
  {
    id: 28,
    title: "CSS Units: px, cm and mm",
    duration: "5 min",
    explanation: "CSS has absolute units such as px, cm, mm, in, pt and pc. The CSS pixel (px) is the most common screen-design unit; it is not necessarily one physical screen pixel.",
    example: `.box {
  width: 240px;
  border: 2px solid black;
  padding: 12px;
}`,
    previewHTML: `<div class="box">A 240px wide box</div>`,
    question: "Which unit is commonly used for screen UI sizing?",
    options: ["kg", "px", "litre", "km"],
    answer: 1,
    answerExplanation: "CSS pixels (px) are a common unit for screen layouts and typography."
  },
  {
    id: 29,
    title: "Relative Units: %, em and rem",
    duration: "7 min",
    explanation: "Percentages are relative to a context-specific reference. em depends on the relevant font size, while rem depends on the root element's font size. These units are useful for flexible layouts and typography.",
    example: `html {
  font-size: 16px;
}

.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em;
  padding: 1rem;
  width: 80%;
}`,
    previewHTML: `<div class="parent"><p class="child">1.5em = 30px here; 1rem padding = 16px when the root size is 16px.</p></div>`,
    question: "What is 1rem relative to?",
    options: ["The root element's font size", "The nearest image", "The viewport width only", "The border thickness"],
    answer: 0,
    answerExplanation: "rem is relative to the computed font size of the root element."
  },
  {
    id: 30,
    title: "Viewport Units: vw, vh, svh and dvh",
    duration: "7 min",
    explanation: "vw and vh are based on viewport dimensions. Modern svh and dvh units help handle mobile browser UI: svh uses the small viewport, while dvh follows the dynamic viewport size.",
    example: `.hero {
  min-height: 100vh;
  padding: 5vw;
}

.mobile-hero {
  min-height: 100dvh;
}`,
    previewHTML: `<section class="hero"><h2>Viewport-based layout</h2><p>The hero uses viewport-relative sizing.</p></section>`,
    question: "What does 50vw represent?",
    options: ["50% of the viewport width", "50 pixels", "50% of the font size", "50% of the viewport height"],
    answer: 0,
    answerExplanation: "vw represents one percent of the viewport width, so 50vw is 50% of that width."
  },
  
  {
    id: 31,
    title: "Font Family",
    duration: "5 min",
    explanation: "The font-family property controls the typeface. Use fallback fonts so the browser can choose an available font if the first one is missing.",
    example: `body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-family: Georgia, serif;
}`,
    previewHTML: `<h1>Welcome to CSS</h1><p>This paragraph uses a sans-serif font.</p>`,
    question: "Why do we provide fallback fonts?",
    options: ["To create animations", "To provide alternatives if a font is unavailable", "To add margins", "To change the HTML"],
    answer: 1,
    answerExplanation: "Fallback fonts allow the browser to use another available font."
  },
  {
    id: 32,
    title: "Font Size and Weight",
    duration: "5 min",
    explanation: "font-size controls text size. font-weight controls how bold text appears, commonly using normal, bold or numeric values such as 400 and 700.",
    example: `.normal {
  font-size: 16px;
  font-weight: 400;
}

.heading {
  font-size: 32px;
  font-weight: 700;
}`,
    previewHTML: `<p class="normal">Normal text — 16px</p><h2 class="heading">Bold heading — 32px</h2>`,
    question: "Which numeric font-weight usually represents bold?",
    options: ["100", "200", "400", "700"],
    answer: 3,
    answerExplanation: "700 commonly represents bold; 400 commonly represents normal weight."
  },
  {
    id: 33,
    title: "Font Style and Text Decoration",
    duration: "5 min",
    explanation: "font-style controls italic or oblique text. text-decoration controls lines such as underline, overline and line-through.",
    example: `.quote {
  font-style: italic;
}

.link {
  text-decoration: underline;
}

.old-price {
  text-decoration: line-through;
}`,
    previewHTML: `<p class="quote">This is an italic quote.</p><p class="link">Underlined text</p><p class="old-price">₹999</p>`,
    question: "Which property adds a line through text?",
    options: ["font-style", "text-decoration", "text-align", "letter-spacing"],
    answer: 1,
    answerExplanation: "text-decoration: line-through adds a line through the text."
  },
  {
    id: 34,
    title: "Text Alignment and Line Height",
    duration: "6 min",
    explanation: "text-align controls horizontal alignment of inline content within a block. line-height controls the height of each line box and improves readability.",
    example: `.article {
  text-align: left;
  line-height: 1.7;
}

.title {
  text-align: center;
}`,
    previewHTML: `<h2 class="title">About Us</h2><p class="article">Good line spacing makes paragraphs easier to read. This example uses a line-height of 1.7.</p>`,
    question: "What does line-height control?",
    options: ["Text colour", "Spacing between lines of text", "Element width", "Border radius"],
    answer: 1,
    answerExplanation: "line-height controls the height of line boxes, affecting the spacing between lines."
  },
  {
    id: 35,
    title: "Letter Spacing, Word Spacing and Text Transform",
    duration: "6 min",
    explanation: "letter-spacing adjusts character spacing, word-spacing adjusts spaces between words, and text-transform changes displayed capitalization.",
    example: `.label {
  letter-spacing: 3px;
  text-transform: uppercase;
}

p {
  word-spacing: 5px;
}`,
    previewHTML: `<h3 class="label">CSS Learning</h3><p>Learn CSS one topic at a time.</p>`,
    question: "Which property changes displayed text to uppercase?",
    options: ["font-weight", "text-transform", "word-spacing", "line-height"],
    answer: 1,
    answerExplanation: "text-transform: uppercase displays letters in uppercase without changing the original HTML text."
  },
  {
    id: 36,
    title: "Text Overflow and Word Wrapping",
    duration: "6 min",
    explanation: "text-overflow can show an ellipsis when overflowing inline text is clipped. It usually works with overflow: hidden and white-space: nowrap. overflow-wrap helps long words wrap.",
    example: `.single-line {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.long-text {
  overflow-wrap: anywhere;
}`,
    previewHTML: `<div class="single-line">This is a very long sentence that will be shortened with an ellipsis when it overflows.</div><p class="long-text">supercalifragilisticexpialidocious</p>`,
    question: "Which value commonly displays ... for clipped text?",
    options: ["text-overflow: ellipsis", "overflow: dots", "white-space: ellipsis", "word-wrap: dots"],
    answer: 0,
    answerExplanation: "text-overflow: ellipsis displays an ellipsis when overflowing inline text is clipped."
  },
  {
    id: 37,
    title: "The CSS Box Model",
    duration: "7 min",
    explanation: "Every element is represented by a box. The standard box model consists of content, padding, border and margin. These layers affect spacing and total dimensions.",
    example: `.card {
  width: 200px;
  padding: 20px;
  border: 3px solid purple;
  margin: 15px;
}`,
    previewHTML: `<div class="card">Content area<br>Padding: 20px<br>Border: 3px</div>`,
    question: "Which order describes the box layers from inside to outside?",
    options: ["Margin, border, padding, content", "Content, padding, border, margin", "Border, content, margin, padding", "Padding, content, margin, border"],
    answer: 1,
    answerExplanation: "From inside outward, the box model is content, padding, border and margin."
  },
  {
    id: 38,
    title: "Margin and Padding",
    duration: "6 min",
    explanation: "Padding creates space inside the border, around the content. Margin creates space outside the border, separating elements from neighbouring boxes.",
    example: `.card {
  padding: 20px;
  margin: 16px;
  background: #dbeafe;
  border: 2px solid royalblue;
}`,
    previewHTML: `<div class="card">This card has 20px internal padding and 16px external margin.</div><div class="card">Another card</div>`,
    question: "Which property creates space outside an element's border?",
    options: ["padding", "margin", "line-height", "font-size"],
    answer: 1,
    answerExplanation: "Margin creates space outside an element's border."
  },
  {
    id: 39,
    title: "Border, Border Radius and Outline",
    duration: "6 min",
    explanation: "border draws a border around an element. border-radius rounds its corners. outline draws a line outside the border and does not take up layout space.",
    example: `.card {
  border: 2px solid royalblue;
  border-radius: 14px;
  padding: 16px;
}

button:focus-visible {
  outline: 3px solid orange;
  outline-offset: 3px;
}`,
    previewHTML: `<div class="card">Rounded card border</div><p><button>Try keyboard focus</button></p>`,
    question: "Does an outline take up space in the box model?",
    options: ["Yes, always", "No", "Only with padding", "Only with margin"],
    answer: 1,
    answerExplanation: "An outline is drawn outside the border and does not take up layout space."
  },
  {
    id: 40,
    title: "box-sizing: content-box vs border-box",
    duration: "7 min",
    explanation: "With content-box, the declared width applies to the content only. With border-box, the declared width includes content, padding and border. border-box makes many layouts easier to manage.",
    example: `* {
  box-sizing: border-box;
}

.card {
  width: 250px;
  padding: 20px;
  border: 5px solid teal;
}`,
    previewHTML: `<div class="card">The total border-box width is 250px, including padding and borders.</div>`,
    question: "With box-sizing: border-box, what does width include?",
    options: ["Content only", "Content and margin only", "Content, padding and border", "Margin only"],
    answer: 2,
    answerExplanation: "border-box includes content, padding and border in the specified width; margin remains outside."
  },
  
  {
    id: 41,
    title: "Display: block",
    duration: "5 min",
    explanation: "A block element normally starts on a new line and takes the available inline space. Examples include div, p and h1.",
    example: `.box {
  display: block;
  background: lightblue;
  padding: 10px;
}`,
    previewHTML: `<span class="box">First block</span><span class="box">Second block</span><p>Paragraph below</p>`,
    question: "How does a block element normally behave?",
    options: ["Always stays inline", "Starts on a new line and takes available width", "Disappears", "Becomes a grid automatically"],
    answer: 1,
    answerExplanation: "Block elements normally start on a new line and occupy the available inline space."
  },
  {
    id: 42,
    title: "Display: inline",
    duration: "5 min",
    explanation: "Inline elements flow within text. Width and height generally do not control their inline box in the same way as block boxes. Padding and borders can still be visible.",
    example: `.tag {
  display: inline;
  background: #fde68a;
  padding: 5px;
}`,
    previewHTML: `<p>Learn <span class="tag">HTML</span> and <span class="tag">CSS</span> together.</p>`,
    question: "Which display value lets elements flow within a line of text?",
    options: ["block", "inline", "none", "grid"],
    answer: 1,
    answerExplanation: "Inline elements flow alongside text and other inline content."
  },
  {
    id: 43,
    title: "Display: inline-block",
    duration: "5 min",
    explanation: "inline-block flows alongside other inline content while allowing width and height to be set like a block box.",
    example: `.badge {
  display: inline-block;
  width: 120px;
  padding: 10px;
  background: #bbf7d0;
  margin: 5px;
}`,
    previewHTML: `<span class="badge">Beginner</span><span class="badge">Advanced</span>`,
    question: "What is a key feature of inline-block?",
    options: ["It cannot have width", "It flows inline and accepts width and height", "It removes the element", "It always fills the entire row"],
    answer: 1,
    answerExplanation: "inline-block combines inline flow with controllable box dimensions."
  },
  {
    id: 44,
    title: "Display: none vs Visibility: hidden",
    duration: "6 min",
    explanation: "display: none removes an element's box from layout. visibility: hidden hides it but preserves its layout space. Neither is the same as opacity: 0.",
    example: `.hidden-layout {
  display: none;
}

.hidden-space {
  visibility: hidden;
}`,
    previewHTML: `<div class="hidden-space">Hidden but space remains</div><div>Visible item</div><div class="hidden-layout">Removed from layout</div><div>Another visible item</div>`,
    question: "Which property hides an element while preserving its layout space?",
    options: ["display: none", "visibility: hidden", "width: 0", "position: absolute"],
    answer: 1,
    answerExplanation: "visibility: hidden preserves the element's layout space."
  },
  {
    id: 45,
    title: "Width and Height",
    duration: "5 min",
    explanation: "width and height set an element's dimensions. The result depends on its box-sizing, display type and layout context.",
    example: `.box {
  width: 240px;
  height: 100px;
  background: lightcoral;
  padding: 10px;
}`,
    previewHTML: `<div class="box">240px wide<br>100px high content box</div>`,
    question: "Which properties set an element's dimensions?",
    options: ["margin and padding", "width and height", "color and background", "top and left only"],
    answer: 1,
    answerExplanation: "width and height set the element's dimensions."
  },
  {
    id: 46,
    title: "Min-Width and Max-Width",
    duration: "6 min",
    explanation: "min-width sets a lower bound for width; max-width sets an upper bound. These are useful for responsive containers.",
    example: `.container {
  width: 90%;
  max-width: 800px;
  min-width: 240px;
  margin-inline: auto;
}`,
    previewHTML: `<div class="container">This container can shrink but has a minimum width and a maximum width.</div>`,
    question: "What does max-width: 800px do?",
    options: ["Forces width to always be 800px", "Prevents width from exceeding 800px", "Sets minimum height", "Adds 800px of padding"],
    answer: 1,
    answerExplanation: "max-width prevents the used width from exceeding the specified maximum, subject to layout constraints."
  },
  {
    id: 47,
    title: "Min-Height and Max-Height",
    duration: "5 min",
    explanation: "min-height sets a lower height bound, while max-height sets an upper bound. Content and overflow rules determine what happens when the content needs more space.",
    example: `.panel {
  min-height: 100px;
  max-height: 220px;
  overflow: auto;
  padding: 12px;
  border: 1px solid gray;
}`,
    previewHTML: `<div class="panel"><p>Panel content</p><p>More content</p><p>More content</p><p>More content</p><p>More content</p><p>More content</p></div>`,
    question: "What is the purpose of min-height?",
    options: ["Set a lower bound on height", "Set text colour", "Set border thickness", "Hide all content"],
    answer: 0,
    answerExplanation: "min-height specifies a minimum used height."
  },
  {
    id: 48,
    title: "Overflow: visible, hidden, auto and scroll",
    duration: "7 min",
    explanation: "The overflow property controls content that exceeds an element's box. visible allows it to show, hidden clips it, auto provides scrolling when needed, and scroll provides a scrolling mechanism.",
    example: `.panel {
  width: 220px;
  height: 100px;
  overflow: auto;
  border: 2px solid teal;
}`,
    previewHTML: `<div class="panel"><p>This is a lot of content inside a small panel. Keep reading to see how overflow auto lets you scroll when content exceeds the available height.</p><p>Extra content continues here.</p></div>`,
    question: "Which overflow value allows scrolling when necessary?",
    options: ["visible", "auto", "clip only", "none"],
    answer: 1,
    answerExplanation: "overflow: auto provides scrolling when content overflows."
  },
  {
    id: 49,
    title: "Object-Fit and Object-Position",
    duration: "6 min",
    explanation: "object-fit controls how replaced content such as an image fits its box. cover fills the box and may crop; contain fits the whole image and may leave empty space. object-position controls alignment.",
    example: `.photo {
  width: 220px;
  height: 140px;
  object-fit: cover;
  object-position: center;
}`,
    previewHTML: `<img class="photo" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600" alt="Mountain landscape"><p>The image fills its box and may be cropped.</p>`,
    question: "Which object-fit value fills a box while preserving the image ratio, possibly cropping it?",
    options: ["stretch", "cover", "repeat", "scroll"],
    answer: 1,
    answerExplanation: "object-fit: cover fills the box while preserving aspect ratio, cropping if necessary."
  },
  {
    id: 50,
    title: "Aspect Ratio",
    duration: "6 min",
    explanation: "aspect-ratio specifies a preferred width-to-height ratio for a box. It is useful for thumbnails, video frames and responsive cards.",
    example: `.thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(120deg, royalblue, purple);
  border-radius: 12px;
}`,
    previewHTML: `<div class="thumbnail"></div><p>This box uses a 16:9 aspect ratio.</p>`,
    question: "What does aspect-ratio: 16 / 9 describe?",
    options: ["16px padding and 9px margin", "A width-to-height ratio of 16:9", "16 columns and 9 rows", "A 16px border"],
    answer: 1,
    answerExplanation: "aspect-ratio: 16 / 9 sets a preferred width-to-height ratio of 16:9."
  },

  
  {
    id: 51,
    title: "Position: static and relative",
    duration: "6 min",
    explanation: "static is the default positioning. relative keeps the element in normal flow but lets you offset it using top, right, bottom or left. It can also establish a containing block for positioned descendants.",
    example: `.normal {
  position: static;
}

.relative {
  position: relative;
  top: 10px;
  left: 15px;
  background: #bfdbfe;
}`,
    previewHTML: `<div class="normal">Normal element</div><div class="relative">Relative element, shifted down and right</div><div>Following content</div>`,
    question: "What happens to a relatively positioned element?",
    options: ["It is always removed from normal flow", "It stays in normal flow and can be offset", "It becomes fixed to the viewport", "It disappears"],
    answer: 1,
    answerExplanation: "Relative positioning preserves the element's original layout space while allowing visual offsets."
  },
  {
    id: 52,
    title: "Position: absolute",
    duration: "6 min",
    explanation: "An absolutely positioned element is removed from normal flow. It is positioned relative to its nearest ancestor that establishes an appropriate positioning containing block, often one with position: relative.",
    example: `.card {
  position: relative;
  padding: 35px 15px 15px;
  border: 1px solid gray;
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: crimson;
  color: white;
  padding: 4px 8px;
}`,
    previewHTML: `<div class="card"><span class="badge">NEW</span><h3>Product Card</h3><p>The badge is positioned inside the card.</p></div>`,
    question: "What commonly establishes the containing block for an absolute child?",
    options: ["A positioned ancestor such as position: relative", "Any paragraph automatically", "Only the body element", "The child's margin"],
    answer: 0,
    answerExplanation: "A positioned ancestor commonly establishes the containing block for an absolutely positioned descendant."
  },
  {
    id: 53,
    title: "Position: fixed",
    duration: "5 min",
    explanation: "Fixed positioning normally positions an element relative to the viewport, so it stays in place while scrolling. Certain ancestors with properties such as transform can establish a different containing block.",
    example: `.help-button {
  position: fixed;
  right: 16px;
  bottom: 16px;
  background: royalblue;
  color: white;
  padding: 12px;
  border-radius: 8px;
}`,
    previewHTML: `<p>Scroll the page to understand fixed positioning.</p><div style="height:260px"></div><button class="help-button">Help</button>`,
    question: "What is a common use for fixed positioning?",
    options: ["A floating help button", "A paragraph in normal flow", "A background colour", "Changing font weight"],
    answer: 0,
    answerExplanation: "Fixed positioning is useful for floating controls that remain visible during scrolling."
  },
  {
    id: 54,
    title: "Position: sticky",
    duration: "6 min",
    explanation: "Sticky positioning behaves like normal flow until a scroll threshold is reached. It then sticks within its scrolling container. Set an inset such as top: 0 to define the threshold.",
    example: `.sticky-title {
  position: sticky;
  top: 0;
  padding: 12px;
  background: #dbeafe;
}`,
    previewHTML: `<div class="sticky-title">Sticky heading</div><p>Scroll the preview area to observe the sticky heading.</p><div style="height:300px"></div><p>End of content</p>`,
    question: "Which property commonly defines when a sticky element sticks to the top?",
    options: ["margin-top", "top", "font-size", "border"],
    answer: 1,
    answerExplanation: "For a top-sticky element, top: 0 defines the sticking threshold."
  },
  {
    id: 55,
    title: "z-index and Stacking",
    duration: "6 min",
    explanation: "z-index controls stack order in applicable positioning and layout contexts. Stacking contexts can isolate descendants, so a larger z-index does not always place an element above everything else.",
    example: `.back {
  position: relative;
  z-index: 1;
  background: skyblue;
}

.front {
  position: relative;
  z-index: 2;
  margin-top: -25px;
  background: coral;
}`,
    previewHTML: `<div class="back">Layer 1</div><div class="front">Layer 2 appears above</div>`,
    question: "What does z-index help control?",
    options: ["Font size", "Stacking order", "Element width", "Text alignment"],
    answer: 1,
    answerExplanation: "z-index helps control stacking order within relevant stacking contexts."
  },
  {
    id: 56,
    title: "Introduction to Flexbox",
    duration: "5 min",
    explanation: "Flexbox is a one-dimensional layout system. It arranges items along a main axis and a cross axis, making alignment and distribution easier.",
    example: `.container {
  display: flex;
  gap: 12px;
}`,
    previewHTML: `<div class="container"><div class="item">One</div><div class="item">Two</div><div class="item">Three</div></div>`,
    question: "Flexbox is primarily designed for which kind of layout?",
    options: ["One-dimensional layouts", "Database layouts", "Only printed pages", "Only animations"],
    answer: 0,
    answerExplanation: "Flexbox handles one-dimensional layouts along a main axis."
  },
  {
    id: 57,
    title: "Flex Direction and Wrapping",
    duration: "6 min",
    explanation: "flex-direction chooses the main axis direction: row, row-reverse, column or column-reverse. flex-wrap allows items to wrap onto additional lines.",
    example: `.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}`,
    previewHTML: `<div class="container"><div class="item">Item 1</div><div class="item">Item 2</div><div class="item">Item 3</div><div class="item">Item 4</div></div>`,
    question: "Which property allows flex items to move onto additional lines?",
    options: ["flex-wrap", "font-wrap", "text-align", "position"],
    answer: 0,
    answerExplanation: "flex-wrap: wrap lets flex items wrap when there is insufficient space."
  },
  {
    id: 58,
    title: "justify-content",
    duration: "6 min",
    explanation: "justify-content distributes flex items along the main axis. Common values include flex-start, center, flex-end, space-between, space-around and space-evenly.",
    example: `.container {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}`,
    previewHTML: `<div class="container"><div class="item">One</div><div class="item">Two</div><div class="item">Three</div></div>`,
    question: "Which value places the first item at the start and the last at the end, distributing space between items?",
    options: ["center", "space-between", "flex-start", "stretch"],
    answer: 1,
    answerExplanation: "space-between distributes remaining space between items, with no extra space at the ends."
  },
  {
    id: 59,
    title: "align-items and align-self",
    duration: "6 min",
    explanation: "align-items aligns flex items on the cross axis. align-self overrides that alignment for one item. The visual result depends on the flex direction.",
    example: `.container {
  display: flex;
  align-items: center;
  min-height: 120px;
  gap: 10px;
}

.special {
  align-self: flex-start;
}`,
    previewHTML: `<div class="container"><div class="item">Center</div><div class="item special">Start</div><div class="item">Center</div></div>`,
    question: "Which property overrides cross-axis alignment for an individual flex item?",
    options: ["align-self", "justify-content", "flex-wrap", "z-index"],
    answer: 0,
    answerExplanation: "align-self controls the cross-axis alignment of an individual flex item."
  },
  {
    id: 60,
    title: "flex-grow, flex-shrink and flex-basis",
    duration: "7 min",
    explanation: "flex-grow determines how items share positive free space, flex-shrink controls shrinking when space is insufficient, and flex-basis sets the initial main size before free-space distribution.",
    example: `.item {
  flex: 1 1 160px;
}

.featured {
  flex-grow: 2;
}`,
    previewHTML: `<div class="container"><div class="item">Normal</div><div class="item featured">Grow more</div><div class="item">Normal</div></div>`,
    question: "What does flex-grow control?",
    options: ["How items share positive free space", "Text colour", "Border thickness", "The viewport height"],
    answer: 0,
    answerExplanation: "flex-grow controls how flex items share positive free space."
  },
  
  {
    id: 61,
    title: "Flexbox Gap, Order and Alignment",
    duration: "6 min",
    explanation: "gap adds space between flex items. order changes their visual order without changing the HTML order. align-content distributes multiple flex lines along the cross axis when wrapping occurs and extra space is available.",
    example: `.container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: space-between;
}

.featured {
  order: -1;
}`,
    previewHTML: `<div class="container"><div class="item">First in HTML</div><div class="item featured">Visually first</div><div class="item">Third</div></div>`,
    question: "Which property adds space between flex items?",
    options: ["gap", "order", "flex-grow", "z-index"],
    answer: 0,
    answerExplanation: "gap adds spacing between flex items without adding margins to each item."
  },
  {
    id: 62,
    title: "Centering with Flexbox",
    duration: "5 min",
    explanation: "Flexbox can center an item along both axes using justify-content and align-items. The container needs available space on the relevant axes.",
    example: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  border: 2px dashed royalblue;
}`,
    previewHTML: `<div class="container"><div class="item">Centered!</div></div>`,
    question: "Which pair centers an item on both axes in a flex container?",
    options: ["margin and padding", "justify-content and align-items", "width and height", "top and left only"],
    answer: 1,
    answerExplanation: "justify-content aligns on the main axis; align-items aligns on the cross axis."
  },
  {
    id: 63,
    title: "Flexbox Navigation Bar",
    duration: "6 min",
    explanation: "Flexbox is useful for navbars because it aligns items in a row and distributes space. Use flex-wrap when the row needs to adapt to narrower screens.",
    example: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.links {
  display: flex;
  gap: 12px;
}`,
    previewHTML: `<nav class="navbar"><strong>MySite</strong><div class="links"><a href="#">Home</a><a href="#">About</a><a href="#">Contact</a></div></nav>`,
    question: "Which Flexbox property aligns navbar items vertically in a typical row layout?",
    options: ["align-items", "font-weight", "overflow", "text-decoration"],
    answer: 0,
    answerExplanation: "In a row flex container, align-items controls alignment on the vertical cross axis."
  },
  {
    id: 64,
    title: "Introduction to CSS Grid",
    duration: "5 min",
    explanation: "CSS Grid is a two-dimensional layout system. It lets you arrange content in rows and columns at the same time.",
    example: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}`,
    previewHTML: `<div class="grid"><div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div><div class="item">6</div></div>`,
    question: "CSS Grid is primarily designed for which type of layout?",
    options: ["Two-dimensional layouts", "Only text styling", "Only one inline line", "Database queries"],
    answer: 0,
    answerExplanation: "Grid arranges content across rows and columns."
  },
  {
    id: 65,
    title: "Grid Columns, Rows and fr Units",
    duration: "6 min",
    explanation: "grid-template-columns and grid-template-rows define grid tracks. The fr unit distributes available space proportionally after other sizing requirements are considered.",
    example: `.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 80px 120px;
  gap: 10px;
}`,
    previewHTML: `<div class="grid"><div class="item">2fr column</div><div class="item">1fr column</div><div class="item">Row 2</div><div class="item">Row 2</div></div>`,
    question: "What does 1fr represent in Grid?",
    options: ["Always exactly 1px", "A proportional share of available space", "One fixed row", "One font size"],
    answer: 1,
    answerExplanation: "fr distributes available space proportionally among grid tracks."
  },
  {
    id: 66,
    title: "Grid Gap and Grid Lines",
    duration: "6 min",
    explanation: "gap adds spacing between grid tracks. Grid items can span or be positioned using grid-column and grid-row line references.",
    example: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.wide {
  grid-column: 1 / 3;
}`,
    previewHTML: `<div class="grid"><div class="item wide">Spans columns 1 to 3</div><div class="item">Item</div><div class="item">Item</div><div class="item">Item</div></div>`,
    question: "What does grid-column: 1 / 3 do?",
    options: ["Spans grid lines 1 through 3", "Creates three grids", "Sets the first column to 3px", "Hides two columns"],
    answer: 0,
    answerExplanation: "It places the item from grid line 1 to grid line 3, spanning two tracks when those lines bound adjacent columns."
  },
  {
    id: 67,
    title: "repeat(), minmax() and Responsive Grid",
    duration: "7 min",
    explanation: "repeat() reduces repeated track definitions. minmax() defines a track's minimum and maximum sizing range. Combined with auto-fit or auto-fill, they support flexible responsive grids.",
    example: `.grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}`,
    previewHTML: `<div class="grid"><div class="item">Card 1</div><div class="item">Card 2</div><div class="item">Card 3</div><div class="item">Card 4</div></div>`,
    question: "What does minmax(140px, 1fr) define?",
    options: ["A track with a minimum of 140px and a flexible maximum", "A fixed 140px margin", "A 140px font", "A minimum of zero columns"],
    answer: 0,
    answerExplanation: "minmax() defines a sizing range from a minimum to a maximum."
  },
  {
    id: 68,
    title: "Grid Template Areas",
    duration: "6 min",
    explanation: "grid-template-areas lets you name rectangular regions of a grid. Child elements can be assigned to those regions with grid-area.",
    example: `.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 10px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`,
    previewHTML: `<div class="layout"><div class="item header">Header</div><div class="item sidebar">Sidebar</div><div class="item main">Main</div><div class="item footer">Footer</div></div>`,
    question: "Which property assigns an element to a named grid area?",
    options: ["grid-area", "grid-name", "area-template", "grid-position"],
    answer: 0,
    answerExplanation: "grid-area assigns a grid item to a named region."
  },
  {
    id: 69,
    title: "Grid Auto Placement and Dense Packing",
    duration: "6 min",
    explanation: "Grid auto-placement places items into available grid cells. grid-auto-flow: row is the default direction; dense packing may fill earlier gaps but can make visual order differ from DOM order.",
    example: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row dense;
  gap: 10px;
}

.wide {
  grid-column: span 2;
}`,
    previewHTML: `<div class="grid"><div class="item wide">Wide card</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div></div>`,
    question: "What can dense grid auto-placement do?",
    options: ["Fill earlier empty grid gaps", "Remove all grid columns", "Change text to bold", "Disable CSS"],
    answer: 0,
    answerExplanation: "Dense packing can backfill earlier gaps, potentially changing the visual order relative to the DOM."
  },
  {
    id: 70,
    title: "Subgrid",
    duration: "7 min",
    explanation: "subgrid allows a nested grid to use the row or column tracks defined by its parent grid. It helps align content across nested components.",
    example: `.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.child {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
}`,
    previewHTML: `<div class="parent"><div class="item">Parent 1</div><div class="item">Parent 2</div><div class="item">Parent 3</div><div class="child"><div class="item">Nested 1</div><div class="item">Nested 2</div></div></div>`,
    question: "What does subgrid let a nested grid reuse?",
    options: ["The parent's grid tracks", "The parent's JavaScript", "The browser history", "The HTML title"],
    answer: 0,
    answerExplanation: "subgrid lets a nested grid align with tracks defined by its parent grid."
  },
  
  {
    id: 71,
    title: "Float Property",
    duration: "5 min",
    explanation: "float moves an element to the left or right so text and inline content can flow around it. It is still useful for text wrapping around images, but Flexbox and Grid are generally better for page layouts.",
    example: `.photo {
  float: left;
  width: 100px;
  margin: 0 14px 8px 0;
}`,
    previewHTML: `<img class="photo" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300" alt="Landscape"><p>Text flows around the floated image. Float was originally designed for wrapping content around objects such as images.</p>`,
    question: "What is a suitable modern use for float?",
    options: ["Every page layout", "Wrapping text around an image", "Creating database tables", "Running JavaScript"],
    answer: 1,
    answerExplanation: "Float remains useful when text should wrap around an image."
  },
  {
    id: 72,
    title: "Clear Property",
    duration: "5 min",
    explanation: "clear controls whether an element can sit alongside preceding floated elements. Values include left, right, both and none.",
    example: `.image {
  float: left;
  margin-right: 12px;
}

.footer {
  clear: both;
}`,
    previewHTML: `<div class="image">Floated image area</div><p>Text wraps alongside the floated area.</p><div class="footer">This footer clears both floats.</div>`,
    question: "What does clear: both do?",
    options: ["Clears all CSS styles", "Prevents the element from sitting beside left or right floats", "Hides images", "Removes margins"],
    answer: 1,
    answerExplanation: "clear: both moves the element below preceding left and right floats when needed."
  },
  {
    id: 73,
    title: "Clearing Floats with Flow Root",
    duration: "5 min",
    explanation: "A parent can establish a new block formatting context with display: flow-root. This contains its floated children without needing a clearfix hack.",
    example: `.container {
  display: flow-root;
  border: 2px solid royalblue;
  padding: 12px;
}

.image {
  float: left;
  margin-right: 10px;
}`,
    previewHTML: `<div class="container"><div class="image">Floated box</div><p>The parent contains the float because it establishes a new block formatting context.</p></div>`,
    question: "Which modern CSS declaration can contain a parent's floated children?",
    options: ["display: flow-root", "font-weight: bold", "visibility: hidden", "text-align: center"],
    answer: 0,
    answerExplanation: "display: flow-root establishes a block formatting context that contains floats."
  },
  {
    id: 74,
    title: "CSS Multi-Column Layout",
    duration: "6 min",
    explanation: "CSS columns divide flowing text into newspaper-like columns. column-count controls the number of columns, column-width suggests a preferred width, and column-gap sets the space between columns.",
    example: `.article {
  columns: 2;
  column-gap: 24px;
  column-rule: 1px solid #cbd5e1;
}`,
    previewHTML: `<div class="article"><p>CSS can arrange long text into columns. This can make some editorial content easier to read.</p><p>The browser flows the text from one column into the next automatically.</p><p>Column layout is different from CSS Grid because content flows through the columns.</p></div>`,
    question: "Which property sets the gap between columns?",
    options: ["column-gap", "grid-row", "float-gap", "line-width"],
    answer: 0,
    answerExplanation: "column-gap controls spacing between columns."
  },
  {
    id: 75,
    title: "Media Queries: Basics",
    duration: "6 min",
    explanation: "Media queries apply CSS conditionally based on features such as viewport width, orientation or user preferences. They are essential for responsive design.",
    example: `.card {
  padding: 24px;
}

@media (max-width: 600px) {
  .card {
    padding: 12px;
  }
}`,
    previewHTML: `<div class="card"><h3>Responsive Card</h3><p>Resize the preview viewport to see how a media query can change padding on narrow screens.</p></div>`,
    question: "What does @media do?",
    options: ["Creates HTML elements", "Applies CSS when specified media conditions match", "Connects a database", "Adds an image"],
    answer: 1,
    answerExplanation: "Media queries apply styles when their conditions, such as viewport width, match."
  },
  {
    id: 76,
    title: "Mobile-First Design",
    duration: "6 min",
    explanation: "Mobile-first CSS starts with styles for smaller screens, then adds enhancements at wider breakpoints using min-width media queries.",
    example: `.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 700px) {
  .layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .layout {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
    previewHTML: `<div class="layout"><div class="item">Card 1</div><div class="item">Card 2</div><div class="item">Card 3</div></div>`,
    question: "Which media query is commonly used to add a wider layout in mobile-first CSS?",
    options: ["@media (min-width: 700px)", "@media (color: red)", "@media (font-size: 20px)", "@media (image: true)"],
    answer: 0,
    answerExplanation: "A min-width query can add layout enhancements when the viewport reaches a wider size."
  },
  {
    id: 77,
    title: "Responsive Images",
    duration: "6 min",
    explanation: "Images should usually fit within their containers. max-width: 100% prevents them from exceeding the available width; height: auto preserves their intrinsic aspect ratio.",
    example: `img {
  display: block;
  max-width: 100%;
  height: auto;
}`,
    previewHTML: `<img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900" alt="Mountain and lake" style="width:100%"><p>The image scales to fit its available space.</p>`,
    question: "Why use height: auto with a responsive image?",
    options: ["To preserve the image's aspect ratio", "To force every image to 100px", "To remove the image", "To add a border"],
    answer: 0,
    answerExplanation: "height: auto allows the image height to adjust proportionally when its width changes."
  },
  {
    id: 78,
    title: "Responsive Typography with clamp()",
    duration: "6 min",
    explanation: "clamp(minimum, preferred, maximum) constrains a value within a lower and upper limit. It is useful for fluid typography that scales with the viewport.",
    example: `h1 {
  font-size: clamp(1.8rem, 4vw, 3.5rem);
}

p {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
}`,
    previewHTML: `<h1>Fluid Heading</h1><p>Resize the preview to see how clamp can scale text within set limits.</p>`,
    question: "What does clamp() provide?",
    options: ["A minimum, preferred and maximum value", "Only one fixed value", "An image crop", "A grid line"],
    answer: 0,
    answerExplanation: "clamp() constrains a preferred value between a minimum and maximum."
  },
  {
    id: 79,
    title: "Container Queries",
    duration: "7 min",
    explanation: "Container queries let a component respond to the size of its container instead of relying only on the viewport. A size container is commonly established with container-type: inline-size.",
    example: `.card-wrapper {
  container-type: inline-size;
}

.card {
  display: grid;
  gap: 12px;
}

@container (min-width: 500px) {
  .card {
    grid-template-columns: 1fr 2fr;
    align-items: center;
  }
}`,
    previewHTML: `<div class="card-wrapper"><div class="card"><div class="item">Image area</div><div><h3>Adaptive card</h3><p>The layout can respond to its container width.</p></div></div></div>`,
    question: "What size can a container query respond to?",
    options: ["Only the viewport height", "The size of a query container", "Only the font colour", "The browser history"],
    answer: 1,
    answerExplanation: "Container queries can adapt a component to the size of its query container."
  },
  {
    id: 80,
    title: "Reduced Motion and Accessibility",
    duration: "6 min",
    explanation: "The prefers-reduced-motion media feature detects a user's request to reduce non-essential motion. Respecting this preference improves accessibility for people sensitive to motion.",
    example: `.animated-card {
  transition: transform 250ms ease;
}

.animated-card:hover {
  transform: translateY(-4px);
}

@media (prefers-reduced-motion: reduce) {
  .animated-card {
    transition: none;
  }
}`,
    previewHTML: `<div class="animated-card item">Hover to see a small movement when motion is enabled.</div><p>Reduced-motion preferences can disable the transition.</p>`,
    question: "What does prefers-reduced-motion: reduce indicate?",
    options: ["The user prefers more animation", "The user requests reduced motion", "The screen is always mobile", "The page must be hidden"],
    answer: 1,
    answerExplanation: "It lets styles adapt when a user has requested reduced motion."
  },

  
  {
    id: 81,
    title: "CSS calc() Function",
    duration: "5 min",
    explanation: "calc() performs calculations using CSS values. It is useful for combining percentages with fixed lengths.",
    example: `.container {
  width: calc(100% - 40px);
  margin-inline: auto;
}`,
    previewHTML: `<div class="container item">Width adjusts to the available space minus 40px.</div>`,
    question: "What is calc() used for?",
    options: ["Calculating CSS values", "Creating HTML tags", "Connecting databases", "Loading JavaScript"],
    answer: 0,
    answerExplanation: "calc() calculates CSS values such as lengths and percentages."
  },
  {
    id: 82,
    title: "min() and max() Functions",
    duration: "5 min",
    explanation: "min() returns the smallest value among its arguments, while max() returns the largest. They can help create flexible layouts.",
    example: `.card {
  width: min(100%, 600px);
  padding: max(12px, 2vw);
  margin-inline: auto;
}`,
    previewHTML: `<div class="card item"><h3>Flexible card</h3><p>The width stays within the container and does not exceed 600px.</p></div>`,
    question: "What does width: min(100%, 600px) do?",
    options: ["Always makes width 600px", "Uses the smaller of 100% and 600px", "Hides the element", "Sets minimum height"],
    answer: 1,
    answerExplanation: "min() selects the smaller calculated value."
  },
  {
    id: 83,
    title: "CSS Custom Properties",
    duration: "6 min",
    explanation: "Custom properties are CSS variables, usually declared with names beginning with --. Use var() to read them and maintain consistent design values.",
    example: `:root {
  --main-color: #8b5cf6;
  --space: 16px;
}

.card {
  color: var(--main-color);
  padding: var(--space);
  border: 2px solid var(--main-color);
}`,
    previewHTML: `<div class="card"><h3>CSS Variables</h3><p>Change --main-color to update multiple styles.</p></div>`,
    question: "How do you use a CSS custom property?",
    options: ["var(--main-color)", "get(--main-color)", "css(--main-color)", "value(--main-color)"],
    answer: 0,
    answerExplanation: "The var() function reads the value of a custom property."
  },
  {
    id: 84,
    title: "CSS Variable Fallbacks and Scope",
    duration: "6 min",
    explanation: "Custom properties follow the cascade and inheritance rules. The second argument of var() provides a fallback if the referenced property is missing or invalid.",
    example: `.card {
  --card-color: teal;
  color: var(--text-color, white);
  background: var(--card-color);
}`,
    previewHTML: `<div class="card"><h3>Fallback value</h3><p>If --text-color is unavailable, white is used for the text.</p></div>`,
    question: "In var(--text-color, white), what is white?",
    options: ["A selector", "A fallback value", "A CSS function", "An HTML attribute"],
    answer: 1,
    answerExplanation: "The second argument is used as a fallback when the custom property cannot provide a valid value."
  },
  {
    id: 85,
    title: "CSS Transform: Translate, Rotate and Scale",
    duration: "6 min",
    explanation: "transform changes an element's visual position, rotation or size without changing normal document flow.",
    example: `.box {
  transform: translateX(10px) rotate(-4deg) scale(1.05);
}`,
    previewHTML: `<div class="transform-demo"><div class="box">Transform me</div></div>`,
    question: "Which transform function rotates an element?",
    options: ["translate()", "rotate()", "scale()", "opacity()"],
    answer: 1,
    answerExplanation: "rotate() rotates an element by a specified angle."
  },
  {
    id: 86,
    title: "Transform Origin",
    duration: "5 min",
    explanation: "transform-origin sets the point around which a transformed element rotates, scales or otherwise transforms.",
    example: `.box {
  transform-origin: top left;
  transform: rotate(8deg);
}`,
    previewHTML: `<div class="transform-demo"><div class="box">Origin: top left</div></div>`,
    question: "What does transform-origin control?",
    options: ["The transformation's reference point", "The font family", "The page width", "The stacking context of every element"],
    answer: 0,
    answerExplanation: "transform-origin specifies the point around which a transform takes place."
  },
  {
    id: 87,
    title: "CSS Transitions",
    duration: "6 min",
    explanation: "Transitions animate changes between CSS property values over time. They are often used for hover and focus feedback.",
    example: `.button {
  background: #6d28d9;
  transition: background 250ms ease, transform 250ms ease;
}

.button:hover {
  background: #4c1d95;
  transform: translateY(-3px);
}`,
    previewHTML: `<button class="button">Hover over me</button>`,
    question: "Which property controls how long a transition takes?",
    options: ["transition-duration", "transition-color", "animation-name", "transform-speed"],
    answer: 0,
    answerExplanation: "transition-duration sets the time a transition takes."
  },
  {
    id: 88,
    title: "CSS Keyframe Animations",
    duration: "7 min",
    explanation: "@keyframes defines animation stages. animation-name and animation-duration apply an animation to an element.",
    example: `@keyframes floatUp {
  from { transform: translateY(0); }
  to { transform: translateY(-12px); }
}

.box {
  animation: floatUp 1s ease-in-out infinite alternate;
}`,
    previewHTML: `<div class="animation-demo"><div class="box">Animated</div></div>`,
    question: "What does @keyframes define?",
    options: ["Animation stages", "HTML structure", "Database records", "Media files"],
    answer: 0,
    answerExplanation: "@keyframes defines the styles used at different points in an animation."
  },
  {
    id: 89,
    title: "Animation Timing and Delay",
    duration: "6 min",
    explanation: "Animation properties control duration, delay, iteration count, direction, fill mode and timing function.",
    example: `.box {
  animation-name: appear;
  animation-duration: 1s;
  animation-delay: 200ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}

@keyframes appear {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
    previewHTML: `<div class="animation-demo"><div class="box">Appearing</div></div>`,
    question: "What does animation-delay control?",
    options: ["When an animation starts after being applied", "The element's width", "The number of HTML tags", "The text colour"],
    answer: 0,
    answerExplanation: "animation-delay specifies how long to wait before the animation begins."
  },
  {
    id: 90,
    title: "Box Shadow and Text Shadow",
    duration: "5 min",
    explanation: "box-shadow adds shadows around an element's box. text-shadow adds a shadow to text. Both support offsets, blur and colour.",
    example: `.card {
  box-shadow: 0 8px 24px rgb(0 0 0 / 20%);
}

h2 {
  text-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
}`,
    previewHTML: `<div class="card"><h2>Beautiful CSS</h2><p>Shadows add depth to cards and text.</p></div>`,
    question: "Which property adds a shadow around an element's box?",
    options: ["text-shadow", "box-shadow", "font-shadow", "border-shadow"],
    answer: 1,
    answerExplanation: "box-shadow creates a shadow around an element's box."
  },

  
  {
    id: 91,
    title: "CSS Border Styles",
    duration: "5 min",
    explanation: "The border property controls an element's border width, style and colour. You can style each side separately.",
    example: `.box {
  border: 3px solid #8b5cf6;
  border-bottom: 5px dashed #22c55e;
}`,
    previewHTML: `<div class="box">Different border styles</div>`,
    question: "Which value creates a dashed border?",
    options: ["border: dashed", "border-style: dashed", "border: dotted-only", "border-type: dash"],
    answer: 1,
    answerExplanation: "border-style: dashed creates a dashed border."
  },
  {
    id: 92,
    title: "Border Radius and Circular Elements",
    duration: "5 min",
    explanation: "border-radius rounds corners. A square with border-radius: 50% becomes circular when its width and height are equal.",
    example: `.card {
  border-radius: 16px;
}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}`,
    previewHTML: `<div class="card">Rounded card</div><div class="circle">Circle</div>`,
    question: "How do you make a square element circular?",
    options: ["border-radius: 10px", "border-radius: 50%", "border-style: circle", "shape: round"],
    answer: 1,
    answerExplanation: "For a square element, border-radius: 50% creates a circle."
  },
  {
    id: 93,
    title: "Linear Gradients",
    duration: "6 min",
    explanation: "linear-gradient() blends two or more colours along a straight line. It is commonly used for backgrounds and buttons.",
    example: `.hero {
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  color: white;
  padding: 24px;
}`,
    previewHTML: `<div class="hero"><h2>Gradient Background</h2><p>Two colours blend smoothly.</p></div>`,
    question: "Which function creates a linear gradient?",
    options: ["color-mix()", "linear-gradient()", "background-blend()", "gradient-linear()"],
    answer: 1,
    answerExplanation: "linear-gradient() creates a gradient along a straight line."
  },
  {
    id: 94,
    title: "Radial and Conic Gradients",
    duration: "6 min",
    explanation: "radial-gradient() spreads colours outward from a central point. conic-gradient() blends colours around a centre, often used for decorative rings and charts.",
    example: `.radial {
  background: radial-gradient(circle, #fef08a, #f97316, #7c2d12);
}

.conic {
  background: conic-gradient(#8b5cf6, #ec4899, #8b5cf6);
  border-radius: 50%;
}`,
    previewHTML: `<div class="radial">Radial gradient</div><div class="conic">Conic</div>`,
    question: "Which gradient blends colours around a central point by angle?",
    options: ["linear-gradient()", "conic-gradient()", "text-gradient()", "border-gradient()"],
    answer: 1,
    answerExplanation: "conic-gradient() transitions colours around a centre."
  },
  {
    id: 95,
    title: "CSS Filters",
    duration: "6 min",
    explanation: "The filter property applies visual effects such as blur(), grayscale(), brightness(), contrast() and drop-shadow() to an element.",
    example: `.photo {
  filter: grayscale(100%);
}

.photo:hover {
  filter: grayscale(0%) brightness(1.05);
}`,
    previewHTML: `<div class="photo">Imagine a photo here</div><p>Hover to see the filter change.</p>`,
    question: "Which filter turns an image black and white?",
    options: ["blur()", "grayscale()", "rotate()", "radius()"],
    answer: 1,
    answerExplanation: "grayscale(100%) removes the image's colour."
  },
  {
    id: 96,
    title: "Backdrop Filter",
    duration: "6 min",
    explanation: "backdrop-filter applies effects to the area behind a translucent element. It is commonly used for glass-style cards and navigation bars.",
    example: `.glass {
  background: rgb(255 255 255 / 15%);
  backdrop-filter: blur(10px);
  border: 1px solid rgb(255 255 255 / 30%);
  border-radius: 16px;
  padding: 20px;
}`,
    previewHTML: `<div class="glass"><h3>Glass Effect</h3><p>A translucent surface can blur what's behind it.</p></div>`,
    question: "What does backdrop-filter blur() affect?",
    options: ["The content behind the element", "Only the border thickness", "The page's HTML", "The database"],
    answer: 0,
    answerExplanation: "backdrop-filter affects the area behind an element; the element needs a suitably translucent background for the effect to show."
  },
  {
    id: 97,
    title: "CSS Blend Modes",
    duration: "6 min",
    explanation: "mix-blend-mode controls how an element's content blends with the content behind it. background-blend-mode blends an element's background layers.",
    example: `.label {
  color: white;
  background: #7c3aed;
  mix-blend-mode: screen;
}

.layer {
  background-image: linear-gradient(#ec4899, #7c3aed), url('image.jpg');
  background-blend-mode: multiply;
}`,
    previewHTML: `<div class="blend-stage"><div class="label">Blend modes</div></div>`,
    question: "Which property blends an element with content behind it?",
    options: ["mix-blend-mode", "blend-colour", "opacity-mode", "filter-mode"],
    answer: 0,
    answerExplanation: "mix-blend-mode controls how an element blends with the backdrop."
  },
  {
    id: 98,
    title: "CSS Clip Path",
    duration: "6 min",
    explanation: "clip-path defines which part of an element remains visible. Basic shapes include circle(), ellipse(), inset() and polygon().",
    example: `.shape {
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}`,
    previewHTML: `<div class="shape">Triangle</div>`,
    question: "What does clip-path do?",
    options: ["Defines the visible clipped region", "Changes font size", "Adds a database connection", "Sets the page title"],
    answer: 0,
    answerExplanation: "clip-path clips an element to a specified shape or path."
  },
  {
    id: 99,
    title: "CSS Masking",
    duration: "6 min",
    explanation: "CSS masking controls an element's visibility using a mask image or gradient. Unlike a simple rectangular crop, a mask can create gradual transparency.",
    example: `.masked {
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
}`,
    previewHTML: `<div class="masked">A gradient mask can fade content towards the bottom.</div>`,
    question: "What can a gradient mask create?",
    options: ["A gradual transparency fade", "A new HTML element", "A database table", "A JavaScript variable"],
    answer: 0,
    answerExplanation: "A gradient mask can make parts of an element progressively transparent."
  },
  {
    id: 100,
    title: "CSS Counters",
    duration: "6 min",
    explanation: "CSS counters let you number elements with counter-reset, counter-increment and counter(). They can create numbered headings without manually typing each number.",
    example: `body {
  counter-reset: section;
}

h3::before {
  counter-increment: section;
  content: counter(section) ". ";
}`,
    previewHTML: `<h3>First heading</h3><h3>Second heading</h3><h3>Third heading</h3>`,
    question: "Which function displays a CSS counter's value?",
    options: ["count()", "counter()", "number()", "index()"],
    answer: 1,
    answerExplanation: "counter(section) inserts the current value of the named CSS counter."
  }




];

export default cssLessons;