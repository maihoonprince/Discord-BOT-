require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

const { Configuration, OpenAIApi } = require("openai");

// Create a configuration object with your OpenAI credentials
const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});

// Create an instance of the OpenAIApi using the configuration
const openai = new OpenAIApi(configuration);

client.on("messageCreate", async function (message) {
    try {
        if (message.author.bot) return;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Hey Give me a response for this: ${message.content}`,
            temperature: 0.5,
            max_tokens: 60, // Corrected property name to max_tokens
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        });

        message.reply(`${response.data.choices[0].text}`); // Corrected property name to choices

    } catch (error) {
        console.log(error);
    }
});

client.login(process.env.DISCORD_KEY);
