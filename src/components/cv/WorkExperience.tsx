import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';
import { List, ListItem, Typography } from '@mui/material';

interface WorkExperienceItem {
  title: string;
  company: string;
  responsibilities: string[];
}

function WorkExperience() {
  const { t } = useTranslation();

  // Cast directly with the correct type for the `t` return value
  const workExperienceList = t('workExperienceList', { returnObjects: true }) as WorkExperienceItem[];

  return (
    <Section title={t('workExperience')}>
      <List>
        {workExperienceList.map((job, index) => (
          <ListItem key={index} sx={{ display: 'block', marginBottom: 2 }}>
            <Typography variant="h6" component="div">
              <strong>{job.title}</strong>
            </Typography>
            <Typography variant="body2" component="div">
              {job.company}
            </Typography>
            <ul>
              {job.responsibilities.map((responsibility, subIndex) => (
                <li key={subIndex}>
                  <Typography variant="body2" component="div">
                    {responsibility}
                  </Typography>
                </li>
              ))}
            </ul>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default WorkExperience;
