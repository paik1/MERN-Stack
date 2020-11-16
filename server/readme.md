## Dockerize the Node application without webpack

```
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
CMD ["npm", "start:babel"]
```


## Dockerize the Node application with webpack
```
# Collecting the node image 
FROM node:12

# place the code in this directory in the container 
WORKDIR /usr/src/app

# copy oter files as well
COPY dist/api.bundle.js .

# Copy all node_modules inside the directory
COPY . .

# expose the port to access the api's
EXPOSE 5000

# final command to execute
CMD ["npm", "prod"]
```

## Docker Ignore

```
node_modules
npm-debug.log
```

## Command to build doccker image

```
docker build -t simplyPai/server .
```

## Check running docker containers

```
docker ps
```

## Check docker images

```
docker images
```

## Command to run docker image

```
docker run -p 5000:3000 -d simplypai/server
```

## Stop docker container

```
docker stop <containerID>
```

## Delete docker image 

```
docker image rm -f <imageID>
```



# Building API Server using webpack

### https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334