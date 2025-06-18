const container = document.querySelector('#container')

let standardGridSize = 16

function createGrid(gridSize = standardGridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
        const pixel = document.createElement('div')
        pixel.style.width = container.offsetWidth / gridSize + 'px'
        pixel.classList.add('pixel')
        container.appendChild(pixel)
    }
}

container.addEventListener('mouseover', (event) => {
    if (event.target.classList == 'pixel') paintPixel(event.target)
})

function paintPixel(pixel) {
    pixel.style.backgroundColor = 'black'
}

createGrid()