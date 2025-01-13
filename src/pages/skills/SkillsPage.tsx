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
        { name: 'ReactJS', level: 90 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 85 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'Spring Boot', level: 'Experienced' },
        { name: 'Nest', level: 'Experienced' },
        { name: 'Strapi', level: 'Experienced' },
      ],
    },
    // Add other categories here...
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
