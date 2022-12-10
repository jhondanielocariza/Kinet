const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["kingamo gago ka", "kinginamo saksakin kita mura ka ng mura e", " kingina mo bawal mag mura dito", "kinginamo bakit hindi mo murahin magulang mong tanga ka", "ulol gago tanga inutil sa bahay nyo.ka mag mura wag dito", "isa pang mura sasapakin ka ng admin ko gago", "mag mura ka pa ulit para mawalan kana ng hininga", "bobo ka tanga", "ulol gago mamatay kana", "kinginamo kagatin ko tinggel mojan e"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  
  
  
  var tl = ["gago pakyu", "gago mamatay kana", "landi amputa, mabuntis ka sana", "ulol gago eto ka🖕🏿", "nigga kinginamo", "mamatay kana ulol", "hahahaha", "parang tanga amputa"];
  var daniel = tl[Math.floor(Math.random() * tl.length)]


  var tl = ["don't force someone who's not into you", "may iba na ’yon", "’di kana mahal ’non.", "kung ako na lang sana", "if you were mine you would not get the same", "kung ako yan...", "nandito naman ako e", "kung ako ’yon di kita sasayangin"];
  var retri = tl[Math.floor(Math.random() * tl.length)]
  
  
  
  var tl = ["yes?", "ano nanaman kailangan mo tanginaka", "’ano?", "ano ba yon kitang nag titikol yung tao", "ano kinginamo", "oo, ano?", "kinginamo /help para sa commands", "hahahaha"];
  var master = tl[Math.floor(Math.random() * tl.length)]
  
  
  
    var tl = ["pakamatay kana", "eto lubid oh", "talon kana sa building", "tama yan sumuko kana sa buhay, kuha ka lubid", "o.a mo naman tangina ka", "andrama mo tanga", "kinginamo ako na lang papatay sayo kung sawa kana sa buhay mo", "ito oh lubid pwede kana mamatay"];
  var sad = tl[Math.floor(Math.random() * tl.length)]
  
  
    var tl = ["nu tinatawa mojan tanga", "happy amputa haha", "mamatay ka sana kakatawa", "sige tawa pa kakagatin ko tingel mojan", "wala namang nakakatawa bogo", "la naman nakakatawa"];
  var happy = tl[Math.floor(Math.random() * tl.length)]
  


  
    if (event.body.indexOf("Burat")==0 ||(event.body.indexOf("burat")==0 ||(event.body.indexOf("Puke")==0 ||(event.body.indexOf("puke")==0 ||(event.body.indexOf("tangina")==0 ||(event.body.indexOf("Tangina")==0 ||(event.body.indexOf("Tanginamo")==0 ||(event.body.indexOf("Tanginamo")==0 ||(event.body.indexOf("taina")==0 ||(event.body.indexOf("Taina")==0 ||(event.body.indexOf("Pota")==0 ||(event.body.indexOf("pota")==0 || (event.body.indexOf("gago")==0 || (event.body.indexOf("Gago")==0 || (event.body.indexOf("tanga")==0 ||(event.body.indexOf("Tanga")==0 ||(event.body.indexOf("bobo")==0 ||(event.body.indexOf("Bobo")==0 ||(event.body.indexOf("Tarantado")==0 || (event.body.indexOf("tarantado")==0 || (event.body.indexOf("ulol")==0 || (event.body.indexOf("tang ina")==0 ||(event.body.indexOf("Tang ina")==0 ||(event.body.indexOf("po ta")==0 ||(event.body.indexOf("Pota")==0 || (event.body.indexOf("ulol")==0 || (event.body.indexOf("Ulol")==0 || (event.body.indexOf("tanginamoka")==0)))))))))))))))))))))))))))) {
      var msg = {
				body: `${rand}`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
  };
  
  
    if (event.body.indexOf("Iloveyou")==0 ||(event.body.indexOf("iloveyou")==0 ||(event.body.indexOf("Loveyou")==0 ||(event.body.indexOf("loveyou")==0 ||(event.body.indexOf("love u")==0 ||(event.body.indexOf("Love u")==0 ||(event.body.indexOf("Love you")==0 ||(event.body.indexOf("love you")==0 ||(event.body.indexOf("mahal kita")==0 ||(event.body.indexOf("Mahal kita")==0 ||(event.body.indexOf("Iloveyoutoo")==0 ||(event.body.indexOf("Iloveyoutoo")==0 || (event.body.indexOf("Iloveyoumore")==0 || (event.body.indexOf("iloveyoumore")==0 || (event.body.indexOf("i love you")==0 ||(event.body.indexOf("I love you")==0 ||(event.body.indexOf("ily")==0))))))))))))))))) {
      var msg = {
				body: `${daniel}`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
  };
  
  
    if (event.body.indexOf("HAHAHA")==0 ||(event.body.indexOf("hahaha")==0 ||(event.body.indexOf("HAHA")==0 ||(event.body.indexOf("haha")==0 ||(event.body.indexOf("HAHAHA")==0 ||(event.body.indexOf("hahaha")==0 ||(event.body.indexOf("Hahaha")==0 ||(event.body.indexOf("Haha")==0 ||(event.body.indexOf("HAHAHAHA")==0 ||(event.body.indexOf("hahahaha")==0 ||(event.body.indexOf("whahaha")==0 ||(event.body.indexOf("Whahaha")==0 || (event.body.indexOf("😆")==0 || (event.body.indexOf("😂️")==0)))))))))))))) {
      var msg = {
				body: `${happy}`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
  };

  
    if (event.body.indexOf("I miss you")==0 ||(event.body.indexOf("i miss you")==0 ||(event.body.indexOf("I miss her")==0 ||(event.body.indexOf("i miss her")==0 ||(event.body.indexOf("Imissher")==0 ||(event.body.indexOf("imissher")==0 ||(event.body.indexOf("Imisshim")==0 ||(event.body.indexOf("imisshim")==0 ||(event.body.indexOf("miss")==0 ||(event.body.indexOf("Miss")==0 ||(event.body.indexOf("miss kona sya")==0 ||(event.body.indexOf("namimiss")==0 || (event.body.indexOf("Namimiss")==0 || (event.body.indexOf("missing")==0)))))))))))))) {
      var msg = {
				body: `${retri}`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆️", event.messageID, (err) => {}, true)
  };
  
  
    if (event.body.indexOf("sakit")==0 ||(event.body.indexOf("Sakit")==0 ||(event.body.indexOf("Ansakit")==0 ||(event.body.indexOf("ansakit")==0 ||(event.body.indexOf("aray")==0 ||(event.body.indexOf("Aray")==0 ||(event.body.indexOf("break")==0 ||(event.body.indexOf("Break")==0 ||(event.body.indexOf("sad")==0 ||(event.body.indexOf("Sad")==0 ||(event.body.indexOf("😢")==0 ||(event.body.indexOf("😢")==0 || (event.body.indexOf("😭")==0 || (event.body.indexOf("☹️")==0)))))))))))))) {
      var msg = {
				body: `${sad}`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😢️", event.messageID, (err) => {}, true)
  };

  
    if (event.body.indexOf("bot")==0 ||(event.body.indexOf("Bots")==0 ||(event.body.indexOf("automatic")==0 ||(event.body.indexOf("Automatic")==0 ||(event.body.indexOf("grey")==0 ||(event.body.indexOf("Robot")==0 ||(event.body.indexOf("Bot")==0 ||(event.body.indexOf("Robot")==0 ||(event.body.indexOf("Ieif")==0 ||(event.body.indexOf("Ieif")==0 ||(event.body.indexOf("Kenneth")==0 ||(event.body.indexOf("kenneth")==0 || (event.body.indexOf("Grey")==0 || (event.body.indexOf("Leif")==0 || (event.body.indexOf("leif")==0))))))))))))))) {
      var msg = {
				body: `${master}`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
  };
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
