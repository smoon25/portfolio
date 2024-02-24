import React, { useEffect } from 'react';
import Education from './Education';

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
        </div>

        
    );
};

export default Main;

