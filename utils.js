const fs = require('fs');

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

function readUserData() {
	// Change file or generate new users if you need a new set of users
	const userDataFile = 'users_1.json';
	const usersJson = fs.readFileSync(`./user_data/${userDataFile}`, 'utf8');
	const users = JSON.parse(usersJson);
	return users;
}

module.exports = {
	getRandomNumber,
	readUserData,
}
