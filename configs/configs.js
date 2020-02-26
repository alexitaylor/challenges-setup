const TENANT = require('./tenant');
const CHALLENGE_ID = require('./challengeId');
const USER_DATA_FILE = require('./userDataFile');
const TEAM_DATA_FILE = require('./teamDataFile');
const CHALLENGESV2_BASE_URL = `https://challenges-challengesv2.${TENANT}.rally-dev.com`;

module.exports = {
  TENANT,
  CHALLENGESV2_BASE_URL,
  USER_DATA_FILE,
  TEAM_DATA_FILE,
  CHALLENGE_ID,
};
