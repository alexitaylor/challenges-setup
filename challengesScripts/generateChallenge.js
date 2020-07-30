const axios = require('axios');
const chalk = require('chalk');
const faker = require('faker');
const addDays = require('date-fns/addDays');
const addMinutes = require('date-fns/addMinutes');
const fs = require('fs');
const template = require('lodash').template;
const path = require('path');
const config = require('../configs/configs');
const {
  DEFAULT_CHALLENGE,
  TEAM_CHALLENGE,
  WATER_WARRIOR,
  FOOD,
  MEDITATION,
  KINDNESS,
  CITY_WALK_DC,
  CITY_WALK_SF,
  CHALLENGE_CITY_WALK_SF_STEPS,
  CHALLENGE_CITY_WALK_DC_STEPS,
  CITY_WALK_CHI,
  PRIVATE_CHALLENGE,
  ELLIPTICAL,
  CYCLING,
  SWIMMING,
  YOGA
} = require('./challengeData');

const getChallengeType = (type) => {
  switch(type) {
    case 'TEAM':
      return TEAM_CHALLENGE;
    case 'WATER':
      return WATER_WARRIOR;
    case 'FOOD':
      return FOOD;
    case 'MEDITATION':
      return MEDITATION;
    case 'KINDNESS':
      return KINDNESS;
    case 'CITY_WALK_DC':
      return CITY_WALK_DC;
    case 'CHALLENGE_CITY_WALK_DC_STEPS':
      return CHALLENGE_CITY_WALK_DC_STEPS;
    case 'CITY_WALK_SF':
      return CITY_WALK_SF;
    case 'CHALLENGE_CITY_WALK_SF_STEPS':
      return CHALLENGE_CITY_WALK_SF_STEPS;
    case 'CITY_WALK_CHI':
      return CITY_WALK_CHI;
    case 'PRIVATE_CHALLENGE':
      return PRIVATE_CHALLENGE;
    case 'ELLIPTICAL':
      return ELLIPTICAL;
    case 'CYCLING':
      return CYCLING;
    case 'SWIMMING':
      return SWIMMING;
    case 'YOGA':
      return YOGA;
    default:
      return DEFAULT_CHALLENGE
  }
};

const generateChallenge = (challengeType) => {
  try {
    console.log(chalk.yellow(`Generating challenge...`));
    const now  = new Date();
    const randomNumber = faker.random.number();
    const challenge = getChallengeType(challengeType);
    challenge.instanceDetails.name = `${challenge.instanceDetails.name} ${randomNumber}`;
    console.log(addDays(now, 1));
    challenge.instanceDetails.dates = {
      "startDate": addMinutes(now, 5),
      "endDate": addDays(now, 10),
      "openDate": addDays(now, -2),
      "lastJoinableDate": addDays(now, 2),
      "repeatDetails": {
        "numRepeat": 0,
        "repeatGapInterval": 0,
        "repeatUnit": "days"
      }
    };

    console.log(chalk.green(`✅ Generated challenge: ${challenge.instanceDetails.name}`));
    return challenge;
  } catch (e) {
    throw `❌ Error unable to generate challenge. ${e}`;
  }
};

const updateChallengeIdConfig = (challengeId) => {
  try {
    console.log(chalk.yellow(`Updating challenge ID config...`));

    const templateString = (`module.exports = '<%- challengeId %>';`);
    const compiled = template(templateString);
    const newConfigFile = compiled({ challengeId });
    const configFile = path.resolve(__dirname, '..', 'configs/challengeId.js');

    fs.writeFileSync(configFile, newConfigFile);

    console.log(chalk.green(`✅ Updated challenge ID config!`));
  } catch (e) {
    console.log(chalk.red(`❌ Error unable to update challenge ID config. ${e}`));
  }
};

const saveChallengeId = (challengeId) => {
  try {
    console.log(chalk.yellow(`Saving challenge ID to file...`));
    const challengeIdFile = path.resolve(__dirname, '..', 'challenge_data/challenge_ids.txt');

    fs.appendFileSync(challengeIdFile, `\r\n${challengeId}, ${config.TENANT}`);
    updateChallengeIdConfig(challengeId);
    console.log(chalk.green(`✅ Saved challenge ID to file!`));
  } catch (e) {
    console.log(chalk.red(`❌ Error unable to write challenge ID to file. ${e}`));
  }
};

const createChallenge = async (challengeType) => {
  try {
    console.log(chalk.yellow(`Creating challenge...`));
    const reqUrl = `${config.CHALLENGESV2_BASE_URL}/internal/challengesv2/v1/instances/editor/foo`;
    const challengeBody = generateChallenge(challengeType);

    const res = await axios.post(reqUrl, challengeBody, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Rally-User-Timezone': 'America/New_York'
      }
    });

    const challenge = res.data;

    saveChallengeId(challenge.challengeId);

    console.log(chalk.green(`✅ Generated challenge: ${challenge.challengeId}`));
    return challenge;
  } catch (e) {
    throw `❌ Error unable to create challenge. ${e}`;
  }
};

// createChallenge('WATER');
// createChallenge('FOOD');
// createChallenge('TEAM');
// createChallenge('MEDITATION');
// createChallenge('KINDNESS');
// createChallenge();
// createChallenge('CITY_WALK_DC');
// createChallenge('CITY_WALK_CHI');
// createChallenge('CHALLENGE_CITY_WALK_SF_STEPS');
// createChallenge('CHALLENGE_CITY_WALK_DC_STEPS');
// createChallenge('CITY_WALK_SF');
// PRIVATE_CHALLENGE: In order to see this on Web make sure your user matches the primaryClient and primaryPartner. In this case we set it to primaryPartner=rally and primaryClient=rally_health
// createChallenge('PRIVATE_CHALLENGE');

module.exports = {
  createChallenge,
};

