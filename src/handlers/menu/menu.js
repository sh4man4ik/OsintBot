import { getText } from '../../texts.js/texts.js';

export function menu(ctx) {
	ctx.reply(getText('commands.menu.text'), {
		reply_markup: {
			inline_keyboard: [
				[
					{ text: getText('commands.menu.buttons.keyword'), callback_data: 'btn_keyword' },
					{ text: getText('commands.menu.buttons.exclude'), callback_data: 'btn_exclude' }
				],
				[{ text: getText('commands.menu.buttons.filetype'), callback_data: 'btn_filetype' }],
				[
					{ text: getText('commands.menu.buttons.site'), callback_data: 'btn_site' },
					{ text: getText('commands.menu.buttons.related'), callback_data: 'btn_related' }
				],
				[
					{ text: getText('commands.menu.buttons.intitle'), callback_data: 'btn_intitle' },
					{ text: getText('commands.menu.buttons.intext'), callback_data: 'btn_intext' },
					{ text: getText('commands.menu.buttons.inurl'), callback_data: 'btn_inurl' }
				],
				[{ text: getText('commands.menu.buttons.search'), callback_data: 'btn_search' }]
			]
		}
	});
}
