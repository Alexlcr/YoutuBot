const Discord = require('discord.js')
const Command = require('./Commande/command')
const Google = require('./Commande/google')
const Play = require('./Commande/play')
const bot = new Discord.Client()
const Role = require('./Commande/role')

bot.on('guildMemberAdd', function(member) {

	member.guild.channels.find("name", "général").sendMessage(member.toString() + ' Bienvenue dans le serveur Youtube Francophone + '**' + member.guild.name + '**'' );

	member.addRole(member.guild.roles.find("name", "Abonné(e)s"))

})

bot.on('ready', function (){
    console.log('Bot connecté')
    bot.user.setGame('Rechercher les dernières vidéos de Youtube')
})


bot.on('message', function(message){


 if (message.content === '/help') {

      var embed = new Discord.RichEmbed()
      .setColor("#c11111")
      .addField("Les commandes d'aide sont: ", "-/helpCommunauté\n-/helpMiscCommands\n-/helpVocal ---> EXPERIMENTAL :warning: \n*other commands coming soon*")
      message.channel.send(embed)
      .catch(console.error)
 }

 if(message.content === '/helpVocal'){

      var embed = new Discord.RichEmbed()
      .setColor("#c11111")
      .addField("Les commandes pour faire rejoindre YoutuBot à votre channel vocal sont: ", "-/play **_lien de votre music (youtube)_**")
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
    .addField("Pour rejoindre une communauté faites ---> /NomDuYoutubeur", "**Les Youtubeurs disponibles sont: **\n-Squeezie\n-Amixem\n-FantaBobGames\n-TiboInShape\n-Joyca\n-Mastu\n-LeRireJaune\n-DrNozman\n-GearLocker\n-JoueurDuGrenier\n-Mamytwink\n-Cyprien\n-100%Bitume\n-FabienOlicard\n-CYR!L\n-Bapt&Gael\n")
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
   

    
bot.login('process.envToken')
