const container = document.querySelector("#container");

let gridSize = 64;

createGrid(gridSize);

function createGrid(size) {
    const pixelHeight = (container.offsetHeight / size);
    const pixelWidth = (container.offsetWidth / size);

    for (let i = 1; i <= (size * size); i++) {
        const pixel = document.createElement("div");
        pixel.style.height = `${pixelHeight}px`;
        pixel.style.width = `${pixelWidth}px`;
        pixel.addEventListener("mouseover", colorPixel );
        container.appendChild(pixel);
    }
};

function colorPixel(e) {
    e.stopPropagation();
    const pixel = e.target;
    pixel.style.backgroundColor = "green";
    console.log(e.target);
}