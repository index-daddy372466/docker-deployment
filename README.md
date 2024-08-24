# Deploying an Application inside of a Docker-Container

## Create the Dockerfile
A Dockerfile is a text file with no file extension listed.
The purpose of Dockerfile is to run all the commands needed to run the application.
- i.e.: ```WORKDIR [./dir], COPY [./source] [./destination] , RUN [npm install ./]```

**Do you remember making sandwich at home and taking it to work/school to eat?**

In order to preserve the sandwich's state, it would be sanitary to place the item in alluminum foil, paper-bag...or a container!
If the sandwich is not contained, there is a chance that it can get contaminated, break apart, or get lost. 

You've been making your own sandwiches [applications] for years now and already have an idea on:
1. How you decide to contain your sandwich [foil,paper-bag,etc..]
2. Which working-directory of your lunchbox, or container, you decide to store the sandwich in for later extraction.
3. and which build-command you decide to use in order to get all of your packages,ketchup packets, mayo,etc...


```
# Base Image
FROM node:14-alpine

WORKDIR /usr/app
# install dependencies

# copy package.json
COPY /build_folder/package.json .

# run npm -i to spawn node_modules/packages
RUN npm install ./

# copy the rest of the items
COPY /build_folder ./

# Defualt command
CMD ["npm","start"]
```
After viewing ```Dockerfile```, the instructions are read as follows:
1. We are declaring Base Image in line 1. Since we are utilizing an express server, we pull **FROM node:14-alpine**
2. We point WORKDIR (working directory) to the container's file tree. We want our application to be seating under **usr/app** folder.
This is not your local machine. This is the Docker Container's file system.
3. Then we copy package.json file from the **build_folder**
4. run npm packages inside of the working directory
5. copy the rest of the files from your local directory and place into working directory.
6. setup your default command to run the application.


In summary of the Dockerfile, You are importing your local application to a **Docker Container** via the Dockerfile.
 
