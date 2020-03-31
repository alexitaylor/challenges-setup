const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');
const utils = require('../utils');
const config = require('../configs/configs');

const postCheckins = async(challengeId, rallyId, checkinAmountMax) => {
	try {
		console.log(chalk.yellow(`Posting checkin...`));
		const reqUrl = `${config.CHALLENGESV2_BASE_URL}/internal/challengesv2/v1/instances/${challengeId}/editor/${rallyId}/members/checkins`;
		checkinAmountMax = !!checkinAmountMax ? checkinAmountMax : 20;
		const manualCheckinAmount = utils.getRandomNumber(checkinAmountMax);
		const body = {
			isManual: true,
			manualCheckinAmount,
		};
		const res = await axios.post(reqUrl, body, {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'X-Rally-User-Timezone': 'America/New_York',
			}
		});

		console.log(chalk.green(`✅ Successfully posted checkin for user, ${rallyId}, with manual checkin amount of ${manualCheckinAmount}.`));
	} catch (e) {
		console.log(chalk.red(`❌ Error unable to post checkin for user, ${rallyId}, and challenge, ${challengeId}. ${e}`));
	}
};

// Script to post checkins for a group of users
const generatePostCheckins = async (challengeId, checkinAmountMax) => {
	try {
		console.log(chalk.yellow(`Starting checkins for users...`));
		const users = utils.readUserData();

		for (var i = 0; i < users.length; i++) {
			await postCheckins(challengeId, users[i].rallyId, checkinAmountMax);
		}

		console.log(chalk.green(`✅ Successfully posted checkins for group of users.`));
	} catch (e) {
		console.log(chalk.red(`❌ Error unable to post checkins for group of users. ${e}`));
	}
};

// generatePostCheckins(config.CHALLENGE_ID);
module.exports = {
	generatePostCheckins,
};
