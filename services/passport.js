const passport = require('passport');
const mongoose = require('mongoose');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');		//fetching users schema

passport.serializeUser((user, done) => {	// turns user id into a cookie
	done(null, user.id);
});

passport.deserializeUser((id, done) => {	//cookie lookup in the database
	User.findById(id)
		.then(user => {
			done(null, user);
		});
});

passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback',
		proxy: true
	},
	async (accessToken, refreshToken, profile, done) => {
		const existingUser = await User.findOne({ googleId: profile.id});
		
		if (existingUser) {
			done(null, existingUser);
		} else{
			const user = await new User({ googleId: profile.id }).save()
				done(null, user);
		}
			
		
	}
	)
); 	//implements specific strategy in passport