# Notes — Palindrome checker (`pj2`)

**Open the `pj2` folder** (*File → Open Folder…* → `mini-js/pj2`) when you work on this project. Preview **`main.html`** with Live Server or from disk.

`main.html` links **`style.css`**, but that file is not in `pj2` yet — the page still runs; the browser only shows a missing-file warning for the stylesheet until you add `style.css` or remove the `<link>`.

## `main.html` (explained)

- **`<link rel="stylesheet" href="style.css">`:** loads CSS from the same folder as this HTML file.
- **`<input id="input" type="text" ...>`:** text field; **`id="input"`** lets `index.js` use `document.getElementById("input")`.
- **`<button onclick="check()">Check</button>`:** runs the global **`check()`** function from `index.js` when clicked.
- **`<script src="index.js"></script>`** at the end of `<body>`: script runs after the input and button exist in the DOM.

Current file:

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

## `index.js` (explained)

- **`const input = document.getElementById("input")`:** saves the text box when the script loads (safe because the script tag comes after the `<input>`).
- **`reverseString(str)`:** **`split('')`** → characters, **`reverse()`**, **`join('')`** → reversed string.
- **`check()`:** compares the typed string to its reverse with **`===`**; **`alert`** for palindrome or not.
- **`input.value = ""`:** clears the field after each check.
- **Limits:** test is **case-sensitive** and keeps **spaces/punctuation**, so many real-world palindromes will show “not” unless you normalize the string first.

Current file:

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
