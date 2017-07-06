const Discord = require('discord.js')
const client = new Discord.Client()

client.login(require('./token.json').token)
