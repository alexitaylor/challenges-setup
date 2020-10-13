const chalk = require('chalk');
const { updateUsersReadiness } = require('./updateUsersReadiness');
const config = require('../configs/configs');

/**
 * @function quitUsersGoal
 *
 * @description Quit's user's goal by passing, {"nowTopics":[],"soonTopics":[]},
 * to the updateUsersReadiness function.
 *
 * @return {Promise<void>}
 * */
const quitUsersGoal = async () => {
  const rallyId = config.CURRENT_USER.rallyId;
  try {
    console.log(chalk.yellow(`Quitting user's goal...`));

    await updateUsersReadiness({"nowTopics":[],"soonTopics":[]});

    console.log(chalk.green(`✅ Successfully quit user's goal!`));
  } catch (e) {
    console.error(chalk.red(`❌ Failed to quit user's goal, ${rallyId}: ${e}`));
    throw e;
  }
};

module.exports = {
  quitUsersGoal,
};
