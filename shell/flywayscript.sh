#!/bin/bash
################################################
############ Author: Pradeepkumar C G ##########
################################################

FILE="/home/pkumar/Documents/Momentum/Stories/FJCRTPF.csv"

if [ -f "$FILE" ]; then
	while IFS=',' read col1 col2 col3 col4 col5 col6 col7 col8; do
		echo 'INSERT INTO FJCRTPF (ID, CLIENT_NAME, SHORT_NAME, STATUS, SCHEDULING, REPORT_TYPE, ESCALATION_TIME, ESCALATION_METHOD, PLATFORM) VALUES ((SELECT Max(ID)+1 From FJCRTPF)', \'$col1\',  \'$col2\', \'$col3\', \'$col4\', \'$col5\', $col6, \'$col7\', \'$col8\'');' >>/tmp/output.sql
	done < $FILE

fi