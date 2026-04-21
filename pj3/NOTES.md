# Notes — Random quote generator (`pj3`)

**Open the `pj3` folder** (*File → Open Folder…* → `mini-js/pj3`) when you work here.

Preview **`index.html`** with Live Server or from disk.

There is **no** separate CSS file yet — styling is whatever the browser defaults to.

---

## `index.html` (explained)

### Hooks for JavaScript

- **`id="quote"`** — stable name so **`document.getElementById("quote")`** can find this paragraph in **`index.js`**.
- **`<script src="index.js">`** — loads JS from the **same folder** as this HTML file.

### Visible structure

- **`<title>`** — browser tab text.
- **`<h1>`** — main heading on the page.
- **`<p id="quote"></p>`** — starts **empty**; JS fills it when you click the button.
- **`<button onclick="generateQuote()">`** — calls **`generateQuote()`** in **`index.js`**.

### First paint

On first load, the quote area stays **empty** until you click **Generate Quote** (nothing calls **`generateQuote()`** automatically yet).

---

## `index.js` (explained)

### Vocabulary — arrays and `const`

- **`const quotes = [ … ]`** — **`const`** plus an **array literal** **`[ ]`**. Ordered list: **`quotes[0]`**, **`quotes[1]`**, … and **`quotes.length`**.

### Vocabulary — `Set`

- **`const usedIndexes = new Set()`** — a **Set** holds **unique** values (here: indexes you already showed).
- Useful methods: **`.add`**, **`.has`**, **`.clear`**, and **`.size`**.

### Vocabulary — DOM reference

- **`const quoteElement = document.getElementById("quote")`** — grab the **`<p>`** once so you can update its text later.

### Vocabulary — `function`, `if`, loop control

- **`function generateQuote() { … }`** — no parameters; the button’s **`onclick`** calls it.
- **`if (condition) { … }`** — run the block only when **condition** is true.
- **`while (true) { … }`** — repeat until something inside stops the loop (**`break`** here).
- **`continue`** — skip to the **next** loop iteration (try another random index).

### Vocabulary — random index

- **`Math.random()`** — in **[0, 1)**.
- **`* quotes.length`** then **`Math.floor(...)`** — integer index in **0 … length − 1**.

### Vocabulary — putting text on the page

- **`quoteElement.innerHTML = quote`** — treats the string as **HTML**. For **plain text only**, **`textContent`** is often safer.

### What this file does (flow)

1. **`quotes`** — list of possible strings (two entries repeat the same Steve Jobs line, so **length is 3** with only two unique sentences).
2. **`usedIndexes`** — remembers which **indexes** were already used.
3. **`generateQuote()`** — if all indexes were used, **`clear()`** the set. Loop: random index not in set → show **`quotes[randomIdx]`** → **`add`** index → **`break`**.

---

### Current file: `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Quote Generator</title>
</head>

<body>
    <h1>Random Quote Generator</h1>
    <p id="quote"></p>
    <button onclick="generateQuote()">Generate Quote</button>
    <script src="index.js"></script>
</body>

</html>
```

### Current file: `index.js`

```js
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",]


const usedIndexes = new Set()
const quoteElement = document.getElementById("quote") 

function generateQuote(){
    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    while (true){
        const randomIdx = Math.floor(Math.random()* quotes.length)
        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]

        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx) 
        break

    }
     
    


}
```
