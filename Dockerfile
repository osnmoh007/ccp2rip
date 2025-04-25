FROM node:18-alpine

WORKDIR /app

# Copy package files and install all dependencies including dev dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Build the static website
RUN npm run build

# Remove development dependencies to reduce image size
RUN npm prune --production

# Install supervisor to manage multiple processes
RUN apk add --no-cache supervisor

# Create supervisor configuration
RUN mkdir -p /etc/supervisor.d/
COPY supervisord.conf /etc/supervisor.d/supervisord.conf

# Remove any existing .env file to ensure it doesn't override environment variables
RUN rm -f .env

# Expose port for the static site
EXPOSE 8043

# Start supervisor which will run both services
CMD ["supervisord", "-c", "/etc/supervisor.d/supervisord.conf"]