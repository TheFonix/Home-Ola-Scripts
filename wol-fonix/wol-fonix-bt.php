<?php
//Ignore Errors
error_reporting(E_ALL);
//Sending PHP Request to NODEJS (Artnet Nodes)
echo "Request Confirmed";

echo "Sending to Fonix-Desktop without wait";

exec('/usr/sbin/etherwake -b xx:xx:xx:xx:xx:xx');
echo "Complete";
?>
