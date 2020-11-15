/# !/usr/bin/bash

echo "Connecting to the database..."
read -p "Enter your username: " username
read -p "Enter the hostname: " hostname
echo "Enter your password: "; read -s password
read -p "Enter the database name: " database

PGPASSWORD=$password "/usr/lib/postgresql/13/bin/psql" -U $username -h $hostname -d $database -f "/home/stefan/OddaleciSe/database.sql"


