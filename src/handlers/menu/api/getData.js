import { dataParsing } from '../helpers/dataParsing.js';
import { getJson } from 'serpapi';
import { getText } from '../../../texts/texts.js';
import { trackEvent } from '../../../analytics/trackEvent.js';

export async function getData(ctx, query) {
	await trackEvent(ctx, 'bot_search');

	let data;
	let receivedJson;

	try {
		await getJson(
			{
				engine: 'google',
				q: query,
				google_domain: 'google.com',
				api_key: process.env.SERPAPI_APIKEY
			},
			(json) => {
				receivedJson = json;
			}
		);

		data = dataParsing(ctx, receivedJson);
	} catch (error) {
		console.log('Error: ' + error);

		data = getText('commands.menu.error', ctx);
	}

	return data;
}
