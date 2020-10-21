import React from 'react';
import { Route, Link, useRouteMatch, Switch } from 'react-router-dom';
import Dashboard from './dashboard'
import DashboardAdmin from './dashboard_admin'
import ProfilEdit from './../profil_edit'
import deleteProfile from './delete_profile'
import UserGallery from './user_gallery'

export default function Dashboard_user() {
	let { path, url } = useRouteMatch();


  return (
	<>
		<h1 className="form-title">Bienvenue sur votre profil !</h1>
			<ul>
 				<li>
 					<ul className="sous">
 						<li>
 							<Link to={url + "/profil_edit"}>Modifier votre profil</Link>
 						</li>
 						<li>
 							<Link to={url + "/delete_profile"}>Supprimer votre profil</Link>
 						</li>
						 <li>
 							<Link to={url + "/user_gallery"}>Votre galerie photos</Link>
 						</li>
 					</ul>
 				</li>
 			</ul>
 			<hr />
		
			 <Switch>
				 <Route exact path={path} component={Dashboard}/>
				 <Route path={path + "dashboard_admin"} component={DashboardAdmin}/>
				 <Route path={path + "profil_edit"} component={ProfilEdit}/>
				 <Route path={path + "user_gallery"} component={UserGallery}/>
				 {/* < Route path={path + "delete_profile" }/>  */}
				 <Route path={path + "delete_profile" } component={deleteProfile}/>
			 </Switch>
 			
	</>
  );
}


