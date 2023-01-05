#! /usr/bin/bash
#
## Script written by Anderson Omoragbon ##
## See /usr/local/bin/root_1_user_script.sh file ##
## This is the loop for root_1_user_script.sh file ##

if [ $(id -u) != 0 ]; then
	exit 101
elif ! [ -e './exit.conf' ]; then
	exit 102
else
	exit 0
fi;

####################################################

