import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js"
import dotenv from "dotenv"

dotenv.config()

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
})

const PREFIX = "!"
const PRANK_MESSAGES = [
  "☠️ % sᴅғ >.. ᴏɴ ᴛᴏᴘ",
  "🤡 Kaoruko owns this place",
  "😎 Just a prank bro",
  "💀 You really thought this was real?",
  "🎭 Pranked by Kaoruko",
  "⚡ Nice try, but no chaos here",
  "🎪 Welcome to the circus",
  "🃏 Get pranked lol",
  "🌟 Kaoruko strikes again",
  "🎯 Gotcha!",
]

const ROASTS = [
  "You have the technical skills of a potato trying to run Cyberpunk 2077.",
  "I've seen better decision-making from NPCs stuck running into walls.",
  "Your coding skills are like Internet Explorer - outdated and nobody wants them.",
  "Even my error messages are more helpful than you.",
  "You're the human equivalent of a Windows update - nobody asked for you.",
]

const ANIME_QUOTES = [
  '"Believe in the me that believes in you!" - But I don\'t believe in your admin dreams.',
  '"I\'ll take a potato chip... AND EAT IT!" - Also your admin request is denied.',
  '"People die when they are killed" - And servers DON\'T die when I prank them.',
  '"Fun things are fun!" - Like pranking you right now!',
  "\"It's over 9000!\" - The number of times you've been pranked.",
]

client.on("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`)
  console.log(`🤡 Kaoruko Prank Bot is ready to have some fun!`)
  client.user.setActivity("pranking users | !help", { type: "PLAYING" })
})

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.content.startsWith(PREFIX)) return

  const args = message.content.slice(PREFIX.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()

  try {
    switch (command) {
      case "admin":
        await handleAdmin(message)
        break
      case "backup":
        await handleBackup(message)
        break
      case "do":
        await handleDo(message)
        break
      case "roast":
        await handleRoast(message)
        break
      case "quote":
        await handleQuote(message)
        break
      case "hack":
        await handleHack(message)
        break
      case "pranklevel":
        await handlePrankLevel(message)
        break
      case "help":
        await handleHelp(message)
        break
      default:
        await message.reply("Unknown command! Use `!help` to see available commands.")
    }
  } catch (error) {
    console.error("Error executing command:", error)
    await message.reply("Oops! Something went wrong with that prank... 🤡")
  }
})

async function handleAdmin(message) {
  const responses = [
    "🤡 Haha nice try! You can't get admin from me!",
    "😂 LMAOOO you really thought? No admin for you!",
    "🎪 Welcome to the circus! Admin status: DENIED",
    "🃏 Nice attempt! But I'm not that dumb lol",
    "💀 Imagine thinking this would work... Admin request rejected!",
    "🎭 The audacity! No admin perms for you buddy",
  ]

  const randomResponse = responses[Math.floor(Math.random() * responses.length)]

  const embed = new EmbedBuilder()
    .setColor("#FF0000")
    .setTitle("🚫 Admin Request Denied")
    .setDescription(randomResponse)
    .setFooter({ text: "Pranked by Kaoruko" })
    .setTimestamp()

  await message.reply({ embeds: [embed] })
}

async function handleBackup(message) {
  const fakeBackup = {
    serverName: message.guild.name,
    backupId: Math.random().toString(36).substring(7).toUpperCase(),
    status: "100% Real 😉",
    size: `${Math.floor(Math.random() * 99999) + 10000} TB`,
    channels: Math.floor(Math.random() * 500) + 50,
    members: "Over 9000",
    messages: "Infinity and beyond",
    created: new Date().toISOString(),
    legitimacy: "420%",
    warning: "This is totally not fake at all trust me bro",
  }

  const embed = new EmbedBuilder()
    .setColor("#00FF00")
    .setTitle("📦 Server Backup Created!")
    .setDescription("```json\n" + JSON.stringify(fakeBackup, null, 2) + "\n```")
    .setFooter({ text: "Totally legit backup™" })
    .setTimestamp()

  await message.reply({ embeds: [embed] })
}

async function handleDo(message) {
  const warningEmbed = new EmbedBuilder()
    .setColor("#FF0000")
    .setTitle("⚠️ NUKE SEQUENCE INITIATED")
    .setDescription("Starting server destruction in...")
    .setFooter({ text: "Just kidding lol" })
    .setTimestamp()

  const sentMessage = await message.reply({ embeds: [warningEmbed] })

  // Countdown animation
  const countdowns = ["3️⃣", "2️⃣", "1️⃣"]
  for (const countdown of countdowns) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    warningEmbed.setDescription(`Starting server destruction in... ${countdown}`)
    await sentMessage.edit({ embeds: [warningEmbed] })
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))

  const prankEmbed = new EmbedBuilder()
    .setColor("#00FF00")
    .setTitle("🤣 JUST KIDDING!")
    .setDescription(
      "Did you really think I would nuke the server?\n\n😂 **PRANKED!** 😂\n\nNo servers were harmed in the making of this prank.",
    )
    .addFields(
      { name: "🎪 Prank Status", value: "Successful", inline: true },
      { name: "😱 Your Reaction", value: "Priceless", inline: true },
      { name: "💯 Score", value: "10/10", inline: true },
    )
    .setFooter({ text: "Kaoruko - The Harmless Prankster" })
    .setTimestamp()

  await sentMessage.edit({ embeds: [prankEmbed] })

  // Send some prank messages
  for (let i = 0; i < 5; i++) {
    await message.channel.send(PRANK_MESSAGES[Math.floor(Math.random() * PRANK_MESSAGES.length)])
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
}

