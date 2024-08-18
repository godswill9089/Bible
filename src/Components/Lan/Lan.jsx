import React from 'react';
import { useIcons } from '../../hooks/useIcon';

const Lan = () => {
    const { Translate } = useIcons();
  return (
      <div className="language-section">
          <div className="image-container">
              <img src={Translate} alt="Language icons" />
          </div>
          <div className="text-container">
              <div className="text-column">
                  <p>¡Bienvenidos!</p>
                  <p>Bienvenue!</p>
                  <p>欢迎！(Huānyíng!)</p>
                  <p>!مرحباً (Marhaba!)</p>
                  <p>!Swaagat He!</p>
                  <p>স্বাগতম! (Swagatam!)</p>
              </div>
              <div className="text-column">
                  <p>Bem-Vindo!</p>
                  <p>Добро Пожаловать! (Dobro Pozhalovat!)</p>
                  <p>ようこそ！(Yōkoso!)</p>
                  <p>!Vadhāyā!</p>
              </div>
          </div>
      </div>
  )
}

export default Lan;