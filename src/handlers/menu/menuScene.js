import { Scenes, session } from 'telegraf';

import { bot } from '../../bot.js';
import { getText } from '../../texts/texts.js';
import { message } from 'telegraf/filters';

const menuScene = new Scenes.BaseScene('MENU_SCENE');
const stage = new Scenes.Stage([menuScene]);

bot.use(session());
bot.use(stage.middleware());

menuScene.enter(async (ctx) => {
	await ctx.reply(getText('commands.menu.enter'));
});

menuScene.on(message('text'), (ctx) => {
	let buttonOperator = ctx.scene.state.buttonOperator;
	let messageText = ctx.message.text;

	switch (buttonOperator) {
		case 'keyword':
			ctx.session.requestString += `"${messageText}" `;
			break;
		case 'exclude':
			ctx.session.requestString += `-${messageText} `;
			break;
		case 'filetype':
			ctx.session.requestString += `filetype:${messageText} `;
			break;
		case 'site':
			ctx.session.requestString += `site:${messageText} `;
			break;
		case 'related':
			ctx.session.requestString += `related:${messageText} `;
			break;
		case 'intitle':
			ctx.session.requestString += `intitle:${messageText} `;
			break;
		case 'intext':
			ctx.session.requestString += `intext:${messageText} `;
			break;
		case 'inurl':
			ctx.session.requestString += `inurl:${messageText} `;
			break;
		default:
			ctx.session.requestString = '';
			break;
	}

	return ctx.scene.leave();
});

menuScene.leave(async (ctx) => {
	await ctx.reply(getText('commands.menu.leave'));
});
