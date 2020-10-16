import React, { Component } from 'react';
import AuthContext from './../auth/AuthContext';
import { ApiHandler } from './../../api/handler';
import Buttons from './../buttons';
import Posts from './../tabphotos';

export default class ManagePosts extends Component {
	render() {
		return (
			<div>
				<h1 className="form-title">Edition et suppression de vos posts !</h1>
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

				<div className="table">
					<Posts />
				</div>
			</div>
		);
	}
}
