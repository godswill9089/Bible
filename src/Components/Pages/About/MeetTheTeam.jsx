import React from 'react';
import './MeetTheTeam.css';
import Info from '../../../Views/Atoms/Info/Info';
import ButtonRound from '../../../Views/Molecules/ButtonRound/ButtonRound';
import Info2 from '../../../Views/Atoms/Info2/Info2';
import { useIcons } from '../../../hooks/useIcon';

const MeetTheTeam = () => {
  const { team1, team2 } = useIcons();
  const cards = [
    { id: 1, name: 'Ebuka U', role: 'Growth/Strategy Manager', img: team1 },
    { id: 2, name: 'E. FELIX', role: 'SOCIAL MEDIA Manager', img: team2 },
  ];
  return (
    <div className='team-section'>
      <div className='container'>
        <div className='content'>
          <h2 className='team-title'>Meet The Team</h2>
          <div className='wrapper'>
            <div className='details'>
              <div className='info-wrapper'>
                <Info2 text='Discover the passionate individuals who drive The Moving Bible movement forward. Our team is dedicated to spreading the message of Christ, inspiring action, and creating a positive impact on the world.' />
              </div>
              <div className='btns'>
                <ButtonRound direction='left' />
                <ButtonRound />
              </div>
            </div>
            <div className='team-grid'>
              {cards.map((item, index) => (
                <div className='card-team' key={index}>
                  <img src={item.img} alt='' />
                  <div className='details'>
                    <h5 className='name'>{item.name}</h5>
                    <p className='role'>{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
