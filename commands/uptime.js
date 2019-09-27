const Discord = require("discord.js");
const moment = require('moment');
require('moment-duration-format');
exports.run = (client, message, args) => {
  try {
    const embed = new Discord.RichEmbed()
      .setTitle("Tempo que o bot está online")
      .addField('Tempo:', moment.duration(client.uptime).format('d [dias], h [horas], m [minutos], s [segundos]', { trim: "small" }), true)
      .setColor(0x00A2E8)
     message.channel.send(embed)
  } catch (err) {
      message.channel.send(`Ocorreu um erro!: \`${err.message}\`. Tente novamente mais tarde!`);
  }
}

