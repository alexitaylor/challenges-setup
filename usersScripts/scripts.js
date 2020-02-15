const fs = require('fs');
const axios = require('axios');
const chalk = require('chalk');
const path = require('path');
const template = require('lodash').template;
const config = require('../configs/configs');
const shortId = require('shortid');

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
    const userData = { email: user.email, rallyId: user.data_fixture.rallyId, dob: user.data_fixture.dob };
    console.log(chalk.green(`✅ Created user: `), chalk.cyan(JSON.stringify(userData)));
    return userData;
  } catch (e) {
    throw `❌ Error unable to create user. ${e}`;
  }
};

const updateUserDataFileConfig = (fileName) => {
  try {
    console.log(chalk.yellow(`Updating USER_DATA_FILE config...`));

    const templateString = (`module.exports = '<%- fileName %>';`);
    const compiled = template(templateString);
    const newConfigFile = compiled({ fileName });
    const configFile = path.resolve(__dirname, '..', 'configs/userDataFile.js');

    fs.writeFileSync(configFile, newConfigFile);

    console.log(chalk.green(`✅ Updated USER_DATA_FILE config!`));
  } catch (e) {
    console.log(chalk.red(`❌ Error unable to update USER_DATA_FILE config. ${e}`));
  }
};

const saveUsers = (users) => {
  try {
    console.log(chalk.yellow(`Saving users to file...`));
    const userDataDir = path.resolve(__dirname, '..', 'user_data/');

    const fileName = `users_${config.TENANT}_${shortId.generate()}.json`;
    fs.writeFileSync(`${userDataDir}/${fileName}`, JSON.stringify(users));

    updateUserDataFileConfig(fileName);

    console.log(chalk.green(`✅ The file was save, ${fileName}`));
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

module.exports = {
  createUser,
  saveUsers,
  generateUsers,
};
