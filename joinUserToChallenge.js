const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');

const joinUserToChallenge = async (challengeId, rallyId) => {
	try {
		console.log(chalk.yellow(`Joining user to challenge...`));
		const reqUrl = `https://challenges-challengesv2.sad-noyce.rally-dev.com/internal/challengesv2/v1/instances/${challengeId}/editor/${rallyId}/join`;

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
		// Change file or generate new users if you need a new set of users
		const userDataFile = 'users_1.json';
		const usersJson = fs.readFileSync(`./user_data/${userDataFile}`, 'utf8');
		const users = JSON.parse(usersJson);

		for (var i = 0; i < users.length; i++) {
			await joinUserToChallenge(challengeId, users[i].rallyId);
		}

		console.log(chalk.green(`✅ Joined group of users to challenge.`));
	} catch (e) {
		throw `❌ Error unable to join group of users to challenge, ${challengeId}. ${e}`;
	}
};

joinUsersToChallenge('241bf2cc-d2fd-4e14-8b0b-95b3bbc3f34a');

// joinUserToChallenge('241bf2cc-d2fd-4e14-8b0b-95b3bbc3f34a', 'aed9ff4d-dc1d-46ad-9a51-3e6b2800694a');