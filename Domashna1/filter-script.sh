#! /bin/bash

if [ $# -ne 1 ]
then 
	echo "USAGE: `basename $0` ['.csv' File]"
	exit 1;
fi

filename=$1

if [ ! -f ${filename} ]
then
	echo "File not found"
	exit 1;
fi
 
column_numbers=(0 1 2 3 4 5 10 19 20 21)
counter=0

while IFS=, read -a line
do
	row=""
	row+="$counter,"

	for i in $(seq 0 21)
	do 
		if [[ " ${column_numbers[@]} " =~ " ${i} " ]]
		then 
			if [ -z "${line[${i}]// }" ]
			then
				row+="null,"
			else
				row+="${line[i]},"
			fi
		fi
	done

	counter=$((counter+1))

	echo "${row::-1}"

done < $filename

exit 0;
