#!/bin/bash
################################################
############ Author: Pradeepkumar C G###########
################################################

wallpaper_dir='/home/pkumar/Documents/Misc/wallpaper'

#pic_file_name=`gconftool-2 --get /desktop/gnome/background/picture_filename`

#echo $pic_file_name

PID=$(pgrep gnome-session)
export DBUS_SESSION_BUS_ADDRESS=$(grep -z DBUS_SESSION_BUS_ADDRESS /proc/$PID/environ|cut -d= -f2-)

files=($wallpaper_dir/*)

random_pic=`printf "%s\n" "${files[RANDOM % ${#files[@]}]}"` 

#echo $random_pic

#gconftool-2 --type string --set /usr/share/backgrounds/warty-final-ubuntu.png "$random_pic"

gsettings set org.gnome.desktop.background picture-uri "file://$random_pic"