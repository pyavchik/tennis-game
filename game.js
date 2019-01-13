var canvas = document.getElementById('gameCanvas');
var canvasContext = canvas.getContext('2d');
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;

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
    ballY = ballY + ballSpeedY;

    if (ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }

    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;

    }

    if (ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }

    if(ballY > canvas.height){
        ballSpeedY = -ballSpeedY;

    }
}

function drawEverything() {
    // next line blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    // this is left player paddle
    colorRect(0, 210, 10, 100, 'white');

    // next line draws the ball
    colorCircle(ballX, ballY, 10, 'white');

}

function colorCircle(centerX, centerY, radius, drawColor) {
    // next line draws the ball
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}
