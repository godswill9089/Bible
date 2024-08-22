import React from 'react';
import FormInput from './FormInput';
import FormRadio from './FormRadio';
import './SignUpFor.css';

const SignUpFor = () => {
    return (
        <div className="volunteer-form-container">
            <div className="form-header">
                <h2>Thank You For Your Interest In Volunteering With The Moving Bible!</h2>
                <p>We rely on passionate individuals like you to spread the message of Christ and make a difference in the world. This form helps us learn more about your skills and interests to find the perfect volunteer opportunity for you.</p>
            </div>

            <div className="form-body">
                <div className="form-left">
                    <FormInput label="Full Name" name="fullName" placeholder="Enter your full name" />
                    <FormInput label="Email Address" type="email" name="email" placeholder="Enter your email address" />
                    <FormInput label="Phone Number" name="phone" placeholder="Enter your phone number" />
                </div>

                <div className="form-right">
                    <FormRadio
                        label="How often are you available to volunteer?"
                        name="availability"
                        options={[
                            { label: 'Weekly', value: 'weekly' },
                            { label: 'Bi-Weekly', value: 'bi-weekly' },
                            { label: 'Monthly', value: 'monthly' },
                            { label: 'Occasionally', value: 'occasionally' },
                        ]}
                    />
                    <FormRadio
                        label="Are you available for daytime, evening, or weekend volunteer opportunities?"
                        name="time"
                        options={[
                            { label: 'Daytime', value: 'daytime' },
                            { label: 'Evening', value: 'evening' },
                            { label: 'Weekend', value: 'weekend' },
                        ]}
                    />
                </div>
            </div>

            <div className="form-footer">
                <p>Once you submit this form, a member of our team will review your application and contact you to discuss potential volunteer opportunities.</p>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    );
};

export default SignUpFor;
