# Notes — Stop watch (`pj4`)

**Open the `pj4` folder** (*File → Open Folder…* → `mini-js/pj4`) when you work here.

Preview **`index.html`** with Live Server or from disk.

No CSS file — layout is browser defaults.

---

## `index.html` (explained)

### Buttons and the clock

- **`id="time"`** — the big clock readout; **`index.js`** updates this element every second.
- **`onclick="startClock()"`** (and Stop / Reset) — each calls a **global function** of the same name in **`index.js`**.

### Script order

- **`<script src="index.js"></script>`** at the **end** of **`<body>`** — ensures **`#time`** exists before the script runs.

---

## `index.js` (explained)

### Vocabulary — `let` vs `const`

- **`let secondsElasped = 0`** — **`let`** = “this variable **may** be reassigned” (here: **`++`** every tick, reset to **0** on reset). **`const`** would **not** allow that.

  *(Name is spelled **“Elasped”** instead of “Elapsed” — harmless for running, easy to mistype later.)*

- **`let interval = null`** — holds the **timer id** from **`setInterval`**, or **`null`** when no timer is running. **`null`** means “no value.”

- **`const time = document.getElementById("time")`** — **`const`** is OK because **`time`** always points at the **same** DOM node; you only change **properties** like **`.innerHTML`**, not **`time`** itself.

### Vocabulary — functions that return vs side effects

- **`function padStart(value) { return … }`** — **`return`** sends a value back to the caller.
- **`String(value).padStart(2, "0")`** — number → string, pad on the left to length **2**.

- **`function setTime() { … }`** — no **`return`**; it **updates the page** by assigning **`time.innerHTML`**.

### Vocabulary — math on the clock

- **`Math.floor(x)`** — round **down** to an integer.
- **`%`** — remainder (**65 % 60** → **5** seconds).

### Vocabulary — timers

- **`setInterval(fn, ms)`** — call **`fn`** about every **`ms`** milliseconds. Returns an **id**.
- **`clearInterval(interval)`** — stop that repeating timer.

### What this file does (flow)

1. **`secondsElasped`** — total whole seconds counted.
2. **`setTime()`** — minutes + seconds → **`MM:SS`** on **`#time`**.
3. **`timer()`** — add one second, refresh display (**`setInterval`** calls this).
4. **`startClock()`** — if already running, **`stopClock()`** first; then **`setInterval(timer, 1000)`**.
5. **`stopClock()`** — **`clearInterval(interval)`** (optional: set **`interval = null`** after).
6. **`resetClock()`** — stop, set count to **0**, **`setTime()`** again.

**Optional polish:** use **`textContent`** instead of **`innerHTML`** for the clock (digits are plain text, not HTML).

---

### Current file: `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stop Watch</title>
</head>

<body>
    <h3>Stop Watch</h3>
    <h1 id="time">00:00</h1>
    <button onclick="startClock()">Start</button>
    <button onclick="stopClock()">Stop</button>
    <button onclick="resetClock()">Reset</button>
    <script src="index.js"></script>
</body>

</html>
```

### Current file: `index.js`

```js
let secondsElasped = 0;

let interval = null;

const time = document.getElementById("time")


function padStart(value){
    return String(value).padStart(2, "0")
}

function setTime(){
    const minutes = Math.floor(secondsElasped / 60);
    const seconds = secondsElasped % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer(){

    secondsElasped++;
    setTime()
}
function startClock(){
    if (interval) stopClock()

    interval = setInterval(timer, 1000)
}

function stopClock(){
    clearInterval(interval)

}

function resetClock(){
    stopClock()
    secondsElasped = 0;
    setTime()

}
```
