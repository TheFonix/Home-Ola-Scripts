﻿//▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
//▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
//▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄
//Connection to the Arnet Server
var options = {
    host: '10.0.0.6' //PI D
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
    artnet.set(1, [null, null, null, val, null, val, null, null]); //CAN-1

    artnet.set(9, [null, null, null, val, null, val, null, null]); //CAN-2

    artnet.set(17, [null, null, null, val, null, val, null, null]); //CAN-3

    artnet.set(25, [null, null, null, val, null, val, null, null]); //CAN-4

    artnet.set(33, [null, val, null]); //CAN-BG

    artnet.set(37, [null, val, null]); //LED-BED

    val -= step;
    if (val < 25) {
      clearInterval(interval);
      artnet.close();
    }
  }, time);
}
//Fade Time \/
fadeUp(1000);
