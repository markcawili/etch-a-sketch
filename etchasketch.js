const div = document.querySelector('.container');
const squareNum = 0;

for (let i = 0; i <= 271; i++) {
    const grid = document.createElement("div");
    grid.id = "grid";
    div.appendChild(grid);
    grid.addEventListener("mouseover", hover);
}

function hover(event) {
    event.target.style.backgroundColor = "tomato";
}

function squares() {
    let response = parseInt(prompt("How many squares per side do you want?"));

    if(isNaN(response)) {
        window.alert("Please enter a number");
        squares();
    } else if (response > 100) {
        window.alert("Please input a number less than 100")
        squares();
    }

    newGrid(response);
}

function newGrid(num) {
    let numSquares = (num * num);

    for (let i = 1; i <= numSquares; i++) {
        const grid = document.createElement("div");
        div.appendChild(grid);
        grid.className = "gridSquare";
        let height = 960 / parseInt(num);
        let width = 960 / parseInt(num);
        grid.style.height = `${height}px`;
        grid.style.width = `${width}px`;

        grid.addEventListener("mouseover", hover);
    }

}

function clearBox() {
    document.querySelector('.container').innerHTML = "";
}