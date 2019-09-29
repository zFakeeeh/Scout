const Discord = require("discord.js")


module.exports = bot => {
     console.log(`${bot.user.username} está online`)


    let statuses = [
        `| Meu prefix é ! 🌀`,`| Meu criador é o v¡тσяᵈᶻⁿ#9625 🌌`,`| Meu server de suporte está pronto ! *suporte 🎊`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "STREAMING",url:"https://www.twitch.tv/zfakeeeh"});

    }, 10000)

}