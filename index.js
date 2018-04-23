const Discord = require('discord.js')
const bot = new Discord.Client()
const Role = require('./commands/role')
const moment = require('moment')
var i = 0


bot.on('ready', function() {

	console.log('Bot connecté')
	bot.user.setGame('Youtube').catch(console.error)
	
})


//guildMemeberAdd
bot.on('guildMemberAdd', function(member) {

	member.guild.channels.find("name", "general").sendMessage(member.toString() + ' Bienvenue dans le serveur ' + '**' + member.guild.name + '**' + ' utilisez la commande d?all_roles pour les roles que vous souhaitez ajouter, *__n\'oubliez pas de lire le reglement__*');

	member.addRole(member.guild.roles.find("name", "Abonné(e)s"))

})



	} 
 	
})


bot.login(NDM3NzUzODQ3OTU2NjM1NjU4.Db9y9w.QtVI_WOu7icTjUSz2Cunoaa_A24)
