const { Client, GatewayIntentBits} = require ("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Genereting short ID for" + url,
        });
    }
    message.reply({
        content: "Hi from Bot",
    });
});

client.on("interactionCreate", interaction => {
    console.log(interaction);
    interaction.reply("Pong!!");
})

client.login("MTE2MTA5NDc0OTAzNDM4NTUyMA.GNw-e8.7xlyk5NpEOCbN68wTeQ43A3Azc7-MHXdchNyGI");