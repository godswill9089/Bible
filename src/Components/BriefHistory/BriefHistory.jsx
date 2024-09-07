import React from 'react';
import './BriefHistory.css';
import Info from '../../Views/Atoms/Info/Info';

const BriefHistory = () => {
  return (
    <div className='brief-history'>
      <div className='container'>
        <div className='content'>
          <section>
            <h1 className='title'>A Brief History</h1>
            <div className='info'>
              <Info text='The moving bible is a faith-based organization which has a mandate to spread the gospel of Jesus Christ all over the world. In the early of months of 2023, amidst the world’s struggles, a clear vision was given to re-ignite the transformative power of faith in God through the spreading the gospel across cultures and languages but in an uncommon way that the world is used to. Fueled by a shared vision, the group brainstormed ways to mitigate the language barriers in a bid for the gospel to reach the unreached. This gave birth to the concept of universally used medium as a means for conveyance of the gospel through bespoke clothing among other connecting medium with language inscriptions based on the geographical location of the movement. This enables deeper meanings of God’s word to the people based on the natural effects of their ethnicity and their languages on these medium used.' />
              <Info text='That vision also lead to the birth of the parent company – Godencall Limited  (meaning God and call ) which was founded in January 2024.The moving bible is one of numerous faith-based brands within  Godencall Group. Our goal is to reach out to as many as possible with the word of God and that they are well equipped spiritually, physically and psychologically to handle the times we are in, on this earth' />
              <Info text='It is clearly noted that virtues and directions on how to live on the earth, pathway to salvation and righteous living are well documented in the bible. This is to have a guide on how to navigate all the matters of this world and be ready and heaven-bound before the second coming of Jesus Christ.' />
              <Info text='These knowledge from the bible are to be reflected in the life of the people and help them to be transformed up to the point that the same people are now the embodiment of the words written in the bible. This is so that people shall see the writings and wisdom of God from the bible through these transformed people and come to God due to their acts. Even when the physical bible is not been carried, all the inhabitants of the earth shall see the acts of these people and can clearly identify that they are Christians exhibiting all the teachings in the bible. At this point, the Bible is no more a physical book but men will be the bible that is transported across all over the earth both physically and spiritually. When they talk, they talk scriptures; when they act, they act scriptures; even their inactions, will depict scriptures. That means as you read this history and travel to other locations, you are the BIBLE that other people read, see and emulate due to your actions, inactions and words' />
              <Info text='The moving component of the “THE MOVING BIBLE” is also its ability scale across different families, localities and nations with great reception of the gospel of Jesus Christ by all human in readiness for the day we will answer the inevitable call from God.' />
              <Info
                text={
                  'The vision is clear. That all human begin to live out their lives in the accordance to the written word of God in the bible to the point of mastery where their lives are fully transformed by this consistent righteous living empowered by God.'
                }
              />
              <Info text={'Are you ready to be THE MOVING BIBLE (TMB)?'} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BriefHistory;
