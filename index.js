const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function() {

	console.log('Bot connecté')
	bot.user.setGame('Youtube').catch(console.error)
	
})


bot.on('guildMemberAdd', function(member) {

	member.addRole(member.guild.roles.find("name", "Abonné(e)s"))

})

bot.login(process.env.TOKEN)
