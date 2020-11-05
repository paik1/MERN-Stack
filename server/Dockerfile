# Collecting the node image 
FROM node:12

# place the code in this directory in the container 
WORKDIR /usr/src/app

# copy package.json and package.lock.json
COPY  package*.json ./

# install node modules
RUN npm install

# Copy all node_modules inside the directory
COPY . .

# expose the port to access the api's
EXPOSE 5000

# final command to execute
CMD ["npm", "start"]