#Set base image
FROM nginx:stable

#Copy UI content and Nginx configuration
COPY build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

#Expose HTTP
EXPOSE 80

WORKDIR /var/www
#Create Nginx process
CMD ["/bin/sh", "-c", "nginx -g \"daemon off;\""]