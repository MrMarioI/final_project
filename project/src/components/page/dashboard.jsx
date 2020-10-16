import React, { useContext } from 'react';
import AuthContext from './../../components/auth/AuthContext';
import User from './../../components/page/dashboard_user';
import Photos from './photos';

export default function Dashboard() {
	
	const AuthContextValue = useContext(AuthContext);
	console.log('AuthContextValue ? >>> ', AuthContextValue);

	return (
		// Boolean(AuthContextValue.currentUser) && (
		<div>
	
		</div>
	);
}
