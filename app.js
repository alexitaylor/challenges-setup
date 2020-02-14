const http = require('http');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const config = require('./configs/configs');
const TENANT = require('./configs/tenant');

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

	console.log(chalk.green('✅ Script ended'));
};

// console.log(TENANT);

// start();




