const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Role extends Command {

	static match(message) {
		return message.content.startsWith('/')
	}

	static action(message) {

		//Add role
		if (message.content.startsWith('/Squeezie')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Communauté Squeezie'));

			var embed = new Discord.RichEmbed()
			.setColor("#c11111")
			.addField("Yo tout le monde c'est la commu de Squeezie !")
			message.channel.send(embed)
			
		else if (message.content.startsWith('/FantaBobGames')) {
			
			message.member.addRole(message.member.guild.roles.find('name','Communauté FantaBobGames')) {
			
			var emded = new Discord.RichEmbed()
			.setColor("#c11111")
			.addField("Bonsoir c'est la commu de FantaBobGames !")
			message.channel.send(embed)
			
		else if (message.content.startsWith('/MathSeFaitDesFilms')) {
			
				message.member.addRole(message.member.guild.roles.find('name','Communauté Math Se Fait Des Films'))
				
				var embed = new Discord.RichEmbed()
				.setColor("#c11111")
				.addField("Si tu rejoins la communauté t'auras du chocolat !")
				message.channel.send(embed)
		
		else if (message.content.startsWith('/VodKprod')
		
			message.member.addRole(message.member.guild.roles.find('name','Communauté VodKprod')

			var embed = new Discord.RichEmbed()
			.setColor("#c11111")
			.addField("Tu as rejoins la communauté don poneys !")
			message.channel.send(embed)
			
		else if (message.content.startsWith('/MathSeFaitDesFilms')) {
			
				message.member.addRole(message.member.guild.roles.find('name','Communauté Math Se Fait Des Films'))
				
				var embed = new Discord.RichEmbed()
				.setColor("#c11111")
				.addField("Si tu rejoins la communauté t'auras du chocolat !")
				message.channel.send(embed)
				
		else if (message.content.startsWith('/Tibo InShape')) {

                message.member.addRole(message.member.guild.roles.find('name','Communauté "Tibo InShape"'))

                var embed = new Discord.RichEmbed()
                .setColor("#c11111")
                .addField("DAMNN LA TEAM SHAPE J'espère que vous allez bien !")
                message.channel.send(embed)


		else if (message.content.startsWith('/JOYCA')) {

                message.member.addRole(message.member.guild.roles.find('name','Communauté "JOYCA"'))

                var embed = new Discord.RichEmbed()
                .setColor("#c11111")
                .addField("Doucle CIAO !")
                message.channel.send(embed)


		else if (message.content.startsWith('/Mastu')) {

                message.member.addRole(message.member.guild.roles.find('name','Communauté "Mastu"'))

                var embed = new Discord.RichEmbed()
                .setColor("#c11111")
                .addField("Bonsoir à tous mes gazelles !")
                message.channel.send(embed)


		else if (message.content.startsWith('/Le Bled'Art')) {

                message.member.addRole(message.member.guild.roles.find('name','Communauté "Le Bled'Art"'))

                var embed = new Discord.RichEmbed()
                .setColor("#c11111")
                .addField("Coucou les amis c'est le Bled'Art, j'espère que vous allez bien")
                message.channel.send(embed)
		
		
		
		
		
		