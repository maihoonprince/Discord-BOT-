const {REST , Routes} = require("discord.js");

const commands = [
    {
      name: 'create',
      description: 'Create a new short URL',
    },
  ];


  
const rest = new REST({ version: '10' }).setToken("MTE2MTA5NDc0OTAzNDM4NTUyMA.GNw-e8.7xlyk5NpEOCbN68wTeQ43A3Azc7-MHXdchNyGI");


(async ()=> {
    try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1161094749034385520"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}) ();


