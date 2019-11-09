const { RichEmbed } = require('discord.js');

  module.exports.run = async (bot, message, args) => {

    await message.delete().catch(O_o=>{});

    const a = message.guild.roles.get('Put your role id here!'); // Moderator

    const filter = (reaction, user) => ['✅'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new RichEmbed()
        .setTitle('Available Roles')
        .setDescription(`

        ✅ ${a.toString()}
        `)
        .setColor(0xdd9323)
        .setFooter(`ID: ${message.author.id}`);

    message.channel.send(embed).then(async msg => {

        await msg.react('✅');

        msg.awaitReactions(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
        }).then(collected => {

            const reaction = collected.first();

            switch (reaction.emoji.name) {
                case '✅':
                    if (message.member.roles.has(a.id)) {
                        return message.channel.send('You are already in this role!').then(m => m.delete(3000));
                    }
                    message.member.addRole(a).catch(err => {
                        console.log(err);
                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                    });
                    message.channel.send(`You have been added to the **${a.name}** role!`).then(b => b.delete(1000));
                }
            }).catch(collected => {
                return message.channel.send(`I couldn't add you to this role!`).then(s => s.delete(1000));
            });
    
        });




    }
}

module.exports.help = {
    name: "role"
}
