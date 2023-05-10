// debugger

let body = document.querySelector("body");
let container = document.querySelector("#container");

for(i=0; i<16; i++){
    let div = document.createElement("div");
    div.setAttribute('class', 'grid');
    container.appendChild(div);
}
