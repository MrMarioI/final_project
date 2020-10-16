import React, { useContext } from 'react'
import AuthContext from "./../../components/auth/AuthContext";
import ButtonSignout from './../buttonsignout'
import styled from 'styled-components'

const Ul = styled.ul`
    text-decoration: none;
    list-style: none;
    margin-right: 10px;
    display: flex;
    flex-flow: row nowrap;

li{
    margin-right: 30px;
    display: flex;
    flex-flow: row nowrap;
    padding: 18px 6px;
    text-decoration: none;
}

a{
    text-decoration: none;
}

@media (max-width: 1024px){
    flex-flow: column nowrap;
    background: whitesmoke;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    width: 150px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li{
        color: black;
        height: 6vh;
        justify-self: center;
        align-self: center;  
        text-decoration: none;
    }

    a{
        text-decoration: none;  
    }
}`



const RightNav = ({ open }) => {
    const AuthContextValue = useContext(AuthContext);
    return (
        <Ul open={open}>
    <li> <a href="/about">MrMarioI</a> </li>
    <li> <a href="/galeries/concerts">Concerts</a> </li>
    <li> <a href="/galeries/mariages">Mariages</a> </li>
    <li> <a href="/galeries/paysages">Paysages</a> </li>
    <li> <a href="/galeries/portraits">Portraits</a> </li>
    <li> <a href="/contact">Contact</a> </li>
    <li> <a href="/signin">Connexion</a> </li>
    {AuthContextValue.isSignedIn && (
        <>
        <li> <a href="/dashboard">Profil</a> </li>
              <li><ButtonSignout/></li> 
         </>
        )}
    </Ul>

    )
}

export default RightNav