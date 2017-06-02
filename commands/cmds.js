const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.delete()
  var embed = new Discord.RichEmbed();
  embed.setAuthor('Commands | Message will self disrupt in 30 seconds', `${message.author.displayAvatarURL}`)
  .addField('Moderation', '[selfban](https://discord.gg/dfdvArY) - Ban a user.\n[selfsoftban](https://discord.gg/dfdvArY) - softban a user.\n[selfkick](https://discord.gg/dfdvArY) - Kick a user.\n[selfwarn](https://discord.gg/dfdvArY) - Warn a user.\n[selfmute](https://discord.gg/dfdvArY) - Mute a user.\n[selfunmute](https://discord.gg/dfdvArY) - Unmute a muted user.\n[selfunban](https://discord.gg/dfdvArY) - Unban a user.\n[selfprune](https://discord.gg/dfdvArY) - Purge messages.\n[selfclear](https://discord.gg/dfdvArY) - Clear own message.')
  .addField('Misc', '[selfbots](https://discord.gg/dfdvArY) - Bot supports.\n[selfping](https://discord.gg/dfdvArY) - Check if selfbot is alive/latency.\n[selfsbinfo](https://discord.gg/dfdvArY) - FAQ about selfbots.\n[selfcasb](https://discord.gg/dfdvArY) - Creating a selfbot.\n[selfshowcodes](https://discord.gg/dfdvArY) - Show all codes.\n[selftoken](https://discord.gg/dfdvArY) - Info on user token.\n[selfvac](https://discord.gg/dfdvArY) - Vacation.\n[selflearnjs](https://discord.gg/dfdvArY) - Show useful link\'s on learning js.\n[selfstats](https://discord.gg/dfdvArY) - Show selfbot stats.\n[selfinfo](https://discord.gg/dfdvArY) - Show userinfo.\n[selfw](https://discord.gg/dfdvArY) - Show\'s user\'s info.\n[selfsi](https://discord.gg/dfdvArY) - Server info\n[selfembed](https://discord.gg/dfdvArY) - Text embed.\n[selfavi](https://discord.gg/dfdvArY) - Show current avatar.\n[selfget](https://discord.gg/dfdvArY) - Get user\'s avatar.')
  .addField('Owner', '[selfsource](https://discord.gg/dfdvArY) - Selfbot source code.\n[selfeval](https://discord.gg/dfdvArY) - Runs javascript code.\n[selfrestart](https://discord.gg/dfdvArY) - Restart the selfbot.\n[selfgm](https://discord.gg/dfdvArY) - Message members in a server.\n[selffriend](https://discord.gg/dfdvArY) - Add friend a user\n[selfunfriend](https://discord.gg/dfdvArY) - Unfriend a user.\n[selfblock](https://discord.gg/dfdvArY) - Block a user.\n[selfunblock](https://discord.gg/dfdvArY) - Unblock a user.\n[selfsearch](https://discord.gg/dfdvArY) - Search message.\n[selfembed](https://discord.gg/dfdvArY) - Text embed.\n[selflinks](https://discord.gg/dfdvArY) - Show\'s my social media site and server.\n[selfquote](https://discord.gg/dfdvArY) - Quote a message.\n[selfcb](https://discord.gg/dfdvArY) - CodeBlock.')
  message.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        ).then(message => message.delete(30000));
}
