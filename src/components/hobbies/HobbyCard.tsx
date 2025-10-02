import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface HobbyCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ title, description, image, video }) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      sx={{ borderRadius: 3, boxShadow: 3 }}
    >
      {/* Display Video if Provided, Otherwise Image */}
      {video ? (
        <motion.video
          controls
          style={{ width: '100%', height: '200px', borderRadius: '8px' }}
          whileHover={{ scale: 1.02 }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      ) : (
        <CardMedia
          component="img"
          height="auto"
          image={image}
          alt={title}
        />
      )}
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default HobbyCard;
