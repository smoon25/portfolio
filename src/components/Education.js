import React from 'react';
import logo from '../assets/api/tufts_logo.png';
import { MdSchool } from "react-icons/md";



const Education = () => {
    return (
        <div className = "education" id='eduScroll'>
            <div>
                <article>
                    <h2><MdSchool style={{ 
                        position: 'relative',
                        top: '10px'
                        }}
                        color="black"/> Education
                    </h2>
                    <span>
                        <img src={logo}/>
                        <p>
                            Tufts University, Medford, MS <br />
                            School of Arts, Sciences  <br />
                            B.S. Computer Science  <br />
                            Cumulative GPA: 3.64/4.0  <br />
                        </p>
                    </span>
                </article>
            </div>
            
        </div>
    );
};

export default Education;