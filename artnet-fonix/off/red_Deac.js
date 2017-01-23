//▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
//▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
//▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄
//Connection to the Arnet Server
var options = {
    host: '10.0.0.19'
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
    artnet.set(1, [val, null, null, null, null, null, val, val, null, null]);

    val -= step;
    if (val < -5) {
      clearInterval(interval);
      artnet.close();
    }
  }, time);
}
//Fade Time \/
fadeUp(1000);