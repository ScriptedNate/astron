const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  await message.delete();

  // Embed Usage + send
  let uEmbed = new discord.RichEmbed()
  .setDescription(':x: **Missing argument**')
  .addField("You're missing the ``Amount`` argument.", "**Usage: ``-clear <1-100>``**")
  .setColor("#e05959")
  .setFooter(`Clear command executed by ${message.author.username}`, `${message.author.avatarURL}`);

  if (args.length === 0)
  return message.channel.send(uEmbed);

  // Checkers
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You're missing the `MANAGE_MESSAGES` permission.");
  if(!args[0]) return message.channel.send("There is no chat history to clear.");

  // Clear
  message.channel.bulkDelete(args[0]).then(() => {
});

}

module.exports.help = {
  name: "purge"
}
