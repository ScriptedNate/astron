const Discord = require("discord.js")
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
.setDescription("Serverlist")
.setColor("RANDOM")
.addField("**Servers:**", `${bot.guilds.size}`, true)
.setTimestamp()
.setFooter('Astron', bot.user.displayAvatarURL);

message.channel.send({embed: sEmbed});

}

module.exports.help = {
    name: "serverlist"
}
