# Deployment Guide

## Quick Deploy on Replit

1. **Create Replit Account**
   - Go to [replit.com](https://replit.com)
   - Sign up or log in

2. **Import Project**
   - Click "+ Create Repl"
   - Select "Import from GitHub" or "Upload files"
   - Upload all files from this project

3. **Set Environment Variables**
   - Click the lock icon (Secrets/Tools)
   - Add `DISCORD_TOKEN` with your bot token
   - Add `CLIENT_ID` with your client ID

4. **Run**
   - Click the "Run" button
   - Your bot will start automatically

5. **Keep Online (Free Method)**
   - Use UptimeRobot to ping your Replit URL every 5 minutes
   - Or upgrade to Replit's always-on feature

## Deploy on Heroku (Free Tier Available)

1. **Install Heroku CLI**
\`\`\`bash
npm install -g heroku
\`\`\`

2. **Login and Create App**
\`\`\`bash
heroku login
heroku create kaoruko-bot
\`\`\`

3. **Add Procfile**
Create a file named `Procfile`:
\`\`\`
worker: node index.js
\`\`\`

4. **Set Environment Variables**
\`\`\`bash
heroku config:set DISCORD_TOKEN=your_token_here
heroku config:set CLIENT_ID=your_client_id_here
\`\`\`

5. **Deploy**
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git push heroku main
\`\`\`

6. **Scale Worker**
\`\`\`bash
heroku ps:scale worker=1
\`\`\`

## Deploy on Railway

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo" or "Empty Project"
4. Connect your repository or upload files
5. Add environment variables in Settings
6. Deploy automatically happens

## Deploy on Your Own VPS (Ubuntu)

\`\`\`bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Clone project
cd /home
git clone <your-repo-url>
cd kaoruko-prank-bot

# Install dependencies
npm install

# Create .env file
nano .env
# Add your DISCORD_TOKEN and CLIENT_ID

# Start with PM2
pm2 start index.js --name kaoruko-bot
pm2 save
pm2 startup

# Monitor
pm2 logs kaoruko-bot
\`\`\`

## Environment Variables Required

\`\`\`env
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_bot_client_id
\`\`\`

## Troubleshooting

### Bot not responding
- Check if bot is online in Discord
- Verify token is correct
- Ensure Message Content Intent is enabled

### Commands not working
- Check bot has proper permissions
- Verify prefix is correct (!)
- Check console for errors

### Bot crashes
- Check logs: `pm2 logs` or Replit console
- Verify all dependencies installed: `npm install`
- Ensure Node.js version is 18+
