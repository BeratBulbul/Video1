const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**Yardım Komutları**')
  .setColor("RANDOM")
  .addField("⚡**!seviye ⚡**" , " **Seviyenizi Gösterir!** ")
  .addField("**⚡ !seviye resim ⚡**", " **Seviye Resim Belirler!** ",)
  .addField("**⚡ !seviye renk ⚡**", " **Seviyenize Renk Verir!**`",)
  .addField("**⚡ !seviye ödül @rol [Rolün Verileceği Seviye] ⚡**", "**Belirtilen Seviyeye Rol Ödülü Verir!** `",)
  .addField("**⚡ !seviye saydam ⚡**", "**Seviyenize Saydam Görüntü Verir!** `",)
  .setFooter('**--------------------------**')
  .setFooter('!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developer**", " **Berat** ",)
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
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'seviye-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};