# CCP Calculator

A tool to calculate CCP Key, RIP Key, and RIB from CCP numbers.

## Features

- Calculate CCP Key, RIP Key, and RIB from CCP numbers
- Multi-language support (English, French, Arabic)
- Dark mode support
- Telegram bot integration

## Web Application

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Telegram Bot

### Setup

1. Create a `.env` file in the root directory:

```
BOT_TOKEN=your_telegram_bot_token_here
```

2. Install dependencies:

```bash
npm install
```

### Running the Bot

```bash
# Start the bot
npm run start-bot
```

## Running Both Services Locally

You can run both the website and the Telegram bot simultaneously on your local machine:

1. First, build the static website:
```bash
npm run build
```

2. Start both services at once (new script added to package.json):
```bash
npm run start-all
```

This will:
- Start the Telegram bot (using your BOT_TOKEN from the .env file)
- Serve the static website on http://localhost:5000

## Docker Deployment

### Building and Publishing to Docker Hub

1. Build the Docker image locally:
```bash
docker build -t yourusername/ccp-calculator:latest .
```

2. Login to Docker Hub:
```bash
docker login
```

3. Push the image to Docker Hub:
```bash
docker push yourusername/ccp-calculator:latest
```

### Running the container from Docker Hub

```bash
docker run -d \
  -p 8043:8043 \
  -e BOT_TOKEN=your_telegram_bot_token_here \
  --name ccp-calculator \
  yourusername/ccp-calculator:latest
```

### Accessing the application

- The website will be available at http://localhost:8043 (or your server's IP/domain)
- The Telegram bot will be running in the same container

## How It Works

The CCP Calculator uses algorithms to:
1. Calculate the RIP key from a CCP number
2. Calculate the CCP key using weighted multiplication
3. Generate the RIB number in the correct format

Both the web application and Telegram bot use the same core calculation logic. 