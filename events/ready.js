const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

var prefix= ayarlar.prefix;

module.exports = client => {
  console.log(`➢Bot artık aktif!`);
  console.log(`➢komutlar yüklendi!`);
  console.log(`《Bot Hazır)》`);
  client.user.setStatus("online");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
    var oyun = [
        "Nereye Geldim Burağısı nere !yardım",
        "Bura nere aq",
        "!eğlence - !yardım - !kullanıcı - !yetkili",
        "aq biri desin nere len"

    ];
  
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], );
        }, 2 * 9000);
  
};