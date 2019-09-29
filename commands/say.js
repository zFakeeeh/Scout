const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("<:mine:603083235836297236> | **Você não pode usar esse comando**")

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }

}


module.exports.config = {
    name: "say",
    description: "sends a message that was inputted to a channel",
    usage: "!say",
    accessableby: "Staff",
    aliases: ["acc", "announcement", "falar"]
} 