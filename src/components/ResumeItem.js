import React, { useState } from 'react';
import './skillstyle2.scss'

const ResumeItem = ({item}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const PrevIndex = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? item.image.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const NextIndex = () => {
        const lastSlide = currentIndex === item.image.length - 1; 
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div>
            
            <div className='box'>
                <div>
                    <img src= {item.image[currentIndex]} alt = "indexs"/>
                    <span className='arrowLeft' onClick = {PrevIndex}>←</span>
                    <span className='arrowRight'onClick = {NextIndex}>→</span>
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <p> {item.description}</p>
                    
                </div>
            


            </div>

        </div>
    );
};

export default ResumeItem;