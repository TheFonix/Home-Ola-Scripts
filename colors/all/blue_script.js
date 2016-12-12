//▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
//▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
//▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄

//Script Created By TheFonix But Original Art-Net nodejs Application Developed by Third Party Developers

//Connection to the Arnet Server
var options = {
    host: 'ola'
}

//Module Check for the Application
var artnet = require('artnet')(options);

// This will send the Colour Blue to the ArtNet Server. And start the Fade up SEQ.
// This script is for both the Par-Can And LED Strips.

artnet.set(1, null, null, 10, null, null, 10, function (err, res) {
    artnet.close();
});
//10%
artnet.set(1, null, null, 50, null, null, 50, function (err, res) {
    artnet.close();
});
//30%
artnet.set(1, null, null, 100, null, null, 100, function (err, res) {
    artnet.close();
});
//55%
artnet.set(1, null, null, 150, null, null, 150, function (err, res) {
    artnet.close();
});
//70%
artnet.set(1, null, null, 200, null, null, 200, function (err, res) {
    artnet.close();
});
//85%
artnet.set(1, null, null, 250, null, null, 250, function (err, res) {
    artnet.close();
});
//95%
artnet.set(1, null, null, 255, null, null, 255, function (err, res) {
    artnet.close();
});
//100%
