#!/bin/bash

# Extract the latest version from CHANGELOG.md
VERSION=$(grep -m 1 '## \[.*\]' CHANGELOG.md | grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+')

if [ -z "$VERSION" ]; then
    echo "Error: Could not extract version from CHANGELOG.md"
    exit 1
fi

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "Error: dist directory not found. Please build the application first with 'npm run build'"
    exit 1
fi

# Set image name and platforms
# Replace with your Docker Hub username if needed
REGISTRY="mohfreestyl"
IMAGE_NAME="${REGISTRY}/ccp-calculator"
PLATFORMS="linux/amd64,linux/arm64"

echo "Building Docker image: $IMAGE_NAME:$VERSION"
echo "Platforms: $PLATFORMS"

# Login to Docker Hub
echo "Logging in to Docker Hub..."
docker login

# Make sure buildx is available
docker buildx version || { echo "Docker buildx not available. Please install it."; exit 1; }

# Remove existing builder if it exists
if docker buildx inspect mybuilder >/dev/null 2>&1; then
    echo "Removing existing builder..."
    docker buildx rm mybuilder
fi

# Create and use a new builder instance
echo "Creating new builder instance..."
docker buildx create --name mybuilder --use --driver docker-container --bootstrap

# Build and push the Docker image using buildx
echo "Building and pushing multi-architecture images..."
docker buildx build \
    --platform ${PLATFORMS} \
    --tag "${IMAGE_NAME}:${VERSION}" \
    --tag "${IMAGE_NAME}:latest" \
    --push \
    .

# Handle build result
if [ $? -eq 0 ]; then
    echo "Successfully built and pushed $IMAGE_NAME:$VERSION"
    echo "Also tagged and pushed as $IMAGE_NAME:latest"
    
    echo "To run the container:"
    echo "docker run -d -p 8043:8043 -e BOT_TOKEN=your_token ${IMAGE_NAME}:latest"
else
    echo "Error: Failed to build Docker image"
    exit 1
fi 