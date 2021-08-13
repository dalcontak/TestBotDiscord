import { Client, Intents } from "discord.js";
import { connectDatabase } from './database/connectDatabase';
import { validateEnv } from "./utils/validateEnv";

(async () => {
    if (!validateEnv()) return;
    
    const BOT = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });

    BOT.on("ready", () => console.log("Connected to Discord!"));

    await connectDatabase();

    await BOT.login(process.env.BOT_TOKEN);    
})();