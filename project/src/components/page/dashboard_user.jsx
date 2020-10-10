import React from 'react';
import { Route, Link, useRouteMatch, Switch } from 'react-router-dom';
import Dashboard from './dashboard'
import ProfilEdit from './../profil_edit'

export default function Dashboard_user() {
	let { path, url } = useRouteMatch("/:userId");
	

  return (
	<>
		<h1 className="form-title">Bienvenue sur votre profil !</h1>
			<ul>
 				<li>
 					<Link to={url} className="userlinks">
 						Votre profil
 					</Link>
 					<ul className="sous">
 						<li>
 							<Link to={url + "/profil_edit"}>Modifier votre profil</Link>
 						</li>
 						<li>
 							<Link to={url + "/delete_profile"}>Supprimer votre profil</Link>
 						</li>
 					</ul>
 				</li>
 			</ul>
 			<hr />

			 <Switch>
				 <Route exact path={path} ><Dashboard/> </Route>
				 <Route path={path + "profil_edit" }> <ProfilEdit/></Route>
				 < Route path={path + "delete_profil" }/> 
				 {/* <Route path="/delete_profile" component={deleteProfile}/> */}
			 </Switch>
 			
	</>
  );
}


