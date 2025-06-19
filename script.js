const container = document.querySelector('#container')
const button = document.querySelector('#button')

let gridSize = 16

container.addEventListener('mouseover', (event) => {
    if (event.target.classList == 'pixel') paintPixel(event.target)
})

button.addEventListener('click', () => {
    gridSize = getGridSizeFormUser()
    createGrid()
})

function getGridSizeFormUser() {
    let newGridSize
    do {
        newGridSize = prompt('Choose a new grid size from 8 to 100')
    } while (isNaN(newGridSize) || newGridSize < 8 || newGridSize > 100)
    return newGridSize
}

function createGrid() {
    container.replaceChildren()
    const pixelSize = container.offsetWidth / gridSize
    const pixelCount = gridSize ** 2
    for (let i = 0; i < pixelCount; i++) {
        const pixel = document.createElement('div')
        pixel.style.width = pixelSize + 'px'
        pixel.classList.add('pixel')
        container.appendChild(pixel)
    }
}

function paintPixel(pixel) {
    pixel.style.backgroundColor = getRandomColor()
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return `rgb(${r}, ${g}, ${b})`;
}

createGrid()