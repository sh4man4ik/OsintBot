export function decodeLink(link) {
	link = 'https:' + link;
	link = decodeURIComponent(link);
	link = link.replace('https://duckduckgo.com/l/?uddg=', '');
	link = link.split('&rut=')[0];

	return link;
}
