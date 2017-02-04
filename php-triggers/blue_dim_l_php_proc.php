<?php
//Ignore Errors
error_reporting(E_ALL);
//Sending PHP Request to NODEJS (Artnet Nodes)
echo "Request Confirmed";

echo "Sending to NODEJS without wait";

exec('bash -c "exec nohup setsid nodejs /home/fonix/artnet-fonix/dim/blue_Dim.js > /dev/null 2>&1 &"');
echo "Complete";
?>
