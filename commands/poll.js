const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let question = args.slice(0).join(" ");

  if (args.length === 0)
    return message.reply('**.poll <AskQuestionHere>**')

message.delete()
  const pollEmbed = new Discord.RichEmbed()
      .setTitle("**Poll created by:**")
      .setColor(`RANDOM`)
      .setDescription(`${question}`)
      .setFooter(`started by: ${message.author.username}`, `${message.author.avatarURL}`)

message.channel.send(pollEmbed)
  .then(message => {
    message.react('👍')
    message.react('👎')
    message.delete().catch(console.error);
  })
  .catch(() => console.error('Failed to react.'));
};

module.exports.help = {
    name: "poll"
}
