//▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
//▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
//▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄
//Connection to the Arnet Server
var options = {
    host: 'b-pi' //B-PI
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
    artnet.set(1, [null, null, null, val, val, null, null, null]); //CAN-1

    artnet.set(9, [null, null, null, val, val, null, null, null]); //CAN-2

    artnet.set(17, [null, null, null, val, val, null, null, null]); //CAN-3

    artnet.set(25, [null, null, null, val, val, null, null, null]); //CAN-4

    artnet.set(33, [val, null, val]); //CAN-BG

    artnet.set(37, [val, null, val]); //LED-BED

    val -= step;
    if (val < 25) {
      clearInterval(interval);
      artnet.close();
    }
  }, time);
}
//Fade Time \/
fadeUp(1000);
