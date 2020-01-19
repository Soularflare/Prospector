const passport = require('passport');

module.exports = app => {		//exports methods to app in index.js
app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
);

app.get('/auth/google/callback', passport.authenticate('google'));	//handler for the google callback function

app.get('/api/logout', (req, res) => {
	req.logout(); 
	res.send(req.user);
});

app.get('/api/current_user', (req, res)=> {
		res.send(req.user);
	});
};

