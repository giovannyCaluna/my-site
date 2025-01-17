import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import HobbyCard from './HobbyCard';
import  Grid  from '@mui/material/Grid2';

interface HobbiesSectionProps {
  title: string;
  hobbies: {
    title: string;
    description: string;
    image?: string;
    video?: string;
  }[];
}

const HobbiesSection: React.FC<HobbiesSectionProps> = ({ title, hobbies }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ marginBottom: '3rem' }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {hobbies.map((hobby, index) => (
          <Grid size={{xs:12,sm:6,md:4}}>
            <HobbyCard {...hobby} />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default HobbiesSection;
