// Declare document elements to variable names
const photo = document.getElementById('mainphoto')
const likes = document.getElementById('likes-display')
const topName = document.getElementById('top-name')
const bottomName = document.getElementById('bottom-name')
const captionContent = document.getElementById('caption-content')
const topCircle = document.getElementById('top-circle')
const bottomCircle = document.getElementById('bottom-circle')


// Add event listener for the input field

const inputfield = document.querySelector('input')

inputfield.addEventListener("keydown", async function(e) {
    if (e.key === "Enter") {
        let searchValue = inputfield.value.toLowerCase()
        let pokemon = await fetchPokemon(searchValue)
        renderProfile(pokemon)
    }
})

async function fetchPokemon(name) {
    return await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
}

function renderProfile(pokemon) {
    // destructure pokemon data, set photo
    const {name, sprites, abilities, types} = pokemon.data
    photo.setAttribute("src", sprites.front_default)

    // generate a random number of likes
    const likesNumber = Math.floor(Math.random() * 1000)
    likes.textContent = `${likesNumber} likes`

    // set the name at the top and bottom of page
    topName.innerText = name
    bottomName.textContent = name

    // generate the caption with ability names
    let caption = ''
    caption += `#${types[0].type.name} `
    for (const ability of abilities) {
        caption += `#${ability.ability.name} `
    }
    captionContent.innerText = caption

    // set the profile pictures
    console.log(sprites.back_default)
    topCircle.style.backgroundImage = `url(${sprites.back_default})`
    bottomCircle.style.backgroundImage = `url(${sprites.back_default})`

    console.log(pokemon.data)
}