# Base Image
FROM node:14-alpine

WORKDIR /usr/deployment
# install dependencies

# copy package.json
COPY /build_folder/package.json .

# run npm -i to spawn node_modules/packages
RUN npm install ./

# copy the rest of the items
COPY /build_folder ./

# Defualt command
CMD ["npm","start"]
 
