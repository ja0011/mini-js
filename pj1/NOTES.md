# Notes (explanations for this project)

**This app lives in the `pj1` folder.** Open **`pj1`** as your Cursor folder (*File → Open Folder…* → `mini-js/pj1`) so paths like `main.html` match what you edit and preview.

In a browser, open **`pj1/main.html`** (not a missing `mini-js/main.html` at the parent).

Keep **`main.html`** / **`index.js`** free of long tutorial comments unless you want them there — explanations live in this file.

---

## `main.html` (explained)

### How this file fits together

- This file is **HTML** (structure and content), not JavaScript.
- **`<script src="index.js">`** tells the browser to load your **separate** JS file and run it. The two languages work together from two files.

### Connecting clicks to JavaScript

- **`onclick="setColor('green')"`** is an **HTML attribute**.
- When the user clicks, the browser looks for a **global** function named **`setColor`** and **calls** it.
- The text **`'green'`** inside the parentheses is an **argument** — it becomes the **`name`** parameter inside **`setColor`** in `index.js`.

### Tags on this page (quick reference)

- **`<!DOCTYPE html>`** — marks the document as HTML5.
- **`<html lang="en">`** — starts the page; **`lang`** hints language for accessibility and search engines.
- **`<link rel="stylesheet" href="style.css">`** — loads your CSS file (often placed inside **`<head>`**; browsers still usually apply it).
- **`<head>…</head>`** — metadata and links; not the visible page body.
- **`<meta charset="UTF-8">`** — text encoding.
- **`<meta name="viewport" …>`** — better scaling on phones.
- **`<title>`** — text on the browser tab.
- **`<body>…</body>`** — what the user actually sees.

### Buttons and script placement

- **`<h3>`** — section title (“Color Flipper”).
- **`<button id="green" …>`** — a button. **`id="green"`** links it to the **`#green`** rule in **`style.css`**. Red / blue / random use their own **`id`** values the same way.
- **Random:** **`onclick="randomColor('random')"`** calls **`randomColor`**. That function takes **no parameters**, so the **`'random'`** string is ignored — it is harmless leftover text.
- **`<script src="index.js"></script>`** — placed **near the end of `<body>`** so the buttons already exist before the script runs.

---

## `style.css` (explained)

### Big picture

- Rules here apply because **`main.html`** links this file with **`<link rel="stylesheet" href="style.css">`**.

### How a rule is written

- Shape: **`selector { property: value; }`**
- **Selector** — *which* elements get the style.
- **`property: value`** — *what* changes (color, size, spacing, etc.).

### Selectors used here

- **`#green`** — **ID selector**; targets the element whose **`id`** is **`green`** (here: the green button’s background).
- Same idea for **`#red`**, **`#blue`**, **`#random`**.
- **`button { … }`** — targets **every** `<button>` (shared size, margin, rounded corners).

### Properties to notice

- **`background-color`** — fills the element’s background with a color.
- **`#random`** uses **`random`** as a color — that is **not** a valid CSS color name, so the browser may **ignore** that rule. Prefer **`gray`**, a **hex** value, or **`hsl(...)`**.

---

## `index.js` (explained)

### Vocabulary — comments and variables

- **`// …`** — a **comment**. The browser skips it; only people reading the code see it.
- **`const body = …`** — **`const`** declares a **named variable** you do **not** plan to reassign with **`=`** later.
- The **right-hand side** of **`=`** runs first; its result is stored in **`body`**.

### Vocabulary — the `document` object

- **`document`** — built-in object for the **loaded page**.
- **`document.getElementsByTagName('body')`** — returns a **list-like collection** of every `<body>` (almost always one).
- **`[0]`** — “give me the **first** item” from that collection.

### Vocabulary — `function`, parameters, calls

- **`function setColor(name) { … }`** — **`function`** **defines** reusable code named **`setColor`**.
- **`name`** — a **parameter** (placeholder). The **caller** fills it in (e.g. **`onclick="setColor('green')"`** → **`name`** is **`'green'`**).
- **`{ … }`** — the **body** of the function; runs **each time** the function is **called**.
- **`function randomColor() { … }`** — **no parameters**; empty **`()`** means nothing is passed in.
- **`randomColor()`** at the **bottom** of the file — a **call** that runs **once** when the script loads, so the background starts random.

### Vocabulary — changing how something looks

- **`body.style.backgroundColor`** — **`body`** is an **element object**. **`.style`** is its inline-style object. **`.backgroundColor`** is one CSS property you can assign a string to.

### Vocabulary — random RGB and template strings

- **`Math.random()`** — decimal in **[0, 1)**.
- **`* 255`** then **`Math.round(...)`** — stretch and round to a whole number for an **RGB** channel.
- **`` const color = `rgb(${red}, ${green}, ${blue})` ``** — **template literal** (backticks). **`${…}`** inserts a value into the string.

### What each piece does in *this* file

1. **`const body = document.getElementsByTagName('body')[0]`** — save the `<body>` element so you can recolor the page later.
2. **`setColor(name)`** — set **`body.style.backgroundColor`** to **`name`** (e.g. **`'red'`**).
3. **`randomColor()`** — pick three channels, build **`rgb(...)`**, assign to **`body.style.backgroundColor`**.

---

### Current file: `main.html`

```html
<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="style.css">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coin Flipper</title>
    
</head>

<body>
    <h3>Color Flipper</h3>
    <button id="green" onclick="setColor('green')">Green</button>
    <button id="red" onclick="setColor('red')">Red</button>
    <button id="blue" onclick="setColor('blue')">Blue</button>
    <button id="random" onclick="randomColor('random')">Random</button>
    <script src="index.js"></script>
</body>

</html>
```

### Current file: `style.css`

```css

#green{
    background-color: green;
}
#red{
    background-color: red;
}
#blue{
    background-color: blue;
}
#random{
    background-color: random;
}

button{
    border-radius: 5px;
    width: 100px;
    height: 40px;
    margin: 5px;
}
```

### Current file: `index.js`

```js
// (notes are in NOTES.md)
const body = document.getElementsByTagName('body')[0]


function setColor(name){
    body.style.backgroundColor =  name;


}

function randomColor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    
    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor =  color;

}

randomColor()
```
