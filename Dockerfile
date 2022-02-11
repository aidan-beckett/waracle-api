#Set base image
FROM node:lts-alpine3.14 as builder

RUN npm install pm2 -g

#Copy UI content and Nginx configuration
COPY build /var/www
COPY node_modules /var/www
#Expose HTTP
EXPOSE 80

WORKDIR /var/www
RUN ls
#Create Nginx process
CMD ["pm2-runtime", "app.js"]