const Discord = require("discord.js")

exports.run = (client, message, args) => {
    async function ban() {
        let userToBan = message.mentions.members.first();

        if (!userToBan) {
            return message.reply("Mencione um usuário para banir");
        }
        if (!userToBan.bannable) {
            return message.reply("Não posso banir este usuário pois ele possui um cargo maior que o meu")
        }

        if (!args[1]) return message.reply("Digite um motivo")
        let [...powod] = args.splice(1)

        await userToBan.send("**Você foi banido do servidor motivo: **" + powod.join(" "))
            .catch(error => console.log(error))

        await userToBan.ban(powod)
            .catch(error => message.reply(`Desculpe, ${message.author} não é possivel o banir devido ao erro: ${error}`));
        message.reply("**Tomado!**")

        let banEmbed = new Discord.RichEmbed()
            .setTitle("Ban")
            .addField("Usuário", userToBan)
            .addField("Staff", message.author)
            .addField("Razão", powod.join(" "))
            .setColor("#daa520")
    

        client.channels.get("630097438002118667").send(banEmbed) //490893453421445151
    }

//Sprawdzenie uprawnień
    if(message.member.roles.find("name", "Administradores") || message.member.roles.find("name", "Moderadores")){
        ban();
    } else {
        return message.reply("Erro: Você não tem permissão para fazer isto!")
    }
}