import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface SkillsHeaderProps {
  title: string;
  subtitle: string;
}

const SkillsHeader: React.FC<SkillsHeaderProps> = ({ title, subtitle }) => {
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

export default SkillsHeader;
