
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
    return color;
}
