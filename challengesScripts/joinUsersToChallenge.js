const axios = require('axios');
const chalk = require('chalk');
const utils = require('../utils');
const config = require('../configs/configs');

///internal/challengesv2/v1/instances/47b24acf-979f-4ca6-9b00-7a4a991c2e52/editor/47b24acf-979f-4ca6-9b00-7a4a991c2e52/join'
const joinUserToChallenge = async (challengeId, rallyId) => {
	try {
		console.log(chalk.yellow(`Joining user to challenge...`));
		const reqUrl = `${config.CHALLENGESV2_BASE_URL}/internal/challengesv2/v1/instances/${challengeId}/editor/${rallyId}/join`;

		 await axios.post(reqUrl, {}, {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		});

		console.log(chalk.green(`✅ Joined user to challenge.`));
	} catch (e) {
		console.log(chalk.red(`❌ Error unable to join user, ${rallyId}, to challenge, ${challengeId}. ${e}`));
	}
};

const joinUsersToChallenge = async (challengeId) => {
	try {
		console.log(chalk.yellow(`Joining group of users to challenge...`));
		const users = utils.readUserData();

		for (var i = 0; i < users.length; i++) {
			await joinUserToChallenge(challengeId, users[i].rallyId);
		}

		console.log(chalk.green(`✅ Joined group of users to challenge.`));
	} catch (e) {
		throw `❌ Error unable to join group of users to challenge, ${challengeId}. ${e}`;
	}
};

// Pass in challenge ID
// joinUsersToChallenge(config.CHALLENGE_ID);

module.exports = {
	joinUsersToChallenge,
};
