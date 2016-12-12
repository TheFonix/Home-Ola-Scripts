//▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
//▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
//▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄
//Connection to the Arnet Server
var options = {
    host: 'ola'
}
// This script is for all fixtures.
var artnet = require('artnet')(options);

// Set All channels to 0 to cause a blackout.
artnet.set(1, null, null, null, null, null, null, null, null, null, null, null, function (err, res) {
    artnet.close();
});
