import React, { Component, useContext } from 'react';
import AuthContext from './../components/auth/AuthContext';
import AuthProvider from './auth/AuthProvider';
import './../styles/contact.css';
import './../styles/buttons.css';
import { ApiHandler } from './../api/handler';
import axios from 'axios';
const handler = ApiHandler();

export default class profil_edit extends Component {
	state = {
		isEditMode: false,
		first_name: '',
		last_name: '',
		email: '',
		userId: ''
	};

	static contextType = AuthContext;

	handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

	// const currentUser = contextType.currentUser
	// console.log("TEST", currentUser)
	// componentDidMount(){
	// 	const {match: {currentUser}} = this.props;
	// axios.get(`/profil_edit/${currentUser.userId}`)
	// .then(({data:Users}) => {
	// 	this.setState({Users})
	// })
	// }

	updateUser = async (e) => {
		e.preventDefault();
		console.log('TEST updateUser', this.context.currentUser);
		try {
			const apiRes = await handler.put('/profil_edit/' + this.context.currentUser.userId, {
				// ci-dessous : prend la valeur du state (si modifié) OU la valeur originale provenant de AuthContext
				first_name: this.state.first_name || this.context.currentUser.first_name,
				last_name: this.state.last_name || this.context.currentUser.last_name,
				email: this.state.email || this.context.currentUser.email
			});
			console.log('API RES LOG', apiRes.data);
			this.context.setCurrentUser(apiRes.data); // mise à jour AuthContext avec les nouvelles infos user
		} catch (apiErr) {
			console.error(apiErr);
		}
	};

	render() {
		// 		let id = this.props.currentUser;
		//   let url = "/profil_edit/" + currentUser;
		return (
			<div>
				{this.context &&
				this.context.currentUser && (
					<form
						className="form"
						onChange={this.handleChange}
						onSubmit={this.updateUser}
						encType="multipart/form-data"
					>
						<h2 className="title">Mettre à jour votre profil</h2>
						<label htmlFor="input-username" className="is-clickable">
							Prénom :
						</label>
						<input
							id="input-username"
							type="text"
							className="input"
							defaultValue={this.context.currentUser.first_name}
							name="first_name"
						/>
						<label htmlFor="input-username" className="is-clickable">
							Nom :
						</label>
						<input
							id="input-username"
							type="text"
							className="input"
							defaultValue={this.context.currentUser.last_name}
							name="last_name"
						/>
						<label htmlFor="input-email" className="is-clickable">
							Email :
						</label>
						<input
							id="input-email"
							type="email"
							defaultValue={this.context.currentUser.email}
							className="input"
							name="email"
						/>
						<button className="btn">ok</button>
					</form>
				)}
			</div>
		);
	}
}
