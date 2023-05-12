// debugger

let body = document.querySelector("body");
let container = document.querySelector("#container");

// for(i=0; i<16; i++){
//     let div = document.createElement("div");
//     div.setAttribute('class', 'grid');
//     container.appendChild(div);
// }
    //creates divs in a single row

for(rowNum=0; rowNum<16; rowNum++){
    let row = document.createElement("div");
    row.setAttribute('class', 'row');
    container.appendChild(row);
    for(colNum=0; colNum<16; colNum++){
        let col = document.createElement("div");
        col.setAttribute('class', 'col');
        row.appendChild(col);

        col.addEventListener("mouseover", divColor) //changes color of all matches
    }
}
    //creates rows and columns

function divColor(){
    this.style.backgroundColor = "black";
}
    //change an individual divs bg color



