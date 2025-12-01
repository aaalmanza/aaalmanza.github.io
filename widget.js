let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")

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
    sumEl.textContent = "Sum: " + result
}

function subtract() {
       const nums = getNums()
    if (!nums) return
    const result = nums.n1 - nums.n2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    const nums = getNums()
    if (!nums) return
    const result = nums.n1 * nums.n2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    const nums = getNums()
    if (!nums) return
    const result = nums.n1 / nums.n2
    sumEl.textContent = "Sum: " + result
}

