let piece, piece2, piece3;
const myGameArea = {
    canvas: document.getElementById("platform"),
    start : function() {
        this.canvas.setAttribute("width", "480");
        this.canvas.setAttribute("height", "270");
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.key;
        })
        window.addEventListener('keyup', function () {
            myGameArea.key = false;
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function startGame() {
    myGameArea.start();
    piece = new Component(30, 30, "red", 10, 100);
    piece2 = new Component(30, 30, "green", 10, 131);
    piece3 = new Component(30, 30, "yellow", 10, 162);
}

function Component(width=30, height=30, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function() {
        let ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updatePieces() {
    piece.update();
    piece2.update();
    piece3.update();
}

function movePieces() {
    piece.x += 1;
    piece2.x += 1;
    piece3.x += 1;
}
function updateGameArea() {
    myGameArea.clear();
    piece.speedY = 0;
    piece.speedX = 0;
    if (myGameArea.key &&  myGameArea.key === 'ArrowUp') {piece.speedY -= 1;}
    if (myGameArea.key &&  myGameArea.key === 'ArrowDown') {piece.speedY += 1;}
    if (myGameArea.key &&  myGameArea.key === 'ArrowLeft') {piece.speedX -= 1;}
    if (myGameArea.key &&  myGameArea.key === 'ArrowRight') {piece.speedX += 1;}
    piece.newPos();
    updatePieces();
}
function stopMove() {
    piece.speedX = 0;
    piece.speedY = 0;
}