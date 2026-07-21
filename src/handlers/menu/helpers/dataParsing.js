import parse from 'node-html-parser';

export function dataParsing(result) {
	let root = parse(result);

	let links =
		root
			.querySelectorAll('.link-text')
			.map((a) => a.textContent)
			.join(' ') + ' ';

	return links;
}
