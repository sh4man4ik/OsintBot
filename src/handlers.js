import { bot } from './bot.js';
import { getText } from './texts.js/texts.js';
import { menu } from './handlers/menu/menu.js';

bot.start((ctx) => {
	ctx.reply(getText('commands.start'));
});

bot.help((ctx) => {
	ctx.reply(getText('commands.help'));
});

bot.command('menu', (ctx) => {
	menu(ctx);
});
