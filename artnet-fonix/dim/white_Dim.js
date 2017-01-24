//▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
//▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
//▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄
//Connection to the Arnet Server
var options = {
    host: '10.0.0.28' //PI-LC
};
var options = {
    host: '10.0.0.30' //NOX-LC
};
//Check for the Artnet NPM Deps
var artnet = require('artnet')(options);
//Init Fade
function fadeUp(ms) {
  var step = 5;
  var time = Math.floor(ms / (255 / step));
  var val = 260;
  var interval = setInterval(function () {
    //Define Values Here
    artnet.set(1, [null, null, null, val, null, null, null, val]); //CAN-1

    artnet.set(9, [null, null, null, val, null, null, null, val]); //CAN-2

    artnet.set(17, [null, null, null, val, null, null, null, val]); //CAN-3

    artnet.set(25, [null, null, null, val, null, null, null, val]); //CAN-4

    artnet.set(33, [null, null, null]); //CAN-BG

    artnet.set(37, [null, null, null]); //LED-BED

    val -= step;
    if (val < 127) {
      clearInterval(interval);
      artnet.close();
    }
  }, time);
}
//Fade Time \/
fadeUp(1000);
