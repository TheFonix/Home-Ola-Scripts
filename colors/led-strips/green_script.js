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

// This will send the Colour Green to the ArtNet Server. And start the Fade up SEQ.
// This script is for the LED Strips.

artnet.set(1, null, 255, null, function (err, res) {
    artnet.close();
});
//10%
artnet.set(1, null, 255, null, function (err, res) {
    artnet.close();
});
//30%
artnet.set(1, null, 255, null, function (err, res) {
    artnet.close();
});
//55%
artnet.set(1, null, 255, null, function (err, res) {
    artnet.close();
});
//70%
artnet.set(1, null, 255, null, function (err, res) {
    artnet.close();
});
//85%
artnet.set(1, null, 255, null, function (err, res) {
    artnet.close();
});
//95%
artnet.set(1, null, 255, null, function (err, res) {
    artnet.close();
});
//100%
