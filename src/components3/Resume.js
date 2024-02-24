import React from 'react';
import './skillstyle2.scss'
import data from './project1data'
import ResumeItem from './ResumeItem';


const Resume = () => {
    return (
        <div className = "resume">
        <h2>Projects</h2>
            {
                data.map(item => <ResumeItem key = {item.title} item = {item}/>)
            }
        
        
        
        
        </div>
    );
};

export default Resume;