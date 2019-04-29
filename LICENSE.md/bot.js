const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
const fs = require("fs");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"))
const serverStats = {
    guildID: '303657307231879169',
    totalUsersID: '499164441506480129',
    memberCountID: '499164461459046410',
    botCount: '499164691730268170',
    clock: '500397109506211841',
    time: '501863189458452480',
    newUser: '499164704313442314'
}

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('303657307231879169').roles.find('name', 'Disco').edit({color: 'RANDOM'})
    },3500);
  });

client.login(process.env.BOT_TOKEN);
