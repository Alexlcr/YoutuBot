const Discord = require('discord.js')
const Command = require('./command')
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
			.addField(":musical_score: Bienvenue dans la communauté des amateurs de son !", "Vous avez accès à tous les channels concernant ce Youtubeur")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/channel/UCow2IGnug1l3Xazkrc5jM_Q')
	
		}else if (message.content.startsWith('/Mastu')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Mastu'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("V'la la voiture qui t'emmène dans la commu de Mastu", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/channel/UCAhaFPP6v3WCfK5Tjao0B7A')

		}else if (message.content.startsWith('/LeRireJaune')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Mastu'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("______", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/channel/UCTt2AnK--mnRmICnf-CCcrw')

		}else if (message.content.startsWith('/DrNozman')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Dr Nozman'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Non d'un neutrinion !! T'as rejoins la communauté de Dr Nozman!! :microscope: ", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/user/DrNozman')

		}else if (message.content.startsWith('/GearLocker')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Gear Locker'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Réglez vos hop-up et direction le terrain d'airsoft !! ", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/channel/UC4B3MCi-egoxfKd73j66rlw')

		}else if (message.content.startsWith('/JoueurDuGrenier')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Joueur du Grenier'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Dépoussiérez vos cassettes de jeux ici elles serviront ! :video_game: ", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/user/joueurdugrenier')

		}else if (message.content.startsWith('/Mamytwink')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Mamytwink'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Prenez votre lampe on part dans un lieu abandonné !:flashlight: ", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/channel/UCjxfoYq1vAEGU7KD_C3I48g')

		}else if (message.content.startsWith('/Cyprien')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Cyprien'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("POURQUOI t'as rejoins cette communauté ?!", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/channel/UCyWqModMQlbIo8274Wh_ZsQ')

		}else if (message.content.startsWith('/100%Bitume')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté 100% BITUME'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Enfourche ta motobilette tu pars dans la commu de 100%Bitume", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/user/100poursangBITUME')

		}else if (message.content.startsWith('/FabienOlicard')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté FabienOlicard'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Laisse moi deviner... Tu es abonné(e) à la chaine de Fabien Olicard ! Je sais, c'est impressionnant... ", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/user/FabienOlicard')

		}else if (message.content.startsWith('/CYR!L')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté CYR!L'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Viens avec nous dans la quête du saint couteau ! :dagger:  :crown: ", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:      https://www.youtube.com/channel/UC-4M8AN08hw39nn2v91VuMQ')

		}else if (message.content.startsWith('/Bapt&Gael')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Bapt&Gael'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("_____________", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:      https://www.youtube.com/channel/UCcyGqHmijBxtOcvvIAHqJrQ')
		}
		}}
