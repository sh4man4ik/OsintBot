import { bot } from './bot.js';
import { getText } from './texts.js/texts.js';
import { menu } from './handlers/menu/menu.js';

bot.start((ctx) => {
	ctx.reply(getText('commands.start'), { parse_mode: 'Markdown' });
});

bot.help((ctx) => {
	ctx.reply(getText('commands.help'), { parse_mode: 'Markdown' });
});

bot.command('menu', (ctx) => {
	menu(ctx);
});
