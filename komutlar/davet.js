const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
const embed = new Discord.RichEmbed()
.setAuthor("Davet", client.user.avatarURL)
.setTitle("Davet")
.setURL("https://discord.com/oauth2/authorize?client_id=755317672832663632&scope=bot&permissions=805314622")
.setDescription("Botu Kendi Sunucuna Davet Edebilirsin :)")
.setColor("BLUE")
.setTimestamp()
.addField("Destek", "[Destek Sunucusu](https://discord.gg/m9acZES)")
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};