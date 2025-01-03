import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface EducationHeaderProps {
  title: string;
  subtitle: string;
}

const EducationHeader: React.FC<EducationHeaderProps> = ({ title, subtitle }) => {
    const {t} = useTranslation();

  return (
    <Stack sx={{textAlign:"center", margin:5}}>
        <Typography variant="h3" component="h3" fontWeight="bold" color='primary'>
            {t(title)}
        </Typography>
        <Typography variant="h6" component="h6" color="text.secondary">
            {t(subtitle)}
        </Typography>

    </Stack>
   
  );
};

export default EducationHeader;
