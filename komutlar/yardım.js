const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yardım Menüsü")
  .setDescription('**Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**⚡ !yardım ⚡**" , " **Yardım Menüsünü Gösterir!** ")
  .addField("**⚡ !yetkili ⚡**", " **Yetkili Komutlarını Gösterir!** ",)
  .addField("**⚡ !kullanıcı ⚡**", " **Kullanıcı Komutlarını Gösterir!**`",)
  .addField("**⚡ !eğlence ⚡**", " **Kayıt Komutlarını Gösterir!** ",)
  .addField("**⚡ !seviye-yardım ⚡**", "**Seviye Komutlarunu Gösterir!** `",)
  .addField("**⚡ !kayıt-yardım ⚡**", " **Kayıt Komutlarını Gösterir!** ",)
  .addField("**⚡ !davet-yardım ⚡**", " **Davet Komutlarını Gösterir!** ",)
  .setImage("https://media.giphy.com/media/cUWUuZDt3rTvhgzePk/giphy.gif")
  .setFooter('!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developer**", "BERAT",)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};