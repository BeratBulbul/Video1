const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Davet Yardım Menüsü")
  .setDescription('**Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**!davet-kanal #kanal **" , ":tada: **Sunucuya Girenin-Çıkanın Kim Tarafından Davet Edildiğini Göstereceği Kanalı Ayarlar!** :tada:")
  .addField("**!davet-kanal-sıfırla [rol etiketi]**", ":tada: **Davetlerin Gösterildiği Kanal Sıfırlanır-Silinir** :tada:",)
  .addField("**!davet-sil @kullanıcı [SAYI]**", ":tada: **Belirtilen Kişinin Belirtilen Kadar Daveti Silinir!**`:tada:",)
  .addField("**!davetler @kullanıcı **", ":tada:**Belirtilen Kullanıcının Davet Sayısını Gösterir!** `:tada:",)
  .addField("**!davet-ekle @kullanıcı [SAYI] **", ":tada: **Belirtilen Kişiye Belirtilen Sayıda Davet Ekler!** :tada:",)
  .addField("**!davet-sıfırla @kullanıcı **", ":tada: **Belirtilen Kullanıcının Davet Sayılarını Siler-Sıfırlar!** :tada:",)
  .setFooter('**--------------------------**')
  .setFooter('!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developer**", " **Berat ** ",)
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
  name: 'davet-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};