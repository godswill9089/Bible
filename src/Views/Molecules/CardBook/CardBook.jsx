import React from 'react';
import './CardBook.css';
import ButtonPill from '../ButtonPill/ButtonPill';

const CardBook = ({}) => {
  return (
    <div className='card-book'>
      <img src='' alt='' className='' />
      <div className='btn-wrapper'>
        <ButtonPill text={'Buy now'} />
      </div>
    </div>
  );
};

export default CardBook;
