import { getText } from '../../../texts/texts.js';

export async function getData(ctx, link) {
	let data;

	try {
		const response = await fetch(link);

		if (!response.ok) {
			throw new Error(response.status);
		}

		const result = await response.text();

		data = 'Result';

		ctx.session.requestString = '';
	} catch (error) {
		console.log('Error: ' + error);

		data = getText('commands.menu.error');
	}

	return data;
}
