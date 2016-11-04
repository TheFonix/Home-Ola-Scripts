var options = {
    host: '192.168.1.90'
}

var artnet = require('artnet')(options);

// set channel 1 to 255 and disconnect afterwards.
artnet.set(2, 0, function (err, res) {
    artnet.close();
});
