import React from 'react';
import { Typography } from '@mui/material';

interface ResponsibilityListProps {
  responsibilities: string[];
}

function ResponsibilityList({ responsibilities }: ResponsibilityListProps) {
  return (
    <ul>
      {responsibilities.map((responsibility, index) => (
        <li key={index}>
          <Typography variant="body2" component="div">
            {responsibility}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export default ResponsibilityList;
