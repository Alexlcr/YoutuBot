const Discord = require('discord.js')
const YoutubeStream = require('./Commande/play')
const google = require('./Commande/google')
const Command = require('./Commande/command')
const bot = new Discord.Client()

bot.on('ready', function () {
    bot.user.setGame('Rechercher les dernières vidéos de Youtube')


bot.on('message', function(message){
    if(message.content === 'Ryan est-il le meilleur modo ?')
    message.channel.send('Encore un qui veut un grade...')

    if(message.content === 'caca')
    message.reply('TG')

if(message.content.startsWith('/Squeezie'))

        message.member.addRole(message.member.guild.roles.find('name','Communauté Squeezie'))
        var embed = new Discord.RichEmbed()
        .setColor("#c11111")
        .addField("Yo bienvenue dans la commu de Squeezie !", "Vous avez désormais accès à tout les channels concernant ce Youtubeur")
        message.channel.send(embed)
        message.reply('Voici le lien de sa chaine YouTube:       https://www.youtube.com/user/aMOODIEsqueezie')
        
    if(message.content.startsWith('/FantaBobGames'))
        
        message.member.addRole(message.member.guild.roles.find('name','Communauté FantaBobGames')) 
        
        var emded = new Discord.RichEmbed()
        .setColor("#c11111")
        .addField("Bonsoir c'est la commu de FantaBobGames !")
        message.channel.send(embed)
        
    if(message.content.startsWith('/MathSeFaitDesFilms'))
        
        message.member.addRole(message.member.guild.roles.find('name','Communauté Math Se Fait Des Films'))
            
        var embed = new Discord.RichEmbed()
        .setColor("#c11111")
        .addField("Si tu rejoins la communauté t'auras du chocolat !")
        message.channel.send(embed)
    
    if(message.content.startsWith('/VodKprod'))
    
        message.member.addRole(message.member.guild.roles.find('name','Communauté VodKprod'))

        var embed = new Discord.RichEmbed()
        .setColor("#c11111")
        .addField("Tu as rejoins la communauté don poneys !")
        message.channel.send(embed)
        
    if(message.content.startsWith('/Tibo InShape')) 

        message.member.addRole(message.member.guild.roles.find('name','Communauté "Tibo InShape"'))

        var embed = new Discord.RichEmbed()
        .setColor("#c11111")
        .addField("DAMNN LA TEAM SHAPE J'espère que vous allez bien !")
        message.channel.send(embed)

            
    
    if(message.content.startsWith('/JOYCA'))  

        message.member.addRole(message.member.guild.roles.find('name','Communauté "JOYCA"'))

        var embed = new Discord.RichEmbed()
        .setColor("#c11111")
        .addField("Doucle CIAO !")
        message.channel.send(embed)


    if(message.content.startsWith('/Mastu')) 

        message.member.addRole(message.member.guild.roles.find('name','Communauté "Mastu"'))

        var embed = new Discord.RichEmbed()
        .setColor("#c11111")
        .addField("Bonsoir à tous mes gazelles !")
        message.channel.send(embed)


    if(message.content.startsWith('/Le BledArt')) 

        message.member.addRole(message.member.guild.roles.find('name','Communauté "Le BledArt"'))

        var embed = new Discord.RichEmbed()
        .setColor("#c11111")
        .addField("Coucou les amis c'est le Bled'Art, j'espère que vous allez bien")
        message.channel.send(embed)
    
    if(message.content.startsWith('/Amixem'))
        
        message.member.addRole(message.memberguild.roles.find('name','Communauté Amixem'))
        
        var embed = new Discord.RichEmbed()
        .setColor("#c11111")
        .addField("Clap Bienvenue !")
        message.channel.send(embed)

})})
   

    
bot.login('NDM3NzUzODQ3OTU2NjM1NjU4.DesNDg.9KABkw_wdAr_dvbkmbELREi5CYs')
