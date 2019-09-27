const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
        const saywhat = args.join(" ")
        if (saywhat < 1) return message.channel.send("Fale algo para eu mandar!")
        message.channel.send(`` + saywhat)
}