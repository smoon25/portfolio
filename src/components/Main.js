import React, { useEffect } from 'react';
import Education from './Education';
import Resume from './Resume';
import SideBar from './SideBar';
import Skill from './Skill';
import logo2 from '../assets/api/s_logo2.png';
import '../components/style.css'

const Main = () => {

    useEffect(() => {
        document.title = "Seoyoung Moon";
    })

    return (
        <div>
            <div className='main' id='mainScroll' style={{backgroundColor: '#FAEDCB'}}>
                <p>
                    <img src={logo2} alt = "logo2" />
                    <span>
                        <h1>Hi, there</h1>
                        <h2>As a recent Computer Science graduate, 
                            I've delved into a variety of fields—from the intricacies 
                            of Algorithms and Security to the creativity of Game Design 
                            and Web Programming. My journey through diverse courses has 
                            fueled my passion, particularly in Software Engineering, 
                            Web Development, and Game Design. </h2>
                    </span>
                </p>
                <SideBar />

            </div>
            <Education />
            <Skill />
            <Resume />
        </div>

        
    );
};

export default Main;

