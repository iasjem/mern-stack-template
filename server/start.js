const env = require('./env.json');

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const TEMPLATE_PATH = path.join(__dirname, '..', 'client', 'build');

app.use(express.static(TEMPLATE_PATH));
app.use(cors());

app.get('*', (req, res) => res.sendFile(path.join(TEMPLATE_PATH, 'index.html')));

app.listen(env.PORT, () => console.log(`Listen to port ${env.PORT}...`));
