# Gifted_LLC
Build UMass project of the Gifted_LLC web app

## How to begin Developing
To run the project, you need some version of node, get it [here](https://nodejs.org/en/)

Install dependencies by using `npm i`

We are using webpack 4.40+ to bundle the modules of react and files to files that can be used in both development or in production. All commands going forwared will require two ports to serve the files of the projects, [3000](http://localhost:3000/) for the client and [8080](http://localhost:3000/) for the backend server.

A development environment is provided and can be run using

`npm start`

To package the files that you created for a production build, you need to run, 

`npm run build`

And then to start the production server from the root dir,

`npm run start:prod`

All of these scripts are available in the package.json file in case you want to look at how it works.

## Structure
### Branch and commit names
Branch names should be prefixed by an appropriate label

* Feature/ - for a collection of stories that implement a core concept of the design
* Bug/ - for branches that fix bugs or typos to the code
* Release/ - for branches that tie up loose ends and is ready for production

After the prefixes, like commit names, there should be a short description within the name of what the change accomplished.
Commits should additional have additional "fix #__" in the title if the commit resolves an issue.

Branch and commit as much as possible, this project should help develop better development practices and build up you got history.

### Front-end: 
This is planned to be written in typescript using the react libraries. Any and all files that are displayed are going to be placed in the ./src/ folder. I tried to break up the code to have the routing in the entry ./src/index.tsx file, and all of the components its referencing in the ./src/components/ folder. 

These files are managed by ts-loader in webpack

The styling and img component of the website will then fall into the ./src/css/ or ./src/files/ folder respectively. CSS is well, CSS, just reference these files in your component files. Simple things like logos and partner brands should fall into the file folder, but images of products should be stored in a db, to give the ability to scale. 

CSS and files are managed by the style-loader/css-loader or the file-loader respectively.

### Backend:
Interaction between the front end and the backend are done through the use of **routing**, what we plan to use to do so, is a node script called express. Not only will this be used to communicate what to be displayed to our proxy server, but it provide the way to interact with our database. The database is up in the air rn, but I'm thinking postgres or mysql since we're not working with highly variable data.

All of these files are stored in the ./src/server/ folder and should be manipulated as needed.

## Git - good practices
Many of you know how git works, but to reiterate the main points
1) DO NOT commit and push directly on master, create a pull request and wait for an approval from one of the upper management.
2) Create a new a branch for every edit you make, you do not need to create a new branch for every story you work on. 
3) Commit messages should not be arbitrary. Please provide a short description of each edit and if the commit closes an issue, provide a github issue reference keyword such as "fixes #1" or "resolve #21". 

For people who are completely new to git, refer to this [**tutorial**](https://www.tutorialspoint.com/git/index.htm) for help when needed.
Basically we're all changing code on a cloud, which syncs with the code on your machine
great commands are,

`git pull` - Grabs the most current versions of the code to your local machine ([**merge**](https://stackoverflow.com/questions/38216541/visual-studio-code-how-to-resolve-merge-conflicts-with-git) conflicts arrises)

`git branch branch_name` - creates a new branch with the name branch_name. Use this to work on your own version of the code

`git checkout branch_name` - use this to switch the branch you are working on to branch_name

`git status` - Shows what branch you're on and what files you've changed. Also shows what files are staged

`git add file_name` - stages the file_name to be added with a commit

`git commit -m "commit message goes here` - commits staged files to your local repository

`git push` - pushes your changes to the local repository to the remote repo. (pretty hard to undo)

#### Any questions slack the tech lead, Steven Tran, or one of the PMs, Evan Epstein or Meryl Wheeler
