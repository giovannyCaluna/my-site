import React from 'react';
import { Card, CardContent, Typography, Button, Box, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { motion } from 'framer-motion';

const WorkExperienceCard = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 400,
          margin: 'auto',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          borderRadius: 4,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-4px)',
            '& .icon-container': {
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              '& .MuiSvgIcon-root': {
                color: 'white',
              },
            },
          },
        }}
      >
        {/* Icon Section */}
        <Box
          className="icon-container"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: 140,
            background: 'linear-gradient(135deg, #fce4ec 0%, #fff3e0 100%)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 20% 80%, rgba(240, 147, 251, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(245, 87, 108, 0.1) 0%, transparent 50%)
              `,
            },
          }}
        >
          <IntegrationInstructionsIcon 
            sx={{ 
              fontSize: 80, 
              color: '#e91e63',
              transition: 'all 0.3s ease',
              zIndex: 1,
              position: 'relative',
            }} 
          />
        </Box>

        {/* Content Section */}
        <CardContent sx={{ 
          textAlign: 'center', 
          paddingBottom: 0,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 3,
        }}>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              marginBottom: 2, 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('workExperience')}
          </Typography>
        </CardContent>

        {/* Actions Section */}
        <CardActions sx={{ justifyContent: 'center', paddingBottom: 3, px: 3 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/work-experience"
            size="large"
            startIcon={<IntegrationInstructionsIcon />}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              px: 4,
              py: 1.5,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              boxShadow: '0 4px 15px rgba(240, 147, 251, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #e584f0 0%, #e8485a 100%)',
                boxShadow: '0 6px 20px rgba(240, 147, 251, 0.6)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            {t('explore')}
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default WorkExperienceCard;
