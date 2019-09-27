const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission('ADD_REACTIONS')) return message.reply('Desculpe, eu preciso da permissão ADD_REACTION para fazer isso')
      const sayMessage = args.join(" ");
      if (sayMessage.length < 1) return message.channel.send("Digite sua sugestão")
      let sChannel = message.guild.channels.find(x => x.name === "sugestao")
    const embed = new Discord.RichEmbed()
     .setColor(0x00A2E8)
     .addField("Sugestão:", `**${sayMessage}**!`)
     .setFooter("Sugestão de " + message.author.username, message.author.avatarURL)
     .setTimestamp()
      message.channel.send({embed}).then(m => {
         m.react('⬆');
         m.react('⬇');
        })
    }