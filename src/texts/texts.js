const RUSSIAN_TEXTS = {
	commands: {
		start:
			'👋 Привет! Я *OSINT Dorking Bot*\n\n' +
			'Помогу найти нужную информацию в сети с помощью продвинутых поисковых операторов\n\n' +
			'Открой /help, чтобы узнать, как пользоваться ботом, или сразу открывай /menu',
		help:
			'📖 *Как пользоваться ботом:*\n\n' +
			'1️⃣ Открой /menu и выбери нужные операторы кнопками\n\n' +
			'2️⃣ Заполни значения для нужных операторов\n\n' +
			'3️⃣ Нажми *ПОИСК* и получи результат',
		settings: {
			text: '⚙️ *Настройки*\n\n' + 'Выберите язык: ',
			buttons: {
				russian: '🇷🇺 Русский',
				english: '🇺🇸 Английский'
			},
			success: '🌍 Язык успешно изменен!'
		},
		menu: {
			text:
				'⚙️ *Собери свой поисковый запрос*\n\n' +
				'1️⃣ — *Можно только одно значение*\n' +
				'🔢 — *Можно несколько значений через пробел*\n\n' +
				'🔑 🔢 *Ключевые слова* — основной запрос\nПример: `утечка данных`\n\n' +
				'📄 🔢 *Типы файла* — искать по формату файлов (pdf, doc, docx, xls, xlsx, ppt, pptx, html)\nПример: `pdf pptx`\n\n' +
				'📉 🔢 *Меньше слов* — снизить значимость слов в поиске\nПример: `форум обсуждение`\n\n' +
				'📈 🔢 *Больше слов* — повысить значимость слов в поиске\nПример: `приватный ключ`\n\n' +
				'🌐 1️⃣ *На сайте* — искать на указанном сайте\nПример: `github.com`\n\n' +
				'🚫 🔢 *Без сайтов* — исключить сайты из поиска\nПример: `reddit.com`\n\n' +
				'📌 🔢 *В заголовке* — слова встречаются в заголовке страницы\nПример: `панель администратора`\n\n' +
				'🔗 🔢 *В URL* — слова встречаются прямо в ссылке\nПример: `admin/login`\n\n' +
				'❌ *СБРОСИТЬ* — обнулить текущий запрос\n\n' +
				'🔍 *ПОИСК* — собрать всё в один запрос и найти',
			buttons: {
				keyword: '🔑 Ключевые слова',
				filetype: '📄 Типы файла',
				fewer: '📉 Меньше слов',
				more: '📈 Больше слов',
				include: '🌐 На сайте',
				exclude: '🚫 Без сайтов',
				intitle: '📌 В заголовке',
				inurl: '🔗 В URL',
				reset: '❌ СБРОСИТЬ',
				search: '🔍 ПОИСК'
			},
			result: {
				text: '🔎 Результаты поиска: ',
				link: '🔗 '
			},
			enter: '💬 Введите значение:',
			leave: '✅ Значение успешно добавлено',
			clear: '🧹 Поисковый запрос успешно сброшен',
			empty: '⚠️ Поисковый запрос пустой',
			error: '❌ Произошла ошибка! Попробуйте еще раз'
		}
	}
};

const ENGLISH_TEXTS = {
	commands: {
		start:
			'👋 Hello! I am *OSINT Dorking Bot*\n\n' +
			'I will help you find the information you need on the web using advanced search operators\n\n' +
			'Open /help to learn how to use the bot, or go straight to /menu',
		help:
			'📖 *How to use the bot:*\n\n' +
			'1️⃣ Open /menu and select the required operators using buttons\n\n' +
			'2️⃣ Enter values for the selected operators\n\n' +
			'3️⃣ Click *SEARCH* to get your results',
		settings: {
			text: '⚙️ *Settings*\n\n' + 'Select language: ',
			buttons: {
				russian: '🇷🇺 Russian',
				english: '🇺🇸 English'
			},
			success: '🌍 Language successfully changed!'
		},
		menu: {
			text:
				'⚙️ *Build your search query*\n\n' +
				'1️⃣ — *Only one value allowed*\n' +
				'🔢 — *Multiple values allowed (separated by spaces)*\n\n' +
				'🔑 🔢 *Keywords* — main search query\nExample: `data breach`\n\n' +
				'📄 🔢 *File types* — search by file format (pdf, doc, docx, xls, xlsx, ppt, pptx, html)\nExample: `pdf pptx`\n\n' +
				'📉 🔢 *Fewer words* — reduce word importance in search\nExample: `forum discussion`\n\n' +
				'📈 🔢 *More words* — increase word importance in search\nExample: `private key`\n\n' +
				'🌐 1️⃣ *On site* — search within a specific website\nExample: `github.com`\n\n' +
				'🚫 🔢 *Exclude sites* — remove websites from search\nExample: `reddit.com`\n\n' +
				'📌 🔢 *In title* — words appear in page title\nExample: `admin panel`\n\n' +
				'🔗 🔢 *In URL* — words appear directly in link\nExample: `admin/login`\n\n' +
				'❌ *RESET* — clear current query\n\n' +
				'🔍 *SEARCH* — combine everything and search',
			buttons: {
				keyword: '🔑 Keywords',
				filetype: '📄 File types',
				fewer: '📉 Fewer words',
				more: '📈 More words',
				include: '🌐 On site',
				exclude: '🚫 Exclude sites',
				intitle: '📌 In title',
				inurl: '🔗 In URL',
				reset: '❌ RESET',
				search: '🔍 SEARCH'
			},
			result: {
				text: '🔎 Search results: ',
				link: '🔗 '
			},
			enter: '💬 Enter value:',
			leave: '✅ Value added successfully',
			clear: '🧹 Search query reset successfully',
			empty: '⚠️ Search query is empty',
			error: '❌ An error occurred! Please try again'
		}
	}
};

function getText(path, ctx) {
	ctx.session.language ??= 'english';

	let currentText;

	switch (ctx.session.language) {
		case 'english':
			currentText = ENGLISH_TEXTS;
			break;
		case 'russian':
			currentText = RUSSIAN_TEXTS;
			break;
		default:
			currentText = ENGLISH_TEXTS;
			break;
	}

	let parts = path.split('.');

	for (let i = 0; i < parts.length; i++) {
		currentText = currentText[parts[i]];

		if (!currentText) {
			break;
		}
	}

	return currentText;
}

export { getText };
