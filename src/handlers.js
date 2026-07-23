import { bot } from './bot.js';
import { getText } from './texts/texts.js';
import { menu } from './handlers/menu/menu.js';
import { settings } from './handlers/settings/settings.js';

bot.start(async (ctx) => {
	await ctx.reply(getText('commands.start', ctx), { parse_mode: 'Markdown' });
});

bot.help(async (ctx) => {
	await ctx.reply(getText('commands.help', ctx), { parse_mode: 'Markdown' });
});

bot.command('settings', (ctx) => {
	settings(ctx);
});

bot.command('menu', (ctx) => {
	menu(ctx);
});
