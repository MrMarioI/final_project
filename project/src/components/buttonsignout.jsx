import React, { useContext } from "react";
import AuthContext from "./../components/auth/AuthContext";

export default function ButtonSignout() {
  const AuthContextValue = useContext(AuthContext);

  const handleSignout = () => {
    AuthContextValue.signout();
  };

  return (
    <li onClick={handleSignout}> Deconnexion </li>
  );
}