const axios = require('axios');
const chalk = require('chalk');
const config = require('../configs/configs');

/**
 * @function updateUsersReadiness
 *
 * @description Update user's readiness state
 * * To quit user's readiness goal pass the following:
 * {"nowTopics":[],"soonTopics":[]} to the update param.
 *
 * @param {object} [update]
 * @param {boolean} [isMissionPack]
 *
 * @return {Promise<string>} Returns 204 response code if successful.
 * */
const updateUsersReadiness = async (update, isMissionPack) => {
  try {
    console.log(chalk.yellow(`Updating user's readiness state...`));
    const rallyId = config.CURRENT_USER.rallyId;

    // TODO need to make this more dynamic instead of hard coding
    // const update = isMissionPack ? {
    //   "nowTopics":[
    //     "nutrition"
    //   ],
    //   "soonTopics":[
    //
    //   ],
    //   "userPlan":{
    //     "goalType":"missionPack",
    //     "status":"inProgress"
    //   }
    // } : {
    //   "nowTopics":[
    //     "nutrition"
    //   ],
    //   "soonTopics":[
    //     "stress",
    //     "exercise",
    //     "weight"
    //   ],
    //   "userPlan":{
    //     "goalType":"programs",
    //     "planId":"851c3d10-ed23-4412-b1e9-9b56881a7557",
    //     "status":"inProgress"
    //   }
    // };

    update = !!update ? update : {
      "nowTopics":[
        "nutrition"
      ],
      "soonTopics":[],
      "userPlan":{
        "goalType":"missionPack",
        "status":"inProgress"
      }
    };

    const response = await axios.post(
      `${config.R2C_BASE_URL}/r2c/v1/internal/${rallyId}/userInput`,
        update,
    );

    console.log(chalk.green(`✅ Successfully updated user's readiness state with status: ${response.status}`));
    return response.status;
  } catch (e) {
    console.error(chalk.red(`❌ Failed to update user's readiness state with rallyId, ${config.CURRENT_USER.rallyId}: ${e}`));
    throw e;
  }
};

module.exports = {
  updateUsersReadiness,
};
