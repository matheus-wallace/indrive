#Will create a node environment in the container
FROM node:18

#Will create a directory indrive and switch to that directory
WORKDIR /indrive/

#Runs npm install to create node_modules for your app
COPY . .

#Copies package.json file to /indrive directory
COPY package.json /indrive/

#Runs npm install to create node_modules for your app
RUN npm install

EXPOSE 8000

CMD npm run dev

