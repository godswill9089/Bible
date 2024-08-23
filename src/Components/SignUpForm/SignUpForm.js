import React from 'react';
// import './FormInput.css';

const SignUpForm = ({ label, type = 'text', name, placeholder }) => {
    return (
        <div className="form-input">
            <label>{label}</label>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    );
};

export default SignUpForm;
