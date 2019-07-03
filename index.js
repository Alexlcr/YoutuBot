const Discord = require('discord.js')
const Google = require('./Commande/google')
const Play = require('./Commande/play')
const bot = new Discord.Client()
const Role = require('./Commande/role')


bot.on('guildMemberAdd', function(member) {

	member.guild.channels.find("name", "acceuil").sendMessage(member.toString() + ' Bienvenue dans le serveur Youtube Francophone' );

	member.addRole(member.guild.roles.find("name", "Abonné(e)s")).catch(console.error)

})

bot.on('ready', function (){
    console.log('Bot connecté')
    bot.user.setGame('')
    
})


bot.on('message', function(message){


 if (message.content === '/help') {

      var embed = new Discord.RichEmbed()
      .setColor("#c11111")
      .addField("Les commandes d'aide sont: ", "-/helpCommunauté\n-/helpMiscCommands\n*other commands coming soon*")
      message.channel.send(embed)
      .catch(console.error)
 }

 if(message.content === '/helpMiscCommands'){
     var embed = new Discord.RichEmbed()
     .setColor("#c11111")
     .addField("Les commandes diverses sont : ", "-/Avicii\n-/google _**Mots/phrase que vous voulez rechercher**_\n*other commands coming soon*")
     message.channel.send(embed)
    .catch(console.error)
 }

    
 if (message.content === '/helpCommunauté'){

    var embed = new Discord.RichEmbed()
    .setColor("#c11111")
    .addField("**Les commandes concernant les communautés sont: **","Pour rejoindre une communauté faites ---> /NomDuYoutubeur \nPour quitter une communauté faites ---> //NomDuYoutubeur \n**Les Youtubeurs disponibles sont: **\n-Squeezie\n-Amixem\n-FantaBobGames\n-TiboInShape\n-Joyca\n-Mastu\n-LinkTheSun\n-SuperConeri\n-Maskey\n-MahdiBa\n-Farod\n-JorianPonomareff\n-Potatoz\n-Vodkprod\n-WankilStudio\n-Norman\n-LeRireJaune\n-DrNozman\n-GearLocker\n-JoueurDuGrenier\n-Mamytwink\n-Cyprien\n-100%Bitume\n-FabienOlicard\n-CYR!L\n-Bapt&Gael\n")
    message.channel.send(embed)
    .catch(console.error)
 }

 if(message.content === '/Avicii'){

    var embed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField("Avicii, stylisé ΛVICII, de son vrai nom Tim Bergling, né le 8 septembre 1989 à Stockholm (Suède) et mort le 20 avril 2018 à Mascate (Oman), est un producteur et disc jockey suédois.","_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ " )
    .addField("Il a aussi produit des titres sous les pseudonymes de Tim Berg et Tom Hangs.\nIl se fait connaître avec son titre Seek Bromance, sous son alias Tim Berg en 2011. Son single Levels lui permet de connaître une notoriété mondiale.","_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ")
    .addField("Par la suite, son morceau Wake Me Up! est un des hits de l'été 2013 et détrône de nombreux records. Il est considéré comme un disc jockey important de la scène électronique.","_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ")
    .addField("Atteint de dépression, il se suicide à 28 ans.","**_REQUIESCAT IN PACE_**")
    message.channel.send(embed)
    .catch(console.error)
 }

 if(Google.match(message)) {
     return Google.action(message)
 }

  Role.parse(message)
    
  Google.parse(message)

  Play.parse(message)

})

bot.on('message', message => {

    if (message.content.startsWith('!play')) {
      // On récupère le premier channel audio du serveur
      let voiceChannel = message.guild.channels
        .filter(function (channel) { return channel.type === 'voice' })
        .first()
      // On récupère les arguments de la commande 
      // il faudrait utiliser une expression régulière pour valider le lien youtube
      let args = message.content.split(' ')
      // On rejoint le channel audio
      voiceChannel
        .join()
        .then(function (connection) {
          // On démarre un stream à partir de la vidéo youtube
          let stream = YoutubeStream(args[1])
          stream.on('error', function () {
            message.reply("Je n'ai pas réussi à lire cette vidéo :(")
            connection.disconnect()
          })
          // On envoie le stream au channel audio
          // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
          connection
            .playStream(stream)
            .on('end', function () {
              connection.disconnect()
            })
        })
    }
  
  })
   

    
bot.login('NTk0MzE3MTY1MDg4MzQyMDE3.XRargQ.pGspKL-tDHR-Y43BXzXtTOC4ilg')
