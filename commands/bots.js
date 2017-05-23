const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete()
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) {
            return message.channel.send("`ERROR:` I do not have permission to send Embed, contact administrator to get perm to send embed.");
        }
        var embed = new Discord.RichEmbed();
        embed.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/248014822082347008/315857237392359424/dog.jpg")
        .setColor("#53A6F3")
        .addField('Bot Supports', "<About us>\nThis guild is a help support for everyone that need help about main bots. We can discuss anything except againts the rules and mostly importantly have fun. Mainly, this server is used as a help server, where we talk about our main bots.")
        .addField('Invite Link', "https://discord.gg/dfdvArY");
        message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
} 