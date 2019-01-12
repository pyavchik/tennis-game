var canvas = document.getElementById('gameCanvas');
var canvasContext = canvas.getContext('2d');

window.onload = function () {
    canvasContext.fillStyle = '#000000';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = '#ff294c';
    canvasContext.fillRect(100, 200, 50, 25);
};

