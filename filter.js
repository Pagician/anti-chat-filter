const Discord = require('discord.js');
const {fake, real} = require('./words.js');
module.exports = function(message){
    var msg = message.toLowerCase();
    for(var i = 0; i < fake.length; i++){
        while(msg.includes(fake[i])){
            msg = msg.replace(fake[i], real[i]);
        }
    }
    return msg;
}//end of file