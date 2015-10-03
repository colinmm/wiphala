
// Initialize canvas
var canvas = document.getElementById('wiphala').getContext('2d');

// Refresh colour palette
document.getElementById('refreshButton').addEventListener('click', function () {
    colourRandomizer();
});

// Save canvas as png
document.getElementById('exportButton').addEventListener('click', function () {
    downloadCanvas(this, 'wiphala', 'wiphala.png');
}, false);

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

// Generate random colour array for pattern
function colourRandomizer() {
    var size = 7;
    var pattern = [];
    for (count = 0; count < size; count++) {
        var hexString = '0123456789ABCDEF'.split('');
        var hash = '#';
        for (i = 0; i < 6; i++) {
            hash += hexString[Math.round(Math.random() * 15)];
        }
        pattern.push(hash);
    }
    drawWiphala(pattern);
}

// Loop through pattern to draw wiphala
function drawWiphala(pattern) {
    for (count = 0; count < pattern.length; count++) {
        canvas.fillStyle = pattern[count];
        for (rowCount = 0; rowCount < pattern.length; rowCount++) {
            canvas.fillRect(count * 50, rowCount * 50, 50, 50);
            pattern.unshift(pattern.pop());
            canvas.fillStyle = pattern[count];
        }
    }
}

window.onload = function () {
    colourRandomizer();
}