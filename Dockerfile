# Use an official node runtime as a parent image
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use an nginx image to serve the static files
FROM nginx:alpine

# Copy the built React app from the previous stage
COPY --from=build /app/.next /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# serve the build files
CMD ["npm", "run", "preview"]