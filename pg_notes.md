# Setup
- Install postgres
- Try [this tutorial](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/), but user the username "build" instead of "me". The database should still be called "api".
  - The tutorial uses `brew services start postgresql` which is for MacOS only. For Ubuntu use `pg_ctlcluster`.
  - In the tutorial, if the command `psql postgres` fails, try the following:
    - Find config file with `find / -name 'pg_hba.conf' 2>/dev/null`
    - Change the line below `# "local" is for Unix domain socket connections only` from `local all all peer` to `local all all trust`.
      - Preserve the original whitespace formatting in the file.
    - Change the line below `# Database adminstrative login by Unix domain socket` from `local all postgres peer` to `local all postgres trust`.
      - Preserve the original whitespace formatting in the file.
    - Restart postgres with `sudo service postgresql restart && sudo pg_ctlcluster <version> <cluster> restart` so postgres registers the change.
    - Run `psql postgres`, it should work.

# Start development tables
- enter into psql with your postgres account with 
  ```
  psql -U postgres
  ```
- Create a role of 'build' to your postgres instance 
  ```
  CREATE ROLE build WITH LOGIN;
  ```
- Create a database named api 
  ```
  CREATE DATABASE api;
  ```
- Run the script to create and propagate the tables
  ```
  bash ./db_setup.sh
  ```
# Useful commands
- `pg_lsclusters`
  - List postgres clusters
- `pg_ctlcluster <version> <cluster> <action: start|stop|restart|reload>`
  - Manage postgres clusters
  - Usually `pg_ctlcluster 10 main start` will start postgres
- `psql`
  - Connect to postgres
  - Requires a cluster to be running