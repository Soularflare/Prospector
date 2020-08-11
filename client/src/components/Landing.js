import React from 'react';
import logo from '../images/email2.png'
const Landing = () => {
	return (
		<div style={{ textAlign:'center', color: "white" }}>
			<h1>
				Prospector!
			</h1>
			<h5>Collect feedback from your users </h5>
			<div style={{marginTop: "25px"}}>
			<img height="300px" src={logo} alt="Logo" />
			</div>
			<div style={{width: "50%", marginLeft: "25%"}} >
			<h5>
			Prospector is a service that allows you to send email surveys to your users with the simple press of a button. Upon starting a campaign, you can easily view all your data in one place. Sign up or log in to get started!
		</h5>
		</div>
		</div>

		
		
	);
};

export default Landing;