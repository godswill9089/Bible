import React, { useState } from 'react';
import { useIcons } from '../../hooks/useIcon';
import './SignUpFormDropdown.css';
import Info from '../../Views/Atoms/Info/Info';
import Info2 from '../../Views/Atoms/Info2/Info2';
import FormGroup from '../../Views/Atoms/FormGroup/FormGroup';
import { FaCheck } from 'react-icons/fa';
import Check from '../../Views/Atoms/Check/Check';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';

const SignUpFormDropdown = () => {
  const { Translate } = useIcons();

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    availability: 'weekly',
    time: 'daytime',
    skills: 'online',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  return (
    <div className='sign-up-form-dropdown-wrapper'>
      <div className='sign-up-form-dropdown'>
        <div className='details-form'>
          <h1>
            Thank you for your interest in volunteering with The Moving Bible!
          </h1>
          <p>
            We rely on passionate individuals like you to spread the message of
            Christ and make a difference in the world. This form helps us learn
            more about your skills and interests to find the perfect volunteer
            opportunity for you.
          </p>
          <form action=''>
            <FormGroup
              title='Full Name'
              name='full_name'
              value={formData.full_name}
              onChange={(e) => handleChange(e)}
            />
            <FormGroup
              title='Email'
              name='email'
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <FormGroup
              title='Phone Number'
              name='phone_number'
              value={formData.phone_number}
              onChange={(e) => handleChange(e)}
            />
          </form>
        </div>
        <div className='other-form'>
          <div className='wrapper'>
            <div className='availability'>
              <h5 className='title'>Availability</h5>
              <p className='info'>
                How often are you available to volunteer? (Select all that
                apply)
              </p>
              <div className='how-often-wrapper'>
                <div className='btns'>
                  <div className='btn'>
                    <Check
                      onClick={() =>
                        setFormData({
                          ...formData,
                          availability: 'weekly',
                        })
                      }
                      checked={formData.availability === 'weekly'}
                    />
                    <p>Weekly</p>
                  </div>
                  <div className='btn'>
                    <Check
                      onClick={() =>
                        setFormData({
                          ...formData,
                          availability: 'bi-weekly',
                        })
                      }
                      checked={formData.availability === 'bi-weekly'}
                    />
                    <p>Bi Weekly</p>
                  </div>
                  <div className='btn'>
                    <Check
                      onClick={() =>
                        setFormData({
                          ...formData,
                          availability: 'monthly',
                        })
                      }
                      checked={formData.availability === 'monthly'}
                    />
                    <p>Monthly</p>
                  </div>
                  <div className='btn'>
                    <Check
                      onClick={() =>
                        setFormData({
                          ...formData,
                          availability: 'occasionally',
                        })
                      }
                      checked={formData.availability === 'occasionally'}
                    />
                    <p>
                      Occasionally (Please specify in the "Tell us more" section
                      below)
                    </p>
                  </div>
                </div>
                <FormGroup />
              </div>
              <p className='are-you'>
                Are you available for daytime, evening, or weekend volunteer
                opportunities?
              </p>
              <div className='btns'>
                <div className='btn'>
                  <Check
                    onClick={() =>
                      setFormData({
                        ...formData,
                        time: 'daytime',
                      })
                    }
                    checked={formData.time === 'daytime'}
                  />
                  <p>Daytime</p>
                </div>
                <div className='btn'>
                  <Check
                    onClick={() =>
                      setFormData({
                        ...formData,
                        time: 'evening',
                      })
                    }
                    checked={formData.time === 'evening'}
                  />
                  <p>Evening</p>
                </div>
                <div className='btn'>
                  <Check
                    onClick={() =>
                      setFormData({
                        ...formData,
                        time: 'weekend',
                      })
                    }
                    checked={formData.time === 'weekend'}
                  />
                  <p>Weekend</p>
                </div>
              </div>
            </div>
            <div className='skills'>
              <h5 className='title'>Skills & Interests</h5>
              <p className='info'>
                Briefly describe any relevant skills or experience you have that
                could be valuable for your volunteer role. (e.g., graphic
                design, writing, childcare experience)
              </p>
              <p className='info'>
                What areas of volunteer service are you most interested in?
                (Select all that apply)
              </p>
              <div className='how-often-wrapper'>
                <div className='btns'>
                  <div className='btn'>
                    <Check
                      onClick={() =>
                        setFormData({
                          ...formData,
                          skills: 'online',
                        })
                      }
                      checked={formData.skills === 'online'}
                    />
                    <p>
                      Online Volunteer Opportunities (Content Creation,
                      Translation & Editing, Graphic Design)
                    </p>
                  </div>
                  <div className='btn'>
                    <Check
                      onClick={() =>
                        setFormData({
                          ...formData,
                          skills: 'onsite',
                        })
                      }
                      checked={formData.skills === 'onsite'}
                    />
                    <p>
                      Onsite Volunteer Opportunities (Community Outreach Events,
                      Children's Ministries, Administrative Support)
                    </p>
                  </div>

                  <div className='btn'>
                    <Check
                      onClick={() =>
                        setFormData({
                          ...formData,
                          skills: 'occasionally',
                        })
                      }
                      checked={formData.skills === 'occasionally'}
                    />
                    <p>
                      Occasionally (Please specify in the "Tell us more" section
                      below)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='thank-you'>
            <div className='details'>
              <h5 className='title'>Thank You!</h5>
              <p className='info'>
                Once you submit this form, a member of our team will review your
                application and contact you to discuss potential volunteer
                opportunities.
              </p>
            </div>
            <div className='btn'>
              <ButtonPill
                onClick={() => {
                  window.open(
                    'https://youtu.be/z5dV2v1Cvu4?si=u753Y5PnTcqKwRnV',
                    '_blank'
                  );
                }}
                text={'Submit'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpFormDropdown;
