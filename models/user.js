const mongoose = require('mongoose');
const {Schema} = mongoose;  	//Schema = mongoose.Schema (destructuring)

const userSchema = new Schema({			//defined properties for the mongoDB
	googleId: String
});

mongoose.model('users', userSchema);		//creates a new collection called users