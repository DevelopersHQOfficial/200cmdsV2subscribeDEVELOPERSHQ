var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Help Menu",
    usage: "1) m/help \n2) m/help [module name]\n3) m/help [command (name or alias)]",
    example: "1) m/help\n2) m/help utility\n3) m/help ban",
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}help`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    
     .setThumbnail(bot.user.displayAvatarURL())   
      
    .setTitle("<a:settings:878168040754266122> Here are my all commands")
    .setDescription (`ㅤㅤ `)
    
      .addField(
        "<<a:king:878167590818701312> **ADMIN**",
        "`setmodlogchannel` `setnick` `slowmode` `setprefix` `setverification` `setxd` `disablemodlogchannel` `disablexd`"
      )
      .addField(
        "<a:ea_hype_squad:877556008099143740> **MODERATION**",
        "`Ban` `Kick` `vcmove` `smove` `voicekick` `lock` `unlock` `Unban` `Mute` `Purge` `Hackban` `uptime` `avatar` `embed` `announce` `imageannounce` `role` `roleadd` `roledel` `rolecreate` `deleterole` `createvc` `createchat` `delchannel` `disablexp` `setxp` `setprefix`"
      )
      .addField(
        "<:Economy:878169056522407937> **ECONOMY**",
        "`work` `fish` `rob` `balance` `profile` `daily` `pay` `beg` `buy` `deposit` `leaderboard` `roulette` `sell` `setbackground` `setinfo` `slots` `store` `weekly` `withdraw`"
      )
      .addField(
        "<:Games:878169955613417493> **GAMES**",
        "`blackjack` `connectfour` `duelquiz` `gunfight` `horserace` `memory` `poker` `rps` `russianroulette` `tictactoe` `trivia`"
      )
      .addField(
        "<a:toofunny:877553355667431504> **FUN**",
        "`kiss` `hug` `pat` `zaglo` `slap` `smug` `tickle` `poke` `binary` `advice` `scroll`"
      )
      .addField(
        "<:nsfw:877522884329881651> **NSFW**",
        "|| `2dpussy` `2dboobs` `2dfeet` `2dholo` `2dholoero` `tits` `blowjobs` `cumart`  `ero` `erokitsune` `eroyuri` `femdom` `futanari` `gasm` `girlsolo` `hentai` `neko` `keta` `kitsune` `lesbian` `lewneko` `nekogif` `pussyart` `trap` `yuri` `danbooru` `gelbooru` `r34` `fuck` `kuni` `2danal` `cum` `suck` `masturbation` `spank` `4k` `ass` `anal` `porn` `pussy` `boobs` ||"
      )
      .addField(
        "<a:camera:878172810709725205> **IMAGE**",
        "`triggered` `delete` `rip` `jail` `captcha` `wideavatar` `toilet` `wa` `clyde` `wasted` `effect` `tweet` `minecraft` `blur` `beautiful` `catsay` `cowsay` `fliptext`"
      )
      .addField(
        "<:utility:877555056927449138> **UTILITY**",
        "`membercount` `yt` `steal` `define` `sourcebin` `docs` `weather` `qr` `applestore` `anime` `linkshorten` `playstore` `country` `ascii` `emojiid` `vaportext`"
      )


message.channel.send(log);
}
}
  }

 