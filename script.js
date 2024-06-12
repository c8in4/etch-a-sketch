let gridSize = 16;

const container = document.querySelector("#container");
const button = document.querySelector("#button");

button.addEventListener("click", clearGrid);

createGrid(gridSize);

function clearGrid() {
    container.replaceChildren();
    getGridSize();
    createGrid(gridSize);
}

function getGridSize() {

    // TODO: make sure to accept numbers only
    do {
        gridSize = +prompt("Enter a number from 16 to 100.");
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
        pixel.style.height = `${pixelHeight}px`;
        pixel.style.width = `${pixelWidth}px`;
        pixel.addEventListener("mouseover", colorPixel);
        container.appendChild(pixel);
    }
};

function colorPixel(e) {
    e.stopPropagation();
    const pixel = e.target;
    pixel.style.backgroundColor = "green";
}