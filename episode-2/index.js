const Discord = require('discord.js') // require('') va apporter un module/fichier et on va stocker ca dans la variable "Discord"

const client = new Discord.Client() // Cela va creer notre bot pour nous (Client), vous pouvez ecrire bot a la place de client !

client.on('message', async message => {
    
    if(message.content === '!salut') {
      return message.channel.send(`Hey salut ${message.author.username}`)
    }

}) // On va executer cette fonction quand quelqu'un va envoyer un message


//
client.login("VOTRE_TOKEN")
