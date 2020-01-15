const express = require('express');
const app = express(); 				// express server

app.get('/', (req, res) => {		//create new handler for http requests
	res.send({ bye: 'buddy'});
});

const PORT = process.env.PORT || 5000; 		//check environment for Heroku-specified port(Dynamic port binding)
app.listen(PORT);					//server listens on port 5000