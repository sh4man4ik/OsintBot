import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import getText from './texts.js/texts.js';
import { message } from 'telegraf/filters';
import onlyForRender from './onlyForRender.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(getText('commands.start')));

bot.help((ctx) => ctx.reply(getText('commands.help')));

bot.on(message('text'), async (ctx) => {
	await ctx.reply(ctx.text);
});

bot.launch();
onlyForRender();
