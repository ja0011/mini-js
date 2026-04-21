# Notes — Palindrome checker (`pj2`)

**Open the `pj2` folder** (*File → Open Folder…* → `mini-js/pj2`) when you work on this project.

Preview **`main.html`** with Live Server or by opening the file from disk.

`main.html` links **`style.css`**, but that file is **not** in `pj2` yet. The page still runs; the browser may warn that the stylesheet is missing until you add **`style.css`** or remove the **`<link>`**.

---

## `main.html` (explained)

### HTML and JavaScript together

- **`<input>`** and **`<button>`** are **HTML** tags.
- **`onclick="check()"`** is still HTML, but its **value** is a small piece of **JavaScript** the browser runs on click.
- That name **`check`** must match a **function** defined in **`index.js`**.

### What each important tag does

- **`<link rel="stylesheet" href="style.css">`** — loads CSS from the same folder as this HTML file.
- **`<input id="input" type="text" …>`** — text field. **`id="input"`** lets **`document.getElementById("input")`** find it from JS.
- **`<button onclick="check()">Check</button>`** — runs **`check()`** when clicked.
- **`<script src="index.js"></script>`** at the **end** of **`<body>`** — script runs **after** the input and button exist.

---

## `index.js` (explained)

### Vocabulary — `const` and the DOM

- **`const input = …`** — **`const`** = “I will not reassign **`input`** with `=` later.”
- **`document.getElementById("input")`** — finds the element whose **`id`** is **`input`**.

### Vocabulary — `function` and `return`

- **`function reverseString(str) { … return … }`** — **`function`** defines named code. **`str`** is a **parameter** (the string passed in).
- **`return`** — sends a **value back** to the caller. Here: the reversed string.

### Vocabulary — `check`, `if`, `alert`

- **`function check() { … }`** — no parameters; reads **`input.value`** instead.
- **`if (…) { … } else { … }`** — run one block or the other depending on a **true / false** condition.
- **`===`** — strict equality (type and value must match).
- **`alert("text")`** — browser shows a simple popup (fine for learning).

### Vocabulary — string methods

- **`.split('')`** — string → array of characters.
- **`.reverse()`** — reverses an array in place.
- **`.join('')`** — array → one string again.

### Vocabulary — clearing the input

- **`input.value = ""`** — **`value`** is the text in the box; **`""`** clears it.

### What this file does (flow)

1. **`const input = …`** — runs on load (safe because **`<script>`** comes after **`<input>`**).
2. **`reverseString(str)`** — returns reversed text.
3. **`check()`** — compares typed text to its reverse → **`alert`** → clears the field.

**Limit:** comparison is **case-sensitive** and keeps **spaces / punctuation**, so many real palindromes look “wrong” until you **normalize** the string first.

---

### Current file: `main.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palindrom Checker</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Palindrom Checker</h1>
    <input id="input" type ="text" placeholder="Enter a word or phrase"/>
    <button onclick="check()">Check</button>
    <script src="index.js"></script>
</body>

</html>
```

### Current file: `index.js`

```js
const input = document.getElementById("input")

function reverseString(str){
    return str.split('').reverse().join("")


}

function check(){
    const value= input.value
    const reverse = reverseString(value)

    if(value === reverse){
        alert("It is a palindrom")
    }else{
        alert("not")
    }
    input.value =""
}
```
