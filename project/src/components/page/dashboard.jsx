import React, { useContext } from 'react';
import AuthContext from './../../components/auth/AuthContext';
import User from './../../components/page/dashboard_user';
import Photos from './photos';

export default function Dashboard() {
	const AuthContextValue = useContext(AuthContext);
	console.log('AuthContextValue ? >>> ', AuthContextValue.currentUser);

	return (
		Boolean(AuthContextValue.currentUser) && (
			<div>
				<p>Welcome {AuthContextValue.currentUser.first_name} !</p>
				<hr />
				{Boolean(AuthContextValue.currentUser.role === '1') && (
					<div>
						<a href="/dashboard/dashboard_admin">Profil administrateur</a>
					</div>
				)}
				 <Photos /> 
			</div>
		)
	);
}
