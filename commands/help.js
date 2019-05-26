const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**List of commands & additional Information!**")
    .setColor("#82e509")
    .setThumbnail(bicon)
    .setFooter(`Commands • Prefix: ":"`)
    .addField("**.help**", "List of commands and additional info")
    .addField("**.userinfo**", "Information on the user")
    .addField("**.suggest**","Puts a sugggestion that you made. ")
    .addField("**.purge**", "Clears a 1-100 messages.")
    .addField("**.8ball**", "Ask the bot a question")
    .addField("**.addrole**", "Adds a certain role to someone")
    .addField("**.poll**", "Starts a poll.")
    .addField("**.announce**", "Announces information")
    .addField("**.ascii**", "ascii's message")
    .addField("**.define**", "Shows the definition of the word & more!")
    .addField("**.embed**", "Puts a embedition to a message")
    .addField("**.google**", "Googles something")
    .addField("**.remindme**", "Reminds something of you. Ect: HOMEWORK")
    .addField("**.serverinfo**", "Shows information of server")
    .addField("**.solve**", "Solves a math question. YEET MATH NOW!")
    .addField("**.uptime**", "Shows uptime for bot")
    .addField("**.info**", "Shows information about the bot")
    .addField("**.rps**", "Rock!, Paper!, Scissors!")
    .addField("**.slots**", "Bingo!!!")
    .setFooter("Astron created by by @astrovibes#8096");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"help"
}
