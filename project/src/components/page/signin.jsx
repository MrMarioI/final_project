import React, { Component } from 'react';
import AuthContext from "./../../components/auth/AuthContext";
import FormSignin from './../../components/page/fromsignin'
import Buttons from '../buttons';
import './../../styles/contain.css';





export default class signin extends Component {
componentDidMount () {
	console.log("hey yo", this.props);
}

	render() {
		return (
			<div className="contain">
		
			<FormSignin history={this.props.history}/>
	
			</div>
		)
	}
}

