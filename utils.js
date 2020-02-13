const fs = require('fs');
const config = require('./configs/configs');

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

function readUserData() {
	// Change file or generate new users if you need a new set of users
	const userDataFile = config.USER_DATA_FILE;
	const usersJson = fs.readFileSync(`./user_data/${userDataFile}`, 'utf8');
	const users = JSON.parse(usersJson);
	return users;
}

module.exports = {
	getRandomNumber,
	readUserData,
}
