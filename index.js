const home = document.getElementById("btn-home");
const connect4 = document.getElementById("btn-connect4")
const calculator = document.getElementById("btn-calculator")
const pokedex = document.getElementById("btn-pokedex")
const iframe = document.getElementById("iframe")

home.addEventListener('click', () => {
    iframe.setAttribute("src", "")
})

connect4.addEventListener('click', () => {
    iframe.setAttribute("src", "./connect4.html")
})

calculator.addEventListener('click', () => {
    iframe.setAttribute("src", "./calculator.html")
})

pokedex.addEventListener('click', () => {
    iframe.setAttribute("src", "./pokedex.html")
})