import React from 'react';
import './skillstyle2.scss'
import data from './data';
import data2 from './data2';
import { AiOutlineTool } from "react-icons/ai";




const Skill = () => {
    return (
        <div className = "skill" id='skillScroll'>
            <h1>SKILLS<AiOutlineTool style={{ 
                        position: 'relative',
                        top: '10px'
                        }}
                        size="60px"
                        color="purple" /></h1>
            <div className='wrapper'>
                <div className = "getback">
                    <ul>
                        {
                            data.map(item => <li>
                                
                                <img src = {item.image} alt = {item.description}/>
                                
                                <span>{item.description}</span>
                            
                                </li> 
                            )
                        }
                    </ul>
                </div> 
            </div>
        </div>
        
    );
};

export default Skill;