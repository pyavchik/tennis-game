var canvas = document.getElementById('gameCanvas');
var canvasContext = canvas.getContext('2d');
var ballX = 50;
var ballSpeedX = 15;

window.onload = function () {
    var framesPerSecond = 30;
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
};

function moveEverything() {
    console.log(ballX);
    ballX = ballX + ballSpeedX;

    if (ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }

    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;

    }
}

function drawEverything() {
    canvasContext.fillStyle = '#000000';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = '#ffffff';
    canvasContext.fillRect(0, 210, 10, 200);

    canvasContext.fillStyle = '#ff294c';
    canvasContext.fillRect(ballX, 100, 10, 10);
}


