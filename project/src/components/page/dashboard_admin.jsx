import React, { Component } from 'react'
import AuthContext from './../auth/AuthContext';
import AuthProvider from './../auth/AuthProvider';
// import AuthContext from '../auth/AuthContext';
// import Commandes from './Commandes'
import './../../styles/dashboard_admin.css';
import './../../styles/tables.css';

export default class DashboardAdmin extends Component {
	render() {
		return (
			<div>
			<ul className="dashadm">
				<a className="adadmin" href="/add_photos">
					Ajouter une photo
				</a>
				<a className="adadmin" href="/manage_posts">Manager le contenu</a>
				<a className="adadmin" href="/manage_users">
					Manager les utilisateurs
				</a>
			</ul>
			<hr />
			</div>
		)
	}
}
