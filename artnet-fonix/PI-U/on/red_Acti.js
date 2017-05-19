//▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
//▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
//▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄
//Connection to the Arnet Servers
var options = {
    host: 'u-pi' //PI-U
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
    artnet.set(1, [null, null, null, val, val, null, null, null]); //CAN-1

    artnet.set(9, [null, null, null, val, val, null, null, null]); //CAN-2

    artnet.set(17, [null, null, null, val, val, null, null, null]); //CAN-3

    artnet.set(33, [val, null, null]); //CAN-BG

    artnet.set(37, [val, null, null]); //LED-BED

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
