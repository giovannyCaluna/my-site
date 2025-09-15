import React from 'react';
import { Card, CardContent, Typography, Button, Box, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { motion } from 'framer-motion';

const SkillsCard = () => {
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
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
            background: 'linear-gradient(135deg, #e1f5fe 0%, #f0f4c3 100%)',
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
                radial-gradient(circle at 20% 80%, rgba(79, 172, 254, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(0, 242, 254, 0.1) 0%, transparent 50%)
              `,
            },
          }}
        >
          <PsychologyIcon 
            sx={{ 
              fontSize: 80, 
              color: '#00bcd4',
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
            {t('skills')}
          </Typography>
        </CardContent>

        {/* Actions Section */}
        <CardActions sx={{ justifyContent: 'center', paddingBottom: 3, px: 3 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/skills"
            size="large"
            startIcon={<PsychologyIcon />}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              px: 4,
              py: 1.5,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              boxShadow: '0 4px 15px rgba(79, 172, 254, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #3d8bfe 0%, #00d4ff 100%)',
                boxShadow: '0 6px 20px rgba(79, 172, 254, 0.6)',
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

export default SkillsCard;
