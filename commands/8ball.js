const Discord = module.require('discord.js');

var fortunes = [
    "Sim",
    "Não",
    "Talvez",
    "Não entendi, tente novamente"
];


module.exports.run = async (bot, message, args) => {

if(!args[0]){
  return message.channel.send("| Digite uma pergunta !")
}
if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else message.channel.send("| Eu não consigo ler isto! :(");
}

module.exports.config = {
    name: "8ball",
    description: " a member in the discord!",
    usage: "*8ball",
    accessableby: "Members",
    aliases: ["ava"]
}