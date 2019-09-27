exports.run = async (client, message) => {
    const ms = await message.channel.send("Ping?");
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit('📡 Seu ping é: ' + clientms + 'ms / 🖥 Ping do bot com Server:' + Math.round(client.ping) + 'ms');

	const embed = new Discord.RichEmbed()
.setColor(0x00A2E8)
.addField("Seu ping é de:",  + clientms)
.setFooter("O ping do bot com o server é:", Math.round(clientping) + 'ms' )
.setTimestamp()
 message.channel.send({embed}).then(m => {
   })
}