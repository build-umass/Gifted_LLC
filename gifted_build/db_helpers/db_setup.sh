#!/bin/sh
database_configs=./database/database.ini node database/manage_dev_postgres.js  -r
database_configs=./database/database.ini node database/manage_dev_postgres.js  -p
