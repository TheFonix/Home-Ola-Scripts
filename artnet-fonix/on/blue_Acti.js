//▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
//▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
//▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄
//Connection to the Arnet Servers
var options = {
    host: 'localhost' //PI-LC
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
    artnet.set(1, [null, null, null, val, null, null, val, null]); //CAN-1

    artnet.set(9, [null, null, null, val, null, null, val, null]); //CAN-2

    artnet.set(17, [null, null, null, val, null, null, val, null]); //CAN-3

    artnet.set(25, [null, null, null, val, null, null, val, null]); //CAN-4

    artnet.set(33, [null, null, val]); //CAN-BG

    artnet.set(37, [null, null, val]); //LED-BED

    //Math-Fade
    val += step;
    if (val > 255) {
      clearInterval(interval);
      artnet.close();
    }
  }, time);
}

//Fade Time \/
fadeUp(1000);
