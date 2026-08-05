import { getText } from '../../../texts/texts.js';

export function dataParsing(ctx, receivedJson) {
	let message;
	let links;

	try {
		links = receivedJson.organic_results
			.map((result) => `${getText('commands.menu.result.link', ctx)}[${result.title}](${result.link})`)
			.join('\n');
	} catch (error) {
		console.log('Error: ' + error);
	}

	if (links) {
		message = `${getText('commands.menu.result.text', ctx)}\n\n${links}`;
	} else {
		message = getText('commands.menu.result.empty', ctx);
	}

	return message;
}
