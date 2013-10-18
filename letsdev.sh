#!/bin/bash
gnome-terminal --tab -e "./scripts/test.sh" --tab -e "/home/abalbi/v0.10.4/bin/supervisor app.js";
subl &
sleep 5
google-chrome http://localhost:3000/elemento

