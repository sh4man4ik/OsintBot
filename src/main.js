import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { message } from 'telegraf/filters';
import onlyForRender from './onlyForRender.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Start'));

bot.help((ctx) => ctx.reply('Help'));

bot.on(message('text'), async (ctx) => {
	await ctx.reply(`Hi`);
});

bot.launch();
onlyForRender();
