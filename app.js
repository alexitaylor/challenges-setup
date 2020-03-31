#!/usr/bin/env node
const chalk = require('chalk');
const config = require('./configs/configs');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const { generateUsers, createUser } = require('./usersScripts/scripts');
const { createChallenge } = require('./challengesScripts/generateChallenge');
const { joinUsersToChallenge } = require('./challengesScripts/joinUsersToChallenge');
const { generatePostCheckins } = require('./challengesScripts/postCheckins');
const { generateNewTeams } = require('./challengesScripts/generateNewTeams');
const { joinUsersToTeam } = require('./challengesScripts/joinUsersToTeam');
const { deleteChallenges } = require('./challengesScripts/deleteChallenges');


const hostname = '127.0.0.1';
const port = 3333;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const handleInquirerError = (error) => {
	if(error.isTtyError) {
		// Prompt couldn't be rendered in the current environment
		console.error(error);
	} else {
		// Something else when wrong
		console.error('other error', error);
	}
};

const start = async () => {
	console.log(chalk.green('🔥 🔥 🔥 Starting script....'));

	clear();

	console.log(
		chalk.yellow(
			figlet.textSync('Challenges v2 Data Setup', { horizontalLayout: 'full' })
		)
	);
	const commandChoices = ['Generate Users', 'Create User', 'Generate Challenge', 'Join Users to a Challenge', 'Post Checkins', 'Generate New Teams', 'Join Users to Team', 'Delete Challenges'];
	const challengeTypeChoices = ['DEFAULT', 'CITY_WALK_SF', 'PRIVATE_CHALLENGE', 'WATER', 'FOOD', 'TEAM', 'MEDITATION', 'KINDNESS', 'CITY_WALK_DC', 'CITY_WALK_CHI', 'CHALLENGE_CITY_WALK_SF_STEPS', 'CHALLENGE_CITY_WALK_DC_STEPS'];
	await inquirer
		.prompt([
			{
				type: 'checkbox',
				name: 'commands',
				message: `${chalk.green('⚡️ Select a script to run.')} ${chalk.yellow('👀 If selecting multiple scripts, please make sure you select them in the correct order.')}\n`,
				choices: commandChoices,
				pageSize: commandChoices.length,
			}
		])
		.then(async ({ commands }) => {

			for (let i = 0; i < commands.length; i++) {
				switch (commands[i]) {
					case 'Generate Users':
						await inquirer.prompt([
							{
								type: 'number',
								name: 'numberOfUsers',
								message: `${chalk.green('⚡️ Input number of users to generate.')}`,
								default: 10,
							}
						]).then(async ({ numberOfUsers }) => {
							await generateUsers(numberOfUsers);
						}).catch(handleInquirerError);
						break;
					case 'Create User':
						await createUser();
						break;
					case 'Generate Challenge':
						await inquirer.prompt([
							{
								type: 'list',
								name: 'challengeType',
								message: `${chalk.green('⚡️ Select a challenge type to create.')}`,
								choices: challengeTypeChoices,
								pageSize: challengeTypeChoices.length,
								default: 'DEFAULT',
							}
						]).then(async ({ challengeType }) => {
							await createChallenge(challengeType);
						}).catch(handleInquirerError);
						break;
					case 'Join Users to a Challenge':
						// TODO add option to pass in a challengeID?
						joinUsersToChallenge(config.CHALLENGE_ID);
						break;
					case 'Post Checkins':
						// TODO add option to pass in a challengeID and checkin amount max?
						generatePostCheckins(config.CHALLENGE_ID);
						break;
					case 'Generate New Teams':
						await inquirer.prompt([
							{
								type: 'number',
								name: 'numberOfTeams',
								message: `${chalk.green('⚡️ Input number of teams to generate.')}`,
								default: 6,
							}
						]).then(async ({ numberOfTeams }) => {
							await generateNewTeams(numberOfTeams);
						}).catch(handleInquirerError);
						break;
					case 'Join Users to Team':
						await joinUsersToTeam();
						break;
					case 'Delete Challenges':
						await inquirer.prompt([
							{
								type: 'input',
								name: 'challengeIds',
								message: `${chalk.green('⚡️ Input challenge IDs to delete.')} ${chalk.yellow('👀 Comma separate challenge IDs (e.g. 1234, 5678).')}\n`,
							}
						]).then(async ({ challengeIds }) => {
							challengeIds = challengeIds.split(', ');
							await deleteChallenges(challengeIds);
						}).catch(handleInquirerError);
						break;
				}
			}
		}).catch(handleInquirerError);

		console.log(chalk.green('✅ Script ended'));
};

start();




