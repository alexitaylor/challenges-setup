# Scripts to setup data for ChallengesV2

A few scripts to setup challenges with users and challenge data. In `configs/configs.js` file you can change the `tenant` const which will then update the challengesV2 base url.

## Getting Started

- Fork the repo

```bash
$ git clone git@https://github.com/<yourusername>/challenges-setup.git 
$ cd challenges-setup
$ npm i
```

## Scripts

### `npm run generateUsers` or `node generateUsers.js`
A script to create X number of users. In `generateUsers.js` file you can change the number of users generated by updating the param `numberOfUsers` for `generateUsers()`. The script will save the users to a new file under the `user_data` directory. This `json` file of users will then be used for later scripts.

### `npm run generateChallenge` or `node generateChallenge.js`
A script to generate a challenge. The script will generate a random name for the challenge and automatically set the dates. Any other changes to request body will have to be made in the `generateChallenge.js` file. After the challenge is created the challengeId will be saved to `challenge_data/challenge_ids.txt` file.

### `npm run joinUsersToChallenge` or `node joinUsersToChallenge.js`
This will join a group of users to challenge. In order to run this script, the `generateUsers` script needs to be run first and the `USER_DATA_FILE` config needs to be updated to point to the file with the recent created users. Also you will need to update the `CHALLENGE_ID` const in the `configs/configs.js` file. You can grab the challenge ID from `challenge_data/challenge_ids.txt` file or run the `generateChallenge` script again.

### `npm run postCheckins` or `node postCheckins.js`
This script will checkin random amount for a group of users. Remember to update the `configs/configs.js` file with the appropriate `CHALLENGE_ID` and and set of users, `USER_DATA_FILE`.

