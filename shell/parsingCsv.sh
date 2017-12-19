#!/bin/bash
################################################
############ Author: Pradeepkumar C G ##########
################################################

FILE="/home/pkumar/Documents/Momentum/Stories/FJCRTPF.csv"

while IFS=',' read col1 col2 col3 col4 col5 col6 col7 col8; do
	echo "<"$col8">"
done < $FILE