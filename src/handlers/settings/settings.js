import { bot } from '../../bot.js';
import { getText } from '../../texts/texts.js';

bot.action(/language\|(.+)/, async (ctx) => {
	let language = ctx.match[1];

	ctx.session.language = language;

	ctx.reply(getText('commands.settings.success', ctx));

	await ctx.answerCbQuery();
});

export async function settings(ctx) {
	await ctx.reply(getText('commands.settings.text', ctx), {
		parse_mode: 'Markdown',
		reply_markup: {
			inline_keyboard: [
				[
					{ text: getText('commands.settings.buttons.russian', ctx), callback_data: 'language|russian' },
					{ text: getText('commands.settings.buttons.english', ctx), callback_data: 'language|english' }
				]
			]
		}
	});
}
