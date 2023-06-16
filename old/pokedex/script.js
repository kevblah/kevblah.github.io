const $explorePage = $('.explore-page')
const $inputfield = $('#search')
const $exploreGrid = $('.explore-grid')
const $exploreGridDivs = $('.explore-grid-div')
const $profilePage = $('.profile-page')
const $profileTopName = $('.profile-top-name')
const $profilePicture = $('.profile-picture')
const $profileBottomName = $('.profile-bottom-name')
const $profileDescription = $('.profile-description')
const $profileGrids = $('.profile-grid-div')
const $profileSearchButton = $('#profile-bottom-search-button')

// Fill the grids on the explore page with random dog pictures
$exploreGridDivs.each(async function() {
    let dog = await axios.get('https://dog.ceo/api/breeds/image/random')
    let image = dog.data.message
    $(this).css('background-image', `url(${image})`)
})

// Call the renderProfile() function once enter is pressed within input
$inputfield.on("keydown", async function(e) {
    if (e.key === "Enter") {
        let searchValue = $inputfield.prop("value").toLowerCase()
        renderProfile(searchValue)
        $inputfield.prop("value", '')
    }
})

// Toggle display on/off for the explore/profile pages
$profileSearchButton.on('click', () => {
    $profilePage.css('display', 'none')
    $explorePage.css('display', 'block')
})

// Render the profile page, populate with data and images
async function renderProfile(pokemon) {
    const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const pokemonData2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
    
    // Logic to create an array of random sprite url's
    let spritesObj = pokemonData.data.sprites
    let spritesArr = Object.values(spritesObj)
    let images = [];
    for (let i = 0; i< spritesArr.length; i++) {
        if (spritesArr[i]) {
            let str = spritesArr[i].toString()
            if (str.includes("http")) {
                images.push(spritesArr[i])
            }
        }
    }

    // assign pokemon name, description, profile pic
    $profileTopName.text(pokemonData.data.name)
    $profilePicture.html(`<img src="${spritesObj.front_default}")/>`)
    $profileBottomName.text(pokemonData.data.name)
    let string = pokemonData2.data.flavor_text_entries['0'].flavor_text
    let sanitizedString = string.replace(/[\r\n]/gm, ' ')
    $profileDescription.text(sanitizedString)

    // generate a random sprite and background for each grid
    $profileGrids.each(function() {
        $(this).html(`<img src="${getRandomImage()}"/>`)
        $(this).css('background-image', `url(${getRandomBackground()})`)
    })

    // Toggle the display for explore/profile pages
    $explorePage.css('display', 'none')
    $profilePage.css('display', 'block')

    // function to get a random pokemon image
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length)
        const image = images[randomIndex]
        return image;
    }

    // function to get a random background image
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
}