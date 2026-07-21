import './scenes/menuScene.js';

import { bot } from '../../bot.js';
import { getData } from './api/getData.js';
import { getText } from '../../texts/texts.js';

bot.action(/btn\|(.+)/, async (ctx) => {
	let buttonOperator = ctx.match[1];

	ctx.session.requestString ??= '';

	if (buttonOperator == 'reset') {
		ctx.session.requestString = '';
		await ctx.reply(getText('commands.menu.clear'));
	}

	if (buttonOperator == 'search') {
		if (ctx.session.requestString) {
			let link = 'https://lite.duckduckgo.com/lite/?q=' + ctx.session.requestString;
			let data = await getData(ctx, link);

			ctx.reply(data, { disable_web_page_preview: true });
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
					{ text: getText('commands.menu.buttons.filetype'), callback_data: 'btn|filetype' }
				],
				[
					{ text: getText('commands.menu.buttons.fewer'), callback_data: 'btn|fewer' },
					{ text: getText('commands.menu.buttons.more'), callback_data: 'btn|more' }
				],
				[
					{ text: getText('commands.menu.buttons.include'), callback_data: 'btn|include' },
					{ text: getText('commands.menu.buttons.exclude'), callback_data: 'btn|exclude' }
				],
				[
					{ text: getText('commands.menu.buttons.intitle'), callback_data: 'btn|intitle' },
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
