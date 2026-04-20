# Notes (explanations for this project)

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
- `<button id="green">` (and `red`, `blue`, `random`): clickable buttons; **`id`** gives each button a unique name the page (and CSS) can target
- `</body>`: body ends
- `</html>`: page ends

**`index.js`:** not linked from this HTML yet. When you add behavior, put `<script src="index.js"></script>` before `</body>` (typical placement).

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
    <button id="green">Green</button>
    <button id="red">Red</button>
    <button id="blue">Blue</button>
    <button id="random">Random</button>
</body>

</html>
```

## `style.css` (explained)

- **Separate file:** rules here apply because `main.html` links this file with `<link rel="stylesheet" href="style.css">`.
- **`#green`:** “ID selector” — styles the element whose `id` is `green` (the Green button background).
- Same pattern for `#red`, `#blue`, `#random`.
- **`background-color`:** fills the element’s background with that color.
- **`random` as a color:** not a valid CSS color keyword, so that rule may be ignored by the browser; use something like `gray`, a hex value (`#808080`), or `hsl(...)`.

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
```

## `index.js` (explained)

- `index.js`: where your JavaScript goes
- To run it: link it from `main.html` with a script tag (not present yet in `main.html`)

Example:

```html
<script src="index.js"></script>
```

Current file:

```js
// (notes are in NOTES.md)

```
