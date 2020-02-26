const fs = require('fs');
const config = require('./configs/configs');

function getRandomNumber(max) {
	return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

function readUserData() {
	// Change file or generate new users if you need a new set of users
	const userDataFile = config.USER_DATA_FILE;
	const usersJson = fs.readFileSync(`./user_data/${userDataFile}`, 'utf8');
	return JSON.parse(usersJson);
}

function readTeamData() {
	const teamDataFile = config.TEAM_DATA_FILE;
	const teamsJson = fs.readFileSync(`./team_data/${teamDataFile}`, 'utf8');
	return JSON.parse(teamsJson);
}

module.exports = {
	getRandomNumber,
	readUserData,
	readTeamData,
};
