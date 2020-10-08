import React, { Component } from 'react';
import AuthContext from "./../../components/auth/AuthContext";
import FormSignin from './../../components/page/fromsignin'
import Buttons from './../Buttons';




export default class signin extends Component {
componentDidMount () {
	console.log("hey yo", this.props);
}

	render() {
		return (
			<div>
		
			<FormSignin history={this.props.history}/>
	
			</div>
		)
	}
}

