require('dotenv').config();

const { Telegraf } = require('telegraf');

// Get the bot token from environment variables (Fly.io secret)
const bot = new Telegraf(process.env.BOT_TOKEN);

// Constants
const MAGIC_NUM = 97;
const EMPTY_MOD = 85;

// Function to calculate RIP Key
function getCcpRip(ccp) {
    const ccpInt = parseInt(ccp, 10);
    const multiplied = ccpInt * 100;
    const mod = multiplied % MAGIC_NUM;
    const ripInt = 97 - ((mod + EMPTY_MOD) % MAGIC_NUM);
    return ripInt.toString().padStart(2, '0');
}

// Function to calculate CCP Key
function calculateCcpKey(ccp) {
    const reversed = ccp.split('').reverse().join('');
    const multipliers = [4, 5, 6, 7, 8, 9, 10, 11];

    let sum = 0;
    for (let i = 0; i < reversed.length; i++) {
        const digit = parseInt(reversed[i], 10);
        const multiplier = multipliers[i];
        sum += digit * multiplier;
    }

    const key = sum % 100;
    return key.toString().padStart(2, '0');
}

// Function to generate RIP (RIP format)
function generateRip(ccp, ripKey) {
    const paddingLength = 20 - 8 - ccp.length - 2;
    const padding = '0'.repeat(paddingLength);
    return `00799999${padding}${ccp}${ripKey}`;
}

// Bot logic to respond to CCP numbers
bot.start((ctx) => ctx.reply('Welcome! Send me a CCP number to get the results. I\'m @ccp2ripbot'));
bot.help((ctx) => ctx.reply('Send me a CCP number to get CCP Key, RIP Key, and RIB.'));

bot.on('text', async (ctx) => {
    const ccp = ctx.message.text.trim();

    // Validate CCP input (only digits, and must be 10 digits or less)
    if (!/^\d+$/.test(ccp)) {
        return ctx.reply('Invalid CCP number. Please send a valid number containing only digits.');
    }
    if (ccp.length > 10) {
        return ctx.reply('CCP number should not exceed 10 digits.');
    }

    // Calculate RIP Key and CCP Key
    const ripKey = getCcpRip(ccp);
    const ccpKey = calculateCcpKey(ccp);
    const rip = generateRip(ccp, ripKey);

    // Send each result as a separate message in the specified order
    await ctx.reply(`CCP Key: ${ccpKey}`);
    await ctx.reply(`RIP Key: ${ripKey}`);
    await ctx.reply(`${rip}`);  // Sends only the RIP number without "RIP:" prefix

    // Add a message to support the website
    await ctx.reply('Please support us by using our website: ccp2rip.com');
});

// Start the bot with error handling
bot.launch().then(() => {
    console.log('Bot is running...');
}).catch((err) => {
    console.error('Error starting bot:', err);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
