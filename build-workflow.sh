#!/bin/bash
# A complete workflow script to build and deploy your application

# 1. Build the application
echo "Step 1: Building the application..."
npm install
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "Error: Build failed, dist directory not found"
    exit 1
fi
echo "Build completed successfully!"

# 2. Build and push the Docker image
echo "Step 2: Building and pushing the Docker image..."
./build.sh

if [ $? -eq 0 ]; then
    echo "Complete workflow finished successfully!"
else
    echo "Docker build and push failed. Check the errors above."
    exit 1
fi 