const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Kayıt Yardım Menüsü")
  .setDescription('**Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**!kayıt-kanal-ayarla #kanal**" , ":tada: **Kayıt Kanalını Ayarlar!** :tada:")
  .addField("**!kanal-aylara**", ":tada: **Kayıt Bildirim Kanalını Ayarlar!** :tada:",)
  .addField("**!kayıt-verilecek-rol-ayarla @rol**", ":tada: **Kayıt Olunca Verilecek Rolü Ayarlar!**`:tada:",)
  .addField("**!kayıt-alınacak-rol-ayarla @rol**", ":tada:**Kayıt Olunca Alınacak Rolü Ayarlar!** `:tada:",)
  .addField("**!kayıt-ol**", ":tada: **Kayıt Olursunuz!** :tada:",)
  .addField("**!kayıt-yardım**", ":tada: **Kayıt Komutlarını Gösterir!** :tada:",)
  .setFooter('**--------------------------**')
  .setImage("")
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
  name: 'kayıt-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};