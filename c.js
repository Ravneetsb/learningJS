const doc = document.getElementById("can");
const ctx = doc.getContext("2d")
function drawLine() {
    ctx.moveTo(0, 0);
    ctx.lineTo(600, 600);
    ctx.stroke();
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(250, 150, 80, 0, 2*Math.PI);
    ctx.fill()
    ctx.stroke();
}

function write() {
    ctx.font = "30px Arial";
    // ctx.fillText("Hello World", 10, 50);
    ctx.strokeText("Hello World", 10, 50);
}

function drawLinearGradient() {
    let gradient = ctx.createLinearGradient(0, 0, 600, 0);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "blue");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 300);
}

function drawCircularGradient() {
    let gradient = ctx.createRadialGradient(300, 150, 10, 300, 150 ,100);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "yellow");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 300);
}