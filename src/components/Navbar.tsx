// src/components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);  // Switch the language dynamically
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
         Giovanny's Personal Website
        </Typography>
        
        {/* Language Switcher */}
        <Box>
          <Button color="inherit" onClick={() => handleLanguageChange('en')}>
            English
          </Button>
          <Button color="inherit" onClick={() => handleLanguageChange('es')}>
            Español
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
