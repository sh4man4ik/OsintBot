import { Markup } from 'telegraf';
import { getText } from '../../texts/texts.js';

export async function donation(ctx) {
	const donationUrl = 'https://buymeacoffee.com/sh4man4ik';

	await ctx.reply(
		getText('commands.donation.text', ctx),
		Markup.inlineKeyboard([Markup.button.url(getText('commands.donation.button', ctx), donationUrl)])
	);
}
