import React from 'react';
import './FormGroup.css';
const FormGroup = ({ title, name, value, onChange }) => {
  return (
    <div className='form-group'>
      {title && <label htmlFor={name}>{title}</label>}
      <input
        type='text'
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default FormGroup;
