// for (let i = 0; i < 5; i++) {
//     div = document.createElement("div");
//     div.classList.add("ball");
//     div.style.top = Math.random()*1000 + "px";
//     div.style.left = Math.random()*1000 + "px";
//     div.style.backgroundColor = "rgb(" + Math.random()*300 + "," + Math.random()*300 + "," + Math.random()*300+")";
//     document.body.appendChild(div);
// }

const BOXWIDTH = 400;
const USERSQUARES = 8;
const TOTALSQUARES = BOXWIDTH/USERSQUARES; 

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
