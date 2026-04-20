# Notes — Stop watch (`pj4`)

**Open the `pj4` folder** (*File → Open Folder…* → `mini-js/pj4`) when you work here. Preview **`index.html`** with Live Server or from disk.

No CSS file; layout and styling are browser defaults.

## `index.html` (explained)

- **`<title>`:** browser tab text (“Stop Watch”).
- **`<h3>` / `<h1>`:** subtitle and large time readout.
- **`<h1 id="time">00:00</h1>`:** starting display; **`id="time"`** is what `index.js` updates every second.
- **Three buttons:** **`onclick`** calls **`startClock()`**, **`stopClock()`**, and **`resetClock()`** from `index.js`.
- **`<script src="index.js"></script>`** at the end of `<body>` so the `#time` element exists before the script runs.

Current file:

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

## `index.js` (explained)

- **`secondsElasped`:** total whole seconds counted (name is spelled **“Elasped”** instead of “Elapsed” — harmless for running, but easy to mistype later).
- **`interval`:** holds the timer id returned by **`setInterval`**, or **`null`** before the first start.
- **`time`:** reference to the DOM node **`#time`**.
- **`padStart(value)`:** turns a number into a string and pads with **`"0"`** on the left to length **2** (via **`String.prototype.padStart`**) so minutes/seconds show as **`01`**, **`09`**, etc.
- **`setTime()`:** converts **`secondsElasped`** into **`minutes`** (`Math.floor(seconds / 60)`) and **`seconds`** (`% 60`), then sets **`time.innerHTML`** to **`MM:SS`**.
- **`timer()`:** increments **`secondsElasped`** by 1 and calls **`setTime()`** — this is the function **`setInterval`** runs every second.
- **`startClock()`:** if an interval is already running, calls **`stopClock()`** first; then **`setInterval(timer, 1000)`** runs **`timer`** about once per second (1000 ms).
- **`stopClock()`:** **`clearInterval(interval)`** stops the ticking (does not set **`interval = null`** here; the variable may still hold the old id, which is usually fine after **`clearInterval`**).
- **`resetClock()`:** stops the clock, sets **`secondsElasped`** back to **0**, and refreshes the display with **`setTime()`**.

Current file:

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

**Optional polish:** after **`clearInterval`**, set **`interval = null`** so “is the timer running?” stays clear; use **`textContent`** instead of **`innerHTML`** for the clock digits (no HTML inside the time string).
