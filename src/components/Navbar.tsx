import React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // Switch the language dynamically
  };
  const ecuadorianFlag = require('./../assets/ecuadorianflag.png');
  const usFlag = require('./../assets/usflag.png');

  return (
    <AppBar 
      position="sticky" 
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ py: 1 }}>
          <MobileMenu />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                color="inherit" 
                href="/my-site"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                {t('home')}
              </Button>
            </motion.div>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }} />
          
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  color="inherit" 
                  onClick={() => handleLanguageChange('es')}
                  sx={{
                    minWidth: 'auto',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  <img
                    src={ecuadorianFlag}
                    alt="Ecuador Flag"
                    style={{ 
                      width: '24px', 
                      height: '18px',
                      marginRight: '8px',
                      borderRadius: '2px',
                      objectFit: 'cover',
                    }}
                  />
                  <Box component="span" sx={{ fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>
                    Español
                  </Box>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  color="inherit" 
                  onClick={() => handleLanguageChange('en')}
                  sx={{
                    minWidth: 'auto',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  <img
                    src={usFlag}
                    alt="US Flag"
                    style={{ 
                      width: '24px', 
                      height: '18px',
                      marginRight: '8px',
                      borderRadius: '2px',
                      objectFit: 'cover',
                    }}
                  />
                  <Box component="span" sx={{ fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>
                    English
                  </Box>
                </Button>
              </motion.div>
            </Box>
            
            <ThemeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
