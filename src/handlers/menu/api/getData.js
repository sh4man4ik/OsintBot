import { dataParsing } from '../helpers/dataParsing.js';
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
				Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
				'Accept-Language': 'en-US,en;q=0.9',
				'Accept-Encoding': 'gzip, deflate, br',
				'Cache-Control': 'no-cache',
				Pragma: 'no-cache',
				'Sec-Ch-Ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
				'Sec-Ch-Ua-Mobile': '?0',
				'Sec-Ch-Ua-Platform': '"Windows"',
				'Sec-Fetch-Dest': 'document',
				'Sec-Fetch-Mode': 'navigate',
				'Sec-Fetch-Site': 'none',
				'Sec-Fetch-User': '?1',
				'Upgrade-Insecure-Requests': '1',
				Referer: 'https://duckduckgo.com/'
			}
		});

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
