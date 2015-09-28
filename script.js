
// var ixport = document.getElementById('ixport');
// ixport.addEventListener("click", testfunc());

// function testfunc() {
    // window.alert("Hi");
// }

// function imgExport() {
//     var c = document.getElementById("wiphala");
//     var img = c.toDataURL("image/png");
// }

var size = 7;
var pattern = [];
var canvas = document.getElementById('wiphala').getContext("2d");

// Generate random colour array for pattern
function colourRandomizer() {
    for (var count = 0; count < size; count++) {
        var hexString = '0123456789ABCDEF'.split('');
        var hash = '#';
        for (var i = 0; i < 6; i++ ) {
            hash += hexString[Math.round(Math.random() * 15)];
        }
        pattern.push(hash);
    }
    drawWiphala(pattern);
}

// Loop through pattern array to draw Wiphala
function drawWiphala(pattern) {
    var n = 0;
    looper(n);
    function looper(n) {
        for (var count = n; count < pattern.length; count++) {
            canvas.fillStyle = pattern[count];
            canvas.fillRect(count*50,n*50,50,50);
            n += 1;
            looper(n);
        }
    }
    // use closure to start index at new number for each line
    
    // canvas.fillStyle = pattern[1];
    // canvas.fillRect(0,0,50,50);
    // canvas.fillRect(50,50,50,50);
    // canvas.fillRect(100,100,50,50);
    // canvas.fillRect(150,150,50,50);
    // canvas.fillRect(200,200,50,50);
    // canvas.fillRect(250,250,50,50);
    // canvas.fillRect(300,300,50,50);
}

colourRandomizer();