const axios = require('axios');
const chalk = require('chalk');
const utils = require('../utils');
const config = require('../configs/configs');

const joinUserToTeam = async (challengeId, rallyId, teamId) => {
  try {
    console.log(chalk.yellow(`Joining user to team...`));
    const reqUrl = `${config.CHALLENGESV2_BASE_URL}/internal/challengesv2/v1/instances/${challengeId}/editor/${rallyId}/teamId/${teamId}/join`;

    await axios.post(reqUrl, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    console.log(chalk.green(`✅ Joined user to team.`));
  } catch (e) {
    console.log(chalk.red(`❌ Error unable to join user, ${rallyId}, to team, ${teamId} and to challenge ${challengeId}. ${e}`));
  }
};

const joinUsersToTeam = async () => {
  try {
    console.log(chalk.yellow(`Joining group of users to challenge...`));

    const teams = utils.readTeamData();
    const users = utils.readUserData();
    let chunk = Math.ceil(users.length / teams.length);
    let start = 0, end = chunk;

    for (var i = 0; i < teams.length; i++) {
      const userChunk = users.slice(start, end);

      for (var j = 0; j < userChunk.length; j++) {
        const {
          challengeId,
          teamId,
        } = teams[i];
        const { rallyId } = userChunk[j];

        await joinUserToTeam(challengeId, rallyId, teamId);
      }

      start = end;
      end += chunk;
    }

    console.log(chalk.green(`✅ Joined group of users to challenge.`));
  } catch (e) {
    throw `❌ Error unable to join group of users to team. ${e}`;
  }
};


joinUsersToTeam();
