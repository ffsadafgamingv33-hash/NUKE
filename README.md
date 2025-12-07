# 🤡 Kaoruko - Discord Prank Bot

A fun, harmless Discord bot that pranks users with fake commands! No actual damage is done to any servers.

## Features

- **!admin** - Pretends to give admin (but doesn't)
- **!backup** - Creates a fake server backup
- **!do** - Fake nuke sequence (totally safe!)
- **!roast** - Roasts users with funny messages
- **!quote** - Anime quotes with a twist
- **!hack** - Fake hacking animation
- **!pranklevel** - Shows a random "prank level" meter
- **!help** - Shows all available commands

## Setup

### Prerequisites
- Node.js 18+ installed
- A Discord Bot Token

### Getting Your Bot Token

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name (e.g., "Kaoruko")
3. Go to the "Bot" section
4. Click "Reset Token" and copy your bot token
5. Enable these Privileged Gateway Intents:
   - Message Content Intent
   - Server Members Intent (optional)
6. Go to OAuth2 > URL Generator
7. Select scopes: `bot`
8. Select permissions: `Send Messages`, `Embed Links`, `Read Message History`
9. Copy the generated URL and invite the bot to your server

### Installation

1. Clone or download this repository
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a `.env` file in the root directory:
\`\`\`env
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
\`\`\`

4. Run the bot:
\`\`\`bash
npm start
\`\`\`

For development with auto-reload:
\`\`\`bash
npm run dev
\`\`\`

## Deployment Options

### Replit
1. Import this project to Replit
2. Add your `DISCORD_TOKEN` to Secrets (lock icon)
3. Click "Run"

### VPS (Linux Server)
\`\`\`bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup
git clone <your-repo>
cd kaoruko-prank-bot
npm install

# Run with PM2 (process manager)
npm install -g pm2
pm2 start index.js --name kaoruko
pm2 save
pm2 startup
\`\`\`

## Safety Features

✅ No actual permission changes
✅ No real channel deletion  
✅ No mass tagging or spam
✅ No harmful automation
✅ 100% compliant with Discord TOS

## Commands Overview

| Command | Description | Safety Level |
|---------|-------------|--------------|
| !admin | Fake admin grant | 100% Safe |
| !backup | Fake backup creation | 100% Safe |
| !do | Fake nuke animation | 100% Safe |
| !roast | Funny roasts | 100% Safe |
| !quote | Anime quotes | 100% Safe |
| !hack | Fake hacking | 100% Safe |
| !pranklevel | Random stats | 100% Safe |

## License

MIT - Feel free to modify and use!

## Support

For issues or questions, create an issue on the repository.

---

Made with 💜 for harmless fun and pranks!
