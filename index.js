// for (let i = 0; i < 5; i++) {
//     div = document.createElement("div");
//     div.classList.add("ball");
//     div.style.top = Math.random()*1000 + "px";
//     div.style.left = Math.random()*1000 + "px";
//     div.style.backgroundColor = "rgb(" + Math.random()*300 + "," + Math.random()*300 + "," + Math.random()*300+")";
//     document.body.appendChild(div);
// }

const BOXWIDTH = 400; //this has to be the same as the css bigBox dmension
let USERSQUARES = 3; //default value
let TOTALSQUARES = BOXWIDTH/USERSQUARES; 

function makeSquare(USERSQUARES) {

    let TOTALSQUARES = BOXWIDTH/USERSQUARES;

    let bigBox = document.createElement("div");
    bigBox.classList.add("bigBox");
    document.body.appendChild(bigBox);

    for (let i = 1; i <= USERSQUARES**2; i++) {
        let littleBox = document.createElement("div");
        littleBox.classList.add("littleBox");

        littleBox.style.width = TOTALSQUARES + "px";
        littleBox.style.height = TOTALSQUARES + "px";

        littleBox.addEventListener("mouseenter",function eventHandler(e) {
            littleBox.style.backgroundColor = "rgb(" + Math.random()*300 + "," + Math.random()*300 + "," + Math.random()*300+")";;
        });

        bigBox.appendChild(littleBox);
    } 
}

function deleteSquare() {
    if (document.querySelector(".bigBox")) {
        bigBox = document.querySelector(".bigBox");
        document.body.removeChild(bigBox);   
    }
}

makeSquare(USERSQUARES);

form = document.querySelector("#form");
// for (let i = 0; i < form.length; i++) {
//     console.log(form.elements[i].value);
// }

button = document.querySelector("#output");
button.addEventListener("click", function eventHandler (e) {
    deleteSquare();
    console.log(form.elements[0].value);
    USERSQUARES = form.elements[0].value;
    makeSquare(USERSQUARES);
});


