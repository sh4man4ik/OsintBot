import './scenes/menuScene.js';

import { bot } from '../../bot.js';
import { getData } from './api/getData.js';
import { getText } from '../../texts/texts.js';

bot.action(/operator\|(.+)/, async (ctx) => {
	let buttonOperator = ctx.match[1];

	ctx.session.requestString ??= '';

	if (buttonOperator == 'reset') {
		ctx.session.requestString = '';
		await ctx.reply(getText('commands.menu.clear', ctx));
	}

	if (buttonOperator == 'search') {
		if (ctx.session.requestString) {
			let link = 'https://lite.duckduckgo.com/lite/?q=' + encodeURIComponent(ctx.session.requestString);
			let data = await getData(ctx, link);

			await ctx.reply(data, { parse_mode: 'Markdown', disable_web_page_preview: true });
		} else {
			await ctx.reply(getText('commands.menu.empty', ctx));
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
	await ctx.reply(getText('commands.menu.text', ctx), {
		parse_mode: 'Markdown',
		reply_markup: {
			inline_keyboard: [
				[
					{ text: getText('commands.menu.buttons.keyword', ctx), callback_data: 'operator|keyword' },
					{ text: getText('commands.menu.buttons.filetype', ctx), callback_data: 'operator|filetype' }
				],
				[
					{ text: getText('commands.menu.buttons.fewer', ctx), callback_data: 'operator|fewer' },
					{ text: getText('commands.menu.buttons.more', ctx), callback_data: 'operator|more' }
				],
				[
					{ text: getText('commands.menu.buttons.include', ctx), callback_data: 'operator|include' },
					{ text: getText('commands.menu.buttons.exclude', ctx), callback_data: 'operator|exclude' }
				],
				[
					{ text: getText('commands.menu.buttons.intitle', ctx), callback_data: 'operator|intitle' },
					{ text: getText('commands.menu.buttons.inurl', ctx), callback_data: 'operator|inurl' }
				],
				[
					{ text: getText('commands.menu.buttons.reset', ctx), callback_data: 'operator|reset' },
					{ text: getText('commands.menu.buttons.search', ctx), callback_data: 'operator|search' }
				]
			]
		}
	});
}
