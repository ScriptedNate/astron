const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

let userSuggestion = args.slice(0).join(" ");
let user = message.author

// if there is NO message: It will delete the command message then reply with the correct usage then delete that message after 4 seconds.

if (args.length === 0) {
    message.delete();
    return message.reply('.suggest <SuggestionGoesHere>').then(m => m.delete(4000))
    };

// if there is a message: It will delete the command message then send the embed and then react with emojis in order.

message.delete();
let newEmbed = new Discord.RichEmbed()
    .setColor("#8700ff")
    .setAuthor(`**Suggested by**: ${user.tag}`, `${user.avatarURL}`)
    .setTitle('Suggestion:')
    .setDescription(userSuggestion)
    .setTimestamp()
return message.channel.send(newEmbed).then(async msg => {
        await msg.react('✅');
        await msg.react('❌');
    });

};
module.exports.help = {
  name: "suggest"
}
