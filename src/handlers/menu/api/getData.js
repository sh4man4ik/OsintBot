import { dataParsing } from '../helpers/dataParsing.js';
import { getText } from '../../../texts/texts.js';
import { trackEvent } from '../../../analytics/trackEvent.js';

export async function getData(ctx, link) {
	await trackEvent(ctx, 'bot_search');

	let data;

	try {
		const response = await fetch(link);

		if (!response.ok) {
			throw new Error(response.status);
		}

		const result = await response.text();

		data = dataParsing(ctx, result);
	} catch (error) {
		console.log('Error: ' + error);

		data = getText('commands.menu.error', ctx);
	}

	return data;
}
