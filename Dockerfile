# https://medium.com/swlh/dockerizing-a-react-application-with-docker-and-nginx-19e88ef8e99a

FROM node:alpine
WORKDIR /app
COPY package.json /app/package.json
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --silent
RUN npm install react-scripts --silent
CMD ["npm", "start"]