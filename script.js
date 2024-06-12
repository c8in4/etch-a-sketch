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
        if (gridSize === 0) { gridSize = 16 };
    } while (isNaN(gridSize) || gridSize < 16 || gridSize > 100);
}

function createGrid(size) {
    const pixelHeight = (container.offsetHeight / size);
    const pixelWidth = (container.offsetWidth / size);

    for (let i = 1; i <= (size * size); i++) {
        const pixel = document.createElement("div");
        pixel.style.outline = "0.1px solid lightgrey";
        pixel.style.height = `${pixelHeight}px`;
        pixel.style.width = `${pixelWidth}px`;
        pixel.style.backgroundColor = "black";

        let opacity = 0;
        pixel.style.opacity = opacity;
        pixel.addEventListener("mouseover", (e) => {
            opacity += 0.1;
            pixel.style.opacity = opacity;
        });

        container.appendChild(pixel);
    }
};