import React from 'react';
import './FormRadio.css';

const SignUpForm = ({ label, name, options }) => {
    return (
        <div className="form-radio">
            <p>{label}</p>
            <div className="radio-group">
                {options.map((option, index) => (
                    <label key={index}>
                        <input type="radio" name={name} value={option.value} />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default SignUpForm;
