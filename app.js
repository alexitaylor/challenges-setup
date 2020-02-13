const http = require('http');
const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const config = require('./configs/configs');

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

const start = async () => {
	console.log(chalk.green('🔥 🔥 🔥 Starting script....'));
	const res = await axios.get('https://challenges-challengesv2.sad-noyce.rally-dev.com/internal/challengesv2/v1/city/getCities');
	console.log(res.data);

	console.log(chalk.green('✅ Script ended'));
};

console.log(config);

// start();




