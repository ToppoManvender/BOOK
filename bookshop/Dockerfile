# Build the Angular application
FROM node:18 as bookshop

# Set the working directory
WORKDIR /app

# Copy the entire application to the working directory
COPY . .

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular dependencies
RUN npm install

# Build the Angular app
RUN npm run build

# Use Nginx to serve the Angular application
FROM nginx:alpine

# Copy the built Angular application from the previous stage
COPY --from=bookshop /app/dist/bookshop/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
