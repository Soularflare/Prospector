const express = require('express');
require('./models/user');
require('./services/passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express(); 				// express server

app.use(bodyParser.json());			//parses incoming requests and puts the bodies in the req.body component

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,		//30 days in ms
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authroutes')(app);		//returns a function to be immediately called with app object
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));		//loads in client assets

	const path = require('path');					//resolves react specified paths
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000; 		//check environment for Heroku-specified port(Dynamic port binding)
app.listen(PORT);					//server listens on port 5000