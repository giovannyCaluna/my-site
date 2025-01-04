import React from 'react';
import { ListItem, Typography } from '@mui/material';
import ResponsibilityList from './ResponsibilityList';

interface WorkExperienceItemProps {
  title: string;
  company: string;
  responsibilities: string[];
}

interface Props {
  job: WorkExperienceItemProps;
}

function WorkExperienceItem({ job }: Props) {
  return (
    <ListItem sx={{ display: 'block', marginBottom: 2 }}>
      <Typography variant="h6" component="div">
        <strong>{job.title}</strong>
      </Typography>
      <Typography variant="body2" component="div">
        {job.company}
      </Typography>
      <ResponsibilityList responsibilities={job.responsibilities} />
    </ListItem>
  );
}

export default WorkExperienceItem;
