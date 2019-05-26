
const Discord = require('discord.js');
const ms = require('ms'); // `npm i ms`

module.exports.run = async (bot, message, args) => {

  let reminderTime = args[0];
  if (!reminderTime) {
      let embed = new Discord.RichEmbed()
          .setTitle('Proper Usage')
          .setDescription(`\`<prefix>remindme 15min any text or code\``)

      return message.channel.send(embed)

  }

  let reminder = args.slice(1).join(" ");

  let remindEmbed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
      .addField('Reminder', `\`\`\`${reminder}\`\`\``)
      .addField('Time', `\`\`\`${reminderTime}\`\`\``)
      .setTimestamp();

  message.channel.send(remindEmbed);

  setTimeout(function() {
      let remindEmbed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
          .addField('Reminder', `\`\`\`${reminder}\`\`\``)
          .setTimestamp()

          message.channel.send(remindEmbed);
  }, ms(reminderTime));

}

module.exports.help = {
    name: "remindme"
}
