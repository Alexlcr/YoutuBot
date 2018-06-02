const Discord = require('discord.js')
const Command = require('./Commande/command')

module.exports = class Role extends Command {

	static match(message) {
		return message.content.startsWith('/')
	}

	static action(message) {
		if (message.content.startsWith('/Squeezie')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Communauté Squeezie'));
	
			var embed = new Discord.RichEmbed()
			.setColor("#c11111")
			.addField("Yo bienvenue dans la commu de Squeezie", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/user/aMOODIEsqueezie')
	
		}else if (message.content.startsWith('/FantaBobGames')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté FantaBobGames'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Dis BONSOIR à la commu de FantaBobGames", "Vous avez accès à tous les channels les concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de leur chaine YouTube:       https://www.youtube.com/user/fantabobgames')
	
		}else if (message.content.startsWith('/VodKprod')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté VodK'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Empoigne ton BMX tu fais partie de la commaunauté de VodK", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/user/VodKprod')
	
		}else if (message.content.startsWith('/Amixem')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Amixem'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Direction la RedBox !:metro: ", "Vous avez accès à tous les channels concernant ce Youtubeur")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/user/FPSCoopGameplays')
	
		}else if (message.content.startsWith('/TiboInShape')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Tibo InShape'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Go au temple pour choper de la petite :wink: ", "Vous avez accès à tous les channels concernant ce Youtubeur")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/user/OutLawzFR')
	
		}else if (message.content.startsWith('/Joyca')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté JOYCA'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("V'la la voitu", "Vous avez accès à tous les channels concernant ce Youtubeur")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/channel/UCow2IGnug1l3Xazkrc5jM_Q')
	
		}else if (message.content.startsWith('/Mastu')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Mastu'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("V'la la voiture qui t'emmène bans la commu de Mastu", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/channel/UCAhaFPP6v3WCfK5Tjao0B7A')

		}else if (message.content.startsWith('/LeRireJaune')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Mastu'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/user/VodKprod')
		}
		}}