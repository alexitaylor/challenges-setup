const axios = require('axios');
const chalk = require('chalk');
const faker = require('faker');
const path = require('path');
const fs = require('fs');
const format = require('date-fns/format');
const template = require('lodash').template;
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

const updateTeamDataFileConfig = (fileName) => {
  try {
    console.log(chalk.yellow(`Updating TEAM_DATA_FILE config...`));

    const templateString = (`module.exports = '<%- fileName %>';`);
    const compiled = template(templateString);
    const newConfigFile = compiled({ fileName });
    const configFile = path.resolve(__dirname, '..', 'configs/teamDataFile.js');

    fs.writeFileSync(configFile, newConfigFile);

    console.log(chalk.green(`✅ Updated TEAM_DATA_FILE config!`));
  } catch (e) {
    console.log(chalk.red(`❌ Error unable to update TEAM_DATA_FILE config. ${e}`));
  }
};

const saveTeams = (teams) => {
  try {
    console.log(chalk.yellow(`Saving teams to file...`));
    const teamDataDir = path.resolve(__dirname, '..', 'team_data/');

    const fileName = `teams_${config.TENANT}_${format(new Date(), 'yyyy-MM-dd_HH:mm:ss.SSS')}.json`;
    fs.writeFileSync(`${teamDataDir}/${fileName}`, JSON.stringify(teams));

    updateTeamDataFileConfig(fileName);

    console.log(chalk.green(`✅ The file was save, ${fileName}`));
  } catch (e) {
    throw `❌ Error unable to save teams. ${e}`;
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

    saveTeams(teams);

    console.log(chalk.green(`✅ Generated ${numberOfTeams} teams and upserted to challenge`));
    return teams;
  } catch (e) {
    throw `❌ Error unable to generate teams. ${e}`;
  }
};

generateNewTeams(4);


