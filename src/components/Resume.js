import React from 'react';
import './skillstyle2.scss'
import data from './project1data'
import ResumeItem from './ResumeItem';
import { FaBook } from "react-icons/fa";


const Resume = () => {
    return (
        <div className = "resume" id='resumeScroll'>
        <h2>Projects <FaBook style={{ 
                position: 'relative',
                top: '4px'
                }}
                color="black"/></h2>
            {
                data.map(item => <ResumeItem key = {item.title} item = {item}/>)
            }
        
        
        
        
        </div>
    );
};

export default Resume;