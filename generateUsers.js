const fs = require('fs');
const axios = require('axios');
const chalk = require('chalk');
const config = require('./configs/configs');

const createUser = async () => {
	try {
		console.log(chalk.yellow('Creating user...'));
		const url = 'https://data-setup.silly-dog.rally-dev.com/api/core/create_new_user?partner_id=rally&client_id=rally_health';
		const res = await axios.get(url, {
			headers: {
				'accept': 'application/json',
				'env': `${config.TENANT}.rally-dev.com`
			}
		});
		const user = res.data;
		console.log(chalk.green(`✅ Created user: ${user.data_fixture.rallyId}`));
		return { email: user.email, rallyId: user.data_fixture.rallyId, dob: user.data_fixture.dob };
	} catch (e) {
		throw `❌ Error unable to create user. ${e}`;
	}
};

const saveUsers = (users) => {
	try {
		console.log(chalk.yellow(`Saving users to file...`));
		let fileNumber = 0;
		fs.readdirSync('./user_data/').forEach(file => {
			const endIdx = file.indexOf('.json');
			const currentFileNumber = Number.parseInt(file.slice(6, endIdx));
			fileNumber = fileNumber > currentFileNumber ? number : currentFileNumber;
		});

		const fileName = `users_${fileNumber + 1}.json`;
		fs.writeFile(`./user_data/${fileName}`, JSON.stringify(users), function(err) {
			if (err) {
				return console.log(`❌ Error unable to write to file. ${err}`);
			}
			console.log(chalk.green(`✅ The file was save, ${fileName}`));
		});
	} catch (e) {
		throw `❌ Error unable to save users. ${e}`;
	}
};

const generateUsers = async (numberOfUsers) => {
	try {
		console.log(chalk.yellow(`Generating ${numberOfUsers} users...`));
		const users = [];

		for (var i = 0; i < numberOfUsers; i++) {
			const user = await createUser();
			users.push(user);
		}

		saveUsers(users);
		console.log(chalk.green(`✅ Generated ${numberOfUsers} users`));
		return users;
	} catch (e) {
		throw `❌ Error unable to generate users. ${e}`;
	}
};

generateUsers(20);
