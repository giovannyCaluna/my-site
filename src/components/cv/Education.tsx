// src/components/Education.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListItem, Typography } from '@mui/material';
import Section from './Section';

function Education() {
  const { t } = useTranslation(); // `t` is the translation function

  const education = [
    {
      degree: t('degree1'),
      institution: t('institution1'),
      thesis: t('thesis1'),
    },
    {
      degree: t('degree2'),
      institution: t('institution2'),
      thesis: t('thesis2'),
    },
  ];

  return (
    <Section title={t('education')}> {/* Translate the section title */}
      <List>
        {education.map((edu, index) => (
          <ListItem key={index} sx={{ display: 'block', marginBottom: 2 }}>
            <Typography variant="body1" component="div">
              <strong>{edu.degree}</strong>
            </Typography>
            <Typography variant="body2" component="div">
              {edu.institution}
            </Typography>
            <Typography variant="body2" component="div">
              Thesis: {edu.thesis}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Education;
