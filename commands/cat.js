const Discord = require("discord.js");
const {get} = require("snekfetch");
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
  get("https://random.cat/meow").then(response => {
    embed.setImage(response.body.file)
    .setColor("#2FADE5")
    message.channel.send({embed})
  });
}
