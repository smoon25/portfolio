import React, { useEffect } from 'react';
import styled from "styled-components"
import { NavLink } from 'react-router-dom';
import ThemeColor from './ThemeColor';

/* Concept: Button? */
const Wrapper = styled.div`
    padding:0;
    margin: 0 auto;
    background: #fff;
    border-top:3px solid #000;

`

const Header = styled.div`
    width:80%;
    margin: 0 auto;
    display: absolute;

`


const Nav = styled.nav`
    display:flex;  
    justify-content:right;
    align-items: center;
    margin: auto;

`

const Navul = styled.ul`
    list-style: none;
    padding:0;
`

const Navli = styled.li`

    float: left;
    list-style: none;
    line-height: 55px;
    padding: 10px;
    font-family: ${ThemeColor.mainFont};


    a {
    display: block;
    position: relative;
    /* height: 60px; */
    line-height: 65px;
    font-size: 1rem;
    font-weight: 500;
    padding: 0 0px;
    margin: 0 16px;
    text-decoration: none;
    color: ${ThemeColor.mainTextColor};

      &:hover {
        padding:0;
        border-bottom: solid 3px ${ThemeColor.mainOrangeColor};
    }
    }
`

const Button = styled.button`
    
    font-size: 1rem;
    font-weight: 500;
    padding: 10px;
    margin: 0 16px;
    text-decoration: none;
    color: black;
    background: white;
`

const Logo = styled.div`
    font-size: 50px;
    float: left;
    position: relative;
    padding: 20px;

    a{
        text-decoration: none;
    }
    
`


const Main = () => {

    useEffect(() => {
        document.title = "Seoyoung Moon";
    })

    return (
        <Wrapper>
            <Header>
                <Logo>
                    <NavLink to="/">🎩</NavLink>
                </Logo>
                <Nav>
                    <Navul>
                        <Navli><NavLink to="/" >Education</NavLink></Navli>
                        <Navli><NavLink to="/" >Skills</NavLink></Navli>
                        <Navli><NavLink to="/" >Projects</NavLink></Navli>
                        <Navli><NavLink to="/" >Contact Me</NavLink></Navli>
                        <Navli><Button>Resume</Button></Navli>
                    </Navul>
                </Nav>

            </Header>
        </Wrapper>
    );
};

export default Main;

