const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**MaximusBoys Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**!istatistik **" , ":tada: **Botun İstatistiğini Gösterir!** :tada:")
  .addField("**!rol-bilgi [rol etiketi]**", ":tada: **Etiketlediğiniz Rolün İstatistiklerine Bakarsınız** :tada:",)
  .addField("**!tavsiye [açıklama]**", ":tada: **Tavsiye Kanalına Mesaj Atarsınız!**`:tada:",)
  .addField("**!servericon **", ":tada:**Yazılan Sunucunun Fotoğrafını Atar!** `:tada:",)
  .addField("**!yardım **", ":tada: **Yardım menüsünü açar** :tada:",)
  .addField("**!davet **", ":tada: **Botun davet linkini atar.** :tada:",)
  .addField("**!bot-bilgi **", ":tada: **Bot bilgilerine bakarsınız** :tada:",)
  .addField("**!bilgi **", ":tada: **Bizim bilgilerimize bakarsınız** :tada:",)
  .addField("**!korona [Ülke Kodu]**", ":tada: **Belirtilen Bölgenin Korona İstatistiğine Bakarsınız!** :tada:",)
  .addField("**!banlist**", ":tada: **Banlı Listesini Gösterir!** :tada:",)
  .addField("**!sunucu-bilgi**", ":tada: **Sunucu Hakkında Bilgi Verir!** :tada:",)
  .addField("**!ping**", ":tada: **Botun Pingini Gösterir!** :tada:",)
  .setFooter('**--------------------------**')
  .setFooter('!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developers**", " **Asreaper** ",)
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
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};