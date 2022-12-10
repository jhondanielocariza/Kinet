module.exports.config = {
  name: "gae",
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
"https://i.imgur.com/g1RHAdv.jpeg",
"https://i.imgur.com/an1cUKi.jpeg",
"https://i.imgur.com/okaWbpn.jpeg",
"https://i.imgur.com/P2MMWIx.jpeg",
"https://i.imgur.com/UJHFjiQ.jpeg",
"https://i.imgur.com/zZKqisC.jpeg",
"https://i.imgur.com/THwEmps.jpeg",
"https://i.imgur.com/QvFmWUd.jpeg",
"https://i.imgur.com/MxEh8Am.jpeg",
"https://i.imgur.com/LP9dpHt.jpeg",
  ];
	 var callback = () => api.sendMessage({body:`Hala si acclaaa \nNumber of photos available: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };