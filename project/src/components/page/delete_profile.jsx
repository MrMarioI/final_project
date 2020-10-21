import React, { Component } from 'react';
import AuthContext from './../auth/AuthContext';
import AuthProvider from './../auth/AuthProvider';
import { ApiHandler } from './../../api/handler';
import Button from './../buttons'
const handler = ApiHandler();

class deleteProfile extends Component {
	state = {
		users: []
	};

	static contextType = AuthContext;

	async componentDidMount() {
		const apiRes = await handler.get('/users');
		this.setState({ users: apiRes.data });
	}

	handleDelete = async (userId) => {
        alert('Inscription validée ! Bienvenue !');
		const apiRes2 = await handler.delete('/delete/' + userId);
		this.setState({ users: apiRes2.data });
	};
	render() {
		const { users } = this.state;
		return (
			<div>
				<div>
					{/* <input type="checkbox" id="delete_profile" name="delete_profile" value="delete_profile" /> */}
					<label for="delete">Souhaitez-vous supprimer définitivement votre profile ?</label>
				</div>
				<div>
					<p>Veuillez nous contacter à l'adresse suivante : <b>mario@mrmarioi.fr</b></p>
				</div>
			</div>
		);
	}
}

export default deleteProfile;
