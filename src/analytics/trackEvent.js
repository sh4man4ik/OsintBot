import { mixpanel } from '../bot.js';

export async function trackEvent(ctx, event) {
	await mixpanel.track(event, {
		distinct_id: String(ctx.from.id),
		Username: ctx.from.username
	});
}
