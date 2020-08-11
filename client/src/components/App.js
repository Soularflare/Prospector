import React, {Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends Component{
	componentDidMount(){
		this.props.fetchUser();
	}
	render() {
		return (
			
				<BrowserRouter>
					<div style={{width: "100%", height: "100%", marginBottom: "0"}} >

						<Header />
						<div style={{ backgroundColor: "#85DCBe", marginTop: "-50px", paddingBottom: "25%"}} >
						<Route exact={true} path="/" component={Landing} />
						<Route exact={true} path="/surveys" component={Dashboard} />
						<Route path="/surveys/new" component={SurveyNew} />
						</div>
					</div>
				</BrowserRouter>
			
		);
	}	
}

export default connect(null,actions)(App);