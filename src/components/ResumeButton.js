import React from 'react';


const ResumeButton = ({ fileName }) => {
    const fileUrl = `${process.env.PUBLIC_URL}/${fileName}`;

    return (
        <div className = "resumeButton" id='resumeButtonScroll'>
            <a href={fileUrl} download>Resume</a>
        </div>
    );
};

export default ResumeButton;