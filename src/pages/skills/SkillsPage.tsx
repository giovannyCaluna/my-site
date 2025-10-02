import { Container, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SkillCategory from '../../components/skills/SkillCategory';
import SkillsHeader from '../../components/skills/SkillsHeader';
import { SkillCategory as SkillCategoryType } from '../../components/skills/types';

const SkillsPage: React.FC = () => {
  const { t } = useTranslation();

  // Skills data
  const skillsData: SkillCategoryType[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 80 },
        { name: 'Angular', level: 60 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Spring Boot', level: 80 },
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 75 },
      ],
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Javascript', level: 70 },
        { name: 'Typescript', level: 70 },
        { name: 'Python', level: 60 },
        {name:"C", level: 60},
        {name:"C++", level: 60},
        {name:"Solidity", level: 50},
        {name:"R", level: 50},

      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 65 },
        { name: 'MongoDB', level: 50 },
      ],
    },
    {
      category: 'SD Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Jenkins', level: 50 },
        { name: 'Kubernetes', level: 50 },
      ],
    },
    {
      category: 'Cloud',
      skills: [
        { name: 'Google Cloud', level: 75 },
        { name: 'Azure', level: 40 },
      ],
    },
    {
      category: 'Operating Systems',
      skills: [
        { name: 'Linux - Ubuntu', level: 90 },
        { name: 'Windows', level: 80 },
      ],
    },

    {
      category: 'Languages',
      skills: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Advanced' },
      ],
    },
  ];

  return (
    <>
      {/* Header Section */}
      <Grid container spacing={2} flexDirection={"row"}>
        <Grid size={{ xs: 12 }}>
          <Container>
            <SkillsHeader title={t('skills')} subtitle={t('skills_subtitle')} />
          </Container>
        </Grid>
      </Grid>

      {/* Skills Categories */}
      <Stack sx={{ alignItems: "center", marginTop: 4 }}>
        {skillsData.map((category, index) => (
          <SkillCategory key={index} category={category} />
        ))}
      </Stack>
    </>
  );
};

export default SkillsPage;
