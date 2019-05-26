const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

let icon = message.guild.iconURL;
let embed = new Discord.RichEmbed()
    .setDescription('Server Info')
    .setColor('RANDOM')
    .setThumbnail(icon)
    .addField('Server Name', message.guild.name)
    .addField('Created on', message.guild.createdAt)
    .addField('You joined', message.member.joinedAt)
    .addField('Total Members', message.guild.memberCount);

// Send embed
message.channel.send(embed);

}

module.exports.help = {
    name: "serverinfo"
}
