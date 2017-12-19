#!/bin/bash
################################################
############ Author: Pradeepkumar C G ##########
################################################

FILE="input.sql"

PREFIX="
existing := 0;\n
SELECT COUNT (1) INTO existing \n
FROM QUESTION \n
WHERE QUESTION_DESCRIPTOR = 'companyDivision';\n
IF existing < 1 \n
THEN \n"

log_1="dbms_output.put_line('Inserting record for companyDivision to QUESTION');\n"

SUFFIX="\nEND IF;"

if [ -f "$FILE" ]; then
	while IFS='' read line; do
		
		count=0;
		if [[ $line == "VALUES"* ]]; then
			#echo $line;
			str=$line;
			out=`echo $str | awk -F [','] '{print $4}' | sed "s/'/ /g"`
			echo $out;
		fi
		if [[ $line == "INSERT"* ]]; then
			echo -e $PREFIX >> /tmp/output.sql
			echo -e $log_1 >> /tmp/output.sql
		fi
		echo $line >> /tmp/output.sql
		
		if [[ $line == *");" ]]; then
			echo -e $SUFFIX >> /tmp/output.sql
		fi
		
	done < $FILE

fi
