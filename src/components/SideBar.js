import React from 'react';
import inImage from '../assets/api/In-mark.png';
import gitImage from '../assets/api/github-mark.png';
import './skillstyle2.scss'

const SideBar = () => {
    return (
        <div className='sidebar'>
            <a href='https://www.linkedin.com/in/seoyoung-michele-moon-ba4a33168/' target='_blank' rel = 'noopener noreferrer'>
                <button><img src={inImage} alt = "in-mark" className='sidebar-image'/></button>
            </a>
            <a href='https://github.com/smoon25' target='_blank' rel = 'noopener noreferrer'>
                <button><img src={gitImage} alt = "github-mark" className='sidebar-image'/></button>
            </a>
        </div>
    );
};

export default SideBar;