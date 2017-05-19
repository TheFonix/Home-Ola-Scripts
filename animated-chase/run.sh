#▒█▀▀▀ ▒█▀▀▀█ ▒█▄░▒█ ▀█▀ ▀▄▒▄▀
#▒█▀▀▀ ▒█░░▒█ ▒█▒█▒█ ▒█░ ░▒█░░
#▒█░░░ ▒█▄▄▄█ ▒█░░▀█ ▄█▄ ▄▀▒▀▄
#Essentially making disco lights!

#Run in a background screen
screen -S CHASE -d -m

#Start script will a random varible as the dependent
while [ true ]

#What to do?!
do

  #Starting light runs, first off the script will start will the solid colors

  #Red SOLID
  nodejs /home/fonix/animated-chase/PI-D-ALL-SOLID/RED-PI-D.js
  nodejs /home/fonix/animated-chase/U-PI-ALL-SOLID/RED-PI-D.js

  echo"Sleeping after PI-D/U-RED - Give me a second!"
  sleep 1

  #Green SOLID
  nodejs /home/fonix/animated-chase/PI-D-ALL-SOLID/GREEN-PI-D.js
  nodejs /home/fonix/animated-chase/U-PI-ALL-SOLID/GREEN-PI-D.js


  echo"Sleeping after PI-D/U-GREEN - Give me a second!"
  sleep 1

  #Blue SOLID
  nodejs /home/fonix/animated-chase/PI-D-ALL-SOLID/BLUE-PI-D.js
  nodejs /home/fonix/animated-chase/U-PI-ALL-SOLID/BLUE-PI-D.js

  echo"Sleeping after PI-D/U-BLUE - Give me a second!"
  sleep 1

  #White SOLID
  nodejs /home/fonix/animated-chase/PI-D-ALL-SOLID/WHITE-PI-D.js
  nodejs /home/fonix/animated-chase/U-PI-ALL-SOLID/WHITE-PI-D.js

  echo"Sleeping after PI-D/U-WHITE - Give me a second!"
  sleep 1

  #Script will run this process twice then it will move onto single love movements
  echo"Solid Colors complete 1/2"

  nodejs /home/fonix/animated-chase/PI-D-ALL-SOLID/RED-PI-D.js
  nodejs /home/fonix/animated-chase/U-PI-ALL-SOLID/RED-PI-D.js

  echo"Sleeping after PI-D/U-RED - Give me a second!"
  sleep 1

  nodejs /home/fonix/animated-chase/PI-D-ALL-SOLID/GREEN-PI-D.js
  nodejs /home/fonix/animated-chase/U-PI-ALL-SOLID/GREEN-PI-D.js

  echo"Sleeping after PI-D/U-GREEN - Give me a second!"
  sleep 1

  nodejs /home/fonix/animated-chase/PI-D-ALL-SOLID/BLUE-PI-D.js
  nodejs /home/fonix/animated-chase/U-PI-ALL-SOLID/BLUE-PI-D.js

  echo"Sleeping after PI-D/U-BLUE - Give me a second!"
  sleep 1

  nodejs /home/fonix/animated-chase/PI-D-ALL-SOLID/WHITE-PI-D.js
  nodejs /home/fonix/animated-chase/U-PI-ALL-SOLID/WHITE-PI-D.js

  echo"Sleeping after PI-D/U-WHITE - Give me a second!"
  sleep 1

  echo"Solid Colors complete 2/2"
  #_________________________________________________________
  echo"Changing to each light on its own! - Here we go! xD"

  DO THAT HERE <3 LOVE TO MYSELF
