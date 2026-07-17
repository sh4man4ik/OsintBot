import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { message } from 'telegraf/filters';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on(message('text'), async (ctx) => {
	await ctx.reply(`Hello, World!`);
});

bot.launch();
