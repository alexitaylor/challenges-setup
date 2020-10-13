const axios = require('axios');
const chalk = require('chalk');
const config = require('../configs/configs');

/**
 * @method joinUserToMission
 *
 * @description joins a user to a mission
 *
 * @param {string} rallyId
 * @param {string} username
 * @param {string} missionId
 *
 * @return {Promise<boolean>}
 * */
const joinUserToMission = async (
  rallyId,
  username,
  missionId,
) => {
  try {
    console.log(chalk.yellow(`Joining user to mission...`));

    await axios.post(
      `${config.MISSIONS_BASE_URL}/join/${missionId}/${rallyId}`,
      {
        "username": username,
        "timeZoneId": "America/Los_Angeles"
      });

    console.log(chalk.green(`✅ Successfully joined user, ${rallyId}, to mission, ${missionId}`));
    return true;
  } catch (e) {
    console.error(chalk.red(`❌ Failed to join user, ${rallyId}, to mission, ${missionId}.`, e));
    return false;
  }
};

/**
 * @method joinUserToMissions
 *
 * @description joins a user to a mission
 *
 * @param {string[]} missionIds Set of missions to join a user to.
 *
 * @return {Promise<void>}
 * */
const joinUserToMissions = async (
  missionIds,
) => {
  const rallyId = config.CURRENT_USER.rallyId;
  const username = config.CURRENT_USER.username;
  try {
    console.log(chalk.yellow(`Joining user to set of missions...`));
    let flag;
    for (let i = 0; i < missionIds.length; i++) {
      flag = await joinUserToMission(rallyId, username, missionIds[i])
    }

    if (!flag) {
      throw Error('Failed to join user to a mission');
    }

    console.log(chalk.green(`✅ Successfully joined user, ${rallyId}, to set of missions!`));
  } catch (e) {
    console.error(chalk.red(`❌ Failed to join user, ${rallyId}, to set of missions`, e));
  }
};

module.exports = {
  joinUserToMissions,
};
