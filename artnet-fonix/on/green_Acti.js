//▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
//▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
//▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄
//Connection to the Arnet Servers
var options = {
    host: 'NOX'; //NOX-LC
    host: 'PI' //PI-LC
};

//Check for the Artnet NPM Deps
var artnet = require('artnet')(options);

//Init Fade
function fadeUp(ms) {
  var step = 5;
  var time = Math.floor(ms / (255 / step));
  var val = 0;
  var interval = setInterval(function () {

    //Define Values Here
    artnet.set(1, [null, null, null, val, null, val, null, null]); //CAN-1

    artnet.set(9, [null, null, null, val, null, val, null, null]); //CAN-2

    artnet.set(18, [null, null, null, val, null, val, null, null]); //CAN-3

    artnet.set(27, [null, null, null, val, null, val, null, null]); //CAN-4

    artnet.set(36, [null, val, null]); //CAN-BG

    artnet.set(39, [null, val, null]); //LED-BED

    //Math-Fade
    val += step;
    if (val > 260) {
      clearInterval(interval);
      artnet.close();
    }
  }, time);
}

//Fade Time \/
fadeUp(1000);