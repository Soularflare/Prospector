if (process.env.NODE_ENV === 'production'){		//determine if in dev environment or production environment
	module.exports = require('./prod');
} else{ 
	module.exports = require('./dev');
}