import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/

interface InitialCardProps {
  imageUrl: string;
  title: string;
  message: string;
}

const InitialCard: React.FC<InitialCardProps> = ({ imageUrl, title, message }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', padding: 2 }}>
      <CardMedia
        component="img"
        height="200"
        //image={gio}
        alt="Welcome image"
      />

      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
          {message}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          fullWidth
        >
          Go to Home
        </Button>
      </CardContent>
    </Card>
  );
};

export default InitialCard;
