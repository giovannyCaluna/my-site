import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // Switch the language dynamically
  };
  const ecuadorianFlag = require('./../assets/ecuadorianflag.png');
  const usFlag = require('./../assets/usflag.png');


  return (
    <AppBar position="static">
      <Toolbar >
        <Box sx={{ flexGrow: 1 }}>
         <Button color="inherit" href="/my-site">
         {t('home')}
         </Button>
        </Box>
        <Box>
        
          <Button color="inherit" onClick={() => handleLanguageChange('es')}>
            <img
              src={ecuadorianFlag}
              alt="Ecuador Flag"
              style={{ width: '20px', marginRight: '8px' }}
            />
            Español
          </Button>
          <Button color="inherit" onClick={() => handleLanguageChange('en')}>
            <img
              src={usFlag}
              alt="US Flag"
              style={{ width: '20px', marginRight: '8px' }}
            />
            English
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
