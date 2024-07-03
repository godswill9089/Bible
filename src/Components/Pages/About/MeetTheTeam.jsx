import React from 'react';
import './MeetTheTeam.css';
import AboutSingup from './AboutSingup';

const MeetTheTeam = () => {
    return (
        <div className="team-section">
            <h2 className="team-title">Meet The Team</h2>
            <div className="team-grid">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div className="team-member" key={index}></div>
                ))}
            </div>
        </div>
    );
};

export default MeetTheTeam;
