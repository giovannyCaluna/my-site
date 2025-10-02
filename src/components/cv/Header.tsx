// src/components/Header.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@mui/material';

function Header() {
  const { t } = useTranslation(); // `t` is the translation function

  return (
    <Box component="header" sx={{ textAlign: 'center', marginBottom: 4 }}>
      <Typography variant="h4" component="h1">
        Giovanny E. Caluña {/* Translate the name */}
      </Typography>
      <Typography variant="body1">
        {t('email')} | {t('phone')} | {t('location')} {/* Translate the contact details */}
      </Typography>
    </Box>
  );
}

export default Header;
