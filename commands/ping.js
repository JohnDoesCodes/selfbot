const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
        startTime = Date.now();
  message.channel.sendMessage("Pinging...").then((message) => {
            endTime = Date.now();
            message.edit(`Pong Succ ma dicc! \`${Math.round(endTime - startTime)}ms\``);
  });
}