const express = require('express');
const path = require('path')
// const bodyParser = require('body-parser');
// const morgan = require('morgan')
const webpack = require('webpack');

const config = require('../webpack.config.js');
// const dummy = require('./routes/dummy_router.js');

// APP SETUP & MIDDLEWARE
const app = express();
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
// app.use(bodyParser.json());
// app.use(morgan('dev'))

// ALL ROUTES
// app.use('/api', dummy)

// WILD CARD
app.get('*', (req, res) => (
  res.sendFile(path.resolve(__dirname, '../client/app', 'index.html'))
));
app.get('/', (req, res) => (
  res.sendFile(path.resolve(__dirname, '../client/app', 'index.html'))
));

app.listen(4000, () => (
	console.log("App running on port 4000")
))