import React from 'react';
import { Card,  Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';

interface EducationCardProps {
  degree: string;
  institution: string;
  thesis: string;
  image: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  thesis,
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
      <Grid container spacing={2} flexDirection={"row"} sx={{justifyContent:"center"}}>
        {/* Image Section */}
        <Grid size={{xs:12, sm:4}}>
          <img
            src={image}
            alt={`${institution} campus`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid size={{sm:12, md:8}}  >
          <Typography variant="h5" component="h5" fontWeight="bold">
            {t(degree)}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {t(institution)}
          </Typography>
          <Typography variant="body2" component="p" color="text.secondary">
            <strong>{t("thesis")}:</strong> {t(thesis)}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EducationCard;
