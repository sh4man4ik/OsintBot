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
				'🚫 🔢 *Исключить слова* — убрать страницы с этими словами\nПример: `фейк`\n\n' +
				'📄 1️⃣ *Тип файла* — искать по формату файла\nПример: `env`\n\n' +
				'🌐 1️⃣ *На сайте* — искать на указанном домене\nПример: `github.com`\n\n' +
				'🧭 🔢 *Похожие сайты* — найти похожие по теме домены\nПример: `github.com reddit.com`\n\n' +
				'📌 🔢 *В заголовке* — слова встречаются в заголовке страницы\nПример: `панель администратора`\n\n' +
				'📝 🔢 *В тексте* — слова встречаются в содержимом страницы\nПример: `пароль`\n\n' +
				'🔗 1️⃣ *В URL* — слово встречается прямо в ссылке\nПример: `admin/login`\n\n' +
				'❌ *СБРОСИТЬ* — обнулить текущий запрос\n\n' +
				'🔍 *ПОИСК* — собрать всё в один запрос и найти',
			buttons: {
				keyword: '🔑 Ключевые слова',
				exclude: '🚫 Исключить слова',
				filetype: '📄 Тип файла',
				site: '🌐 Сайт',
				related: '🧭 Похожие сайты',
				intitle: '📌 В заголовке',
				intext: '📝 В тексте',
				inurl: '🔗 В URL',
				reset: '❌ СБРОСИТЬ',
				search: '🔍 ПОИСК'
			},
			result: {
				text: '🔎 Результаты поиска: ',
				link: '🔗 ',
				empty: '⚠️ Результаты поиска пустой'
			},
			enter: '💬 Введите значение:',
			leave: '✅ Значение успешно добавлено',
			clear: '🧹 Поисковый запрос успешно сброшен',
			empty: '⚠️ Поисковый запрос пустой',
			error: '❌ Произошла ошибка! Попробуйте еще раз'
		},
		donation: {
			text: '❤️ Поддержать разработчика',
			button: 'Поддержать'
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
				'🚫 🔢 *Exclude words* — remove pages with these words\nExample: `fake`\n\n' +
				'📄 1️⃣ *File type* — search by file format\nExample: `env`\n\n' +
				'🌐 1️⃣ *On site* — search within a specific domain\nExample: `github.com`\n\n' +
				'🧭 🔢 *Related sites* — find domain-related websites\nExample: `github.com reddit.com`\n\n' +
				'📌 🔢 *In title* — words appear in page title\nExample: `admin panel`\n\n' +
				'📝 🔢 *In text* — words appear in page content\nExample: `password`\n\n' +
				'🔗 1️⃣ *In URL* — word appears directly in link\nExample: `admin/login`\n\n' +
				'❌ *RESET* — clear current query\n\n' +
				'🔍 *SEARCH* — combine everything and search',
			buttons: {
				keyword: '🔑 Keywords',
				exclude: '🚫 Exclude words',
				filetype: '📄 File type',
				site: '🌐 Site',
				related: '🧭 Related sites',
				intitle: '📌 In title',
				intext: '📝 In text',
				inurl: '🔗 In URL',
				reset: '❌ RESET',
				search: '🔍 SEARCH'
			},
			result: {
				text: '🔎 Search results: ',
				link: '🔗 ',
				empty: '⚠️ Search results are empty'
			},
			enter: '💬 Enter value:',
			leave: '✅ Value added successfully',
			clear: '🧹 Search query reset successfully',
			empty: '⚠️ Search query is empty',
			error: '❌ An error occurred! Please try again'
		},
		donation: {
			text: '❤️ Support the developer',
			button: 'Support'
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
