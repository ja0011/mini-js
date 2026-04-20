# Notes — Random quote generator (`pj3`)

**Open the `pj3` folder** (*File → Open Folder…* → `mini-js/pj3`) when you work here. Preview **`index.html`** with Live Server or from disk.

There is no separate CSS file yet; styling is all browser defaults.

## `index.html` (explained)

- **`<title>`:** text on the browser tab (“Random Quote Generator”).
- **`<h1>`:** main heading on the page.
- **`<p id="quote"></p>`:** empty paragraph at first; JavaScript will fill it with the chosen quote. **`id="quote"`** matches `document.getElementById("quote")` in `index.js`.
- **`<button onclick="generateQuote()">`:** click calls **`generateQuote()`** from `index.js`.
- **`<script src="index.js"></script>`** at the end of `<body>`: loads the script after the paragraph and button exist.

**On first load** the quote area stays empty until you click **Generate Quote** (nothing calls `generateQuote()` automatically yet).

Current file:

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

## `index.js` (explained)

- **`quotes`:** an array of strings; each string is one possible quote. Two entries repeat the same Steve Jobs line, so **`quotes.length` is 3** even though only two distinct sentences appear.
- **`usedIndexes`:** a **`Set`** of array indexes already shown; avoids repeating the same index until all have been used.
- **`quoteElement`:** reference to the `<p id="quote">` node.
- **`generateQuote()`:**
  - If every index has been used (`usedIndexes.size >= quotes.length`), **`usedIndexes.clear()`** starts the rotation over.
  - **`while (true)`** loop: pick **`randomIdx`** with **`Math.floor(Math.random() * quotes.length)`**; if that index is already in the set, **`continue`** and try again.
  - Otherwise read **`quotes[randomIdx]`**, put it in the page with **`quoteElement.innerHTML = quote`**, **`add`** the index to the set, and **`break`** out of the loop.

**Note:** For plain text, **`textContent`** is often preferred over **`innerHTML`** (avoids accidental HTML if a quote ever contained `<` characters). Your quotes are safe as-is.

Current file:

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
