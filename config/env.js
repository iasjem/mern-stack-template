const fs = require('fs');

const environment = process.argv[2];

const envFile = require(`./env/${environment}.json`);

fs.writeFileSync("env.json", JSON.stringify(envFile, undefined, 2));
