const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
const fs = require("fs");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('500759364181950464').roles.find('name', 'Disco').edit({color: 'RANDOM'})
    },3500);
  });

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('348639545530515466').roles.find('name', 'Disco').edit({color: 'RANDOM'})
    },3500);
  });

client.login(process.env.BOT_TOKEN);
