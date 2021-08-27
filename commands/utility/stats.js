const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');

module.exports = {
    config: {
        name: "stats",
        aliases: ['bot-info'],
        category: "info",
        description:"Mustra estadistica del bot",
        usage: "",
   },
    run: async (client, message, args) => {
        
    const d = moment.duration(client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const seconds = (d.seconds() == 1) ? `${d.seconds()} seconds` : `${d.seconds()} seconds`;
    const minutes = (d.minutes() == 1) ? `${d.minutes()} minutes` : `${d.minutes()} minutes`;
    const { totalMemMb, usedMemMb } = await mem.info();
    const clientStats = stripIndent`
      Servers   :: ${client.guilds.cache.size}
      Users     :: ${client.guilds.cache.reduce(
    (prev, guild) => prev + guild.memberCount, 0)}
      Channels  :: ${client.channels.cache.size}
      WS Ping   :: ${Math.round(client.ws.ping)}ms
      Uptime    :: ${days} and ${hours} and ${minutes} and ${seconds}
    `;
    
    const embed = new MessageEmbed()
      .setTitle('Control Z\' Statistics')
      .setDescription(`\`\`\`asciidoc\n${clientStats}\`\`\``)
  
      	
   .setColor("060606")

   .setTimestamp()

  
    message.channel.send(embed);
    }
}
