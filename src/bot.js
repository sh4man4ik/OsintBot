import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { session } from 'telegraf';

dotenv.config({ quiet: true });

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

bot.use(session());

export { bot };
