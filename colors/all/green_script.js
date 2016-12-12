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
// This script is for both the Par-Can And LED Strips.

artnet.set(1, null, 10, null, null, 10, null, function (err, res) {
    artnet.close();
});
//10%
artnet.set(1, null, 50, null, null, 50, null, function (err, res) {
    artnet.close();
});
//30%
artnet.set(1, null, 100, null, null, 100, null, function (err, res) {
    artnet.close();
});
//55%
artnet.set(1, null, 150, null, null, 150, null, function (err, res) {
    artnet.close();
});
//70%
artnet.set(1, null, 200, null, null, 200, null, function (err, res) {
    artnet.close();
});
//85%
artnet.set(1, null, 250, null, null, 250, null, function (err, res) {
    artnet.close();
});
//95%
artnet.set(1, null, 255, null, null, 255, null, function (err, res) {
    artnet.close();
});
//100%
