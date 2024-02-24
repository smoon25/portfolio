import React, { useEffect } from 'react';
import Education from './Education';
import Resume from './Resume';
import Skill from './Skill';

const Main = () => {

    useEffect(() => {
        document.title = "Seoyoung Moon";
    })

    return (
        <div>
            <div className='main'>
                <h1>Hi, I'm Seoyoung!</h1>
                <h1>Computer Science Student.</h1>
            </div>
            <Education />
            <Skill />
            <Resume />
        </div>

        
    );
};

export default Main;

