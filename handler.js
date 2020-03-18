//reads the messages and handles the response
const Discord = require('discord.js');
const filter = require('./filter.js');

module.exports = function(msg, useless = null){
    if(!msg.guild){
        return;
    }//keeps dm's from breaking the bot
    if(msg.author.bot){
        return;
    }//prevents any kind of bot recursion
    if(useless){
        msg = useless;
    }//end of useless
    
    var newMessage = filter(msg.content);

    if(newMessage === msg.content.toLowerCase()){
        return;
    }//if nothing changes end the function

    msg.delete();
    msg.reply(newMessage);


}//end of file