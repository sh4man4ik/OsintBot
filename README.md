# What is it?

OsintBot is a Telegram bot that helps you **find the information** you need using **advanced search operators**.

# How does it work?

Users build a query by adding keywords, searching by file type, or applying other filters. The algorithm transforms this input into a search string, uses the API to get Google search results, and returns relevant links.

# Quick Start

The bot can be accessed at https://t.me/osintdorking_bot

# Source Code

1. Clone the repository:

```bash
git clone https://github.com/sh4man4ik/OsintBot.git
```

2. Go to the directory:

```bash
cd OsintBot
```

3. Download the dependencies:

```bash
npm install
```

4. Create a .env file in the root directory:

- `BOT_TOKEN — Your Telegram bot token`
- `MIXPANEL_TOKEN — Your Mixpanel token`
- `SERPAPI_APIKEY — SerpApi API Key`

For example:

```bash
BOT_TOKEN="437r436i7xddhjkftu8w4930454t"
MIXPANEL_TOKEN="rcjirjmeficmk3484c84c5f4j8vfn"
SERPAPI_APIKEY="ewldlpxlk4jmcfdljamlcfkjmicf"
```

5. Launch the bot:

```bash
npm run bot
```

# Tech Stack

The following technologies are used to develop the bot: **JavaScript**, **Node.js**, **Telegraf** and **SerpApi**. Also **Mixpanel** is used for the bot's analytics.

# Bot Hosting

The code contains the **ONLY FOR RENDER** file. If you use a different hosting method, just delete that. Otherwise, if you want to host a script for free, you don't need to delete the code. How does it work and why?

1. Connect your repository with this code (or your modified) to **Render** as a **Web Service**. Only there is a free plan. Also, without this code, Render will not allow you to build the project because it needs to listen to the port.

2. Add your _.env_ variables to the hosting settings.

3. Next, copy the link provided by Render and leave it on the **UptimeRobot** website. Also, don't forget to set it to check our website every **14 minutes**. This is important to prevent our bot from falling sleep.
