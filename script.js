var size = 7;
var pattern = [];
var canvas = document.getElementById('wiphala').getContext("2d");

document.getElementById('exportButton').addEventListener("click", imgExport());

function imgExport() {
    var c = document.getElementById("wiphala");
    var img = c.toDataURL("image/png");
}

// Generate random colour array for pattern
function colourRandomizer() {
    for (var count = 0; count < size; count++) {
        var hexString = '0123456789ABCDEF'.split('');
        var hash = '#';
        for (var i = 0; i < 6; i++) {
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
        canvas.fillRect(count*50,0,50,50);
        pattern.unshift(pattern.pop());

        canvas.fillStyle = pattern[count];
        canvas.fillRect(count*50,50,50,50); 
        pattern.unshift(pattern.pop());

        canvas.fillStyle = pattern[count];
        canvas.fillRect(count*50,100,50,50);
        pattern.unshift(pattern.pop());

        canvas.fillStyle = pattern[count];
        canvas.fillRect(count*50,150,50,50); 
        pattern.unshift(pattern.pop());

        canvas.fillStyle = pattern[count];
        canvas.fillRect(count*50,200,50,50); 
        pattern.unshift(pattern.pop());

        canvas.fillStyle = pattern[count];
        canvas.fillRect(count*50,250,50,50); 
        pattern.unshift(pattern.pop());

        canvas.fillStyle = pattern[count];
        canvas.fillRect(count*50,300,50,50);
        pattern.unshift(pattern.pop());

    }
}

colourRandomizer();