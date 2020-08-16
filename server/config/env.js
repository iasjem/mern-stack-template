const fs = require('fs');
const path = require('path');

const environment = process.argv[2];

const envFile = require(`./env/${environment}.json`);

fs.writeFileSync(path.join(__dirname, '..', 'env.json'), JSON.stringify(envFile, undefined, 2));
