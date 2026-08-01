import { bot } from './bot.js';
import { donation } from './handlers/donation/donation.js';
import { getText } from './texts/texts.js';
import { menu } from './handlers/menu/menu.js';
import { settings } from './handlers/settings/settings.js';
import { trackEvent } from './analytics/trackEvent.js';
import { trackUser } from './analytics/trackUser.js';

bot.start(async (ctx) => {
	await trackUser(ctx);
	await trackEvent(ctx, 'bot_start');

	await ctx.reply(getText('commands.start', ctx), { parse_mode: 'Markdown' });
});

bot.help(async (ctx) => {
	await trackEvent(ctx, 'bot_help');

	await ctx.reply(getText('commands.help', ctx), { parse_mode: 'Markdown' });
});

bot.command('settings', async (ctx) => {
	await trackEvent(ctx, 'bot_settings');

	await settings(ctx);
});

bot.command('menu', async (ctx) => {
	await trackEvent(ctx, 'bot_menu');

	await menu(ctx);
});

bot.command('donation', async (ctx) => {
	await trackEvent(ctx, 'bot_donation');

	await donation(ctx);
});
