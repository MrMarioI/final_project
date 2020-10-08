import React, { useContext } from 'react'
import AuthContext from "./../../components/auth/AuthContext";
import styled from 'styled-components'

const Ul = styled.ul`
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

li{
    padding: 18px 10px;
    text-decoration: none;
}

@media (max-width: 1024px){
    flex-flow: column nowrap;
    background: whitesmoke;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    // height: 10vh; par li
    width: 150px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li{
        color: black;
        justify-self: center;
        align-self: center;  
    }

    a{
        text-decoration: none;  
    }
}`


// const AuthContextValue = useContext(AuthContext);
const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
    <li> <a href="/about">MrMarioI</a> </li>
    <li> <a href="/galeries/concerts">Concerts</a> </li>
    <li> <a href="/galeries/mariages">Mariages</a> </li>
    <li> <a href="/galeries/paysages">Paysages</a> </li>
    <li> <a href="/galeries/portraits">Portraits</a> </li>
    <li> <a href="/contact">Contact</a> </li>
    <li> <a href="/signin">Connexion</a> </li>
    </Ul>

    )
}

export default RightNav