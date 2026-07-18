import { bot } from './bot.js';
import { getText } from './texts.js/texts.js';
import { message } from 'telegraf/filters';

bot.start((ctx) => ctx.reply(getText('commands.start')));

bot.help((ctx) => ctx.reply(getText('commands.help')));

bot.on(message('text'), async (ctx) => {
	await ctx.reply(ctx.message.text, {
		reply_markup: {
			inline_keyboard: [
				[
					{ text: '1111', callback_data: 'btn_1111' },
					{ text: '2222', callback_data: 'btn_2222' }
				],
				[
					{ text: '3333', callback_data: 'btn_3333' },
					{ text: '4444', callback_data: 'btn_4444' }
				]
			]
		}
	});
});
