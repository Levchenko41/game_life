let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let width = 30;
let height = 30;
let mas = [];

canvas.onclick = function (event) {
    let x = event.offsetX;
    let y = event.offsetY;

    x = Math.floor(x / 10);
    y = Math.floor(y / 10);
    mas[y][x] = 1;
    console.log(x);
    console.log(mas);
    drawField();
}

function goLife() {
    for (let i = 0; i < height; i++) {
        mas[i] = [];
        for (let j = 0; j < width; j++) {
            mas[i][j] = 0;
        }
    }
}

goLife();
function drawField() {
    context.clearRect(0, 0, 300, 300);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (mas[i][j] == 1) {
                context.fillRect(j * 10, i * 10, 10, 10);
            }
        }
    }
}

function startLife() {
    let mas = [];
}