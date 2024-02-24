import React from 'react';
import './skillstyle2.scss'
import data from './data';
import data2 from './data2';



const Skill = () => {
    return (
        <div className = "skill">
        <h1>SKILLS</h1>
        <div>
            <p>
                {
                    data.map(item => <article>                    
                    <img src = {item.image} alt = {item.description}/>
                    
                    <h3>{item.description}</h3>
                    
                    </article>)
                }
            </p>
            <p>
                {
                    data2.map(item => <article>                    
                    <img src = {item.image} alt = {item.description}/>
                    
                    <h3>{item.description}</h3>
                    
                    </article>)
                }
            </p>
        </div>
        </div>
        
    );
};

export default Skill;