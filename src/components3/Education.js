import React from 'react';
import logo from '../assets/api/tufts_logo.png';


const Education = () => {
    return (
        <div className = "education">
                <h2>Education</h2>
            <div>
                <article>
                <img src={logo}/>
                <p>
                    Tufts University, Medford, MS <br />
                    School of Arts, Sciences  <br />
                    Bachelor of Science in Computer Science  <br />
                    Major GPA: /4.0 Cumulative GPA: /4.0  <br />
                </p>
                
            </article>
            </div>
            
        </div>
    );
};

export default Education;