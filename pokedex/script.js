const explorePage = document.querySelector('.explore-page')
const profilePage = document.querySelector('.profile-page')
const inputfield = document.getElementById('search')
const profileGrids = document.querySelectorAll('.profile-grid-div')
const profileSearchButton = document.getElementById('profile-bottom-search-button')
const profilePicture = document.querySelector('.profile-picture')
const profileTopName = document.querySelector('.profile-top-name')
const profileBottomName = document.querySelector('.profile-bottom-name')
const profileDescription = document.querySelector('.profile-description')
const exploreGridDivs = document.querySelectorAll('.explore-grid-div')

async function getDogPic() {
    for (const grid of exploreGridDivs) {
        let dog = await axios.get('https://dog.ceo/api/breeds/image/random')
        let image = dog.data.message
        // grid.innerHTML = `<img src=${image}/>`
        grid.style.backgroundImage = `url(${image})`
    }
}

getDogPic()

inputfield.addEventListener("keydown", async function(e) {
    if (e.key === "Enter") {
        let searchValue = inputfield.value.toLowerCase()
        renderProfile(searchValue)
        inputfield.value = ''
    }
})

profileSearchButton.addEventListener('click', () => {
    profilePage.style.display = "none";
    explorePage.style.display = "block";
})

async function renderProfile(pokemon) {
    const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const pokemonData2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)

    let string = pokemonData2.data.flavor_text_entries['0'].flavor_text
    let sanitizedString = string.replace(/[\r\n]/gm, ' ')

    let spritesObj = pokemonData.data.sprites
    let spritesArr = Object.values(spritesObj)
    let images = [];

    profileTopName.innerText = pokemonData.data.name
    profileBottomName.innerText = pokemonData.data.name
    profileDescription.innerText = sanitizedString
    profilePicture.innerHTML = `<img src="${spritesObj.front_default}")/>`

    for (let i = 0; i< spritesArr.length; i++) {
        if (spritesArr[i]) {
            let str = spritesArr[i].toString()
            if (str.includes("http")) {
                images.push(spritesArr[i])
            }
        }
    }

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length)
        const image = images[randomIndex]
        return image;
    }

    function getRandomBackground() {
        const backgrounds = [
            './images/bgs/1.png',
            './images/bgs/2.png',
            './images/bgs/3.webp',
            './images/bgs/4.webp',
            './images/bgs/5.jpeg',
            './images/bgs/6.jpeg'
        ]
        const randomIndex = Math.floor(Math.random() * backgrounds.length)
        const bg = backgrounds[randomIndex]
        return bg;
    }
    
    profileGrids.forEach((grid) => {
        grid.innerHTML = `<img src="${getRandomImage()}"/>`
        grid.style.backgroundImage = `url(${getRandomBackground()})`
    })

    setTimeout(() => {
        explorePage.style.display = "none";
        profilePage.style.display = 'block';
    }, 10)
}