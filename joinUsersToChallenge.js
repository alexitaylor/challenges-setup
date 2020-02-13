const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');
const utils = require('./utils');
const config = require('./configs/configs');

const joinUserToChallenge = async (challengeId, rallyId) => {
	try {
		console.log(chalk.yellow(`Joining user to challenge...`));
		const reqUrl = `${config.CHALLENGESV2_BASE_URL}/internal/challengesv2/v1/instances/${challengeId}/editor/${rallyId}/join`;

		const res = await axios.post(reqUrl, {}, {
	    	headers: {
	    		'Content-Type': 'application/json',
	    		'Accept': 'application/json',
	    		'X-Rally-User-Timezone': 'America/New_York',
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
joinUsersToChallenge(config.CHALLENGE_ID);
