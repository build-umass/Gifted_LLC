const fs = require('fs')
const ini = require('ini');
const config = ini.parse(fs.readFileSync(process.env.config, 'utf-8'));

module.exports = config


