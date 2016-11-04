var options = {
    host: '10.0.0.11'
}

var artnet = require('artnet')(options);

// set channel 1 to 255 and disconnect afterwards.
artnet.set(1, 0, function (err, res) {
    artnet.close();
});
