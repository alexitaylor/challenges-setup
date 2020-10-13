const TENANT = require('./tenant');
const CHALLENGE_ID = require('./challengeId');
const USER_DATA_FILE = require('./userDataFile');
const TEAM_DATA_FILE = require('./teamDataFile');
const CHALLENGESV2_BASE_URL = `https://challenges-challengesv2.${TENANT}.rally-dev.com`;
const MISSIONS_BASE_URL = `https://engage-missions.${TENANT}.rally-dev.com/missions/v1`;
const R2C_BASE_URL = `https://engage-readinesstochange.${TENANT}.rally-dev.com`;
const CURRENT_USER = require('./currentUser');

module.exports = {
  TENANT,
  CHALLENGESV2_BASE_URL,
  USER_DATA_FILE,
  TEAM_DATA_FILE,
  CHALLENGE_ID,
  MISSIONS_BASE_URL,
  CURRENT_USER,
  R2C_BASE_URL,
};
