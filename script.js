const container = document.querySelector("#container");
const button = document.querySelector("#button");
button.addEventListener("click", clearGrid);

let gridSize = 16;

createGrid(gridSize);

function clearGrid() {
    container.replaceChildren();
    getGridSize();
    createGrid(gridSize);
}

function getGridSize() {
    do {
        gridSize = +prompt("Enter a grid size from 16 to 100.");
        if (gridSize === 0) {gridSize = 16};
    } while (isNaN(gridSize)
        || (gridSize < 16
        || gridSize > 100)
    );
}

function createGrid(size) {
    const pixelHeight = (container.offsetHeight / size);
    const pixelWidth = (container.offsetWidth / size);

    for (let i = 1; i <= (size * size); i++) {
        const pixel = document.createElement("div");
        pixel.style.outline = "0.1px solid lightgrey";
        pixel.style.height = `${pixelHeight}px`;
        pixel.style.width = `${pixelWidth}px`;
        pixel.addEventListener("mouseover", colorPixel);
        container.appendChild(pixel);
    }
};

function colorPixel(e) {
    e.stopPropagation();
    const pixel = e.target;
    pixel.style.backgroundColor = `${randomColor()}`;
}

function randomColor() {
    return `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`
}

function getRandomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
}