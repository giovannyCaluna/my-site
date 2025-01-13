import { Container, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SkillCategory from '../../components/skills/SkillCategory';
import SkillsHeader from '../../components/skills/SkillsHeader';
import { SkillCategory as SkillCategoryType } from '../../components/skills/types';
import GearLoader from '../../components/hobbies/GearLoader';

const HobbiesPage: React.FC = () => {
 
  return (
    <>
      <GearLoader />
    </>
  );
};

export default HobbiesPage;
