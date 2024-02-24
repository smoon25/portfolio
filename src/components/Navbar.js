import '../components/style.css'
import { Link as LinkScroll } from 'react-scroll';
import logo from '../assets/api/s_logo.png';

import React from 'react';
import ResumeButton from './ResumeButton';

const Navbar = () => {
    return (
      <nav style={{backgroundColor: '#FAEDCB'}}>
      <LinkScroll to = "/"><img src={logo} alt = "logo"/></LinkScroll>
      <ul>
        <li><LinkScroll to = "eduScroll" spy = {true} smooth = {true} offset = {0} duraction={500}>Education</LinkScroll></li>
        <li><LinkScroll to = "skillScroll" spy = {true} smooth = {true} offset = {0} duraction={500}>Skills</LinkScroll></li>
        <li><LinkScroll to = "resumeScroll" spy = {true} smooth = {true} offset = {0} duraction={500}>Projects</LinkScroll></li>
        <li><ResumeButton fileName = "seoyoung-resume.pdf" /></li>
      </ul>
    </nav>       
    );
};

export default Navbar;

{/* <nav>
        <Link to = "/"><img src={logo} alt = "logo"/></Link>
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/edu">Education</Link></li>
            <li><Link to = "/skill">Skill</Link></li>
            <li><Link to = "/resume">Resume</Link></li>
          </ul>
      </nav> */}