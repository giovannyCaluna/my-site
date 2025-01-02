import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StartIcon from '@mui/icons-material/PlayArrow';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
const WorkExperienceCard = () => {
  const { t } = useTranslation();

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', padding: 2 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: 100,
          backgroundColor: '#f5f5f5',
          marginBottom: 2,
        }}
      >
        <IntegrationInstructionsIcon sx={{ fontSize: 64, color: '#1976d2' }} />
      </Box>

      <CardContent sx={{textAlign:"center"}}>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          {t('workExperience')}
        </Typography>
        
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/home"
          fullWidth
        >
          {t('explore')}
          </Button>
      </CardContent>
    </Card>
  );
};

export default WorkExperienceCard;
