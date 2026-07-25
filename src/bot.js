import Mixpanel from 'mixpanel';
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { session } from 'telegraf';

dotenv.config({ quiet: true });

const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN, { geolocate: false, host: 'api-eu.mixpanel.com' });

const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(BOT_TOKEN);

bot.use(session());

export { bot, mixpanel };
