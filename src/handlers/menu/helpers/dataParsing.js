import { decodeLink } from './decodeLink.js';
import { getText } from '../../../texts/texts.js';
import parse from 'node-html-parser';

export function dataParsing(ctx, result) {
	console.log(result);

	let root = parse(result);
	let hasLinks = false;
	let message;

	let links = root
		.querySelectorAll('.result-link')
		.filter((a) => !a.getAttribute('href')?.includes('https://duckduckgo.com/y.js'))
		.map((a) => {
			if (!hasLinks && a.textContent) {
				hasLinks = true;
			}

			let decodedLink;

			try {
				decodedLink = decodeLink(a.getAttribute('href'));
			} catch (error) {
				console.log('Error: ' + error);

				return null;
			}

			return `${getText('commands.menu.result.link', ctx)} [${a.textContent}](${decodedLink})`;
		})
		.filter((link) => link != null)
		.join('\n');

	if (hasLinks) {
		message = `${getText('commands.menu.result.text', ctx)}\n\n${links}`;

		ctx.session.requestString = '';
	} else {
		message = getText('commands.menu.error', ctx);
	}

	return message;
}
