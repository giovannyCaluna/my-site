import { Card, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface WorkCardProps {
  title: string;
  company: string;
  country: string;
  modality: string;
  responsibilities: string[];
  image: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  company,
  country,
  modality,
  responsibilities,
  image,
}) => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 3,
        overflow: 'hidden',
        padding: 3,
        margin: 3,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Grid container spacing={3} alignItems="center" flexDirection={"row"}>
        {/* Image Section */}
        <Grid size={{xs:12,sm:4}}>
          <img
            src={image}
            alt={`${company} logo`}
            style={{
              maxHeight: '200px',
              width: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid size={{xs:12,sm:7}}>
          <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
            {t(title)}
          </Typography>
          <Typography variant="subtitle1" component="p" color="text.secondary">
            {t(company)}
          </Typography>
          <Typography variant="subtitle2" component="p" color="text.secondary" gutterBottom>
            {t(country)} · {t(modality)}
          </Typography>
          <Typography variant="body1" component="p" fontWeight="bold" gutterBottom>
            {t('Responsibilities:')}
          </Typography>
          {responsibilities.map((responsibility, index) => (
            <Typography variant="body2" component="div" key={index} sx={{ marginLeft: 2, marginBottom: 1 }}>
              - {responsibility}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default WorkCard;
