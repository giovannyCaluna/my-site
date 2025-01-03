import React from 'react';
import { Card, CardContent, Typography, Button, Box, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const HobbiesCard = () => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: 'auto',
        boxShadow: 3,
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      {/* Icon Section */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: 120,
          backgroundColor: '#e3f2fd',
          borderBottom: '1px solid #ddd',
        }}
      >
        <FitnessCenterIcon sx={{ fontSize: 72, color: '#1976d2' }} />
      </Box>

      {/* Content Section */}
      <CardContent sx={{ textAlign: 'center', paddingBottom: 0 }}>
        <Typography variant="h5" component="div" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
          {t('hobbies')}
        </Typography>
      </CardContent>

      {/* Actions Section */}
      <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/hobbies"
          size="large"
          startIcon={<FitnessCenterIcon />}
          sx={{
            textTransform: 'capitalize',
            fontWeight: 'bold',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          {t('explore')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default HobbiesCard;
