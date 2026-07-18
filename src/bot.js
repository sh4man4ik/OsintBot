import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

export { bot };
