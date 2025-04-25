FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application code
COPY . .

# Build the static website
RUN npm run build

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