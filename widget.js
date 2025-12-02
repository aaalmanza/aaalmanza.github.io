let num1 = 8
let num2 = 2
const num1El = document.getElementById("num1-el")
const num2El = document.getElementById("num2-el")
if (num1El) num1El.textContent = num1
if (num2El) num2El.textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")

// ensure sumEl exists
if (!sumEl) {
    console.warn("#sum-el not found in DOM")
}

// Make the calculator "useless": apply a random integer offset between -17 and +17
function randomOffset() {
    // returns an integer in [-17, 17]
    return Math.floor(Math.random() * 35) - 17
}

function applyUselessness(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) return value
    const offset = randomOffset()
    return value + offset
}

function getNums() {
    const v1 = document.getElementById("num1-input").value
    const v2 = document.getElementById("num2-input").value

    if (v1.trim() === "" || v2.trim() === "") {
        sumEl.textContent = "Please enter both numbers."
        return null
    }

    const n1 = parseFloat(v1)
    const n2 = parseFloat(v2)

    if (isNaN(n1) || isNaN(n2)) {
        sumEl.textContent = "Please enter valid numbers."
        return null
    }

    return { n1, n2 }
}

function add() {
     const nums = getNums()
    if (!nums) return
    const result = nums.n1 + nums.n2
    sumEl.textContent = "Result: " + applyUselessness(result)
}

function subtract() {
       const nums = getNums()
    if (!nums) return
    const result = nums.n1 - nums.n2
    sumEl.textContent = "Result: " + applyUselessness(result)
}

function multiply() {
    const nums = getNums()
    if (!nums) return
    const result = nums.n1 * nums.n2
    sumEl.textContent = "Result: " + applyUselessness(result)
}

function divide() {
    const nums = getNums()
    if (!nums) return
    const result = nums.n1 / nums.n2
    sumEl.textContent = "Result: " + applyUselessness(result)
}

function calculate() {
    const nums = getNums()
    if (!nums) return
    const opEl = document.getElementById("op-select")
    const op = opEl ? opEl.value : 'add'
    let result
    switch (op) {
        case 'add':
            result = nums.n1 + nums.n2
            break
        case 'subtract':
            result = nums.n1 - nums.n2
            break
        case 'multiply':
            result = nums.n1 * nums.n2
            break
        case 'divide':
            result = nums.n1 / nums.n2
            break
        default:
            sumEl.textContent = 'Unknown operation.'
            return
    }
    sumEl.textContent = "Result: " + applyUselessness(result)
}

