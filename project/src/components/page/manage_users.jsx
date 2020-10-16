import React, { Component } from 'react';
import { ApiHandler } from './../../api/handler';
import AuthContext from './../auth/AuthContext';
import './../../styles/tables.css';

const handler = ApiHandler();
export default class manage_users extends Component {
	state = {
		users: []
	};

	static contextType = AuthContext;

	async componentDidMount() {
		const apiRes = await handler.get('/users');
		this.setState({ users: apiRes.data });
	}

	handleDelete = async (userId) => {
		const apiRes2 = await handler.delete('/delete/' + userId);
		this.setState({ users: apiRes2.data });
	};

	render() {
		const { users } = this.state;
		return (
			<div>
				{!Object.keys(users).length ? null : (
					<>
				<h1 className="form-title">Edition et suppression des users !</h1>
				<ul className="dashadm">
					<a className="adadmin" href="/dashboard/dashboard_admin">
						Retour au tableau de bord
					</a>
					<a className="adadmin" href="/manage_posts">
						Manager le contenu
					</a>
					<a className="adadmin" href="/manage_users">
						Manager les utilisateurs
					</a>
				</ul>
				<hr />
				<h1 className="form-title">Liste des utilisateurs </h1>
				<div className="users">
					{!!users.length && users.map((users, i) => (
						<div key={i} >
							<li>Nom : {users.last_name}</li>
							<li>Prénom: {users.first_name}</li>
							<li>Mail: {users.email}</li>
							<li>Supprimer</li>
							<li>
								<button onClick={() => this.handleDelete(users.userId)}>X</button>
							</li>
						</div>
					))}
				</div>
				</>
				)}
			</div>
		);
	}
}
