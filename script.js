let container = document.getElementById("container");
const makeCells = (number) => {
    console.log(number);
    container.innerHTML = '';
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell-in-grid");
            cell.textContent = "";
            container.appendChild(cell);
        }

    }
}
const hoverFunction = () => {
    const hoveredCell = document.querySelectorAll(".cell-in-grid");
    hoveredCell.forEach(cell => {
        cell.addEventListener("mouseover", colorCell);
    });
};
const colorCell = (e) => {
    e.target.style.backgroundColor = 'purple';
}

let gridSize = 10;
makeCells(gridSize);
hoverFunction();

const clearGrid = () => {
    const allCells = document.querySelectorAll(".cell-in-grid");
    allCells.forEach(cell => {
        cell.style.backgroundColor = "white";
    })
    const setGridHeight = prompt("Number of squares per side of grid?", "");
    console.log(setGridHeight);
    if (setGridHeight <= 100) {
        gridSize = setGridHeight;
    }

    makeCells(gridSize);
    hoverFunction();

};

const clearButton = document.querySelector("button");
clearButton.addEventListener("click", clearGrid);