import { mixpanel } from '../bot.js';

export async function trackUser(ctx) {
	await mixpanel.people.set(String(ctx.from.id), {
		Username: ctx.from.username
	});

	await mixpanel.people.set_once(String(ctx.from.id), {
		'First Seen': new Date().toISOString()
	});
}
