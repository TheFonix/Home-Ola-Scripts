//▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
//▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
//▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄
//Connection to the Arnet Server


// -----
// -GREEN-
// -----
var options = {
    host: '10.0.0.28'
}

//Check for the Artnet NPM Deps
var artnet = require('artnet')(options);

// Script to change all active fixtures without any kind of fade enabled.
artnet.set(1, [0, 0, 0, 255, 0, 255, 0, 0, //CAN-1
               0, 0, 0, 255, 0, 255, 0, 0, //CAN-2
               0, 0, 0, 255, 0, 255, 0, 0, //CAN-3
               0, 0, 0, 255, 0, 255, 0, 0, //CAN-4
               0, 255, 0,                  //CAN-BG
               0, 255, 0                   //LED-STRIPS
             ]);
      {artnet.close();
});
