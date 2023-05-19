// debugger

let container = document.querySelector("#container");
let colorPicker = document.getElementById("colorPicker");
let click = true;
// let num = document.getElementById("gridSize");

function gameboard(num) {

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    if(num<2 || num>100){
        alert("please choose number between 2-100");
    } else {

    for(rowNum=0; rowNum<num*num; rowNum++){
        // let eraserrr = document.getElementById('eraser');

        // let row = document.createElement("div");
        // row.setAttribute('class', 'row');
        // container.appendChild(row);
        // for(colNum=0; colNum<num; colNum++){
            let box = document.createElement("div");
            box.setAttribute('class', 'box');
            container.appendChild(box);
            container.insertAdjacentElement("beforeend", box);


            container.addEventListener("click", (e) => {
                box.addEventListener("mouseover", divColor) //changes color of all matches
            }) //container listener

            // eraserrr.addEventListener("click", function(){
            //     box.addEventListener("mouseover", eraser)
            // }); //works, but doesnt allow user to color over white
        // }


    }
        //creates rows and columns
    }
}




gameboard(16);
//starts game at 16

// colorPicker.addEventListener("click", divColor);
function divColor(){
        let color = document.getElementById("colorPicker").value;
        this.style.backgroundColor = color;
}
    //change an individual divs bg color
    //putting eraser here makes the alert happen on mouseover


const resetGrid = () => {
    let box = document.getElementsByClassName("box");
    let boxes = Array.from(box);
    boxes.forEach((div) => div.remove());

    gameboard(16);
}

const clearBoard = () => {
    let squares = container.querySelectorAll(".box");
    squares.forEach(square => {
        square.style.backgroundColor = "#fff";
    })
}


const changeGrid = input => {
    let squares = container.querySelectorAll(".box");
    squares.forEach(square => {
        square.style.backgroundColor = "#fff";
    })

    let box = document.getElementsByClassName("box");
    let boxes = Array.from(box);
    boxes.forEach((div) => div.remove());
    let changeTest = document.getElementById("change").value;
    input = changeTest;

    gameboard(input);
}


// function eraser () {
//     // let color = document.getElementById('eraser');
//     // if(eraser.onclick){
//         // alert("clicked");

//     // }
//     let color = "#fff";
//     this.style.backgroundColor = color;
// }


/*
if (colorpicker is clicked){ do color stuff}
else if (eraser is picked){ erase }
else if (reset is clicked){ reset }
*/

// try putting an onclick on the html colorer

/*
-get user input from #change
-input it to the nested loop
-use .innerHTML to display the new grid to the #container
*/

/*
- make a clear button that clears the board but keeps the size (make reset() this)
- make reset button clear the board & change the size to the default (16)

*/
