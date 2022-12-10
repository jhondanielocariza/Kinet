module.exports.config = {
  name: "18+",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy simp4Chaeyoung",
  description: "Chaeyoung Pictures.",
  commandCategory: "Image",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/gD5dUBw.jpeg",
"https://i.imgur.com/xJXro7h.jpeg",
"https://i.imgur.com/ksuoqwN.jpeg",
  ];
	 var callback = () => api.sendMessage({body:`eto oh pag jakulan mong tigang ka`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };