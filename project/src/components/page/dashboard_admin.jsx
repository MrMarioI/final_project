// import React, { Component } from 'react';
// import AuthContext from '../auth/AuthContext';
// // import Commandes from './Commandes'
// import './../../styles/dashboard_admin.css';
// import './../../styles/tables.css';

// export default class DashboardAdmin extends Component () {
// 	// state = {
// 	//   photos: []
// 	// }

// 	// async componentDidMount () {
// 	//   const apiRes = await handler.getAll()
// 	//   this.setState({ photos: apiRes.data })
// 	// }
// 	// const { photos } = this.state;
// 	render() {
// 	return (
// 		<div>
// 			<h1 className="form-title">Bienvenue sur votre tableau de bord !</h1>
// 			<ul className="dashadm">
// 				<a className="adadmin" href="/add_photos">
// 					Ajouter une photo
// 				</a>
// 				<a className="adadmin" href="/manage_posts">
// 					Manager le contenu
// 				</a>
// 				<a className="adadmin" href="/manage_users">
// 					Manager les utilisateurs
// 				</a>
// 			</ul>
// 			<hr />

// 			{/* Div + display none pour afficher les LI en mobile/tablettes */}
// 			{/* <h1 className='form-title'>Commandes</h1> */}

// 			{/* <Commandes/> */}
// 		</div>
// 	);
// }
// }

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
