const math = require('mathjs'); // `npm i mathjs`
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {


if (!args[0]) return message.channel.send('Please input a calculation.');
    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send('Sorry, please input a valid calculation.');
    }

    // Output
    const embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTitle('Math Solution | Information: http://mathnotepad.com/')
        .addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
        .addField('Output', `\`\`\`js\n${resp}\`\`\``)

    message.channel.send(embed);

}
module.exports.help = {
    name: "solve"
}
