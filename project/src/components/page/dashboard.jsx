import React, { useContext } from 'react';
import AuthContext from "./../../components/auth/AuthContext";
import User from "./../../components/page/dashboard_user"



export default function Dashboard() {
  const AuthContextValue = useContext(AuthContext);
  console.log("AuthContextValue ? >>> ", AuthContextValue);

  return (
    // Boolean(AuthContextValue.currentUser) && (
      <div>LALALALALALLA
        {/* <h1 className="title">Dashboard</h1>
        <p>Welcome {AuthContextValue.currentUser[0].first_name} !</p>
        <hr />
        <User context={AuthContextValue} />
        {Boolean(AuthContextValue.currentUser[0].role === "admin") && (
          <div><a href="/dashboard-admin">Profil administrateur</a></div>
        )} */}
      </div>
    )
  // );
}
