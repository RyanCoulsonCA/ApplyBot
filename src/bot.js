const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Discord = require('discord.js');
const commands = require('./commandHandler.js');
const parser = require('./messageParser.js');
const config = require('../config.json');


/* Initialize Discord Client */
const client = new Discord.Client();

/* Initialize Sqlite3 Database */
const db = new sqlite3.Database('db/database.db', (err) => {
	err ? console.log(err) : console.log('Database connected successfully.');
});

/* Initialize Express and Endpoints */
app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(config.WEB_PORT, () => {
	console.log(`Web server up and running on port ${config.WEB_PORT}`);
});

/* Discord Bot Listeners */
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
	const message = parser.parse(msg);

	if(message.command in commands.commands && !message.author.bot) {
		commands.commands[message.command](msg, message.args);
	}
});

client.on('guildMemberAdd', member => {
	const user = member.user;
	user.send("Welcome!");
});

client.login(config.token);
