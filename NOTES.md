# Notes (explanations for this project)

Open this file when you want explanations. Keep `main.html` / `index.js` clean.

## `main.html` (explained)

- `<!DOCTYPE html>`: tells the browser this is HTML5
- `<html lang="en">`: page starts; says the page language is English
- `<head>`: setup area (not shown on the page)
- `<meta charset="UTF-8">`: how text is stored/shown (UTF‑8)
- `<meta name="viewport" ...>`: makes the page fit/scale on phones
- `<title>`: text on the browser tab
- `</head>`: head ends
- `<body>`: visible page content starts
- `<h3>`: smaller heading (section title)
- `<button>`: a clickable button
- `</body>`: body ends
- `</html>`: page ends

Current file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coin Flipper</title>
</head>
<body>
    <h3>Color Flipper</h3>
    <button>Green</button>
    <button>Red</button>
    <button>Blue</button>
    <button>Random</button>
</body>
</html>
```

## `index.js` (explained)

- `index.js`: where your JavaScript goes
- To run it: you link it from `main.html` with a script tag

Example:

```html
<script src="index.js"></script>
```

