<?php
//Ignore Errors
error_reporting(E_ALL);
//Sending PHP Request to NODEJS (Artnet Nodes)
echo "Request Confirmed";

echo "Sending to NODEJS without wait";

exec('bash -c "exec nohup setsid node /home/fonix/artnet-fonix/on/red_Acti.js > /dev/null 2>&1 &"');
echo "Complete";
?>