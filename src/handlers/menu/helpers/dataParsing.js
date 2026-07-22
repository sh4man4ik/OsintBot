import { decodeLink } from './decodeLink.js';
import { getText } from '../../../texts/texts.js';
import parse from 'node-html-parser';

export function dataParsing(ctx, result) {
	let root = parse(result);
	let hasLinks = false;
	let message;

	let links = root
		.querySelectorAll('.result__a')
		.filter((a) => !a.getAttribute('href').includes('https://duckduckgo.com/y.js'))
		.map((a) => {
			if (!hasLinks && a.textContent) {
				hasLinks = true;
			}
			return `${getText('commands.menu.result.link')} [${a.textContent}](${decodeLink(a.getAttribute('href'))})`;
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
