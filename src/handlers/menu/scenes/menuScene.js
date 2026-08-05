import { Scenes } from 'telegraf';
import { bot } from '../../../bot.js';
import { getText } from '../../../texts/texts.js';
import { message } from 'telegraf/filters';

const menuScene = new Scenes.BaseScene('MENU_SCENE');
const stage = new Scenes.Stage([menuScene]);

bot.use(stage.middleware());

menuScene.enter(async (ctx) => {
	await ctx.reply(getText('commands.menu.enter', ctx));
});

menuScene.on(message('text'), (ctx) => {
	let buttonOperator = ctx.scene.state.buttonOperator;
	let messageText = ctx.message.text;

	ctx.session.requestString ??= '';

	switch (buttonOperator) {
		case 'keyword':
			ctx.session.requestString += `"${messageText}" `;
			break;
		case 'exclude':
			ctx.session.requestString +=
				messageText
					.split(' ')
					.map((element) => `-${element}`)
					.join(' ') + ' ';
			break;
		case 'filetype':
			ctx.session.requestString += `filetype:${messageText.split(' ')[0]} `;
			break;
		case 'site':
			ctx.session.requestString += `site:${messageText.split(' ')[0]} `;
			break;
		case 'related':
			ctx.session.requestString +=
				messageText
					.split(' ')
					.map((element) => `related:${element}`)
					.join(' ') + ' ';
			break;
		case 'intitle':
			ctx.session.requestString +=
				messageText
					.split(' ')
					.map((element) => `intitle:${element}`)
					.join(' ') + ' ';
			break;
		case 'intext':
			ctx.session.requestString +=
				messageText
					.split(' ')
					.map((element) => `intext:${element}`)
					.join(' ') + ' ';
			break;
		case 'inurl':
			ctx.session.requestString += `inurl:${messageText.split(' ')[0]} `;
			break;
		default:
			ctx.session.requestString = '';
			break;
	}

	return ctx.scene.leave();
});

menuScene.leave(async (ctx) => {
	await ctx.reply(getText('commands.menu.leave', ctx));
});
