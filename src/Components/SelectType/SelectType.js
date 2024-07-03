/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';

import tickIcon from '../../../../assets/tick-icon.svg';
import ButtonReuse from '../../../../components/fragments/Button';

function SelectType({
  changeView,
  cardTypes,
  selectedType,
  setSelectedType,
  nextView,
  toSet,
}) {
  const { t } = useTranslation();
  const stack = React.useRef();

  function changeSelectedType({ type }) {
    if (type === selectedType) return;

    setSelectedType(type);

    const card = document.querySelector('.card:last-child');
    card.classList.add('swap-animation');

    setTimeout(() => {
      card.classList.remove('swap-animation');
      stack.current.prepend(card);
    }, 250);
  }
  console.log('cardTypes', cardTypes);
  return (
    <div className='select-card-type'>
      <div className='cards-wrap' ref={stack}>
        {cardTypes.map((child, idx) => {
          const { img } = child;
          return (
            <figure className='card' key={idx}>
              <img src={img} alt='' />
            </figure>
          );
        })}
      </div>
      <p className='select-type-title white-black-color'>
        {t('dsh.cards.selectCard')}:
      </p>
      <div className='select-card'>
        {cardTypes.map((child, idx) => {
          const { name, type } = child;
          return (
            <div
              onClick={() => changeSelectedType({ type: child, idx })}
              key={idx}
              className={`card-type secondary-white-black-color ${
                selectedType.type === type ? 'card-type--active' : ''
              }`}
            >
              {name}
              <figure className='tick'>
                <img src={tickIcon} alt='' />
              </figure>
            </div>
          );
        })}
      </div>
      {/* btn start */}
      <div className='btn-box' style={{ marginTop: '2.8rem' }}>
        <ButtonReuse
          onClick={() => {
            changeView(nextView, {
              payload: { [toSet]: selectedType },
              name: toSet,
            });
          }}
          btnStyle='btn-reuse'
          text={t('dsh.proceed')}
        />
      </div>
      {/* btn end */}
    </div>
  );
}

export default SelectType;
