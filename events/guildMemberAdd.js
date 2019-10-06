module.exports = async (client, member) => {
	
	const embed = {
	  "color": 8311585,
	  "timestamp": new Date(),
	  "footer": {
		"icon_url": client.user.avatarURL,
		"text": "Data de entrada"
	  },
	  "author": {
		"name": member.user.username,
		"icon_url": member.user.avatarURL
	  },
	  "fields": [
		{
		  "name": "Bem vindo(a) ao servidor!",
		  "value": "Leia as regras para não ser banido ou kickado do server divirta-se  "
		}
	  ]
	};
	message.author.send(embed)
}