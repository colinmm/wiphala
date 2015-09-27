
// var ixport = document.getElementById('ixport');
// ixport.addEventListener("click", testfunc());

// function testfunc() {
    // window.alert("Hi");
// }

// function imgExport() {
//     var c = document.getElementById("wiphala");
//     var img = c.toDataURL("image/png");
// }

var canvas = document.getElementById('wiphala').getContext("2d");

// Generate random colour for pattern
function colourRandomizer() {
    var hexString = '0123456789ABCDEF'.split('');
    var hash = '#';
    for (var i = 0; i < 6; i++ ) {
        hash += hexString[Math.round(Math.random() * 15)];
    }
    canvas.fillStyle = hash;
    canvas.fillRect(0,0,50,50 );
    canvas.fillRect(50,50,50,50);
    canvas.fillRect(100,100,50,50);
    canvas.fillRect(150,150,50,50);
    canvas.fillRect(200,200,50,50);
    canvas.fillRect(250,250,50,50);
    canvas.fillRect(300,300,50,50);
}

colourRandomizer();



