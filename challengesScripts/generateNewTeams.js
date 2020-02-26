const axios = require('axios');
const chalk = require('chalk');
const faker = require('faker');
const config = require('../configs/configs');

const normalColors = ['#3287a8', '#FF5733', '#1FE415', '#A622F6'];
let normalColorsIdx = 0;

const upsertNewTeam = async () => {
  try {
    console.log(chalk.yellow(`Upserting new team to challenge...`));
    const reqUrl = `${config.CHALLENGESV2_BASE_URL}/internal/challengesv2/v1/teams/editor/foo/upsert`;
    const randomNumber = faker.random.number();
    const description = faker.lorem.sentence();

    if (normalColorsIdx === 4) {
      normalColorsIdx = 0;
    }

    const body = {
      challengeId: config.CHALLENGE_ID,
      teamName: `TEAM ${randomNumber}`,
      description,
      normalColor: normalColors[normalColorsIdx],
      brightColor: 'string',
      darkColor: 'string'
    };
    normalColorsIdx += 1;

    const res = await axios.post(reqUrl, body, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    const team = res.data;

    console.log(chalk.green(`✅ Upserted new team, ${team.teamId}, to challenge, ${config.CHALLENGE_ID}`));
    return team;
  } catch (e) {
    throw `❌ Error unable to upsert new team to challenge. ${e}`;
  }
};

const generateNewTeams = async (numberOfTeams) => {
  try {
    console.log(chalk.yellow(`Generating ${numberOfTeams} teams...`));
    const teams = [];

    for (var i = 0; i < numberOfTeams; i++) {
      const team = await upsertNewTeam();
      teams.push(team);
    }

    console.log(chalk.green(`✅ Generated ${numberOfTeams} teams and upserted to challenge`));
    return teams;
  } catch (e) {
    throw `❌ Error unable to generate teams. ${e}`;
  }
};

generateNewTeams(4);


