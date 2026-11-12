const but = document.getElementById("but");
const randomBut = document.getElementById("randomBut");
const square = document.getElementById("square");
const slider = document.getElementById("slider");

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function makeRandomColor() {
    const red = Math.floor(Math.random() * 256); 
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

but.onclick = function () {
    changeColor(makeRandomColor());
};

randomBut.onclick = function () {
    changeColor(makeRandomColor());
};

slider.oninput = function () {
    changeColor("hsl(" + slider.value + ", 80%, 60%)");
};