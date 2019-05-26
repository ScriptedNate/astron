const Discord = require("discord.js");
const encode = require("strict-uri-encode");

module.exports.run = async (bot, message, args) => {
    let question = encode(args.join(` `));
    let link = `http://lmgtfy.com/?q=${question}`;
    let lmgtfy = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .setDescription(`[**Google it!**](<${link}>)`)
        .setColor("#44ff47")
        .setTimestamp(message.author.presence.activity)
        .setFooter(`Data `, message.author.displayAvatarURL);

    message.channel.send(lmgtfy).then(msg => {
        msg.delete(5000)
  })
};

module.exports.help = {
    name: "google"
};
