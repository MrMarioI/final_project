import React from 'react'
import Burger from './Burger'
import Logo from './logo'
import styled from 'styled-components';

const Nav = styled.nav`
width: 100%;
height: 100px
border-bottom: 2px solid #f1f1f1;
padding: 0 20px;
display: flex;
justify-content: space-between;
`

const Navbar = () => {
    return (
        <Nav>
<Logo/>
<Burger/>        
</Nav>
    )
}

export default Navbar
