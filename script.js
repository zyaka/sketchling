let container = document.getElementById("container");
const makeCells = (number) => {
    console.log(number);
    container.innerHTML = '';
    for (let i = 0; i < number; i++) {
        console.log("i", i);

        for (let j = 0; j < number; j++) {
            console.log("j", j);
            const cell = document.createElement("div");
            cell.classList.add("cell-in-grid");
            cell.textContent = "";
            container.appendChild(cell);
        }
        // const cell = document.createElement("div");
        //cell.classList.add("cell-in-grid");
        //cell.textContent = "";
        //container.appendChild(cell);

    }
}
let gridSize = 2;

makeCells(gridSize);

const colorCell = (e) => {
    e.target.style.backgroundColor = 'purple';
}


const hoveredCell = document.querySelectorAll(".cell-in-grid");
hoveredCell.forEach(cell => {
    cell.addEventListener("mouseover", colorCell);
});

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
    // container.remove();
    // let container = document.createElement("div");
    makeCells(gridSize);
    // console.log(gridSize);

};

const clearButton = document.querySelector("button");
clearButton.addEventListener("click", clearGrid);