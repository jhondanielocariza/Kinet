const fs = require("fs");
module.exports.config = {
	name: "totnak",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("inamo")==0 || event.body.indexOf("inamo")==0 || event.body.indexOf("inamo")==0 || event.body.indexOf("Inamo")==0 || event.body.indexOf("kantot")==0 || event.body.indexOf("Kantot")==0 || event.body.indexOf("panget")==0 || event.body.indexOf("pangit")==0 || event.body.indexOf("Panget")==0 || event.body.indexOf("Pangit")==0 || event.body.indexOf("totnak")==0 || event.body.indexOf("Totnak")==0) {
		var msg = {
				body: "mama mo",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }