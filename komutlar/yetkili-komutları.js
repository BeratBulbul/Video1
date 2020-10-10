const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**!sayaç [Sayı] #kanal **" , "<a:__:702926841371164754> **Sayaç Kanalını Ayarlar!** <a:__:702926841371164754>")
  .addField("**!oto-rol-ayarla @otorol #kanal**", "<a:__:702926841371164754> **Otorol Komutunu Ayarlar!** <a:__:702926841371164754>",)
  .addField("**!ban @kullanıcı [Sebep]**", "<a:__:702926841371164754> **Belirtilen Kullanıcıyı Banlar!**`<a:__:702926841371164754>",)
  .addField("**!kick @kullanıcı [Sebep]**", "<a:__:702926841371164754>**Belirtilen Kullanıcıyı Sunucudan Atar!** `<a:__:702926841371164754>",)
  .addField("**!reklam-engel-aç**", "<a:__:702926841371164754> **Reklam Engel Komutunu Açar Reklamları Engeller!** <a:__:702926841371164754>",)
  .addField("**!reklam-engel-kapat**", "<a:__:702926841371164754> **Reklam Engel Komutunu Kapatır Reklamları Engellemez!** <a:__:702926841371164754>",)
  .addField("**!reklam-kick aç**", "<a:__:702926841371164754> **Reklam Kick Komutunu Açar Reklamları Engeller! 3 Kere Reklam Yapanı Sunucudan Atar** <a:__:702926841371164754>",)
  .addField("**!reklam-kick kapat**", "<a:__:702926841371164754> **Reklam Kick Komutunu Kapatır Reklamları Engellemez!** <a:__:702926841371164754>",)
  .addField("**!otobotsiliciaç**", "<a:__:702926841371164754> **Botların Mesajını Belirli Bir Saniyede Siler** <a:__:702926841371164754>",)
  .addField("**!otobotsilicikapat**", "<a:__:702926841371164754> **Botların Mesajını Belirli Bir Saniyede Silme Komutunu Kapatır** :<a:__:702926841371164754>",)
  .addField("**!özelodasistemi**", "<a:__:702926841371164754> **Özel Oda Sistemi Açar!** <a:__:702926841371164754>",)
  .addField("**!yavaşmod [Süre]**", "<a:__:702926841371164754> **Yavaşmodu Belirtilen Sürede Yazılan Kanala Uygular!** <a:__:702926841371164754>",)
  .addField("**!sunucupanel **", "<a:__:702926841371164754> **Server panel kurar** <a:__:702926841371164754>",)
  .addField("**!sunucu-kur **", "<a:__:702926841371164754> **Sunucuyu Baştan Kurar** <a:__:702926841371164754>",)
  .addField("**!sil [sayı] **", "<a:__:702926841371164754> **Yazdıgınız Sayı İçinde o Kadar Siler** <a:__:702926841371164754>",)
  .addField("**!ses-kanal-aç [Ses Kanal İsmi] **", "<a:__:702926841371164754> **Belirtilen İsimde Ses Kanalı Açar!** <a:__:702926841371164754>",)
  .addField("**!unban [Kullanıcı İD] **", "<a:__:702926841371164754> **Belirtilen İD'ye Sahip Kullanıcının Banını Kaldırır!** <a:__:702926841371164754>",)
  .addField("**!oylama [Oylama Yapılacak Konu] **", "<a:__:702926841371164754> **Bulunduğunuz Kanalda Oylama Yaparsınız!** <a:__:702926841371164754>",)
  .setFooter('**--------------------------**')
  .setFooter('!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developers**", " **Berat** ",)
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
  aliases: ["yetkililer"],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};