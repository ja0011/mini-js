# Notes — TODO list (`pj5`)

**Open the `pj5` folder** (*File → Open Folder…* → `mini-js/pj5`) when you work here. Preview **`index.html`** with Live Server or from disk.

`index.html` loads **`index.js`** from the same folder (`pj5/index.js`).

---

## `index.html` (explained)

- **`<div id="items">`:** empty at first; JavaScript fills it with one row per todo (each row is a small **`div`** with text + Delete).
- **`<input id="itemInput">`:** where the user types a new item; **`addItem()`** reads **`input.value`**.
- **`<button onclick="addItem()">Add</button>`:** runs **`addItem()`** from `index.js`.
- **`<script src="index.js"></script>`** at the end of `<body>` so **`#items`** and **`#itemInput`** exist before the script runs.

Current file:

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

---

## `index.js` (explained)

- **`items`:** array of todo strings; starts **`[]`** and is repopulated from **`localStorage`** on load.
- **`itemsDiv` / `input`:** references to **`#items`** and **`#itemInput`**.
- **`storageKey`:** name under which the list is saved in **`localStorage`** (`"items"`).
- **`renderItems()`:** clears **`itemsDiv`**, loops **`Object.entries(items)`**, and for each entry builds a **`div`** containing a **`p`** (the text) and a **Delete** button whose **`onclick`** should call **`removeItem(idx)`** with that row’s index.
- **`loadItems()`:** reads **`localStorage.getItem(storageKey)`**; if present, **`JSON.parse`** into **`items`**, then **`renderItems()`**. Registered on **`DOMContentLoaded`** at the bottom so the DOM is ready before **`getElementById`** runs.
- **`saveItems()`:** **`JSON.stringify(items)`** and **`localStorage.setItem`** so changes survive refresh.
- **`addItem()`:** trims empty adds with **`alert`**; otherwise **`push`**es the string, **`renderItems()`**, clears the input, **`saveItems()`**.
- **`removeItem(idx)`:** **`splice(idx, 1)`** removes one element at that index, then re-renders and saves.

**Syntax issue in the current file (line 25):**  
`button.onclick = () => removeItem(idx) ()` has an **extra `()`** at the end, which is invalid JavaScript and will stop the whole script from loading. It should be something like **`button.onclick = () => removeItem(Number(idx))`** (because **`Object.entries`** gives string keys **`"0"`**, **`"1"`**, and **`splice`** expects a number).

Current file:

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
        button.onclick = () =>removeItem(idx)  ()

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
