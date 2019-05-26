const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const adminrole = message.guild.roles.find(r => r.name === "Astron Developer");
  let announceChannel = message.mentions.channels.first();
  if (!message.member.roles.has(adminrole.id)) return message.reply("you are not allowed to use this command.");
  if (!announceChannel) return message.reply("please specify a channel to send the announcement.");
  const text = args.slice(1).join(" ");
  if (text.length < 1) return message.reply("you must input some text to announce.");

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(text)
    .setFooter('Announcement by Asron Development Team')
    .setTimestamp();
  announceChannel.send(embed);
  message.delete().catch(console.error);
};

module.exports.help = {
  name: "announce"
}
