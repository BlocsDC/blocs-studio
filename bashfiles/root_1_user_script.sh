#! /usr/bin/bash
#
## Script written by Anderson Omoragbon ##
## This script connect to /usr/local/bin/root_user_script.sh ##
## The script desplay error messages if a root user is not calling the script ##
## When a root user call this script without creating an exit.conf file, it'll throw an error ##
## An exit.conf file need to be created in the /root -d for the script to be successful ## 

root_user_script.sh ## The loop file attached to this file ##

case $? in
	101 ) printf "Error: 101 - Must be root user to run...\n\n" ;;
	102 ) printf "Error: 102 - Configuration file does not exist\n\n" ;;
	  0 ) printf "Successfully complited!\n\n" ;;
esac
exit 0;
####################################################################################
