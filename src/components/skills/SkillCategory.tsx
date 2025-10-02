import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { SkillCategory as SkillCategoryType } from './types';
import Skill from './Skill';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <Box sx={{ marginBottom: 4, width: '80%' }}>
      {/* Category Title */}
      <Typography variant="h5" fontWeight="bold" color="primary" sx={{ textAlign: 'center', marginBottom: 2 }}>
        {category.category}
      </Typography>

      {/* Skills List */}
      <Stack spacing={2}>
        {category.skills.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} />
        ))}
      </Stack>
    </Box>
  );
};

export default SkillCategory;
