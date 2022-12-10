const fs = require("fs");
module.exports.config = {
	name: "heven",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "heven",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("heven")==0 || event.body.indexOf("heven")==0 || event.body.indexOf("heven")==0 || event.body.indexOf("Heven")==0 || event.body.indexOf("Heven")==0 || event.body.indexOf("Heven")==0 || event.body.indexOf("hevenly")==0 || event.body.indexOf("Hevenly")==0 || event.body.indexOf("hevenly")==0 || event.body.indexOf("hevenly")==0 || event.body.indexOf("hevenly")==0 || event.body.indexOf("heven")==0) {
		var msg = {
				body: "yon ba yong may gusto kay killua?",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }