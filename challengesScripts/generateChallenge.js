const axios = require('axios');
const chalk = require('chalk');
const faker = require('faker');
const dateFns = require('date-fns');
const fs = require('fs');
const template = require('lodash').template;
const path = require('path');
const config = require('../configs/configs');

const challengeInstance = {
  "instanceDetails": {
    "name": "My Challenge",
    "status": "active",
    "description": "running challenge",
    "colorCode": "49FA43",
    "dates": {
      "startDate": "2020-02-13T02:22:06.609Z",
      "endDate": "2020-02-29T02:22:06.609Z",
      "openDate": "2020-02-13T02:22:06.609Z",
      "lastJoinableDate": "2020-02-14T02:22:06.609Z",
      "repeatDetails": {
        "numRepeat": 0,
        "repeatGapInterval": 0,
        "repeatUnit": "days"
      }
    },
    "sponsorship": {
      "primaryClient": "",
      "primaryPartner": "",
      "primaryAffiliation": ""
    },
    "isTeam": false,
    "isInviteOnly": false,
    "isUserCreated": false,
    "isCityWalk": false,
    "isIncentivized": false
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 20,
      "coinValue": 50
    },
    "minorCheckpoints": {
      "interval": 5,
      "coinValue": 5
    },
    "majorCheckpoints": {
      "interval": 10,
      "coinValue": 10
    }
  },
  "checkinDetails": {
    "activityInfo": {
      "activityLabel": "Running & Walking",
      "activityType": "runningWalking",
      "unit": "miles"
    },
    "dailyEntryCap": 50,
    "scoringMethod": "total",
    "allowManualCheckin": true,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true
  }
};

const teamChallenge = {
  "instanceDetails": {
    "name": "My Challenge TEAM",
    "status": "active",
    "description": "running challenge",
    "colorCode": "49FA43",
    "dates": {
      "startDate": "",
      "endDate": "",
      "openDate": "",
      "lastJoinableDate": "",
      "repeatDetails": {
        "numRepeat": 0,
        "repeatGapInterval": 0,
        "repeatUnit": "days"
      }
    },
    "sponsorship": {
      "primaryClient": "",
      "primaryPartner": "",
      "primaryAffiliation": ""
    },
    "isTeam": true,
    "isInviteOnly": false,
    "isUserCreated": false,
    "isCityWalk": false,
    "isIncentivized": true
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 0.5,
      "coinValue": 5
    },
    "minorCheckpoints": {
      "interval": 1,
      "coinValue": 10
    },
    "majorCheckpoints": {
      "interval": 20,
      "coinValue": 0
    }
  },
  "checkinDetails": {
    "activityInfo": {
      "activityLabel": "Running & Walking",
      "activityType": "runningWalking",
      "unit": "miles"
    },
    "dailyEntryCap": 50,
    "scoringMethod": "total",
    "allowManualCheckin": true,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true
  }
};

const generateChallenge = (isTeam) => {
  try {
    console.log(chalk.yellow(`Generating challenge...`));
    const now  = new Date();
    var randomNumber = faker.random.number();
    const challenge = isTeam ? teamChallenge : challengeInstance;
    challenge.instanceDetails.name = isTeam ? `Challenge TEAM ${randomNumber}` : `Challenge ${randomNumber}`;
    challenge.instanceDetails.dates = {
      "startDate": now,
      "endDate": dateFns.addDays(now, 10),
      "openDate": now,
      "lastJoinableDate": dateFns.addDays(now, 2),
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

    fs.appendFileSync(challengeIdFile, `\r\n${challengeId}`);
    updateChallengeIdConfig(challengeId);
    console.log(chalk.green(`✅ Saved challenge ID to file!`));
  } catch (e) {
    console.log(chalk.red(`❌ Error unable to write challenge ID to file. ${e}`));
  }
};

const createChallenge = async () => {
  try {
    console.log(chalk.yellow(`Creating challenge...`));
    const reqUrl = `${config.CHALLENGESV2_BASE_URL}/internal/challengesv2/v1/instances/editor/foo`;
    const challengeBody = generateChallenge();
    const res = await axios.post(reqUrl, challengeBody, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
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

createChallenge();
