#!/bin/bash
################################################
############ Author: Pradeepkumar C G###########
################################################

SRC_DIR1="Documents"
SRC_DIR2="Workstation"

DST_DIR="/opt/backups/"

rsync -arzvh $SRC_DIR1 $DST_DIR

rsync -arzvh $SRC_DIR2 $DST_DIR
