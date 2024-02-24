import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import mainTheme from './ThemeColor';


const Nav = styled.nav`
  /* height: 60px; */
  width: 100%;
  text-align: center;
`;

const GnbLists = styled.ul`
  list-style: none;
  /* height: 60px; */
  margin: auto;
  padding: 0;
`;

const GnbItem = styled.li`
  display: inline-block;
  height: 60px;
  a {
    font-family: ${mainTheme.mainFont};
    display: block;
    position: relative;
    /* height: 60px; */
    line-height: 65px;
    font-size: 1rem;
    font-weight: 500;
    padding: 0 0px;
    margin: 0 16px;
    text-decoration: none;
    color: ${mainTheme.mainTextColor};

      &:hover {
    padding:0;
    border-bottom: solid 3px ${mainTheme.mainOrangeColor};

    }

  }


`;

const Logo = styled.div`
    font-size: 50px;
    padding: 20px;
    
`

const Navbar = () => {
    return (
        <Nav>
        <Logo>🎩</Logo>
        <GnbLists>
          <GnbItem>
          <NavLink exact to="/" activeClassName="active">
            Education
          </NavLink>
          </GnbItem>
          <GnbItem>
          <NavLink exact to="/" activeClassName="active">
            Skills
          </NavLink>
          </GnbItem>
          <GnbItem>
          <NavLink exact to="/" activeClassName="active">
            Projects
          </NavLink>
          </GnbItem>
          <GnbItem>
          <NavLink exact to="/" activeClassName="active">
            Contact
          </NavLink>
          </GnbItem>
        </GnbLists>
      </Nav>
    );
};

export default Navbar;