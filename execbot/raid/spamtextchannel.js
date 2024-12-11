const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class TextChannelCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "spamtextchannels",
      memberName: "spamtextchannels",
      group: "raid",
      description: "Spams text channels",
      argsType: "multiple",
      clientPermissions: ["MANAGE_CHANNELS"],
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 5,
      },
    });
  }

  async run(message, args) {
    message.delete();

    const noNumEmbed = new Discord.MessageEmbed()
      .setAuthor("Spam Roles Command")
      .setFooter(
        "Exaults Nuke",
        "https://media.discordapp.net/attachments/956524954315288586/956527228265590804/a65bc121523e7657e95056266da4f08e.jpg"
      )
      .setDescription(
        "Error! Enter a valid number for the count\n`.spamroles <count> | .spamroles 3`"
      )
      .setColor("#ff0000");
    if (!args[0] || isNaN(parseFloat(args[0]))) {
      message.channel.send(noNumEmbed);
      return;
    }

    var count = Math.round(args[0]);

    if (count > 20) {
      count = 20;
    }

    let categoryId = "";
    message.guild.channels
      .create("EXAULTS COMMUNITY", { type: "category" })
      .then((channel) => {
        channel.setPosition(0);
        categoryId = channel.id;
        channel.overwritePermissions([
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"],
            allow: ["ADD_REACTIONS", "READ_MESSAGE_HISTORY", "VIEW_CHANNEL"],
          },
        ]);
      });
    let msg1;
    await message.channel
      .send(`Creating ${count} text channel/s...`)
      .then((m) => {
        msg1 = m;
      });

    for (let i = 1; i <= count; i++) {
      setTimeout(() => {
        message.guild.channels
          .create("ExaultsNuke", {
            type: "text",
            parent: categoryId,
            topic: "Epic nuker bot",
          })
          .then((channel) => {
            channel.send(`||@everyone||\nEXAULTS COMMUNITY https://discord.gg/NtXPgjxj !`);
          });
      }, 1000);
    }

    await msg1.edit("Done!");
    setTimeout(() => {
      msg1.delete();
    }, 5000);

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: spamtextchannel`);
  }
};
