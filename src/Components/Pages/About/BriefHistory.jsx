import React from 'react';
import "../../Become/Become.css";
import "../../Pages/About/BriefHistory.css";
import { FaArrowRight } from 'react-icons/fa';

const BriefHistory = () => {
    return (
        <div style={{ padding: '100px', fontFamily: 'Poppins, sans-serif', lineHeight: '1.6', }}>
            <section style={{ marginBottom: '40px' }}>
                <h1 style={{ textAlign: 'center' }}>A Brief History</h1>
                <div className='brief-p'>
                    <p>
                        In the early months of 2023, hearts heavy with the world's struggles, gathered in a modest apartment.
                        They dreamt of reigniting the transformative power of faith, of seeing the gospel message touch lives
                        across cultures and languages. This yearning birthed the seed of the moving bible.
                    </p>
                    <br />
                    <p>
                        Fueled by a shared vision, the group brainstormed ways to transcend language barriers. They recognized
                        the universal language of clothing - a basic need and a powerful form of expression. <strong>The idea
                            ignited: faith-based t-shirts.</strong>
                    </p>
                    <br />
                    <p>
                        Simple designs featuring uplifting messages and biblical verses were created. These weren't just garments;
                        they were billboards for faith, sparking conversations and planting seeds of hope in everyday interactions.
                    </p>
                    <br />
                    <p>
                        <strong>The moving bible expanded</strong> its clothing line, offering designs in various languages. This inclusivity
                        became a cornerstone of the movement, ensuring the message transcended borders and demographics.
                    </p>
                    <br />
                    <p>
                        The moving bible has blossomed beyond clothing. The power of faith in action is now expressed through community
                        outreach programs, online bible studies, and volunteer initiatives. However, the clothing line remains a core
                        element, a constant visual reminder of the movement’s purpose.
                    </p>
               </div>
            </section>

            <section>
                <h2 style={{ textAlign: 'center' }}>The Moving Forward</h2>
                <div className='brief-p'>
                    <p>
                        The moving bible's journey is just beginning. Fueled by the unwavering belief in the transformative power of faith,
                        the movement continues to grow, weaving a tapestry of hope and action across the globe.
                    </p>
                    <p>
                        <strong style={{ color: '#6a00ff' }}>This is not just a story; it's an invitation.</strong> Join us in making a difference, one stitch, one act of
                        kindness, one life touched at a time.
                    </p>
               </div>
            </section>

            <div className="join" style={{marginTop: '50px'}}>
                <header className="join-header">
                    <h1>Ready to join us in making a difference?</h1>
                    <p>Choose your path</p>
                    <button className='btn' style={{width: "25%"}}>
                        Join the Movement
                        <div>
                            <FaArrowRight className='link2' />
                        </div>
                    </button>
                </header>
            </div>
        </div>
    );
};

export default BriefHistory;
