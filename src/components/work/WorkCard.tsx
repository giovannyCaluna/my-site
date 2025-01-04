import { Card, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface WorkCardProps {
  title: string;
  company: string;
  responsibilities: string[];
  image: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  company,
  responsibilities,
  image,

}) => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden',
        padding: 2,
        margin: 3,
      }}
    >
      <Grid container spacing={2} flexDirection={"row"} sx={{ justifyContent: "center" }}>
        {/* Image Section */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <img
            src={image}
            alt={`${company} logo`}
            style={{
              maxHeight: '250px',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid size={{ sm: 12, md: 8 }}  >
          <Typography variant="h5" component="h5" fontWeight="bold">
            {t(title)}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {t(company)}
          </Typography>
          {responsibilities.map((responsibility, index) => (
            <Typography variant="body2" component="div" key={index}>
              {responsibility}
            </Typography>
          ))}


        </Grid>
      </Grid>
    </Card>
  );
};

export default WorkCard;
