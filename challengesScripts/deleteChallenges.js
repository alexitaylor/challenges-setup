const axios = require('axios');
const chalk = require('chalk');
const dateFns = require('date-fns');
const getInstance = require('./getInstance');
const config = require('../configs/configs');

const updateChallenge = async (challenge) => {
  try {
    console.log(chalk.yellow(`Updating challenge...`));
    const reqUrl = `${config.CHALLENGESV2_BASE_URL}/internal/challengesv2/v1/instances/update/editor/foo`;
    const now  = new Date();

    challenge.instanceDetails.status = 'waiting';
    challenge.instanceDetails.dates.startDate = dateFns.addDays(now, -1);
    challenge.instanceDetails.dates.openDate = dateFns.addDays(now, -1);

    await axios.post(reqUrl, challenge, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    console.log(chalk.green(`✅ Updated challenge.`));
  } catch (e) {
    throw `❌ Error unable to update challenge. ${e}`;
  }
};

const deleteChallenge = async (challengeId) => {
  try {
    console.log(chalk.yellow(`Deleting challenge...`));
    const challenge = await getInstance(challengeId);
    await updateChallenge(challenge);

    const reqUrl = `${config.CHALLENGESV2_BASE_URL}/internal/challengesv2/v1/instances/${challengeId}/editor/foo`;
    await axios.delete(reqUrl, {
      headers: {
        'Accept': 'application/json',
      }
    });

    console.log(chalk.green(`✅ Deleted challenge: ${challenge.challengeId}`));
  } catch (e) {
    throw `❌ Error unable to delete challenge. ${e}`;
  }
};

const deleteChallenges = async (challengeIds) => {
  try {
    console.log(chalk.yellow(`Deleting list of challenges...`));

    for (var i = 0; i < challengeIds.length; i++) {
      await deleteChallenge(challengeIds[i]);
    }

    console.log(chalk.green(`✅ Deleted challenges: ${challenge.challengeId}`));
  } catch (e) {
    throw `❌ Error unable to delete list of challenges. ${e}`;
  }
};

// Add challenge IDs here:
const challengeIds = [
];

deleteChallenges(challengeIds);
