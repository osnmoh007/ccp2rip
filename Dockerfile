FROM node:18-alpine

WORKDIR /app

# Copy package.json and install only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy the pre-built static files and other necessary application code
COPY ./dist ./dist
COPY ./bot.cjs ./bot.cjs
COPY ./supervisord.conf ./supervisord.conf

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