import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

li{
    padding: 18px 10px;
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
}
`
const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
    <li> <a href="/about">MrMarioI</a> </li>
    <li> <a href="/concerts">Concerts</a> </li>
    <li> <a href="/mariages">Mariages</a> </li>
    <li> <a href="/paysages">Paysages</a> </li>
    <li> <a href="/portraits">Portraits</a> </li>
    <li> <a href="/contact">Contact</a> </li>
    <li> <a href="/signin">Sign In</a> </li>
    </Ul>

    )
}

export default RightNav