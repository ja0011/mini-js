# Notes — TODO list (`pj5`)

**Open the `pj5` folder** (*File → Open Folder…* → `mini-js/pj5`) when you work here.

Preview **`index.html`** with Live Server or from disk.

**`index.html`** loads **`index.js`** from the **same folder** (`pj5/index.js`).

---

## `index.html` (explained)

### IDs the script relies on

- **`id="items"`** and **`id="itemInput"`** — used with **`getElementById`** in **`index.js`**.
- IDs should be **unique** on the page.

### Layout

- **`<div id="items">`** — starts empty. JS adds one **row** per todo (a small **`div`** with text + Delete).
- **`<input id="itemInput">`** — where the user types a new item.
- **`<button onclick="addItem()">Add</button>`** — runs **`addItem()`** from **`index.js`**.
- **`<script src="index.js"></script>`** at the **end** of **`<body>`** — **`#items`** and **`#itemInput`** exist before the script runs.

---

## `index.js` (explained)

### Vocabulary — `let` and `const`

- **`let items = []`** — **`let`** because **`items`** is reassigned or mutated (**`push`**, **`splice`**, load from **`JSON.parse`**). **`[]`** is an empty array.

- **`const itemsDiv`**, **`const input`**, **`const storageKey`** — **`const`** for bindings that stay the **same** (DOM references and the storage key string).

### Vocabulary — named functions

- **`function renderItems() { … }`** — rebuilds the list under **`#items`**. No **`return`**; it changes the **DOM** as a **side effect**.

### Vocabulary — looping with `Object.entries`

- **`for (const [idx, item] of Object.entries(items))`** — **`Object.entries`** yields **`[key, value]`** pairs. For arrays, keys are **`"0"`**, **`"1"`**, … (strings).
- **`for … of`** walks each pair. **`const [idx, item]`** splits each pair into two variables (**destructuring**).

### Vocabulary — creating elements

- **`document.createElement("div")`** — makes a **new** node; **`appendChild`** attaches it under a parent.

### Vocabulary — safe text vs HTML

- **`text.textContent = item`** — plain text only (good for user input).

### Vocabulary — click handlers and arrow functions

- **`button.onclick = () => removeItem(Number(idx))`** — **`() => …`** is an **arrow function** (short anonymous function).
- **`Number(idx)`** — **`Object.entries`** keys are strings; **`splice`** expects a numeric index.

### Vocabulary — clearing the list UI

- **`itemsDiv.innerHTML = null`** — wipes old rows before re-rendering. ( **`replaceChildren()`** is another option.)

### Vocabulary — early exit

- **`if (!value) { … return }`** — **`return`** stops **`addItem`** immediately when the input is empty.

### Vocabulary — persistence

- **`localStorage`** — stores **strings** in the browser for this origin.
- **`JSON.stringify(items)`** / **`JSON.parse(...)`** — array ↔ string.

### Vocabulary — waiting for the DOM

- **`document.addEventListener("DOMContentLoaded", loadItems)`** — run **`loadItems`** once the HTML is parsed so **`getElementById`** succeeds.

### What this file does (short map)

| Function        | Role                                      |
|----------------|-------------------------------------------|
| **`renderItems`** | Clear **`#items`**, draw every todo row   |
| **`loadItems`**   | Read **`localStorage`**, then render      |
| **`saveItems`**   | Write **`items`** as JSON to storage      |
| **`addItem`**     | Validate, push, render, clear input, save |
| **`removeItem`**  | **`splice`** one index, render, save        |

---

### Current file: `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO List</title>
</head>

<body>
    <h1>TODO List</h1>
    <h2>Items</h2>
    <div id ="items"></div>
    <input id ="itemInput" type="text" placeholder="add a new item"/>
    <button onclick="addItem()">Add</button>
    <script src="index.js"></script>
</body>

</html>
```

### Current file: `index.js`

```js
let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items"


function renderItems(){
    itemsDiv.innerHTML = null;


    
    for(const [idx, item] of Object.entries(items)){

        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display ="inline"
        text.style.margin = "10px"
        text.textContent = item;

        const button =document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(Number(idx))

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }

}


function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
}


function addItem() {
    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)
```
