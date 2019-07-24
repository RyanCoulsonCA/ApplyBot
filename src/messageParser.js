/***
 * This module takes in a Message object from Discord and turns it in to a more simplified object to be used
 * across the app.
 ***/


const parse = (msg) => {
	var args = msg.content.split(" ");

	return {
		'command': args[0].toLowerCase(),
		'args': args.map(m => { m.toLowerCase(); }),
		'channel': {
			'name': msg.channel.name,
			'type': msg.channel.type
		},
		'author': {
			'username': msg.author.username,
			'tag': msg.author.tag,
			'bot': msg.author.bot
		}
	};
};

module.exports = { parse };
