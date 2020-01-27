const passport = require('passport');

module.exports = app => {		//exports methods to app in index.js
app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
);

app.get(
	'/auth/google/callback',
 	passport.authenticate('google'),
 	(req, res) => {
 		res.redirect('/surveys');
 	}
 );	//handler for the google callback function

app.get('/api/logout', (req, res) => {
	req.logout(); 
	res.redirect('/');			//redirects back to home page
});

app.get('/api/current_user', (req, res)=> {
		res.send(req.user);
	});
};

