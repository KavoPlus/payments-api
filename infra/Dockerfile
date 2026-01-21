# Step 1: Use a lightweight version of Node.js 20
FROM node:20-slim

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the app folder content to the container
# This looks for 'app' folder from where we run the build command
COPY app/ .

# Step 4: Run the application
CMD ["node", "index.js"]