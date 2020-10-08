import React, { Component, useContext } from 'react'
import AuthContext from './../components/auth/AuthContext'
import './../styles/contact.css';
import './../styles/buttons.css';

export default class profil_edit extends Component {
	state = {
		last_name: '',
		email: '',
	}


static contextType =  AuthContext; 

componentDidMount () {
	console.log("EDIIIIT PROFFIIIIIL : ", this.context.currentUser.email)
	// this.setState({email: this.context.currentUser.last_name})
}
	// const currentUser = contextType.currentUser
	// console.log("TEST", currentUser)

	render() {
		
		return (
			<div>
						<form method="post" action="/" className="form" enctype="multipart/form-data">
				<h2 className="title">Mettre à jour votre profil</h2>
				<label htmlFor="input-username" className="is-clickable">
					Nom :
				</label>
				<input
					id="input-username"
					type="text"
					className="input"
					// value={currentUser.last_name}
					name="username"
					onChange={() => console.log("lalala")}
				/>
				<label htmlFor="input-email" className="is-clickable">
					Email :
				</label>
				<input id="input-email" type="email" value={this.state.email} onChange={() => console.log("lalala")} className="input" name="email" />
				<button className="btn">ok</button>
			</form>
			</div>
		)
	}
}
