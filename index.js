const Discord = require('discord.js')
const Command = require('./Commande/command')
const Google = require('./Commande/google')
const bot = new Discord.Client()
const Role = require('./Commande/role')

bot.on('ready', function (){
    bot.user.setGame('Rechercher les dernières vidéos de Youtube')})


bot.on('message', function(message){


 if (message.content === '/help') {

    var embed = new Discord.RichEmbed()
    .setColor("#c11111")
    .addField("Les commandes d'aide sont: ", "-/helpRoles\n*other commands coming soon*")
    message.channel.send(embed)
    .catch(console.error)
 }

    
 if (message.content === '/helpRoles'){

    var embed = new Discord.RichEmbed()
    .setColor("#c11111")
    .addField("Pour rejoindre une communauté faites ---> /NomDuYoutubeur", "**Les Youtubeurs disponibles sont: **\n-Squeezie\n-Amixem\n-FantaBobGames\n-TiboInShape\n-Joyca\n-Mastu\n-LeRireJaune")
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
})
   

    
bot.login('Process.env.TOKEN')
