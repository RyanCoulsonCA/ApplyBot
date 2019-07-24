/**
 * This module contains a mapping of bot commands to actions. When a user types in one of the commands listed below, the
 * associated action will be performed. Any new commands should be added to this module.
 */

const commands = {
	"ping": (msg, args) => {
		msg.channel.send("Pong!");
	}
};

module.exports = { commands };
