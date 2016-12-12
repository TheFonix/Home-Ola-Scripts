//▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
//▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
//▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄
//Connection to the Arnet Server
var options = {
    host: 'ola'
}

//Module Check for the Application
var artnet = require('artnet')(options);

// This will send the Colour Blue to the ArtNet Server. And start the Fade up SEQ.
// This script is for the Par-Cans.

artnet.set(1, null, null, null, null, null, 10, function (err, res) {
    artnet.close();
});
//10%
artnet.set(1, null, null, null, null, null, 50, function (err, res) {
    artnet.close();
});
//30%
artnet.set(1, null, null, null, null, null, 100, function (err, res) {
    artnet.close();
});
//55%
artnet.set(1, null, null, null, null, null, 150, function (err, res) {
    artnet.close();
});
//70%
artnet.set(1, null, null, null, null, null, 200, function (err, res) {
    artnet.close();
});
//85%
artnet.set(1, null, null, null, null, null, 250, function (err, res) {
    artnet.close();
});
//95%
artnet.set(1, null, null, null, null, null, 255, function (err, res) {
    artnet.close();
});
//100%
