import { CommandList } from '../commands/_CommandList';
import { Message } from "discord.js";

export const onMessage = async (message: Message) => {

    if (message.author.bot) {
        return;
    }

    const prefix = "!";

    if (!message.content.startsWith(prefix)) {
        return;
    }

    for (const Command of CommandList) {
        if (message.content.startsWith(prefix + Command.name)) {
            await Command.run(message);
            break;
        }
    }

    console.log(message.content);
};