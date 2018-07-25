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
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels le concernant")
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
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels le concernant")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:      https://www.youtube.com/channel/UCcyGqHmijBxtOcvvIAHqJrQ')

		}else if (message.content.startsWith('/Cokaïn.fr')) {
	
			message.member.addRole(message.member.guild.roles.find('name','Communauté Cokaïn.fr'));
	
			var embed = new Discord.RichEmbed()
			.setColor("c11111")
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels concernant ce youtuber")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaine YouTube:      https://www.youtube.com/channel/UCwbjxO5qQTMkSZVueqKwxuw')
		
		}else if (message.content.startsWith('/Norman')){
			message.member.addRole(message.member.guild.roles.find('name','Communauté Norman Fait Des Vidéos'))

			var embed = new Discord.RichEmbed()
			.setcolor('c11111')
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels concernant ce youtuber")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaîne youtube : \n https://www.youtube.com/user/NormanFaitDesVideos')
		
		}else if (message.content.startsWith('/WankilStudio')){
			message.member.addRole(message.member.guild.roles.find('name','Communauté Norman Fait Des Vidéos'))

			var embed = new Discord.RichEmbed()
			.setcolor('c11111')
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels concernant ce youtuber")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaîne youtube : \n https://www.youtube.com/channel/UCYGjxo5ifuhnmvhPvCc3DJQ')
		
		}else if (message.content.startsWith('/LinkTheSun')){
			message.member.addRole(message.member.guild.roles.find('name','Communauté de LinksTheSun'))

			var embed = new Discord.RichEmbed()
			.setColor('c11111')
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels concernant ce youtuber")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaîne youtube : \n https://www.youtube.com/user/LinksTheSun')
		
		}else if (message.content.startsWith('/Potatoz')){
			message.member.addRole(message.member.guild.roles.find('name','Communauté POTATOZ'))

			var embed = new Discord.RichEmbed()
			.setColor('c11111')
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels concernant ce youtuber")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaîne youtube : \n https://www.youtube.com/channel/UCRvMqYterhmbhtXYZu3ijog')
		
		}else if (message.content.startsWith('/JorianPonomareff')){
			message.member.addRole(message.member.guild.roles.find('name','Communauté Jorian Ponomareff'))

			var embed = new Discord.RichEmbed()
			.setColor('c11111')
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels concernant ce youtuber")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaîne youtube : \n https://www.youtube.com/user/JorianS4E')
		
		}else if (message.content.startsWith('/Farod')){
			message.member.addRole(message.member.guild.roles.find('name','Communauté Farod'))

			var embed = new Discord.RichEmbed()
			.setColor('c11111')
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels concernant ce youtuber")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaîne youtube : \n https://www.youtube.com/user/FarodGames')
		
		}else if (message.content.startsWith('/MahdiBa')){
			message.member.addRole(message.member.guild.roles.find('name','Communauté Mahdi Ba'))

			var embed = new Discord.RichEmbed()
			.setColor('c11111')
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels concernant ce youtuber")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaîne youtube : \n https://www.youtube.com/user/mahdiba')
		
		}else if (message.content.startsWith('/Maskey')){
			message.member.addRole(message.member.guild.roles.find('name','Communauté Maskey'))

			var embed = new Discord.RichEmbed()
			.setColor('c11111')
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels concernant ce youtuber")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaîne youtube : \n https://www.youtube.com/channel/UCFfukyWXS7h1viyLMYLl19A')
		
		}else if (message.content.startsWith('/SuperConeri')){
			message.member.addRole(message.member.guild.roles.find('name','Communauté Superconeri'))

			var embed = new Discord.RichEmbed()
			.setColor('c11111')
			.addField("Vous avez rejoins cette communauté", "Vous avez accès à tous les channels concernant ce youtuber")
			message.channel.send(embed)
			message.reply('Voici le lien de sa chaîne youtube : \n https://www.youtube.com/channel/UCFfukyWXS7h1viyLMYLl19A')
		
		}else if (message.content.startsWith('//Squeezie')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Squeezie'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)
	
		}else if (message.content.startsWith('//BobLennon')){

			message.member.remove(message.member.guild.roles.find('name', 'Communauté FantBobGames'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)
		
		}else if (message.content.startsWith('//VodK')){

			message.content.removeRole(message.member.guild.roles.find('name', 'Communauté VodK'))
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)
		
		}else if (message.content.startsWith('//Cypiren')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Cyprien'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)
		
		}else if (message.content.startsWith('//JoueurDuGrenier')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Joueur du Grenier'));
			message.reply('Vous avez quitté cette commuanuté')
			.catch(console.error)

		}else if (message.content.startsWith('//WankilStudio')){

			message.member.removRole(message.member.guild.roles.find('name', 'Communauté '))
			message.reply('Vous avez quitté cette Communauté')
			.catch(console.error)
		
		}else if (message.content.startsWith('//LeRireJaune')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Le Rire Jaune'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)
		
		}else if (message.content.startsWith('//DrNozman')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Dr Nozman'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//Amixem')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Amixem'));
			message.reply('vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//Joyca')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté JOYCA'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//FabienOlicard')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté FabienOlicard'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//TiboInShape')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Tibo InShape'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//Cokaïn.fr')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Cokaïn.fr'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//Norman')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Norman Fait Des Vidéos'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)
	
		}else if (message.content.startsWith('//LinksTheSun')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté de LinksTheSun'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//Potatoz')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté POTATOZ'));
			message.reply('Vous avez quitté cete communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//JorianPonomareff')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Jorian Ponomareff'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//Farod')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Farod'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//Mamytwink')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Mamytwink'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//MahdiBa')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Mahdi Ba'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//Mastu')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Mastu'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//CYR!L')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté CYR!L'));
			message.reply('Vous avez quitté cette communauté')
			.catch(console.error)

		}else if (message.content.startsWith('//Maskey')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Maskey'));
			message.reply('Vous avez quitté cette communauté')

		}else if (message.content.startsWith('//SuperConeri')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Superconeri'));
			message.reply('Vous avez quitté cette communauté')

		}else if (message.content.startsWith('//100%Bitume')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté 100% BITUME'));
			message.reply('Vous avez quitté cette communauté')

		}else if (message.content.startsWith('//Bapt&Gael')){

		    message.member.removeRole(message.member.guild.roles.find('name', 'Commuanuté Bapt&Gael'))
		    message.reply('Vous avez quitté cette communauté')

		}else if (message.content.startsWith('//GearLocker')){

			message.member.removeRole(message.member.guild.roles.find('name', 'Communauté Gear Locker'))
			message.reply('Vous avez quitté cette communauté')
	
			}
		
		}}