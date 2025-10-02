import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

interface SkillProps {
  name: string;
  level: string | number;
}

const Skill: React.FC<SkillProps> = ({ name, level }) => {
  const isNumericLevel = typeof level === 'number';

  return (
    <Box>
      {/* Skill Name */}
      <Typography variant="body1" fontWeight="bold">
        {name}
      </Typography>

      {/* Skill Level */}
      {isNumericLevel ? (
        <LinearProgress
          variant="determinate"
          value={level as number}
          sx={{ height: 8, borderRadius: 4 }}
        />
      ) : (
        <Typography variant="body2" color="text.secondary">
          {level}
        </Typography>
      )}
    </Box>
  );
};

export default Skill;