async function handleRoast(message) {
  const target = message.mentions.users.first() || message.author
  const roast = ROASTS[Math.floor(Math.random() * ROASTS.length)]

  const embed = new EmbedBuilder()
    .setColor("#FF6B6B")
    .setTitle("🔥 Roasted!")
    .setDescription(`${target}, ${roast}`)
    .setFooter({ text: "Roasted by Kaoruko" })
    .setTimestamp()

  await message.reply({ embeds: [embed] })
}

async function handleQuote(message) {
  const quote = ANIME_QUOTES[Math.floor(Math.random() * ANIME_QUOTES.length)]

  const embed = new EmbedBuilder()
    .setColor("#FFD700")
    .setTitle("💬 Anime Wisdom")
    .setDescription(quote)
    .setFooter({ text: "Kaoruko's Quote Collection" })
    .setTimestamp()

  await message.reply({ embeds: [embed] })
}

async function handleHack(message) {
  const steps = [
    "Initiating connection to mainframe...",
    "Bypassing firewall... [████████] 100%",
    "Cracking encryption... [████████] 100%",
    "Accessing database... [████████] 100%",
    "Downloading files... [████████] 100%",
    "Covering tracks... [████████] 100%",
  ]

  const embed = new EmbedBuilder()
    .setColor("#00FF00")
    .setTitle("💻 HACKING IN PROGRESS")
    .setDescription("```\n" + steps[0] + "\n```")
    .setFooter({ text: "Totally real hacker" })

  const sentMessage = await message.reply({ embeds: [embed] })

  for (let i = 1; i < steps.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    embed.setDescription("```\n" + steps.slice(0, i + 1).join("\n") + "\n```")
    await sentMessage.edit({ embeds: [embed] })
  }

  await new Promise((resolve) => setTimeout(resolve, 1500))

  embed
    .setColor("#FF0000")
    .setTitle("🤡 HACK COMPLETE")
    .setDescription("```\nJust kidding! I can't hack anything.\nThis is just a prank lol 😂\n```")
    .setFooter({ text: "Pranked by Kaoruko" })

  await sentMessage.edit({ embeds: [embed] })
}

async function handlePrankLevel(message) {
  const level = Math.floor(Math.random() * 101)
  const user = message.mentions.users.first() || message.author

  let rank = "Newbie Prankster"
  let color = "#808080"

  if (level >= 80) {
    rank = "Legendary Prankster"
    color = "#FFD700"
  } else if (level >= 60) {
    rank = "Master Prankster"
    color = "#FF6B6B"
  } else if (level >= 40) {
    rank = "Advanced Prankster"
    color = "#4ECDC4"
  } else if (level >= 20) {
    rank = "Intermediate Prankster"
    color = "#95E1D3"
  }

  const embed = new EmbedBuilder()
    .setColor(color)
    .setTitle("🎭 Prank Level Meter")
    .setDescription(`**${user.username}'s Prank Level:** ${level}/100\n**Rank:** ${rank}`)
    .addFields({
      name: "📊 Stats",
      value: `Chaos: ${Math.floor(Math.random() * 100)}\nTrollness: ${Math.floor(Math.random() * 100)}\nLuck: ${Math.floor(Math.random() * 100)}`,
    })
    .setFooter({ text: "Totally scientific measurement" })
    .setTimestamp()

  await message.reply({ embeds: [embed] })
}

async function handleHelp(message) {
  const embed = new EmbedBuilder()
    .setColor("#9B59B6")
    .setTitle("🤡 Kaoruko Prank Bot - Commands")
    .setDescription("A harmless Discord prank bot for fun!")
    .addFields(
      { name: "!admin", value: "Try to get admin (spoiler: you won't)" },
      { name: "!backup", value: 'Create a "totally real" server backup' },
      { name: "!do", value: 'Initiate the "nuke" sequence (it\'s fake!)' },
      { name: "!roast [@user]", value: "Get roasted (or roast someone else)" },
      { name: "!quote", value: "Get an anime quote with a twist" },
      { name: "!hack", value: "Watch a fake hacking animation" },
      { name: "!pranklevel [@user]", value: "Check your prank level (0-100)" },
      { name: "!help", value: "Show this help message" },
    )
    .setFooter({ text: "100% Harmless | 0% Dangerous | 200% Fun" })
    .setTimestamp()

  await message.reply({ embeds: [embed] })
}

client.login(process.env.DISCORD_TOKEN)
