# Notes (explanations for this project)

**This app lives in the `pj1` folder.** Open **`pj1`** as your Cursor folder (*File → Open Folder…* → `mini-js/pj1`) so paths like `main.html` match what you edit and preview. In a browser, open `pj1/main.html` (not a missing `mini-js/main.html` at the parent).

Open this file when you want explanations. Keep `main.html` / `index.js` clean.

## `main.html` (explained)

- `<!DOCTYPE html>`: tells the browser this is HTML5
- `<html lang="en">`: page starts; says the page language is English
- `<link rel="stylesheet" href="style.css">`: loads the separate CSS file so those rules apply to this page (conventionally this tag lives inside `<head>`; browsers still usually apply it)
- `<head>`: setup area (not shown on the page)
- `<meta charset="UTF-8">`: how text is stored/shown (UTF‑8)
- `<meta name="viewport" ...>`: makes the page fit/scale on phones
- `<title>`: text on the browser tab
- `</head>`: head ends
- `<body>`: visible page content starts
- `<h3>`: smaller heading (section title)
- `<button id="green" onclick="setColor('green')">`: clickable button; **`id`** is for CSS; **`onclick="..."`** runs a bit of JavaScript when clicked (here it calls `setColor` with a color name string)
- Same idea for red/blue; Random uses `onclick="randomColor('random')"` (the extra string is ignored by your `randomColor` function, which takes no parameters)
- `<script src="index.js"></script>`: loads and runs `index.js` (usually placed near the end of `<body>` so the HTML exists before the script runs)
- `</body>` / `</html>`: close the visible page and the document

Current file:

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

## `style.css` (explained)

- **Separate file:** rules here apply because `main.html` links this file with `<link rel="stylesheet" href="style.css">`.
- **`#green`:** “ID selector” — styles the element whose `id` is `green` (the Green button background).
- Same pattern for `#red`, `#blue`, `#random`.
- **`background-color`:** fills the element’s background with that color.
- **`random` as a color:** not a valid CSS color keyword, so that rule may be ignored by the browser; use something like `gray`, a hex value (`#808080`), or `hsl(...)`.
- **`button { ... }`:** styles **all** `<button>` elements — here: rounded corners (`border-radius`), fixed `width` / `height`, and `margin` spacing between them.

Current file:

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

## `index.js` (explained)

- **`document.getElementsByTagName('body')[0]`:** finds every `<body>` in the page and takes the first one; stored in `body` so you can change the page background later.
- **`setColor(name)`:** sets `body.style.backgroundColor` to the string you pass (e.g. `'green'` works because it is a valid CSS color name).
- **`randomColor()`:** builds three random integers 0–255, plugs them into an **`rgb(r, g, b)`** string, then assigns that to `body.style.backgroundColor`.
- **`randomColor()` at the bottom of the file:** runs once when the script loads, so the page starts with a random background before you click anything.

Current file:

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
