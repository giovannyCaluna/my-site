import React from 'react';
import SkillCategory from '../../components/skills/SkillCategory';
import { SkillCategory as SkillCategoryType } from '../../components/skills/types';
import {  Container, List, ListItem, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SkillsHeader from '../../components/skills/SkillsHeader';
import { useTranslation } from 'react-i18next';
import SkillBar from '@/components/skills/SkillBar';

const SkillsPage: React.FC = () => {
    const { t } = useTranslation();
    const skills: string[] = t('skillsList', { returnObjects: true }) as unknown as string[];

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
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Webpack', level: 70 },
      ],
    },
  ];

  return (

    <Grid container spacing={2} flexDirection={"row"}>
    {/* Image Section */}
    <Grid size={{ xs: 12, sm: 12 }}>
        {/* Page Header */}
        <Container>
            <SkillsHeader
                title={t("skills")}
                subtitle={t("skills_subtitle")}
            />
        </Container>
    </Grid>
    {/* Education Cards */}
    <Grid size={{ xs: 12, sm: 12 }}>
   
    {/* <Container>
        {education.map((edu, index) => (
                <EducationCard
                    degree={edu.degree}
                    institution={edu.institution}
                    thesis={edu.thesis}
                    image={edu.image}
                    description={edu.description}
                />
        ))}
    </Container> */}
    </Grid>

    <div style={{ padding: '20px' }}>
      <h1>My Skills</h1>
      {skillsData.map((category, index) => (
        <SkillCategory key={index} category={category} />
      ))}
    </div>
</Grid>
   
  );
};

export default SkillsPage;
