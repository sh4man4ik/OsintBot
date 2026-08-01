import { dataParsing } from '../helpers/dataParsing.js';
import { fetch } from 'undici';
import { getText } from '../../../texts/texts.js';
import { trackEvent } from '../../../analytics/trackEvent.js';

export async function getData(ctx, link) {
	await trackEvent(ctx, 'bot_search');

	let data;

	try {
		const response = await fetch(link, {
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
				Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
				'Accept-Language': 'en-US,en;q=0.9',
				Referer: 'https://duckduckgo.com/'
			}
		});

		if (!response.ok) {
			throw new Error(response.status);
		}

		const result = await response.text();

		data = dataParsing(ctx, result);
	} catch (error) {
		console.log('Error: ' + error.cause);

		data = getText('commands.menu.error', ctx);
	}

	return data;
}
