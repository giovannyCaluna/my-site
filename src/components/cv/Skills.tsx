// src/components/Skills.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListItem, ListItemText } from '@mui/material';
import Section from './Section';

function Skills() {
  const { t } = useTranslation(); // `t` is the translation function
  const skills: string[] = t('skillsList', { returnObjects: true }) as unknown as string[];

  return (
    <Section title={t('skills')}> {/* Translate the section title */}
      <List>
        {skills.map((skill:string, index:number) => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Skills;
