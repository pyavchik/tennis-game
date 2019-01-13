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
    // next line blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    // this is left player paddle
    colorRect(0, 210, 10, 100, 'white');

    // next line draws the ball
    colorRect(ballX, 100, 10, 10, 'red');
}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}
