let bigBox = document.createElement("div");
bigBox.classList.add("bigBox");
document.body.appendChild(bigBox);

for (let i = 1; i <= 16; i++) {
    let littleBox = document.createElement("div");
    littleBox.classList.add("littleBox");
    bigBox.appendChild(littleBox);
}
