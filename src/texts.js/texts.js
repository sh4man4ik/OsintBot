const TEXTS = {
	commands: {
		start: 'Start',
		help: 'Help'
	}
};

function getText(path) {
	let parts = path.split('.');
	let currentText = TEXTS;

	for (let i = 0; i < parts.length; i++) {
		currentText = currentText[parts[i]];

		if (!currentText) {
			break;
		}
	}

	return currentText;
}

export default getText;
