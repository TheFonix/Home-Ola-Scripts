# Home-Ola-Scripts
Ive listen some of the scripts that i use in my home ArtNet to Alexa DMX System, you can find the different colours i use and you can see how they relate to the different DMX channels.

Note that non of this will work unless you have some form of host with NPM-ArtNet running with NodeJS 7.x.x and have some form of Artnet Reciver. Ive found that allowing OLA to run with DHCP stops it from reciving Artnet data.

# How it works!
The basic process is, from Alexa to the PHP5 Server then its sent from the PHP server to the Artnet Server which then send the Artnet packet to the client which then forwards to an Open Source Lighting client which translates from ArtNet into a DMX Universe on channels 1-3

# My Setup
Alexa = Alexa Dot
PHP5 Server = Apache2 VM based on ubuntu
NPM Server = NodeJS VM Also Based on Ubuntu
Artnet Client = OLA Client based on ARM Archtiechture (Rasberri Pi 3)
