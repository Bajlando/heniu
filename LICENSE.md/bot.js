const Discord = require('discord.js');
const client = new Discord.Client({fetchAllMembers: true});
const fs = require("fs");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
const prefix = "k.";

const serverStats = {
    guildID: '303657307231879169',
    totalUsersID: '499164441506480129',
    memberCountID: '499164461459046410',
    botCount: '499164691730268170',
    clock: '520000306629574656',
    time: '501863189458452480',
    newUser: '499164704313442314'
}

client.on('ready', () => {
    let autopisanko = "10s";
    setInterval(function() {
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <--`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <-`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA <`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ NA`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ N`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITAJ`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WITA`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WIT`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`WI`);
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`W`);
    client.channels.get(serverStats.clock).setName(`#`);
    client.channels.get(serverStats.clock).setName(`#`);
    client.channels.get(serverStats.clock).setName(`#T`);
    client.channels.get(serverStats.clock).setName(`#T`);
    client.channels.get(serverStats.clock).setName(`#TE`);
    client.channels.get(serverStats.clock).setName(`#TE`);
    client.channels.get(serverStats.clock).setName(`#TEA`);
    client.channels.get(serverStats.clock).setName(`#TEA`);
    client.channels.get(serverStats.clock).setName(`#TEAM`);
    client.channels.get(serverStats.clock).setName(`#TEAM`);
    client.channels.get(serverStats.clock).setName(`#TEAM K`);
    client.channels.get(serverStats.clock).setName(`#TEAM K`);
    client.channels.get(serverStats.clock).setName(`#TEAM K`);
    client.channels.get(serverStats.clock).setName(`#TEAM K`);
    client.channels.get(serverStats.clock).setName(`#TEAM KE`);
    client.channels.get(serverStats.clock).setName(`#TEAM KE`);
    client.channels.get(serverStats.clock).setName(`#TEAM KEN`);
    client.channels.get(serverStats.clock).setName(`#TEAM KEN`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENI`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENI`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENIU`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENIU`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENIU`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENIU`);
    client.channels.get(serverStats.clock).setName(`#TEAM KENIU`);
    client.channels.get(serverStats.clock).setName(`#͟T͟E͟A͟M͟ ͟K͟E͟N͟I͟U͟`);
    client.channels.get(serverStats.clock).setName(`#͟T͟E͟A͟M͟ ͟K͟E͟N͟I͟U͟ ❤`);
    client.channels.get(serverStats.clock).setName(`#͟T͟E͟A͟M͟ ͟K͟E͟N͟I͟U͟ ❤`);
    client.channels.get(serverStats.clock).setName(`#͟T͟E͟A͟M͟ ͟K͟E͟N͟I͟U͟ ❤`);
    client.channels.get(serverStats.clock).setName(`#͟T͟E͟A͟M͟ ͟K͟E͟N͟I͟U͟ ❤`);
}, 600);
 });
 
 client.on('message', message => {
    if (message.content.startsWith("k.hacked")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``Oznacz osobę którą chcesz zhakować``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Ładowanie.. ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Ładowanie Wirusa Discorda. [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Ładowanie Wirusa Discorda.. [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Ładowanie Wirusa Discorda... [▓▓▓▓▓▓▓▓ ] 40%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
                 m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Ładowanie Wirusa Discorda... [▓▓▓▓▓▓▓▓▓▓▓▓ ] 70%').setColor(0xFF0000)})
               }, 4000)
               setTimeout(function() {
                   m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Ładowanie Wirusa Discorda.... [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
                 }, 5000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Załadowano! Udostępnienie danych nastąpi za 2...').setColor(0xFF0000)})
             }, 8000)
              setTimeout(function() {
               m.delete()
           }, 9500)
             setTimeout(function() {
               const email = ['lubieminecrafta8123@wp.pl','JakubStarzec31@interia.pl','MonikaPrzybylska@wp.pl','Mojenowekontodiscord@gmail.com','Bajlando@gmail.com','Twojastarawydymana@wp.pl', 'czerwonypokój@interia.pl', 'minecraftblow@gmail.com', 'rezitomojidol@gmail.com', 'Myszka@wp.pl', 'Aaron.Paul@gmail.com', 'xxxpornosymojejmatkixxx@wp.pl', 'riot.games@gmail.com', 'olekkosa@wp.pl', 'starymniebijeHELP@interia.pl'];
               const hasło = ['xxhakier123', 'dupa12', 'bardzoskomplikowanehaslonigdytegoniezgadniesz321', 'lubiefrugo', 'stary.kiep445', 'blanciorGigancior', 'jestemgejem', 'BurekMójPies', 'sokpomaranczowy', '31310414KUTAS', 'WaleKonia', 'Sramcinamorde', 'Clemcia53', 'bandyta1', 'cipa',]
               const random = Math.floor(Math.random()*15);
               message.channel.send("Pomyślnie przejęto dane logowania użytkownika" + virusname + " --- Email: " + email[random] + " Hasło: " + hasło[random])
           }, 11000)
           });
         }
 });

client.login(process.env.BOT_TOKEN);
