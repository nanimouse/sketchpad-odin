// debugger

let body = document.querySelector("body");
let container = document.querySelector("#container");
// let num = document.getElementById("gridSize");

for(rowNum=0; rowNum<16; rowNum++){
    let row = document.createElement("div");
    row.setAttribute('class', 'row');
    container.appendChild(row);
    for(colNum=0; colNum<16; colNum++){
        let box = document.createElement("div");
        box.setAttribute('class', 'box');
        row.appendChild(box);

        box.addEventListener("mouseover", divColor) //changes color of all matches
    }
}
    //creates rows and columns

function divColor(){
    let color = document.getElementById("colorPicker").value;
    this.style.backgroundColor = color;
}
    //change an individual divs bg color

const resetGrid = () => {
    let squares = container.querySelectorAll(".box");
    squares.forEach(square => {
        square.style.backgroundColor = "#fff";
    })
}




// const changeGrid = num => {
