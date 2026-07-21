import { getText } from '../../../texts/texts.js';
import parse from 'node-html-parser';

export function dataParsing(ctx, result) {
	let root = parse(result);
	let hasLinks = false;
	let message;

	let links = root
		.querySelectorAll('.link-text')
		.map((a) => {
			if (!hasLinks && a.textContent) {
				hasLinks = true;
			}
			return `[${getText('commands.menu.result.link')}](${a.textContent})`;
		})
		.join('\n');

	if (hasLinks) {
		message = `${getText('commands.menu.result.text')}\n\n${links}`;

		ctx.session.requestString = '';
	} else {
		message = getText('commands.menu.error');
	}

	return message;
}
