import { getText } from '../../../texts/texts.js';
import parse from 'node-html-parser';

export function dataParsing(result) {
	let root = parse(result);

	let links = root
		.querySelectorAll('.link-text')
		.map((a) => `[${getText('commands.menu.result.link')}](${a.textContent})`)
		.join('\n');

	let message = `${getText('commands.menu.result.text')}\n\n${links}`;

	return message;
}
