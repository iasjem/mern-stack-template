const env = require('./env.json');

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.listen(env.PORT, () => console.log(`Listen to port ${env.PORT}...`));
