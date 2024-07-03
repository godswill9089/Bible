import React from 'react'
import Mission from './Mission';
import "../../CardContainer/CardContainer.css";

const missions = [
    {
        title: 'Faith In Action',
        description: 'We Believe In Putting Our Beliefs Into Practice, Serving Others, And Spreading The Message Of Love And Hope.',
    },
    {
        title: 'Spreading The Gospel',
        description: 'Sharing The Good News Of Jesus Christ With Every Corner Of The Earth Is At The Heart Of Our Mission.',
    },
    {
        title: 'Christ-Centered Living',
        description: 'We Strive To Embody The Teachings Of Jesus Christ In Our Thoughts, Words, And Deeds.',
    },
    // {
    //     title: 'Transforming Lives',
    //     description: 'We Believe In The Power Of The Gospel To Empower Individuals And Create A Ripple Effect Of Positive Change.',
    // },
];


// const MissionCard = () => {
//   return (
//       <div className="card-container">
//               {missions.map((mission, index) => (
//                   <Mission key={index} title={mission.title} description={mission.description} />
//               ))}
//       </div>
//   )
// }
const MissionCard = () => {
    return (
        <div className="card-container">
           
            <Mission missions={missions} />
            
        </div>
    )
}

export default MissionCard;