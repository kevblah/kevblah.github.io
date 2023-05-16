// Initializing Variables
let buttonContainerHTML = '';
let displayText = '';
let evalResult = '';
const buttonDisplay = ['7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3','-', '0', '.', '+', '=']


// Create buttons using HTML injection
for (let i = 0; i < 16; i++) {
    buttonContainerHTML += `<button class="button" id=${i} value="${buttonDisplay[i]}">${buttonDisplay[i]}</button> `
}
const buttonContainer = document.querySelector('.button-container')
buttonContainer.innerHTML = buttonContainerHTML


// Add an event listener to GA logo to reset the calculator
const reset = document.getElementById("logo")
reset.addEventListener('click', () => {
    resetDisplay()
})


// Add event listeners to all calculator buttons
const buttons = document.querySelectorAll('.button')

for (const button of buttons) {
    let id = button.getAttribute("id")
    let value = button.getAttribute("value")

    if (id == 7) {
        button.addEventListener('click', () => {
            displayText += '*'
            renderDisplay()
        })
    } else if (id == 15) {
        button.addEventListener('click', () => {
            evalString()
        })
    } else {
        button.addEventListener('click', () => {
            displayText += value
            renderDisplay()
        })
    }
}

// Create function to reset displayText variable, set display text to 0.
function resetDisplay() {
    displayText = ''
    let display = document.getElementById("text")
    display.innerText = 0;
}

//Create function to update display to match displayText variable
function renderDisplay() {
    let display = document.getElementById("text")
    display.innerText = displayText;
}

// Create function to run eval on the displayText string 
function evalString() {
    try {
        evalResult = eval(displayText).toString()
        if (evalResult.length > 9) {
            evalResult = evalResult.substring(0, 9)
        }
        displayText = evalResult
        renderDisplay()
    } catch(err) {
        alert('Invalid operation. Please try again.')
    }
}

// Add functionality to use keyboard key presses to make calculator inputs
const keyValues = {
    slash: '/',
    keyx: '*',
    minus: '-',
    period: '.',
}

document.addEventListener('keydown', (event) => {
    var code = event.code
    let lowerCode = code.toLowerCase()

    if (code.includes("Digit")) {
        let digit = code[5]
        displayText += digit
        renderDisplay()
    } else if (code === 'Enter') {
        evalString()
    } else if (code === 'Equal') {
        if (event.shiftKey) {
            displayText += "+"
            renderDisplay()
        } else {
            evalString()
        }
    } else if (code === 'Backspace') {
        displayText = displayText.slice(0, -1)
        renderDisplay()
    } else if (Object.keys(keyValues).includes(lowerCode)){
        displayText += keyValues[lowerCode]
        renderDisplay()
    }
})