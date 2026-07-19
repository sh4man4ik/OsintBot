import { Scenes, session } from 'telegraf';

import { bot } from '../../bot.js';
import { getText } from '../../texts.js/texts.js';
import { message } from 'telegraf/filters';

const menuScene = new Scenes.BaseScene('MENU_SCENE');
const stage = new Scenes.Stage([menuScene]);

bot.use(session());
bot.use(stage.middleware());

menuScene.enter((ctx) => {
	ctx.reply(getText('commands.menu.enter'));
});

menuScene.on(message('text'), (ctx) => {
	console.log(`${ctx.message.text} (${ctx.scene.state.buttonOperator})`);
	return ctx.scene.leave();
});

menuScene.leave((ctx) => {
	ctx.reply(getText('commands.menu.leave'));
});
