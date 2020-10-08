import React from 'react';
import './../../styles/tables.css';

export default function Manage_users() {
	// state = {
	//   users: []
	// }

	// async componentDidMount () {
	//   const apiRes = await handler.getAll()
	//   this.setState({ users: apiRes.data })
	// }
	// const { users } = this.state;
	return (
		<div>
			<h1 className="form-title">Edition et suppression des users !</h1>
			<ul className="dashadm">
				<a className="adadmin" href="/dashboard-admin">
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
			<ul>
			<li>Nom :</li>
			<li>Mail :</li>
			<li>Supprimer</li>
			<li>Modifier</li>
			</ul>
		</div>
	);
}
