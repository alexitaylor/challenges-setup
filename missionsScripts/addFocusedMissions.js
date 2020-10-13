const axios = require('axios');
const chalk = require('chalk');
const config = require('../configs/configs');

/**
 * @method addFocusedMissions
 *
 * @description Add focused missions for user
 *
 * @param {string[]} missionIds
 * @param {string} focusArea
 *
 * @return {Promise<void>}
 * */
const addFocusedMissions = async (
  missionIds,
  focusArea,
) => {
  try {
    console.log(chalk.yellow(`Adding focused missions...`));
    const rallyId = config.CURRENT_USER.rallyId;

    const response = await axios.post(
      `${config.MISSIONS_BASE_URL}/focused/add/user/${rallyId}`,
      {
        missionIds,
        focusArea,
      }
    );

    console.log(chalk.green(`✅ Successfully added focused missions with status code: ${response.status}`));
  } catch (e) {
    console.error(chalk.red(`❌ Failed to add focused missions for user, ${rallyId}.`));
    throw Error(e);
  }
};

module.exports = {
  addFocusedMissions,
};
