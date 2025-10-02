// src/components/Profile.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import Section from './Section';

function Profile() {
  const { t } = useTranslation(); // `t` is the translation function

  return (
    <Section title={t('profile')}> {/* Translate the section title */}
      <Typography variant="body1">
        {t('profileContent')} {/* Translate the content */}
      </Typography>
    </Section>
  );
}

export default Profile;
