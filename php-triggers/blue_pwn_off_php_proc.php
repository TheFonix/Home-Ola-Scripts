<?php
// Pref Errors
error_reporting(E_ALL);

//Sending PHP Request to NODEJS (Artnet Nodes Local and Networked)
echo "REQ";

//Send REQ to the Local Artnet Client
exec('bash -c "exec nohup setsid nodejs /home/fonix/artnet-fonix/PI-U/dim/blue_Deac.js > /dev/null 2>&1 &"');
echo "PROQ Local >";


//Send the REQ to the Networked Artnet Client
exec('bash -c "exec nohup setsid nodejs /home/fonix/artnet-fonix/PI-D/dim/blue_Deac.js > /dev/null 2>&1 &"');
echo "PROQ Networked >";

//Completed Script Read Off
echo "█▀▀ █▀▀█ █▀▄▀█ █▀▀█ █░░ █▀▀ ▀▀█▀▀ █▀▀ ";
echo "█░░ █░░█ █░▀░█ █░░█ █░░ █▀▀ ░░█░░ █▀▀ ";
echo "▀▀▀ ▀▀▀▀ ▀░░░▀ █▀▀▀ ▀▀▀ ▀▀▀ ░░▀░░ ▀▀▀ ";

echo "PROQ Networked >";
?>
