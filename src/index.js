import './handlers.js';

import { bot } from './bot.js';
import { onlyForRender } from './helpers/onlyForRender.js';

bot.launch();
onlyForRender();
