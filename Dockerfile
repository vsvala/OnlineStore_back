# Set base image
FROM node:10

# Set working directory for the app in container
WORKDIR /app

# Copy package.json to container's /app directory and install dependencies
COPY package* ./
COPY . ./
RUN npm install

# Launch application 
CMD ["npm", "run", "start"] 

# Expose container's port 3002 to the outside
EXPOSE 3002
