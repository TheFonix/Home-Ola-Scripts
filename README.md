# Home-Ola-Scripts[![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
This is one of the projects I've had with regards to creating a smart home/room which is centred around Alexa, I've got many a server in my house and had no trouble getting some VM's to host needed software for this project to work well

Note that non of this will work unless you have some form of host with NPM-ArtNet running with NodeJS 7.x.x and have some form of Artnet Receiver. Ive found that allowing OLA to run with DHCP stops it from receiving Artnet data. And using a gateway which allows DNS hostnames is also a plus!

## How it works!
The entire process is handled pretty easily, i give the command to turn on the lights and Alexa gets a PHP page which triggers NodeJS to run the Artnet Send script, from there is gets sent to two of the nodes in my house, one of them is a Dell Poweredge server running windows server 2012 R2 with freestyler's Artnet to DMX and the other is a raspberrypi running Open Source Lighting architech. From there both of the nodes convert the Artnet data into DMX and relay it back to the fixtures in my room.

## My Setup
##### _Networking:_
* Alexa = Amazon Echo Dot
* Node 1 = Dell R310 Poweredge 8GB Ram (Codename NOX)
* Node 2 = Rasberry Pi (Codename PI)
* PHP Host = Dell R310 Poweredge 4GB Ram (Codename DOX)
* DMX Converters = K8062 USB Controlled DMX x2
* Router = NightHawk X6 (DD-WRT)

##### _Light Fixtures:_
* CAN 1 = Stairville LED PAR 56
* Can 2 = Stairville LED PAR 56
* Can 3 = Stairville LED PAR 56
* Can 4 = Stairville LED PAR 56
* Can BG = Equinox Chrome Party Par 56
* LED-Strips = 3CH DMX512 Decoder S4L2
