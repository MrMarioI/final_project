// import React, { Component } from 'react';
// import { Route, Link, useRouteMatch, Switch } from 'react-router-dom';
// import Photos from './photos';
// import Dashboard from './dashboard'
// import profilEdit from './../profil_edit'

// export default class User extends Component {

// 	render() {
// 		let { path, url } = useRouteMatch();
// 		return (
// 			<div>
// 				<h1 className="form-title">Bienvenue sur votre profil !</h1>
// 			<ul>
//  				<li>
//  					<Link to="/dashboard" className="userlinks">
//  						Votre profil
//  					</Link>
//  					<ul className="sous">
//  						<li>
//  							<Link to="/profil_edit">Modifier votre profil</Link>
//  						</li>
//  						<li>
//  							<Link to="/delete_profile">Supprimer votre profil</Link>
//  						</li>
//  					</ul>
//  				</li>
//  			</ul>
//  			<hr />
// 			 {/* <Switch>
// 				 <Route path="/dashboard" component={Dashboard}/>
// 				 < Route path="/profil_edit" component={profilEdit}/>
// 				 <Route path="/delete_profile" component={deleteProfile}/>
// 			 </Switch> */}
//  			<Photos />
// 			</div>
// 		);
// 	}
// }

import React from 'react';
import { Route, Link, useRouteMatch, Switch } from 'react-router-dom';
import Photos from './photos';
import Dashboard from './dashboard'
import ProfilEdit from './../profil_edit'

export default function Dashboard_user() {
	let { path, url } = useRouteMatch();
	

  return (
	<>
		<h1 className="form-title">Bienvenue sur votre profil !</h1>
			<ul>
 				<li>
 					<Link to={url + "/dashboard"} className="userlinks">
 						Votre profil
 					</Link>
 					<ul className="sous">
 						<li>
 							<Link to={url + "/profil_edit"}>Modifier votre profil</Link>
 						</li>
 						<li>
 							<Link to={url + "/delete_profile"}>Supprimer votre profil</Link>
 						</li>
						 <li>
 							<Link to={url + "/test"}>test</Link>
 						</li>
 					</ul>
 				</li>
 			</ul>
 			<hr />

			 <Switch>
				 <Route exact path={path} ><Dashboard/> </Route>
				 <Route path={path + "/profil_edit" }> <ProfilEdit/></Route>
				 < Route path={path + "delete_profil" }/> 
				 {/* <Route path="/delete_profile" component={deleteProfile}/> */}
			 </Switch>
 			{/* <Photos /> */}
	</>
  );
}


