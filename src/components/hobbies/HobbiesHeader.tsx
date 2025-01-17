


import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface HobbiesHeaderProps {
  title: string;
  subtitle: string;
}

const HobbiesHeader: React.FC<HobbiesHeaderProps> = ({ title, subtitle }) => {
  const { t } = useTranslation();

  return (
    <Stack sx={{ textAlign: "center", margin: 5 }}>
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h3" fontWeight="bold" color="primary">
          {t(title)}
        </Typography>
      </motion.div>

      {/* Animated Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Typography variant="h6" component="h6" color="text.secondary">
          {t(subtitle)}
        </Typography>
      </motion.div>
    </Stack>
  );
};

export default HobbiesHeader;
