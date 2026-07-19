import './menuScene.js';

import { bot } from '../../bot.js';
import { getText } from '../../texts/texts.js';

bot.action(/btn\|(.+)/, async (ctx) => {
	let buttonOperator = ctx.match[1];

	ctx.session.requestString ??= '';

	if (buttonOperator == 'reset') {
		await ctx.reply(getText('commands.menu.clear'));
		ctx.session.requestString = '';
	}

	if (buttonOperator == 'search') {
		if (ctx.session.requestString) {
			await ctx.reply(
				`[${getText('commands.menu.result')}](https://www.google.com/search?q=${encodeURIComponent(ctx.session.requestString)})`,
				{
					parse_mode: 'Markdown'
				}
			);
			ctx.session.requestString = '';
		} else {
			ctx.reply(getText('commands.menu.empty'));
		}
	}

	if (buttonOperator != 'reset' && buttonOperator != 'search') {
		await ctx.scene.enter('MENU_SCENE', {
			buttonOperator: buttonOperator
		});
	}

	await ctx.answerCbQuery();
});

export async function menu(ctx) {
	await ctx.reply(getText('commands.menu.text'), {
		parse_mode: 'Markdown',
		reply_markup: {
			inline_keyboard: [
				[
					{ text: getText('commands.menu.buttons.keyword'), callback_data: 'btn|keyword' },
					{ text: getText('commands.menu.buttons.exclude'), callback_data: 'btn|exclude' }
				],
				[{ text: getText('commands.menu.buttons.filetype'), callback_data: 'btn|filetype' }],
				[
					{ text: getText('commands.menu.buttons.site'), callback_data: 'btn|site' },
					{ text: getText('commands.menu.buttons.related'), callback_data: 'btn|related' }
				],
				[
					{ text: getText('commands.menu.buttons.intitle'), callback_data: 'btn|intitle' },
					{ text: getText('commands.menu.buttons.intext'), callback_data: 'btn|intext' },
					{ text: getText('commands.menu.buttons.inurl'), callback_data: 'btn|inurl' }
				],
				[
					{ text: getText('commands.menu.buttons.reset'), callback_data: 'btn|reset' },
					{ text: getText('commands.menu.buttons.search'), callback_data: 'btn|search' }
				]
			]
		}
	});
}
