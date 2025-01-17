import { Box } from '@mui/material';
import React from 'react';
import HobbiesHeader from '../../components/hobbies/HobbiesHeader';
import HobbiesSection from '../../components/hobbies/HobbiesSection';

const HobbiesPage: React.FC = () => {
  const gym = require('./../../assets/gym.jpg');
  const gym1 = require('./../../assets/gym2.jpg');
  const gym2 = require('./../../assets/gym3.jpg');
  const gym3 = require('./../../assets/gym.jpg');
  const bachata = require('./../../assets/bachata.mp4');

  const gym4 = require('./../../assets/gym.jpg');




  const hobbiesData = [
    {
      sectionTitle: 'Fitness Activities',
      hobbies: [
        {
          title: 'Gym',
          description: 'My journey with weightlifting and strength training.',
          image: gym2,
        },
        {
          title: 'CrossFit',
          description: 'Functional training for endurance and power.',
          image: gym1,
        },
        {
          title: 'Calisthenics',
          description: 'Mastering bodyweight movements and control.',
          image: gym,
        },
      ],
    },
    {
      sectionTitle: 'Dance',
      hobbies: [
        {
          title: 'Bachata',
          description: 'My passion for sensual and modern Bachata.',
          video: bachata,
        },
        {
          title: 'Salsa',
          description: 'Exploring rhythm and moves in Salsa dancing.',
          video: bachata,
        },
      ],
    },
  ];

  return (
    <>
      <Box sx={{ padding: 3 }}>
        <HobbiesHeader title='hobbies' subtitle='hobbies_description'/>
        {hobbiesData.map((section, index) => (
          <HobbiesSection
            key={index}
            title={section.sectionTitle}
            hobbies={section.hobbies}
          />
        ))}
      </Box>

    </>
  );
};

export default HobbiesPage;







