const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Avicii extends Command {

static action(message) {

    if (message.content === '/Avicii')

     var embed = new Discord.RichEmbed()
     .setColor("#ffffff")
     .addField("Avicii, stylisé ΛVICII, de son vrai nom Tim Bergling, né le 8 septembre 1989 à Stockholm (Suède) et mort le 20 avril 2018 à Mascate (Oman), est un producteur et disc jockey suédois.","_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ " )
     .addField("Il a aussi produit des titres sous les pseudonymes de Tim Berg et Tom Hangs.\nIl se fait connaître avec son titre Seek Bromance, sous son alias Tim Berg en 2011. Son single Levels lui permet de connaître une notoriété mondiale.","_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ")
     .addField("Par la suite, son morceau Wake Me Up! est un des hits de l'été 2013 et détrône de nombreux records. Il est considéré comme un disc jockey important de la scène électronique.","_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ")
     .addField("Atteint de dépression, il se suicide à 28 ans.","**_REQUIESCAT IN PACE_**")
     message.channel.send(embed)
    .catch(console.error)
    }

}