const axios = require('axios');
const chalk = require('chalk');
const config = require('../configs/configs');

const getInstance = async (challengeId) => {
  try {
    console.log(chalk.yellow(`Getting challenge...`));
    const reqUrl = `${config.CHALLENGESV2_BASE_URL}/internal/challengesv2/v1/instances/${challengeId}/version/1`;
    const res = await axios.get(reqUrl, {
      headers: {
        'Accept': 'application/json',
      }
    });
    const challenge = res.data;

    console.log(chalk.green(`✅ Retrieved challenge: ${challenge.challengeId}`));
    return challenge.instance;
  } catch (e) {
    throw `❌ Error unable to get challenge. ${e}`;
  }
};

module.exports = getInstance;
