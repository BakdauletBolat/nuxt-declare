# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the Nuxt.js application
RUN yarn build

# Expose port 3000 for the Nuxt.js application to listen on
EXPOSE 3000

# Run the Nuxt.js application in production mode
CMD ["yarn", "start"]