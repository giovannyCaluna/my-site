import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


interface InitialCardProps {
  url:string,
  title:string,
  description:string
}
const InitialCard: React.FC<InitialCardProps> = (props) => {
  const image = require(props.url);
  const { t } = useTranslation();


  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', padding: 2 }}>
      <CardMedia
        component="img"
        height="auto"
        image={image}
        alt="Welcome image"
      />

      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          {t('education')}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
        {t('greeting')}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/home"
          fullWidth
        >
         {t("start")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default InitialCard;
