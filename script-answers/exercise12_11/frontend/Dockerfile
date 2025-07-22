# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight web server to serve the app
RUN npm install -g serve

# Set the default command to serve the app
CMD ["serve", "-s", "build"]

# Expose port
EXPOSE 3000
