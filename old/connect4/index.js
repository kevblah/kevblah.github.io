// Declare Variables
let redPlayerTurn;
let redTurnDisplay = document.querySelector('.red-turn')
let yellowTurnDisplay = document.querySelector('.yellow-turn')
let playAgain = document.querySelector('.play-again')
let titleText = document.getElementById('title-text')

// Renders the dropper controls and game board
function render() {
    let controlHTML = "";
    let gameHTML = "";

    for (let i = 1; i <= 7; i++) {
        controlHTML += `<div class="dropper" col=${i}></div> `
    }
    const controls = document.querySelector('.controls')
    controls.innerHTML = controlHTML

    for (let i = 6; i >= 1; i--) {
        for (let j = 1; j <= 7; j++) {
            gameHTML += `<div class="slot row${i} col${j}" row=${i} col=${j} id="row${i}col${j}" value="none"></div> `
        }
    }
    const gameContainer = document.querySelector('.game-container')
    gameContainer.innerHTML = gameHTML
    redPlayerTurn = true
    redTurnDisplay.style.opacity = 1;
    yellowTurnDisplay.style.opacity = 0;
    playAgain.style.opacity = 0;

    const droppers = document.querySelectorAll('.dropper')
    for (const dropper of droppers) {
        dropper.addEventListener('click', (e) => {
            let col = e.target.getAttribute("col")
            handleDrop(col)
            getWinner()
        })
    }

    playAgain.addEventListener('click', () => {
        render()
    })
}

render()

// Declare functions to drop game piece and set color

function handleDrop(col) {
    for (let i = 1; i <= 7; i++) {
        let slot = document.getElementById(`row${i}col${col}`)
        let value = slot.getAttribute("value")
        if (value == "none") {
            setColor(slot)
            return
        }
    }
}

function setColor(slot) {
    let color;
    if (redPlayerTurn == true) {
        color = 'red'
        redTurnDisplay.style.opacity = 0;
        yellowTurnDisplay.style.opacity = 1;
    } else {
        color = 'yellow'
        redTurnDisplay.style.opacity = 1;
        yellowTurnDisplay.style.opacity = 0;
    }
    slot.style.backgroundColor = color
    slot.setAttribute("value", color)
    redPlayerTurn = !redPlayerTurn
}

// Declare functions to check win and no win conditions

function getWinner() {
    let slots = document.getElementsByClassName('slot')
    for (const slot of slots) {
        let value = slot.getAttribute("value")
        let row = slot.getAttribute("row")
        let col = slot.getAttribute("col")
        if (value != "none"){
            checkVertical(value, row, col)
            checkHorizontal(value, row, col)
            checkNE(value, row, col)
            checkNW(value, row, col)
        }
    }
    checkNoWinner()
}

function checkNoWinner() {
    const topRow = document.getElementsByClassName('row6')
    let activeCounter = 0;
    for (const slot of topRow) {
        let value = slot.getAttribute("value")
        if (value != "none") {
            activeCounter++
        }
    }
    if (activeCounter >= 7) {
        redTurnDisplay.style.opacity = 0;
        yellowTurnDisplay.style.opacity = 0;
        playAgain.style.opacity = 1;
        setTimeout(() => {
            alert('Game Over! No Winner!')
        }, 50)
    }
}

function checkVertical(value, row, col) {
    let oneAbove = document.getElementById(`row${parseInt(row) + 1}col${col}`)
    let twoAbove = document.getElementById(`row${parseInt(row) + 2}col${col}`)
    let threeAbove = document.getElementById(`row${parseInt(row) + 3}col${col}`)

    if (!oneAbove || !twoAbove || !threeAbove) {
        return 
    } else {
        let oneAboveValue = oneAbove.getAttribute("value")
        let twoAboveValue = twoAbove.getAttribute("value")
        let threeAboveValue = threeAbove.getAttribute("value")
        if(value === oneAboveValue && value == twoAboveValue && value == threeAboveValue) {
            redTurnDisplay.style.opacity = 0;
            yellowTurnDisplay.style.opacity = 0;
            playAgain.style.opacity = 1;
            
            setTimeout(() => {
                alert(`${value.toUpperCase()} WINS!`)
            }, 50)
        } 
    }
}

function checkHorizontal(value, row, col) {
    let oneOver = document.getElementById(`row${row}col${parseInt(col) + 1}`)
    let twoOver = document.getElementById(`row${row}col${parseInt(col) + 2}`)
    let threeOver = document.getElementById(`row${row}col${parseInt(col) + 3}`)

    if (!oneOver || !twoOver || !threeOver) {
        return 
    } else {
        let oneOverValue = oneOver.getAttribute("value")
        let twoOverValue = twoOver.getAttribute("value")
        let threeOverValue = threeOver.getAttribute("value")
        if(value === oneOverValue && value == twoOverValue && value == threeOverValue) {
            redTurnDisplay.style.opacity = 0;
            yellowTurnDisplay.style.opacity = 0;
            playAgain.style.opacity = 1;
            setTimeout(() => {
                alert(`${value.toUpperCase()} WINS!`)
            }, 50)
        } 
    }
}

function checkNE(value, row, col) {
    let oneNE = document.getElementById(`row${parseInt(row) + 1}col${parseInt(col) + 1}`)
    let twoNE = document.getElementById(`row${parseInt(row) + 2}col${parseInt(col) + 2}`)
    let threeNE = document.getElementById(`row${parseInt(row) + 3}col${parseInt(col) + 3}`)

    if (!oneNE || !twoNE || !threeNE) {
        return 
    } else {
        let oneNEValue = oneNE.getAttribute("value")
        let twoNEValue = twoNE.getAttribute("value")
        let threeNEValue = threeNE.getAttribute("value")
        if(value === oneNEValue && value == twoNEValue && value == threeNEValue) {
            redTurnDisplay.style.opacity = 0;
            yellowTurnDisplay.style.opacity = 0;
            playAgain.style.opacity = 1;
            setTimeout(() => {
                alert(`${value.toUpperCase()} WINS!`)
            }, 50)
        } 
    } 
}

function checkNW(value, row, col) {
    let oneNW = document.getElementById(`row${parseInt(row) + 1}col${parseInt(col) - 1}`)
    let twoNW = document.getElementById(`row${parseInt(row) + 2}col${parseInt(col) - 2}`)
    let threeNW = document.getElementById(`row${parseInt(row) + 3}col${parseInt(col) - 3}`)

    if (!oneNW || !twoNW || !threeNW) {
        return 
    } else {
        let oneNWValue = oneNW.getAttribute("value")
        let twoNWValue = twoNW.getAttribute("value")
        let threeNWValue = threeNW.getAttribute("value")
        if(value === oneNWValue && value == twoNWValue && value == threeNWValue) {
            redTurnDisplay.style.opacity = 0;
            yellowTurnDisplay.style.opacity = 0;
            playAgain.style.opacity = 1;
            setTimeout(() => {
                alert(`${value.toUpperCase()} WINS!`)
            }, 50)
        } 
    } 
}