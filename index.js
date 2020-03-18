/*
Holden needs to say the fuck word
*/

//generic discord bot things
const Discord = require('discord.js');
const client  = new Discord.Client();

//imports token from config.json
const {token} = require('./config.json');
client.login(token);

client.on('ready', () =>{
    console.log("Anti-chat filter v1.0");
    console.log("Made by The_Pagician");
    console.log("Ready to make Holden swear");
})

const handler = require('./handler.js');

client.on('message', handler);
client.on('messageUpdate', handler);