const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class SpamEveryoneCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "spameveryone",
      group: "raid",
      memberName: "spameveryone",
      description: "Spam pings everyone in the server",
      guildOnly: true,
      clientPermissions: ["MENTION_EVERYONE"]
    });
  }

  async run(message, args) {
    message.delete();

    const failEmbed = new Discord.MessageEmbed()
      .setAuthor("Spam Everyone Command")
      .setColor("#ff0000")
      .setFooter(
        "Exaults Nuke",
        "https://media.discordapp.net/attachments/956524954315288586/956527228265590804/a65bc121523e7657e95056266da4f08e.jpg"
      )
      .setDescription("Invalid arguments provided!\n`.spameveryone <count>`");

    if (!args) {
      message.channel.send(failEmbed);
      return;
    }
    var count = args;
    if (isNaN(parseFloat(count))) {
      message.channel.send(failEmbed);
      return;
    }
    count = Math.round(count);

    if (count > 40) {
      count = 40;
    }

    for (let i = 1; i <= count; i++) {
      setTimeout(() => {
        message.channel.send("@everyone WizzSec X Jerzzy X Executive Join now discord.gg/executive!");
      }, 500);
    }

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: spameveryone`);
  }
};
