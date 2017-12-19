#!/bin/bash
################################################
############ Author: Pradeepkumar C G ##########
################################################

if [ -z "$1" ]; then
	echo 'Usage: phoneBook.sh <search key>'
fi

key=$1
FILE="/home/pkumar/workstation/projects/scripts/shell/phoneBook.properties"
count=0

if [ -f "$FILE" ]; then
	
	#For doing a case insensitive search
	shopt -s nocasematch

	#IFS is for considering trailing whitespaces
	while IFS='' read line || [[ -n "$line" ]]; do
		if [[ $line == *"$key"* ]]; then
			echo $line
			count=`expr $count + 1`
		fi
	done < $FILE
	echo $count" results found!"
else
	echo $FILE 'does not exist'
fi
