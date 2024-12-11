const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class HelpCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "help",
      group: "misc",
      memberName: "help",
      description: "Sends a list of available command",
      guildOnly: true,
    });
  }

  async run(message) {
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setColor("#000001")
      .setAuthor("Help Command")
      .setDescription("Exaults Community")
      .setThumbnail('https://media.discordapp.net/attachments/956532809734967316/956533769559482438/20220324_043116.png')
      .setFooter(
        "Exaults Community",
        "https://media.discordapp.net/attachments/956532809734967316/956533752308326470/20220324_044756.png"
      )
      .addFields(
        {
          name: "`.add <Num1> <Num2> ...`",
          value: "Menambahkan nomor yang ditentukan",
        },
        {
          name: "`.av/.avatar [<@User/User ID>]`",
          value:
            "Mengirim gambar yang diperbesar dari foto profil pengguna",
        },
        {
          name: "`.ping`",
          value: "Mengirim info ping dari bot",
        },
        {
          name: "`.help`",
          value: "daftar perintah yang tersedia",
        },
        {
          name: "`.serverinfo`",
          value: "beberapa info dasar yang terkait dengan server",
        },
        {
          name: "`.shutdown`",
          value: "Shutsdown Bot",
        },
        {
          name: "`.ban <@User/User ID> [<Reason>]`",
          value: "Ban pengguna yang ditentukan",
        },
        {
          name: "`.kick <@User/UserID> [<Reason>]`",
          value: "Kick pengguna yang ditentukan",
        },
        {
          name: "`.clean <count>`",
          value: "Membersihkan jumlah pesan yang ditentukan termasuk pesan yang disematkan | Batas Maks: 500",
        },
        {
          name: "`.purge <count>`",
          value:
            "Membersihkan/Menghapus sejumlah pesan tertentu, tidak termasuk pesan yang disematkan | Batas Maks: 300",
        },
        {
          name: "`.warn <@User/User ID> <Reason>`",
          value: "Warns user",
        },
        {
          name: "`.banall`",
          value:
            "Ban setiap orang yang dapat diblokir",
        },
        {
          name: "`.kickall`",
          value:
            "Kick setiap orang yang dapat diblokir",
        },
        {
          name: "`.delchannels`",
          value: "Menghapus semua channels di server"
        },
        {
          name: "`.delroles`",
          value: "Menghapus semua Role yang dapat dihapus di server"
        },
        {
          name: "`.dmowner <count>`",
          value: "Spam DM owner",
        },
        {
          name: "`.spam <count>`",
          value: "Spam beberapa pesan  di Channels",
        },
        {
          name: "`.spamdm <@User/User ID> <count>`",
          value: "Spam DM pengguna yang disebutkan",
        },
        {
          name: "`.spameveryone <count>`",
          value: "Spam ping everyone",
        }, 
        {
          name: "`.spamowner <count>`",
          value: "Spam ping Owner di Channels",
        },
        {
          name: "`.spamroles <count>`",
          value:
            "Spam creates `<count>`",
        },
        {
          name: "`.spamtextchannels <count>`",
          value: "Spam creates `<count>` text channels",
        }
      );
    message.channel.send(embed);

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: help`);
  }
};